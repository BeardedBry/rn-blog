import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';


const IndexScreen = () => {

    const { state, dispatch } = useContext(Context);

    return (
    <View>
        <Text>Index Screen</Text>
        <Button title="Add Post" onPress={addBlogPost} />
        <FlatList 
            data={state}
            keyExtractor={(state)=>state.title}
            renderItem={({item}) => {
                return (
                    <>
                        <Text>{item.title}</Text>
                    </>
                )
            }}
        />
    </View>
    )
}
const styles = StyleSheet.create({})

export default IndexScreen;