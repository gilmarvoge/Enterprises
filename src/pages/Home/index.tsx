import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';
import { Background, Header, Card, Loader } from '../../components';
import { enterprisesAction } from '../../redux/actions';
import { appTheme } from '../../assets';
import { strings } from '../../config';

interface Item {
  id: string
  enterprise_name: string;
  enterprise_type: Type;
  photo: string;
}

interface Type {
  id: string
  enterprise_type_name: string;
}

function HomeScreen(props: any) {
  const { navigation, dispatch, enterprises, enterprisesFilter, isLoading } = props;

  useEffect(() => {
    dispatch(enterprisesAction.enterprisesRequest());
  }, []);

  const renderEnterprises = ({ item }: { item: Item }) => {

    const { id, enterprise_name, enterprise_type, photo } = item;
    const { enterprise_type_name } = enterprise_type;

    return (
      <TouchableOpacity
        key={id}
        style={styles.item}
        onPress={() => {
          navigation.navigate('details', {
            id
          });
        }}
      >
        <View >
          <Card
            title={enterprise_name}
            type={enterprise_type_name}
            photo={photo}
          />
        </View>
      </TouchableOpacity>
    )
  };

  const clearFilter = () => {
    dispatch(enterprisesAction.enterprisesClearFilter());
  }

  return (
    <Background  >
      {isLoading ?
        <Loader />
        :
        <SafeAreaView style={styles.container}>
          <Header title="Enterprises" filter />
          {enterprisesFilter && enterprisesFilter.length > 0 &&
            < View style={styles.filterContainer}>
              <Text style={styles.text}>
                {strings.FILTER}
              </Text>

              <TouchableOpacity
                hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
                onPress={clearFilter}
              >
                <SimpleLineIcons
                  name='trash'
                  size={22}
                  color={appTheme.COLORS.WHITE}
                />
              </TouchableOpacity>
            </View>
          }
          <FlatList
            showsVerticalScrollIndicator={false}
            data={enterprisesFilter && enterprisesFilter.length > 0 ? enterprisesFilter : enterprises}
            renderItem={renderEnterprises}
            keyExtractor={(item) => String(item.id)}
          />
        </SafeAreaView>
      }
    </Background >
  );
}

const mapStateToProps = ({ enterprises, loading }: { enterprises: any, loading: any }) => ({
  enterprises: enterprises.enterprises,
  enterprisesFilter: enterprises.enterprisesFilter,
  isLoading: loading['LOADING_ENTERPRISES'] || loading['LOADING_ENTERPRISE_FILTER'] ? true : false,
});

export default connect(mapStateToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingVertical: appTheme.SIZES.BASE / 4,
    paddingHorizontal: appTheme.SIZES.BASE * 2,
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
  text: {
    fontFamily: appTheme.FONTS.DEFAULT_BOLD,
    color: appTheme.COLORS.WHITE,
    fontSize: appTheme.SIZES.FONT,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    paddingVertical: 10
  }
});

