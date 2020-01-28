import React from 'react';

const BlogContext = React.createContext();

// children is a react feature, not context specific.

export const BlogProvider = ({ children }) => {
    return (
    <BlogContext.Provider value={20}>
        {children}
    </BlogContext.Provider>
    )
};

export default BlogContext;