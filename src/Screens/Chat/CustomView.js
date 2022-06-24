import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
  ViewPropTypes,
  View,
  Text,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
// import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getUniqueId, getManufacturer} from 'react-native-device-info';
class CustomView extends React.Component {
  // export default class CustomView extends React.Component {

  renderPdf() {
    return (
      <TouchableOpacity
        style={[styles2.container, this.props.containerStyle]}
        onPress={() => {
          //   Linking.openURL(
          //     `https://docs.google.com/viewerng/viewer?url=${
          //       this.props.currentMessage.fileuri
          //     }`,
          //   );
          Linking.openURL(this.props.currentMessage.fileuri);
        }}>
        {this.props.currentMessage.file_type === 'pdf' && (
          <Icon
            name="file-pdf-o"
            size={30}
            color={'#3b4254'}
            style={{alignSelf: 'center', marginTop: 10}}
          />
        )}
        {this.props.currentMessage.file_type === 'zip' && (
          <Icon
            name="file-zip-o"
            size={30}
            color={'#3b4254'}
            style={{alignSelf: 'center', marginTop: 10}}
          />
        )}
        {(this.props.currentMessage.file_type === 'doc' ||
          this.props.currentMessage.file_type === 'docx') && (
          <Icon
            name="file-text-o"
            size={30}
            color={'#3b4254'}
            style={{alignSelf: 'center', marginTop: 10}}
          />
        )}
      </TouchableOpacity>
    );
  }

  renderHtml() {
    return (
      <TouchableOpacity
        style={[styles2.container, this.props.containerStyle]}
        onPress={() => {
          //   Actions.chat_html({properties: this.props.currentMessage});
        }}>
        <Image
          {...this.props.imageProps}
          style={[styles2.image, this.props.imageStyle, {borderWidth: 1}]}
          source={{uri: this.props.currentMessage.template_image}}
        />
      </TouchableOpacity>
    );
  }

