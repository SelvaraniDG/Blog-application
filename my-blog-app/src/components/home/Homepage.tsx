import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, CardActions, IconButton } from '@mui/material';
import { Favorite, Comment, Share } from '@mui/icons-material';

const blogs = [
  {
    id: 1,
    title: "Making wearable medical devices more patient-friendly with Professor Esther Rodriguez-Villegas",
    image: "https://techcrunch.com/wp-content/uploads/2022/05/found-2022-featured.jpg?w=430&h=230&crop=1",
    author: "Darrell Etherington",
    published_date: "October 4, 2023",
    reading_time: "8 minutes",
    content: "Welcome back to Found, where we get the stories behind the startups. This week, our old friend Darrell Etherington joins Becca Szkutak to talk with Professor Esther Rodriguez-Villegas from Acurable. Esther shares her journey in making wearable medical devices more patient-friendly, overcoming various challenges along the way. This is a story about innovation, perseverance, and the impact of technology on healthcare. Tune in to discover how Acurable is changing lives and what the future holds for wearable medical devices.",
    likes: 127,
    comments: 25
  },
  {
    id: 2,
    title: "Rainforest raises $8.5M to help software companies embed financial services, payments",
    image: "https://techcrunch.com/wp-content/uploads/2015/02/shutterstock_128451140.jpg?w=430&h=230&crop=1",
    author: "Mary Ann Azevedo",
    published_date: "October 1, 2023",
    reading_time: "5 minutes",
    content: "In November 2019, Andreessen Horowitz General Partner Angela Strange famously declared that, 'Every company will be a fintech company.' Specifically, Strange projected that — in the not-too-distant future — companies from various sectors would integrate financial services into their offerings. Rainforest's recent $8.5M funding round is a testament to this vision. The company is dedicated to helping software companies embed financial services and payments seamlessly. This blog delves into Rainforest's journey, its recent achievements, and what this funding means for the future of embedded financial services.",
    likes: 455,
    comments: 124
  },
  {
    id: 3,
    title: "Pow.bio says biomanufacturing is broken and its continuous fermentation tech will fix it",
    image: "https://techcrunch.com/wp-content/uploads/2023/10/Pow-Lab2.jpg?w=430&h=230&crop=1",
    author: "Christine Hall",
    published_date: "October 1, 2023",
    reading_time: "5 minutes",
    content: "Pow.bio aims to revolutionize the biomanufacturing industry by addressing its inherent inefficiencies. The company believes that traditional batch fermentation processes are outdated and costly. Pow.bio's innovative continuous fermentation technology promises to lower production costs and increase efficiency. This blog explores the current state of biomanufacturing, the challenges faced by the industry, and how Pow.bio's technology could be the game-changer that transforms the sector.",
    likes: 367,
    comments: 34
  }
];

function Homepage() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Top Blogs
      </Typography>
      {blogs.map(blog => (
        <Card key={blog.id} sx={{ display: 'flex', marginBottom: 4, border: '1px solid #ccc', borderRadius: 3 }}>
          <CardMedia
            component="img"
            sx={{ width: 160 }}
            image={blog.image}
            alt={blog.title}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography component="div" variant="h5">
                {blog.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                {blog.author} - {blog.published_date} - {blog.reading_time}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content}
                {blog.content.length > 100 && <a href="#"> Read More</a>}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
              <Typography>{blog.likes}</Typography>
              <IconButton aria-label="comments">
                <Comment />
              </IconButton>
              <Typography>{blog.comments}</Typography>
              <IconButton aria-label="share">
                <Share />
              </IconButton>
            </CardActions>
          </Box>
        </Card>
      ))}
    </Box>
  );
}

export default Homepage;