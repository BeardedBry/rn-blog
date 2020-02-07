import createDataContext from './createDataContext';

//const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    
    switch (action.type) {
        case 'add_blogpost':
            return [...state, 
                {
                    id: Math.floor(Math.random() * 99999), 
                    title: action.payload.title, 
                    content: action.payload.content
                }
            ];
        case 'edit_blogpost':
            const index = state.findIndex((blogPost) => blogPost.id === action.payload.id);
            editBlog.title = action.payload.title;
            editBlog.content = action.payload.content;
            return [...state, {} ];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, cb) => {
        dispatch({type: 'add_blogpost', payload: { title: title, content: content } });
        cb();
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id});
    };
};

const editBlogPost = (dispatch) => {
    return (title, content, id, cb) => {
        dispatch({ type: 'edit_blogpost', payload: { title: title, content: content, id: id} });
        cb();
    };
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost },
    [{
        title: 'Test Post', 
        content: 'Test Content',
        id: 1
    }]
);