  renderBot = props => {
    return (
      <View style={styles.viewMainBotChat}>
        {this.props.currentMessage.image === '' &&
        this.props.currentMessage.imageList != undefined &&
        this.props.currentMessage.imageList.buttons === undefined &&
        this.props.currentMessage.imageList.dataquick_replies === undefined ? (
          <ScrollView horizontal={true}>
            {this.props.currentMessage.imageList.map((item, index) => {
              return (
                <View
                  style={{
                    // backgroundColor: 'red',
                    width: null,
                    height: null,
                    borderRadius: 8,
                    flex: 1,
                    marginHorizontal: 4,
                    marginTop: 5,
                    marginBottom: 10,
                  }}>
                  <View>
                    <Image
                      resizeMode={'contain'}
                      style={{
                        width: null,
                        height: null,
                        borderRadius: 13,
                        marginHorizontal: 0,
                      }}
                      source={{uri: item.image_url}}
                    />
                    <Text
                      style={{
                        fontSize: 18,

                        textAlign: 'center',
                        fontFamily: 'Cantoria MT Std',
                      }}>
                      {item.title}
                    </Text>
                    <Text
                      numberOfLines={2}
                      style={{
                        fontFamily: 'Cantoria MT Std',

                        fontSize: 18,

                        textAlign: 'center',
                        marginHorizontal: 20,
                        color: '#4d4d4d',
                      }}>
                      {item.subtitle}
                    </Text>
                    <View>
                      {item.buttons.map(data => {
                        return (
                          <TouchableOpacity
                            onPress={() => {
                              this.props.onSend(
                                '',
                                data.payload,
                                data.title,
                                'user',
                                this.props.currentMessage.iduser,
                                data.type,
                                data.url,
                              );
                            }}
                            style={{
                              borderWidth: 1,
                              marginHorizontal: 45,
                              borderRadius: 10,
                              marginBottom: 15,
                              marginTop: 5,
                              height: 30,
                              justifyContent: 'center',
                              borderColor: '#e7e7e7',
                              backgroundColor: '#e7e7e7',
                            }}>
                            <Text
                              numberOfLines={2}
                              style={{
                                fontSize: 18,

                                textAlign: 'center',
                                marginHorizontal: 20,
                                color: '#4d4d4d',
                              }}>
                              {data.title}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        ) : (
          <View>
            <Text
              style={{
                borderRadius: 10,
                marginBottom: 10,
                marginTop: 5,
                height: null,
                justifyContent: 'center',
                fontFamily: 'Cantoria MT Std',

                fontSize: 18,

                textAlign: 'left',
                marginHorizontal: 15,
                color: 'red',
                borderWidth: 1,
              }}>
              {this.props.currentMessage.imageList.text}
            </Text>
            <View>
              {this.props.currentMessage.imageList.buttons.map(data => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.onSend(
                        '',
                        data.payload,
                        data.title,
                        'user',
                        this.props.currentMessage.iduser,
                        data.type,
                        data.url,
                      );
                    }}
                    style={{
                      borderWidth: 1,
                      marginHorizontal: 45,
                      borderRadius: 10,
                      marginBottom: 10,
                      marginTop: 1,
                      height: 30,
                      justifyContent: 'center',
                      borderColor: '#FFF',
                      backgroundColor: '#FFF',
                    }}>
                    <Text
                      numberOfLines={2}
                      style={{
                        fontSize: 18,

                        textAlign: 'center',
                        marginHorizontal: 20,
                        color: '#4d4d4d',
                        fontFamily: 'Cantoria MT Std',
                      }}>
                      {data.title}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            {this.props.currentMessage.dataquick_replies !== undefined ? (
              <View style={{marginHorizontal: 30}}>
                {this.props.currentMessage.dataquick_replies.map(data => {
                  return (
                    <View style={{}}>
                      <TouchableOpacity
                        onPress={() => {
                          this.props.onSend(
                            '',
                            data.payload,
                            data.title,
                            'user',
                            this.props.currentMessage.iduser,
                            data.type,
                          );
                        }}
                        style={{
                          borderWidth: 1,
                          marginHorizontal: 15,
                          borderRadius: 10,
                          marginBottom: 5,
                          marginTop: 5,
                          height: 30,
                          justifyContent: 'center',
                          borderColor: '#1A4797',
                          backgroundColor: '#FFF',
                        }}>
                        <Text
                          numberOfLines={2}
                          style={{
                            fontSize: 18,

                            textAlign: 'center',
                            marginHorizontal: 20,
                            color: '#1A4797',
                            fontFamily: 'Cantoria MT Std',
                          }}>
                          {data.title}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>
            ) : (
              <View />
            )}
          </View>
        )}
      </View>
    );
  };

  rendeonlyText = props => {
    var arr = this.props.currentMessage.text1.replace(
      getUniqueId(),
      'BKKGEMS User',
    );
    console.log('>>>', arr);
    return (
      <>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Text
            style={{
              borderRadius: 10,
              marginBottom: 10,
              marginTop: 5,
              height: null,
              justifyContent: 'center',
              fontFamily: 'Cantoria MT Std',
              fontWeight: 'normal',
              fontSize: 18,

              textAlign: 'left',
              marginHorizontal: 15,
              color: '#4d4d4d',
            }}>
            {/* {this.props.currentMessage.text1} */}
            {arr}
            {console.log('122', this.props.currentMessage.text1)}
          </Text>
        </View>
      </>
    );
  };

  renderBotDetail = props => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <Text
          style={{
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 5,
            height: null,
            justifyContent: 'center',
            fontFamily: 'Cantoria MT Std',
            fontWeight: 'normal',

            fontSize: 18,

            textAlign: 'right',
            marginHorizontal: 15,
            color: '#4d4d4d',
          }}>
          {this.props.currentMessage.title_name}
          {console.log(
            'this.props.currentMessage.title_name',
            this.props.currentMessage.title_name,
          )}
        </Text>
      </View>
    );
  };

  textuser = props => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <Text
          style={{
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 5,
            height: null,
            justifyContent: 'center',
            fontFamily: 'Cantoria MT Std',
            fontWeight: 'normal',

            fontSize: 18,

            textAlign: 'right',
            marginHorizontal: 15,
            color: '#4d4d4d',
          }}>
          {this.props.currentMessage.text1}
          {console.log(
            'this.props.currentMessage.text1',
            this.props.currentMessage.text1,
          )}
        </Text>
      </View>
    );
  };

  renderDataquickreplies = props => {
    var arr = this.props.currentMessage.showtextdataquick_replies.replace(
      getUniqueId(),
      'BKKGEMS User',
    );
    return (
      <View style={styles.viewMainBotChat}>
        {this.props.currentMessage.text1 !== '' ? (
          <Text
            style={{
              borderRadius: 10,
              marginBottom: 10,
              marginTop: 5,
              height: null,
              justifyContent: 'center',
              fontFamily: 'Cantoria MT Std',
              fontWeight: 'normal',

              fontSize: 18,

              textAlign: 'left',
              marginHorizontal: 15,
              color: '#4d4d4d',
            }}>
            {arr}
          </Text>
        ) : (
          <Text />
        )}
        <View>
          {this.props.currentMessage.imageList === undefined &&
          this.props.currentMessage.dataquick_replies != undefined ? (
            <View>
              {this.props.currentMessage.dataquick_replies.map(data => {
                return (
                  <View style={{}}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.onSend(
                          '',
                          data.payload,
                          data.title,
                          'user',
                          this.props.currentMessage.iduser,
                        );
                      }}
                      style={{
                        borderWidth: 1,
                        marginHorizontal: 15,
                        borderRadius: 10,
                        marginBottom: 5,
                        marginTop: 5,
                        height: 30,
                        justifyContent: 'center',
                        borderColor: '#1A4797',
                        backgroundColor: '#FFF',
                      }}>
                      <Text
                        numberOfLines={2}
                        style={{
                          fontSize: 18,

                          textAlign: 'center',
                          marginHorizontal: 20,
                          color: '#1A4797',
                          fontFamily: 'Cantoria MT Std',
                          fontWeight: 'normal',
                        }}>
                        {data.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          ) : (
            <View></View>
          )}
        </View>
      </View>
    );
  };

  render() {
    console.log('argumentforoptions ');
    console.log(this.props.currentMessage);
    console.log('user_id ');
    console.log(this.props.currentMessage.user._id);
    if (
      this.props.currentMessage.file_type === 'pdf' ||
      this.props.currentMessage.file_type === 'zip' ||
      this.props.currentMessage.file_type === 'doc' ||
      this.props.currentMessage.file_type === 'docx'
    ) {
      return this.renderPdf();
    } else if (
      this.props.currentMessage.template &&
      this.props.currentMessage.template !== 'none'
    ) {
      return this.renderHtml;
      // return null; rendeonlyText
    } else if (
      this.props.currentMessage.image === '' &&
      this.props.currentMessage._id === 'HomeBot' &&
      this.props.currentMessage.imageList === undefined &&
      this.props.currentMessage.text1 !== '' &&
      this.props.currentMessage.title_name === undefined &&
      this.props.currentMessage.textdataquick_replies === '' &&
      this.props.currentMessage.dataquick_replies === undefined
    ) {
      return this.rendeonlyText();
      // return this.renderBotDetail();
    } else if (
      this.props.currentMessage.image === '' &&
      this.props.currentMessage._id === 'HomeBot' &&
      this.props.currentMessage.imageList != undefined
    ) {
      return null;
      // return this.renderBot();
      // return this.renderBotDetail();
    } else if (
      this.props.currentMessage.text1 !== '' &&
      this.props.currentMessage._id === 'HomeBot' &&
      this.props.currentMessage.title_name !== undefined
    ) {
      // return this.renderBot(); ปัจจุบัน คุณ สัณหภัค ดำเนินธุรกิจในลักษณะนิติบุคคลแล้วหรือยังคะ ?
      return this.renderBotDetail();
    } else if (
      this.props.currentMessage.text1 !== '' &&
      this.props.currentMessage._id === 'HomeBot' &&
      this.props.currentMessage.textdataquick_replies === '' &&
      this.props.currentMessage.imageList === undefined &&
      this.props.currentMessage.dataquick_replies !== undefined
    ) {
      // return this.renderBot(); ปัจจุบัน คุณ สัณหภัค ดำเนินธุรกิจในลักษณะนิติบุคคลแล้วหรือยังคะ ?
      return this.renderDataquickreplies();
    } else if (
      this.props.currentMessage.text1 !== '' &&
      this.props.currentMessage._id === 'HomeBot' &&
      this.props.currentMessage.user._id === 'user' &&
      this.props.currentMessage.dataquick_replies === undefined &&
      this.props.currentMessage.imageList === undefined
    ) {
      // return this.renderBot(); ปัจจุบัน คุณ สัณหภัค ดำเนินธุรกิจในลักษณะนิติบุคคลแล้วหรือยังคะ ?
      return this.textuser();
    }

    return null;
  }
}
const mapDispatchToProps = dispatch => ({
  dispatch,
});
// const mapStateToProps = state => ({
//   authUser: state.authReducer.authUser,
// });
export default connect(null, mapDispatchToProps)(CustomView);
const styles2 = StyleSheet.create({
  container: {},
  mapView: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  },
  webview: {
    flex: 1,
  },
  imageActive: {
    flex: 1,
    resizeMode: 'contain',
  },
});

CustomView.defaultProps = {
  mapViewStyle: {},
  currentMessage: {
    image: null,
    file_type: null,
    template: null,
    template_html: null,
    imageList: undefined,
    text: '',
    _id: '',
  },
  containerStyle: {},
  imageStyle: {},
};

CustomView.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  mapViewStyle: ViewPropTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: PropTypes.object,
};
