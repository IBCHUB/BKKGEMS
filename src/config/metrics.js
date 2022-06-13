import {Dimensions, Platform, PixelRatio} from 'react-native';
// import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

const IS_ANDROID = Platform.OS === 'android';
const {height, width} = Dimensions.get('window');
const scale = width / 414;

export default {
  BASE_URL: 'https://bkkgems.com/', // production
  VERSION: 20211209,
  VERSION_NUM: 14,
  // ANDROID_STATUSBAR: 24,
  DEVICE_HEIGHT: IS_ANDROID ? height - 24 : height,
  DEVICE_WIDTH: width,
  //   DEVICE_TOP:
  //     Platform.OS === 'ios' ? StaticSafeAreaInsets.safeAreaInsetsTop : 10,
  //   DEVICE_BOTTOM:
  //     Platform.OS === 'ios' ? StaticSafeAreaInsets.safeAreaInsetsBottom : 0,

  DEVICE_TYPE: IS_ANDROID ? 'android' : 'iphone',
  NORMALIZEE: function (size) {
    // const newSize = size * scale;
    const newSize = size;
    if (Platform.OS === 'ios') {
      // return Math.round(PixelRatio.roundToNearestPixel(newSize)+1);
      return newSize + 1;
    } else {
      // return Math.round(PixelRatio.roundToNearestPixel(newSize));
      return newSize;
    }
  },
};
