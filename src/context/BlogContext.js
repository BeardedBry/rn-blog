import React, { useState } from 'react';

const BlogContext = React.createContext();

// children is a react feature, not context specific.

export const BlogProvider = ({ children }) => {

    //const [blogPosts, setBlogPosts] = useState([]);

    const blogPosts = {
        data: [
            { title: 'Blog Post#1' },
            { title: 'Blog Post#2' },
            { title: 'Blog Post#3' }
        ],
        addBlogPost: () => {
            return 'addPost';
        }
    }

    return (
        <BlogContext.Provider value={blogPosts}>
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;