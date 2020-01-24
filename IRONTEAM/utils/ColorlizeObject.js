import {PixelRatio, Platform, Dimensions} from 'react-native';
import {VARIABLES} from './Variables';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 360;

export default level => {
  if (
    level == undefined ||
    level == {} ||
    level == false ||
    level.length == 0
  ) {
    return VARIABLES.lightGray;
  } else {
    return VARIABLES.Color;
  }
};
