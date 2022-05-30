import {PixelRatio, Platform, Dimensions} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
const {width: SCREENWIDTH, height: SCREENHEIGHT} = Dimensions.get('window');

export const ViewScale = size => {
  // console.log(JSON.stringify(Platform))
  if (SCREENWIDTH > 375) {
    //  size=size+1;
    Platform.OS === 'android' && size > 2 ? (size += 4) : size;

    let newSize = RFValue(size, 896);

    if (newSize > 2) {
      if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
      } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
      }
    } else {
      //  return Platform.isPad ? newSize : size;
      return newSize;
    }
  } else {
    size = size + 2.5;
    Platform.OS === 'android' && size > 2 ? (size += 4) : size;

    let newSize = RFValue(size, 896);

    if (newSize > 2) {
      if (Platform.OS === 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
      } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
      }
    } else {
      //  return Platform.isPad ? newSize : size;
      return newSize;
    }
  }
};
