import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Share,
  Dimensions,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AutoHeightWebView from 'react-native-autoheight-webview';
import styles from './styles';
const NewDetail = ({navigation, route}) => {
  const {item} = route.params;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const [data, setData] = useState([
    {
      text: 'COVID',
    },
    {
      text: 'EVENT',
    },
    {
      text: 'FAIR',
    },
    {
      text: 'NEWS',
    },
    {
      text: 'VISITOR',
    },
  ]);
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Headerback navigation={navigation} />
        <ScrollView style={{backgroundColor: '#EEECE2', marginBottom: 20}}>
          <Image source={item.img} style={styles.imgHeader} />

          <AutoHeightWebView
            style={{width: Dimensions.get('window').width - 15, marginTop: 35}}
            customScript={`document.body.style.background = 'lightyellow';`}
            customStyle={`
      * {
        font-family: 'Times New Roman';
      }
      p {
        font-size: 16px;
      }
    `}
            onSizeUpdated={size => console.log(size.height)}
            files={[
              {
                href: 'cssfileaddress',
                type: 'text/css',
                rel: 'stylesheet',
              },
            ]}
            source={{
              html: `<p style="font-weight: 400;font-style: normal;font-size: 21px;line-height: 1.58;letter-spacing: -.003em;">Tags are great for describing the essence of your story in a single word or phrase, but stories are rarely about a single thing. <span style="background-color: transparent !important;background-image: linear-gradient(to bottom, rgba(146, 249, 190, 1), rgba(146, 249, 190, 1));">If I pen a story about moving across the country to start a new job in a car with my husband, two cats, a dog, and a tarantula, I wouldn’t only tag the piece with “moving”. I’d also use the tags “pets”, “marriage”, “career change”, and “travel tips”.</span></p>`,
            }}
            scalesPageToFit={true}
            viewportContent={'width=device-width, user-scalable=no'}
            /*
    other react-native-webview props
    */
          />
          <Text style={styles.textheader}>
            Bangkok Gems & Jewelry Fair’s Highest Covid-19 Preventive Measures
          </Text>
          <View style={styles.row}>
            <Text style={styles.textmini}>Post on : 1 February,2022</Text>
            <TouchableOpacity onPress={onShare} style={styles.botton}>
              <Octicons
                name="share-android"
                size={11}
                color={'#fff'}
                style={styles.iconshare}
              />
              <Text style={styles.textshare}>SHARE</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textdetail}>
            Ministry of Commerce Organized Bangkok Gems & Jewelry Fair amidst
            COVID-19 Crisis Welcoming Ten Thousand Visitors with Strict
            Preventive Measures, 10% Rise in Exhibitors
            {'\n'}
            {'\n'}
            Thailand’s Department of International Trade Promotion, Ministry of
            Commerce, revealed that the 65th Bangkok Gems & Jewelry Fair was
            successfully organized amidst the COVID-19 crisis, with an increase
            of 10% in exhibitors compared to the fair’s 63rd edition. Welcoming
            nearly 10,000 visitors from Thailand and abroad who joined in trade
            negotiations, the Fair was Asia’s only gems and jewelry trade show
            held during the beginning of this year.
            {'\n'}
            {'\n'}
            Mr. Somdet Susomboon, Director-General of the Department of
            International Trade Promotion or DITP revealed that the 65th Bangkok
            Gems & Jewelry Fair organized from 25 to 29 February, 2020, was
            considered a success though the event was held amidst the spread of
            the COVID-19 virus which prompted many exhibitors and visitors to
            cancel their plans to join the fair in the days leading up to the
            event.
          </Text>
          <Image
            source={require('../../../assets/image/about2.png')}
            style={styles.imgHeader}
          />
          <Text style={styles.textdetail}>
            “The number of visitors during trade days was satisfactory as we
            welcomed nearly 7,000 visitors who participated in trade
            negotiations, 58% of which were from overseas. This demonstrated
            that buyers were confident in our screening and preventive measures
            for COVID-19 which matched international standards. However, during
            the Show, news on the spread of the virus had become more severe
            both in Thailand and abroad, causing some visitors to delay their
            travel plans,” said the Director-General.
            {'\n'}
            {'\n'}
            Several countries which are considered key target buyers of the
            Bangkok Gems & Jewelry Fair such asChina, United Arab Emirates, and
            Bahrain, have prohibited their citizens to travel abroad or have
            issued travel advisory during the event dates. Therefore, some
            pre-registered trade delegates were unable totravel as planned and
            had canceled their trips due to concerns regarding the spread of the
            disease.
            {'\n'}
            {'\n'}
            The 65th Bangkok Gems & Jewelry Fair was the only international gems
            and jewelry fair held in Asia duringthe beginning of 2020. The event
            was joined by 994 companies in 2,086 booths, a 10% increase from
            the63rd edition of the fair. During the five days of the event,the
            fair welcomed 9,292 visitors with 4,854 from foreign countries and
            4,438 from Thailand. The top five visiting countries were India,
            China, Myanmar, Sri Lanka, and Russia, respectively, while the top
            five product groups with the highest trade value were colored
            stones, machinery, silver jewelry, other products, and pearls,
            respectively.
          </Text>
          <Image
            source={require('../../../assets/image/about1.png')}
            style={styles.imgHeader}
          />
          <Image
            source={require('../../../assets/image/about2.png')}
            style={styles.imgHeader}
          />
          <Text style={styles.textdetail}>
            Meanwhile, Mr. Kittisak Udomdangaram, President of the Thai Silver
            Exporters’ Association and Executive of Silver Bar co., Itd said
            that the highlight of the 65th edition was the Siam Silver Showcase
            which featured silver jewelry trends as well as silver
            jewelry-making demonstrations from Thai artisans and silver jewelry
            workshops throughout the five days of the Fair. The showcase
            attracted attention from visitors who stopped by to admire the
            silver jewelry pieces on display which demonstrated Thailand’s
            position as the leading silver exporter in the world.
            {'\n'}
            {'\n'}
            “As for trade negotiations, Silver Bar welcomed existing customers
            from Europe, the UK, and Russia, who visited our booth to order new
            products, which is considered satisfactory in this economic
            climate,” he said.
            {'\n'}
            {'\n'}
            The Department of International Trade Promotion will organize the
            66th Bangkok Gems & Jewelry Fair on 7-11 September 2020 at IMPACT,
            Muang Thong Thani. For more information, please visit
            www.bkkgems.com or contact DITP Call Center at 1169.
          </Text>
          <View style={styles.rowtags}>
            <Text style={styles.tags}>Tags : </Text>

            <FlatList
              data={data}
              horizontal
              renderItem={({index, item}) => {
                return (
                  <View style={styles.viewtag}>
                    <Text style={styles.textags}>{item.text}</Text>
                  </View>
                );
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default NewDetail;
