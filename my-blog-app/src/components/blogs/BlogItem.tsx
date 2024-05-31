import React from 'react';
import { Card, CardContent, CardMedia, Typography, CardActions, IconButton, Box } from '@mui/material';
import { Favorite, Comment, Share } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Blog } from '../../types/Blog';
import { blogItemStyles } from '../../styles/blog-styles';

interface BlogItemProps {
  blog: Blog;
  onDelete: (id: number) => void;
}

const BlogItem: React.FC<BlogItemProps> = ({ blog, onDelete }) => {
  const [liked, setLiked] = React.useState(blog.liked || false);
  const [likes, setLikes] = React.useState(blog.likes);

  const handleLike = async () => {
    const newLikedStatus = !liked;
    const newLikesCount = newLikedStatus ? likes + 1 : likes - 1;

    setLiked(newLikedStatus);
    setLikes(newLikesCount);

    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${blog.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...blog, likes: newLikesCount, liked: newLikedStatus }),
      });

      if (!response.ok) {
        throw new Error('Failed to update likes');
      }
    } catch (error) {
      console.error('Error updating likes:', error);
      setLiked(!newLikedStatus);
      setLikes(newLikedStatus ? likes - 1 : likes + 1);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${blog.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete blog');
      }

      onDelete(blog.id);
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <Card sx={blogItemStyles.card}>
      <CardMedia component="img" height="140" image={blog.image} alt={blog.title} />
      <CardContent sx={{ flexGrow: 1 }}>
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
          {blog.content.length > 100 && <a href={`/blogs/${blog.id}`}> Read More</a>}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box sx={blogItemStyles.iconButtons}>
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            <Favorite color={liked ? 'error' : 'inherit'} />
          </IconButton>
          <Typography>{likes}</Typography>
          <IconButton aria-label="comments">
            <Comment />
          </IconButton>
          <Typography>{blog.comments?.length ?? 0}</Typography>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </Card>
  );
};

export default BlogItem;