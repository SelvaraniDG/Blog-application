import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { addStyles } from '../../styles/add-blog-styles';
import { Blog } from '../../types/Blog';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [blog, setBlog] = useState<Partial<Blog>>({
    title: '',
    image: '',
    author: '',
    published_date: '',
    reading_time: '',
    content: '',
    likes: 0,
    comments: [],
    liked: false,
  });

  const navigate = useNavigate();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setBlog((prevBlog) => ({
            ...prevBlog,
            image: reader.result as string,
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Blog added:', data);
        setBlog({
          title: '',
          image: '',
          author: '',
          published_date: '',
          reading_time: '',
          content: '',
          likes: 0,
          comments: [],
          liked: false,
        });
        navigate('/');
      })
      .catch((error) => {
        console.error('Error adding blog:', error);
      });
  };

  return (
    <Box sx={addStyles.container}>
      <Box sx={addStyles.blogHeader}>
        <Typography variant="h4">Write a Blog</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={blog.title}
          onChange={handleChange}
          required
        />
        <input
          accept="image/*"
          id="image-upload"
          type="file"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />
        <label htmlFor="image-upload">
          <Button component="span" variant="contained" color="primary">
            Upload Image
          </Button>
        </label>
        {blog.image && (
          <img src={blog.image} alt="Uploaded" style={{ width: '100%', marginTop: '10px' }} />
        )}
        <TextField
          label="Author"
          name="author"
          variant="outlined"
          fullWidth
          margin="normal"
          value={blog.author}
          onChange={handleChange}
          required
        />
        <TextField
          label="Date"
          name="published_date"
          variant="outlined"
          fullWidth
          margin="normal"
          value={blog.published_date}
          onChange={handleChange}
          required
        />
        <TextField
          label="Reading Time"
          name="reading_time"
          variant="outlined"
          fullWidth
          margin="normal"
          value={blog.reading_time}
          onChange={handleChange}
          required
        />
        <TextField
          label="Content"
          name="content"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={6}
          value={blog.content}
          onChange={handleChange}
          required
        />
        <Box sx={addStyles.blogHeader}>
          <Button type="submit" color="success" variant="contained">
            Publish
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddBlog;