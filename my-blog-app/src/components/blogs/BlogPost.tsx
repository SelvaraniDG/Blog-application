import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Blog } from '../../types/Blog';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<string[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(storedIsLoggedIn === 'true');

    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then(response => response.json())
      .then(data => {
        setBlog(data);
        const storedComments = localStorage.getItem(`comments_${id}`);
        setComments(storedComments ? JSON.parse(storedComments) : []);
      })
      .catch(error => console.error('Error fetching blog:', error));
  }, [id]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (!comment.trim()) return;

    const newComments = [...comments, `User ${comments.length + 1}: ${comment}`];
    setComments(newComments);
    localStorage.setItem(`comments_${id}`, JSON.stringify(newComments));
    setComment('');
  };

  const handleCommentDelete = (index: number) => {
    const newComments = comments.filter((_, i) => i !== index);
    setComments(newComments);
    localStorage.setItem(`comments_${id}`, JSON.stringify(newComments));
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ padding: '40px' }}>
      {blog.image && (
        <img src={blog.image} alt={blog.title} style={{ width: '100%', marginBottom: '20px' }} />
      )}
      <Typography variant="h4" component="h1" gutterBottom>
        {blog.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        By {blog.author} - {blog.published_date}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {blog.reading_time} min read
      </Typography>
      <Typography variant="body1" paragraph>
        {blog.content}
      </Typography>

      {/* Comments Section */}
      <Box sx={{ marginTop: '20px', marginRight: '550px' }}>
        <Typography variant="h5" gutterBottom>Comments</Typography>
        <TextField
          label="Add a comment"
          variant="outlined"
          fullWidth
          value={comment}
          onChange={handleCommentChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCommentSubmit}
          sx={{ marginTop: '10px' }}
        >
          Submit
        </Button>

        <Box sx={{ marginTop: '20px' }}>
          {comments.map((comment, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Typography variant="body1" paragraph sx={{ flexGrow: 1 }}>
                {comment}
              </Typography>
              <IconButton aria-label="delete" onClick={() => handleCommentDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPost;