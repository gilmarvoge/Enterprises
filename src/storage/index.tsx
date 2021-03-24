import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_STORAGE = 'storageUser';

export async function signOutStorageUserAsync() {
  return await AsyncStorage.removeItem(USER_STORAGE);
}

export async function getStorageUserAsync() {
  const result = await AsyncStorage.getItem(USER_STORAGE);
  if (result) {
    const user = JSON.parse(result);
    return user;
  }
}

export async function saveStorageUserAsync(user: any) { 
  await AsyncStorage.setItem('storageUser', JSON.stringify(user));
}

