import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';


const navigator = createStackNavigator(
  {
  Index: IndexScreen,
  Show: ShowScreen,
  Create: CreateScreen
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