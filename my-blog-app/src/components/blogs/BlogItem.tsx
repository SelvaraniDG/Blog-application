import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, IconButton, Box } from '@mui/material';
import { Favorite, Comment, Share } from '@mui/icons-material';
import { Blog } from '../../types/Blog';
import { blogItemStyles } from '../../styles/blog-styles';

interface BlogItemProps {
  blog: Blog;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(blog.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <Card sx={blogItemStyles.card}>
      <CardMedia component="img" height="140" image={blog.image} alt={blog.title} />
      <CardContent>
        <Typography variant="h5" component="div">
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.author} - {blog.published_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.reading_time} read
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content}
          {blog.content.length > 100 && <a href="#"> Read More</a>}
        </Typography>
      </CardContent>
      <CardActions sx={blogItemStyles.cardActions}>
        <Box sx={blogItemStyles.iconButtons}>
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            <Favorite color={liked ? 'error' : 'inherit'} />
          </IconButton>
          <Typography>{likes}</Typography>
          <IconButton aria-label="comments">
            <Comment />
          </IconButton>
          <Typography>{blog.comments}</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default BlogItem;