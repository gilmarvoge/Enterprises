import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { appTheme } from "../../assets";

interface Props {
  label: string;
  onPress: () => void;
}

function Button(props: Props) {

  const { label, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appTheme.COLORS.DODGER_BLUE,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text: {
    color: appTheme.COLORS.WHITE,
    fontFamily: appTheme.FONTS.DEFAULT_BOLD,
    textAlign: "center",
    height: 20
  }
});

export default Button;