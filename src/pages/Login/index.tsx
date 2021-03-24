import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { SimpleLineIcons, Ionicons } from '@expo/vector-icons';
import { Alert, Button, FormTextInput, Background, Loader } from '../../components';
import { strings } from '../../config';
import { userActions } from '../../redux/actions';
import { appTheme } from '../../assets';

function LoginScreen(props: any) {
  const { dispatch, isLoading } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisibility] = useState(true);

  const handleEmailChange = (email: string) => {
    setEmail(email);
  };

  const handlePasswordChange = (password: string) => {
    setPassword(password);
  };

  const handleLoginPress = () => {
    if (!email || !password)
      Alert('Alert', strings.ERROR_LOGIN);
    else
      dispatch(userActions.signIn(email, password));
  };

  return (
    <Background  >
      {isLoading && <Loader />}
      <View style={styles.container}>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value={email}
            onChangeText={handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
            iconLeft={
              <SimpleLineIcons
                name='user'
                size={24}
                style={styles.icon}
              />
            }
          />
          <FormTextInput
            styleView={styles.bottom}
            secureTextEntry={visible}
            value={password}
            onChangeText={handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            iconLeft={
              <SimpleLineIcons
                name='lock'
                size={24}
                style={styles.icon}
              />
            }
            iconRight={
              <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                onPress={() => setVisibility(!visible)}
              >{visible ?
                <SimpleLineIcons
                  name='eye'
                  size={24}
                  style={styles.icon}
                />
                :
                <Ionicons 
                name="md-eye-off-outline" 
                size={24} 
                style={styles.icon}
                />
                }
              </TouchableOpacity>
            }
          />
          <Button label={strings.LOGIN} onPress={handleLoginPress} />
        </View>
      </View>
    </Background>
  );
}

const mapStateToProps = ({ loading }: { loading: any }) => ({
  isLoading: loading['LOADING_LOGIN'] ? true : false,
});

export default connect(mapStateToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    flex: 1,
    width: '80%',
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%'
  },
  icon: {
    color: appTheme.COLORS.ICON
  },
  bottom: {
    marginBottom: 20
  }
});

