import React, { useContext } from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';

const IndexScreen = ( { navigation } ) => {
    
    const { state, deleteBlogPost } = useContext(BlogContext);

    return (
    <View>
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
    );
};

// Header bar
IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
                <Text style={{fontSize: 38, paddingRight: 15}}>&#x2b;</Text>
            </TouchableOpacity>
        ),
    };
};

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
        padding: 5,
        fontSize: 18,
    }
})

export default IndexScreen;