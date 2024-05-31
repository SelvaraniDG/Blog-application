"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBlog = exports.updateBlog = exports.createBlog = exports.getBlogById = exports.getAllBlogs = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, '../../data/BlogsData.json');
const readData = () => {
    const data = fs_1.default.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};
const writeData = (data) => {
    fs_1.default.writeFileSync(filePath, JSON.stringify(data, null, 2));
};
const getAllBlogs = (req, res) => {
    const blogs = readData();
    res.json(blogs);
};
exports.getAllBlogs = getAllBlogs;
const getBlogById = (req, res) => {
    const blogs = readData();
    const blog = blogs.find((b) => b.id === parseInt(req.params.id, 10));
    if (blog) {
        res.json(blog);
    }
    else {
        res.status(404).json({ message: 'Blog not found' });
    }
};
exports.getBlogById = getBlogById;
const createBlog = (req, res) => {
    const blogs = readData();
    const newBlog = req.body;
    newBlog.id = blogs.length > 0 ? blogs[blogs.length - 1].id + 1 : 1;
    blogs.push(newBlog);
    writeData(blogs);
    res.status(201).json(newBlog);
};
exports.createBlog = createBlog;
const updateBlog = (req, res) => {
    const blogs = readData();
    const index = blogs.findIndex((b) => b.id === parseInt(req.params.id, 10));
    if (index !== -1) {
        const updatedBlog = Object.assign(Object.assign({}, blogs[index]), req.body);
        blogs[index] = updatedBlog;
        writeData(blogs);
        res.json(updatedBlog);
    }
    else {
        res.status(404).json({ message: 'Blog not found' });
    }
};
exports.updateBlog = updateBlog;
const deleteBlog = (req, res) => {
    const blogs = readData();
    const index = blogs.findIndex((b) => b.id === parseInt(req.params.id, 10));
    if (index !== -1) {
        const deletedBlog = blogs.splice(index, 1);
        writeData(blogs);
        res.json(deletedBlog[0]);
    }
    else {
        res.status(404).json({ message: 'Blog not found' });
    }
};
exports.deleteBlog = deleteBlog;
