"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRoutes = void 0;
const express_1 = require("express");
const blogController_1 = require("../controllers/blogController");
const router = (0, express_1.Router)();
exports.blogRoutes = router;
router.get('/', blogController_1.getAllBlogs);
router.get('/:id', blogController_1.getBlogById);
router.post('/', blogController_1.createBlog);
router.put('/:id', blogController_1.updateBlog);
router.delete('/:id', blogController_1.deleteBlog);
