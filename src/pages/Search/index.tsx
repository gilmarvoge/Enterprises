import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Background, Button, Header, Alert, Search } from '../../components';
import { enterprisesAction } from '../../redux/actions';
import { appTheme } from '../../assets';
import { strings } from '../../config';

function SearchScreen(props: any) {
  const { navigation, route, dispatch, enterprises, photo } = props;
  const [type, setType] = useState('');
  const [name, setName] = useState('');

  const handleTypeChange = (type: string) => {
    setType(type);
  };

  const handleNameChange = (name: string) => {
    setName(name);
  };

  const clearFilter = () => {
    setName('');
    setType('');
  };

  const handleSubmit = () => {
    if (!name && !type)
      Alert('Alert', strings.EMPTY_FILTER);
    else {
      dispatch(enterprisesAction.enterprisesRequestFilter(type, name));
      navigation.goBack();
    }
  };

  return (
    <Background  >
      <Header title="Filter" left />
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Search
            iconName='briefcase'
            value={name}
            placeholder={strings.ENTERPRISE_NAME_FILTER}
            style={styles.borderBottom}
            onChangeText={handleNameChange}
          />
          <Search
            iconName='globe'
            value={type}
            placeholder={strings.ENTERPRISE_TYPE_FILTER}
            onChangeText={handleTypeChange}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            onPress={clearFilter}
            label={strings.CLEAR}
          />
          <Button onPress={handleSubmit}
            label={strings.FILTER}
          />
        </View>
      </SafeAreaView>
    </Background>
  );
}

export default connect()(SearchScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: appTheme.COLORS.BORDER_COLOR
  },
  item: {
    paddingVertical: appTheme.SIZES.BASE / 4,
    paddingHorizontal: appTheme.SIZES.BASE * 2,
  },
  searchContainer: {
    justifyContent: 'space-between'
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

