import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { appTheme } from '../../assets';
import { SimpleLineIcons } from '@expo/vector-icons';
import { userActions } from '../../redux/actions';

function Header(props: any) {

  const { dispatch, title, left, filter } = props;
  const navigation = useNavigation();

  const signOut = () => {
    dispatch(userActions.signOut());
  }

  return (
    <View style={styles.headerContainer}>
      {left && <View style={styles.headerLeftContainer}>
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
          onPress={() => { navigation.goBack() }}
        >
          <SimpleLineIcons
            name='arrow-left'
            size={22}
            color={appTheme.COLORS.WHITE}

          />
        </TouchableOpacity>
      </View>}
      {title && <Text style={styles.title}>{title}</Text>}
      <View style={styles.headerRightContainer}>
        {filter &&
          <TouchableOpacity
            hitSlop={{ top: 20, bottom: 20, left: 10, right: 10 }}
            onPress={() => {
              navigation.navigate('search');
            }}
          >
            <SimpleLineIcons
              name="magnifier"
              size={22}
              color={appTheme.COLORS.WHITE}
              style={styles.filterIcon}
            />
          </TouchableOpacity>
        }
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          onPress={signOut}
        >
          <SimpleLineIcons
            name="logout"
            size={22}
            color={appTheme.COLORS.WHITE}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default connect()(Header);

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 40,
  },
  headerRightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginEnd: 15,
  },
  headerLeftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginStart: 15,
  },
  title: {
    fontFamily: appTheme.FONTS.DEFAULT_BOLD,
    fontSize: appTheme.SIZES.LARGE,
    color: appTheme.COLORS.WHITE,
    marginStart: 15
  },
  filterIcon: {
    marginRight: 15,
  }
});
