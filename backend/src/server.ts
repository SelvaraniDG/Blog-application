import express from 'express';
import cors from 'cors';
import { blogRoutes } from './routes/blogRoutes';
import bodyParser from 'body-parser';

const app = express();
const PORT =5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/blogs', blogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});