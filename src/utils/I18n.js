import I18n from 'react-native-i18n';
import * as RNLocalize from 'react-native-localize';
import th from '../utils/locales/th';
import en from '../utils/locales/en';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  //   I18n.locale = locales[0].languageTag;
  I18n.locale = 'en';
}
I18n.changelanguage = function (language) {
  if (language == 'TH') {
    I18n.locale = 'th';
  } else if (language == 'EN') {
    I18n.locale = 'en';
  }
};
I18n.fallbacks = true;
I18n.translations = {th, en};

export default I18n;
