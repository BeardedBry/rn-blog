import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {

    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id); 

    return <BlogPostForm
        initialValues={{title: blogPost.title, content: blogPost.content} }
        onSubmit={(title, content)=>{
            //console.log(title, content, blogPost.id);
            editBlogPost(title, content, id, () => navigation.pop());
    }} />;
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default EditScreen;