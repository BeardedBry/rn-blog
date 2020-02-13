import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';
//const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    
    switch (action.type) {
        case 'get_blogposts':
            return action.payload;
        case 'edit_blogpost':
            return state.map((blogPost)=>{
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            })
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const getBlogPosts = dispatch => {
    return async () => {
        try {
            const response = await jsonServer.get('/blogposts');
            // response.data === [{},{},{},{}]
            dispatch({type: 'get_blogposts', payload: response.data})
        }catch(e){
            console.error(e);
        }
    }
}

const addBlogPost = (dispatch) => {
    return async(title, content, cb) => {
        try{
            const post = await jsonServer.post('/blogposts', {title, content})
        }catch(e){
            console.error(e);
        }
      
        if(cb){
            cb();
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return async(id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: id});
    };
};


const editBlogPost = (dispatch) => {
    return async(title, content, id, cb) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content})
        dispatch({ type: 'edit_blogpost', payload: { title, content, id} });
        if (cb){
            cb();
        }
    };
};


export const { Context, Provider } = createDataContext(
    blogReducer,
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []
);

// [{
//     title: 'Test Post', 
//     content: 'Test Content',
//     id: 1
// }]
