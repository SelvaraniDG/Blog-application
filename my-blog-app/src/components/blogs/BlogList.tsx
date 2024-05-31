import { SlNote } from "react-icons/sl";
import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Blog } from '../../types/Blog';
import BlogItem from './BlogItem';
import { blogListStyles } from '../../styles/blog-styles';

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  const handleWriteBlog = () => {
    navigate('/add');
  };

  return (
    <Box sx={blogListStyles.container}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Blogs
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleWriteBlog}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            '&:hover': {
              backgroundColor: 'lightgray',
              color: 'black'
            }
          }}
        >
          <SlNote style={{ marginRight: '8px' }} />
          Write
        </Button>
      </Box>
      <Box sx={blogListStyles.blogContainer}>
        {blogs.map(blog => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </Box>
    </Box>
  );
};

export default BlogList;