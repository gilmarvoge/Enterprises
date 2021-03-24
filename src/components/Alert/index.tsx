
import { Alert } from 'react-native';

export default function (title: string, message: string) {
  Alert.alert(
    title,
    message,
    [
      { text: 'OK', onPress: () => { } }
    ],
    { cancelable: false }
  );
};
