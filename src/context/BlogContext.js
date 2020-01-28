import React, { useState } from 'react';

const BlogContext = React.createContext();

// children is a react feature, not context specific.

export const BlogProvider = ({ children }) => {

    const [blogPosts, setBlogPosts] = useState([{ title: 'Blog Post#1' },
    { title: 'Blog Post#2' },
    { title: 'Blog Post#3' }]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts,{ title: `Blog Post #${blogPosts.length + 1}` }]);
    }


    return (
        <BlogContext.Provider value={{data: blogPosts, addBlogPost: addBlogPost}}>
            {children}
        </BlogContext.Provider>
    )
};

export default BlogContext;