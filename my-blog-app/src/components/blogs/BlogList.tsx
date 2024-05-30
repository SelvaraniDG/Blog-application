import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Blog } from '../../types/Blog';
import BlogItem from './BlogItem';
import { blogListStyles } from '../../styles/blog-styles';

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch('/data/BlogsData.json')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <Box sx={blogListStyles.container}>
      <Typography variant="h4" gutterBottom>
        Blogs
      </Typography>
      <Box sx={blogListStyles.blogContainer}>
        {blogs.map(blog => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </Box>
    </Box>
  );
};

export default BlogList;