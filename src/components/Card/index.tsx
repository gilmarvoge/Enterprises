import * as React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { appTheme } from '../../assets';
import { height } from '../../config';

function Card(props: any) {

  const { title, type, photo, details, city, country, shares, price, description } = props;

  return (
    <View style={[styles.cardContainer, styles.shadow]}>
      <View style={[styles.row, styles.padding]}>
        <View style={styles.photoContainer}>
          <Image
            style={styles.photo}
            source={{
              uri: `http://empresas.ioasys.com.br/${photo}`,
            }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.caption}>
            {type}
          </Text>
        </View>
      </View>
      {details &&
        <ScrollView >
          < View style={styles.padding}>
            <View >
              <View style={[styles.row, styles.localization]}>
                <Text style={styles.text}>
                  City: {city}
                </Text>
                <Text style={styles.text}>
                  Country: {country}
                </Text>
              </View>
              <View style={[styles.row, styles.localization]}>
                <Text style={styles.text}>
                  Price: {price}
                </Text>
                <Text style={styles.text}>
                  Shares: {shares}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.text}>
                  Description: {description}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      }
    </View >
  );
}

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: appTheme.COLORS.WHITE,
    borderWidth: 0,
    borderRadius: 8,
    minHeight: 50,
    marginBottom: 4,
    maxHeight: height / 1.3
  },
  shadow: {
    shadowColor: '#8898AA',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    shadowOpacity: 0.1,
    elevation: 2
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  padding: {
    paddingHorizontal: 10,
  },
  photoContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  photo: {
    backgroundColor: 'transparent',
    width: 70,
    height: 70,
    borderRadius: 70 / 2
  },
  titleContainer: {
    flex: 5,
    marginLeft: 40,
    justifyContent: 'center',
  },
  title: {
    fontFamily: appTheme.FONTS.DEFAULT_BOLD,
    color: appTheme.COLORS.TEXT,
    fontSize: appTheme.SIZES.FONT,
  },
  caption: {
    fontFamily: appTheme.FONTS.DEFAULT,
    fontSize: appTheme.SIZES.DEFAULT_14,
    color: appTheme.COLORS.CAPTION
  },
  text: {
    fontFamily: appTheme.FONTS.DEFAULT,
    color: appTheme.COLORS.TEXT,
  },
  localization: {
    justifyContent: 'space-between'
  }
});
