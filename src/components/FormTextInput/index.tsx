import * as React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { appTheme } from '../../assets';

function FormTextInput(props: any) {

  const { styleView, iconLeft, iconRight, ...otherProps } = props;

  return (
    <View style={[styles.container, styleView]}>
      {iconLeft}
      <TextInput
        selectionColor={appTheme.COLORS.DODGER_BLUE}
        style={styles.textInput}
        {...otherProps}
      />
      {iconRight}
    </View>
  );
}

export default FormTextInput;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: appTheme.COLORS.BORDER_COLOR,
    borderBottomWidth: StyleSheet.hairlineWidth,
   
  },
  textInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
    paddingRight: 20,
    color: appTheme.COLORS.TEXT,
  },
});

