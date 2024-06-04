export interface Blog {
    id: number;
    title: string;
    image: string;
    author: string;
    published_date: string;
    reading_time: string;
    content: string;
    likes: number;
    comments: string[];
    liked?: boolean;
}

export type UserType = {
    name: string;
    id: string;
    email: string;
    blogs: BlogType[];
    comments: CommentType[];
};

export type BlogType = {
    id: string;
    title: string;
    image: string;
    author: string;
    published_date: string;
    reading_time: string;
    content: string;
    likes: number;
    comments: CommentType[];
};

export type CommentType = {
    text: string;
    date: Date;
    blog: BlogType[];
    user: UserType[]; 
};
