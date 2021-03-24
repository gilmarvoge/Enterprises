import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import { appTheme } from '../../assets';

export default function Search(props: any) {

  const { style, iconName, ...otherProps } = props;

  return (
    <View style={[styles.container, style]}>
      <SimpleLineIcons
        name={iconName}
        size={24}
        style={styles.icon}
      />
      <View style={styles.searchContainer}>
        <TextInput
          clearButtonMode='while-editing'
          style={styles.textInput}
          multiline={false}
          {...otherProps}
        >
        </TextInput>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    backgroundColor: '#FFFFFF',
    height: 50,
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    paddingRight: 20,
    color: appTheme.COLORS.TEXT
  },
  searchContainer: {
    flexDirection: 'column'
  },
  icon: {
    color: appTheme.COLORS.ICON
  }
})