import React, {Fragment, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Dimensions,
  TextInput,
} from 'react-native';
import Headerback from '../../Components/Headerback';
import styles from './styles';
import {connect} from 'react-redux';
const Term = ({navigation, dispatch}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{backgroundColor: '#23232390'}}>
        <Headerback navigation={navigation} item={'TERMS OF USE'} />

        <ScrollView>
          <View style={styles.view}>
            <Text style={styles.textdetail}>
              Department's privacy policy for the use of the application below,
              hereinafter referred to as "Application".{'\n'}
              {'\n'}Please read and understand this Privacy Policy carefully. In
              the case that you have installed and/or have accessed this
              application, you are deemed to have agreed to all the terms stated
              in this Privacy Policy. If you are unable to accept the terms of
              this Privacy Policy, you are requested to deny the use of the
              application by immediately removing the application from your
              mobile phone/digital device.{'\n'}
              {'\n'}
              1. In the purpose of the privacy policy for using this
              application, the Department wishes to inform you clearly what
              information the Department collects from you and how the
              application uses and shares your information. This Privacy Policy
              describes:{'\n'}
              {'  '} - Information collected and reasons for collecting {'\n'}
              {'  '} - Use of collected information{'\n'}
              {'\n'}The Department will use information collected from all
              Department applications to provide, maintain, prevent, improve,
              develop new services, and protect the department and you as well
              as to offer content that has been customised to suit your
              particular use, such as showing search results that are relevant
              to you, displaying advertisements promoting services that may be
              of interest to you and that are useful to you. {'\n'}
              {'\n'}When you contact the department, the Department may keep a
              record of conversations between you and the Call Centre provided
              by the Department as a channel for receiving notifications, giving
              advice, and suggesting solutions to problems related to the use of
              the application, and may keep a record of the e-mail address that
              you have provided to send various suggestions in order to improve
              and develop the service of the Department and affiliated
              departments and notify you through the address you provided.{' '}
              {'\n'}
              {'\n'}The Department may use information collected from cookies
              and other technologies, such as the use of tags, to improve your
              user experience. and the overall quality of the application.{'\n'}
              {'\n'}
              Shared Information {'\n'}
              {'\n'}The Department will not share or disclose your information
              with the department and/or other departments, and/or third
              parties, except in the following cases:{'\n'}
              {'\n'} - เมื่อได้รับความยินยอมจากท่าน
              กรมอาจแบ่งปันหรือเปิดเผยข้อมูลส่วนบุคคลของท่านกับกรม
              และ/หรือองค์กรอื่น และ/หรือบุคคลภายนอก
              เมื่อได้รับความยิมยอมจากท่านให้แบ่งปันหรือเปิดเผยข้อมูลส่วนบุคคลที่ละเอียดอ่อนของท่านก่อน
              {'\n'}
              {'\n'} - With your consent, the Department may share or disclose
              your personal information with the Department, and/or other
              departments, and/or third parties. Upon obtaining your consent to
              share or disclose your sensitive personal information: firstly,
              for “use of collected information”, the Department may share or
              disclose your personal information with affiliated departments,
              departments in the working group, as well as parties which are
              responsible for managing applications according to contracts with
              the department directly, or other departments that have a reliable
              privacy policy, to provide, maintain, prevent, improve, develop
              new services, and protect the department and you as well as to
              offer content that has been customised to suit your particular
              use, such as showing search results that are relevant to you,
              displaying advertisements promoting services that may be of
              interest to you and that are useful to you, by following the
              instructions and in accordance with the Department's privacy
              policy including appropriate confidentiality and security
              measures.{'\n'}
              {'\n'} - For legal reasons, the Department may share or disclose
              your information within the department, and/or other departments ,
              and/or third parties, if the Department believes in good faith
              that the access, use, retention or disclosure of that information,
              are based on reasonable grounds: (1) for the compliance to the law
              and regulations, rules, relevant orders, and government requests
              for information; (2) to enforce the relevant terms of service,
              which includes an investigation of potential violations; (3) to
              detect, prevent or investigate fraud, security, or technical
              issues; (4) to prevent harm to the rights, property, or safety of
              the Department, and/or you, or other persons as required by law.
              {'\n'}
              {'\n'} - The Department may share non-personally identifiable
              information about users of the Application, such as search
              results, mobile network used, the language used, frequently
              visited websites, etc., publicly or to Department's commercial
              partners, such as advertising publishers, or linked websites, for
              example, the Department may share information that shows trends in
              the usage of the application to the public, for example, if the
              Department has a change in its management structure, such as a
              merger, acquisition or sale of asset, the department will maintain
              any personal information, keep secret, and inform users of
              affected applications before transferring personal data or
              providing that personal information is subject to other privacy
              policies.{'\n'}
              {'\n'}2. Data security {'\n'}
              {'\n'}The Department makes every effort to protect your
              information from unauthorised access. Unauthorised alteration,
              disclosure or destruction, at least as follows: {'\n'}
              {'\n'}The Department audits the collection of information, storage
              space, and processing practices including physical safety measures
              to prevent unauthorised access to information. The Department
              restricts access to personal information to its officials,
              employees, and representatives who have the necessity to access
              that information on the need-to-know basis in order to process the
              data where such persons must adhere to the contractual
              confidentiality requirements. Failure to do so will result in
              severe penalties.
              {'\n'}
              {'\n'}3. Privacy policy restrictions {'\n'}
              {'\n'}This Privacy Policy only applies to this particular
              application only. It does not include applications and/or services
              that have a separate privacy policy and/or that are not expressly
              defined in conjunction with this privacy policy, and does not
              apply to applications and services or other websites connected
              (linked) to this application including not covering the privacy
              practices of other departments or other organisations that
              advertises the application of the Department, which may use
              cookies, pixel tags, and other technologies to deliver and display
              relevant advertisements.{'\n'}
              {'\n'}4. Compliance with laws and cooperation with regulators
              {'\n'}
              {'\n'}The department conducts audits and reviews compliance with
              the privacy policy and compliance with relevant laws within the
              organisation on a regular basis (self-regulated). If the
              Department receives a letter of complaint about the use of
              personal information, the department will follow up as well as
              cooperate with government agencies that have the authority to
              supervise the service of the application and various consumer
              protection agencies.{'\n'}
              {'\n'}5. Changes in privacy policy{'\n'}
              {'\n'}The Department reserves the right to amend this Privacy
              Policy at any time without your prior consent unless amendments
              are made that infringe upon your rights under this Privacy Policy.
              For that matter, the Department will not be able to do this
              without your prior consent.{'\n'}
              {'\n'}6. Accessing and updating personal information{'\n'}
              {'\n'}The Department sincerely hopes that you can access your
              personal information while using the Application. If such
              information is incorrect or inaccurate, the Department will try to
              provide a method and/or channels for you to appropriately update
              and/or delete your personal data, except in cases where it is
              necessary that the Department has to store your personal data for
              business benefit and/or for compliance with applicable law. When
              you update your personal information, the Department may request
              that you verify your identity before the Department can process
              your request. The Department reserves the right to decline
              requests for updates and access to your personal information in
              the following cases: (1) making a request that is too complex and
              excessive; (2) processing the request may require the Department
              to provide and/or develop technology other than those the
              Department has; (3) the processing of the request may affect the
              personal information of other application users; or (4) the
              processing of the request is not practical, for example, requests
              for retrieval of personal data stored in the backup system.{'\n'}
              {'\n'}The department aims to make the application service of the
              department safe, and can prevent the destruction of data from
              accidents or other malicious purposes. For this reason, after you
              delete the data from the Department's application, the Department
              may not take action to delete the existing copies of personal data
              from the active servers, or immediately remove the data from the
              Department's backup system.
            </Text>
            <View style={{marginBottom: 50}} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};
// const mapStateToProps = state => ({
//   authData: state.authReducer.authData,
// });
const mapDispatchToProps = dispatch => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Term);
