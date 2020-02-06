import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = ( { navigation } ) => {
    
    const { state, addBlogPost, deleteBlogPost } = useContext(BlogContext);

    return (
    <View>
        <Text>Index Screen</Text>
        <Button title="Add Post" onPress={addBlogPost} />
        <FlatList 
            data={state}
            keyExtractor={(state)=>state.id.toString()}
            renderItem={({item}) => {
                return (
                    <TouchableOpacity onPress={ () => navigation.navigate('Show', {id: item.id})}>
                        <View style={styles.row}>
                            <Text style={styles.title}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                <Text style={styles.icon}>
                                    &#9747;
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
    </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18,
    },
    icon: {
        fontSize: 18,
    }
})

export default IndexScreen;