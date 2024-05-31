import { Router } from 'express';
import { getAllBlogs, getBlogById, createBlog, updateBlog, deleteBlog, addComment } from '../controllers/blogController';


const router = Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/', createBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);
router.post('/:id/comments', addComment);


export { router as blogRoutes };