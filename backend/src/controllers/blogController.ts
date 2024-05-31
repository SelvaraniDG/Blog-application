import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, '../../data/BlogsData.json');

interface Blog {
  id: number;
  title: string;
  author: string;
  published_date: string;
  reading_time: string;
  content: string;
  image: string;
  likes: number;
  comments: string[];
  liked: boolean;
}

const readData = (): Blog[] => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

const writeData = (data: Blog[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export const getAllBlogs = (req: Request, res: Response): void => {
  const blogs = readData();
  res.json(blogs);
};

export const getBlogById = (req: Request, res: Response): void => {
  const blogs = readData();
  const blog = blogs.find((b) => b.id === parseInt(req.params.id, 10));
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};

export const createBlog = (req: Request, res: Response): void => {
  const blogs = readData();
  const newBlog = req.body as Blog; // Convert to Blog type
  newBlog.id = blogs.length > 0 ? blogs[blogs.length - 1].id + 1 : 1;
  newBlog.likes = 0; // Initialize likes to 0
  newBlog.comments = []; // Initialize comments to an empty array
  newBlog.liked = false; // Initialize liked to false
  blogs.push(newBlog); // Convert back to Blog type before pushing
  writeData(blogs);
  res.status(201).json(newBlog);
};


export const updateBlog = (req: Request, res: Response): void => {
  const blogs = readData();
  const index = blogs.findIndex((b) => b.id === parseInt(req.params.id, 10));
  if (index !== -1) {
    const updatedBlog = { ...blogs[index], ...req.body };
    blogs[index] = updatedBlog;
    writeData(blogs);
    res.json(updatedBlog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};

export const deleteBlog = (req: Request, res: Response): void => {
  const blogs = readData();
  const index = blogs.findIndex((b) => b.id === parseInt(req.params.id, 10));
  if (index !== -1) {
    const deletedBlog = blogs.splice(index, 1);
    writeData(blogs);
    res.json(deletedBlog[0]);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
};