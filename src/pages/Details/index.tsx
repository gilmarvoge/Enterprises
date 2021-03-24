import React, { useEffect } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { Background, Header, Card, Loader } from '../../components';
import { enterprisesAction } from '../../redux/actions';
import { appTheme } from '../../assets';

function DetailsScreen(props: any) {

  const { route, dispatch, enterprise, isLoading } = props;
  const id = route?.params?.id;
  const { enterprise_name, enterprise_type, photo, city, country, shares, share_price, description } = enterprise;
  const enterprise_type_name = enterprise_type?.enterprise_type_name;

  useEffect(() => {
    dispatch(enterprisesAction.enterprisesRequestDetails(id));
  }, [id]);

  return (
    <Background>
      {isLoading ?
        <Loader />
        :
        <SafeAreaView style={styles.container}>
          <Header title="Details" left />
          <View style={styles.item} key={id}>
            <Card
              details
              title={enterprise_name}
              type={enterprise_type_name}
              photo={photo}
              city={city}
              country={country}
              price={share_price}
              shares={shares}
              description={description}
            />
          </View>
        </SafeAreaView>
      }
    </Background>
  );
}

const mapStateToProps = ({ enterprises, loading }: { enterprises: any, loading: any }) => ({
  enterprise: enterprises.enterprisesDetails,
  isLoading: loading['LOADING_ENTERPRISE_DETAILS'] ? true : false,
});

export default connect(mapStateToProps)(DetailsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingVertical: appTheme.SIZES.BASE / 2,
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
});

