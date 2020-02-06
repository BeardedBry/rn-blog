import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import { BlogProvider } from './src/context/BlogContext';


const navigator = createStackNavigator(
  {
  Index: IndexScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
}
);

const App = createAppContainer(navigator);
// App is passed in as the child of BlogProvider

export default () => {
  return (
    <BlogProvider>
      <App /> 
    </BlogProvider>
    );
}