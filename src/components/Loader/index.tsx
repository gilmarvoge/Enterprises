import React from 'react';
import { StyleSheet, Modal, ActivityIndicator, View } from 'react-native';
import { appTheme } from '../../assets';

export default function Loader(props: any) {

  const { loading } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
    >
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            size="large"
            animating={loading}
            color={appTheme.COLORS.GREEN}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: '#00000040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicatorWrapper: {
    backgroundColor: appTheme.COLORS.WHITE,
    height: 100,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  }
});
