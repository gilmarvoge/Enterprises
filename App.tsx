import React, { useEffect, useState } from 'react';
import { Provider, connect } from 'react-redux';
import { StyleSheet, View, StatusBar } from 'react-native';
import AppLoading from 'expo-app-loading';
import { loadAsync } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { userActions, loadingAction } from './src/redux/actions';
import { getStorageUserAsync } from './src/storage';

import store from './src/store';

//Pages
import LoginScreen from './src/pages/Login';
import HomeScreen from './src/pages/Home';
import DetailsScreen from './src/pages/Details';
import SearchScreen from './src/pages/Search';

const AppStack = createStackNavigator();

function App(props: any) {

  const { dispatch, user } = props;
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  const getStorageUser = async () => {
    dispatch(loadingAction.startLoading('LOADING_USER', ''));
    const user = await getStorageUserAsync();
    dispatch(userActions.getUser(user));
  };

  const loadFonts = async () => {
    await loadAsync({
      'Roboto-Bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
      'Roboto-Regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    });
    setLoadingComplete(true);
  }

  useEffect(() => {
    getStorageUser();
    loadFonts();
  }, []);

  if (!isLoadingComplete)
    return <AppLoading />
  else
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#58c323' barStyle='light-content' />
        <NavigationContainer >
          <AppStack.Navigator screenOptions={{
            headerShown: false,
          }}
          >
            {user.isSignedIn ? (
              <>
                <AppStack.Screen name="home" component={HomeScreen} />
                <AppStack.Screen name="details" component={DetailsScreen} />
                <AppStack.Screen name="search" component={SearchScreen} />
              </>
            ) : (
                <AppStack.Screen name="login" component={LoginScreen} />
              )
            }
          </AppStack.Navigator>
        </NavigationContainer>
      </View>
    );
}

const mapStateToProps = ({ authentication }: { authentication: any }) => ({
  user: authentication,
});

const Enterprise = connect(mapStateToProps)(App);

export default function Root() {
  return (
    <Provider store={store}>
      <Enterprise />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
