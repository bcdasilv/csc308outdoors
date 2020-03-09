import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { withNavigation } from 'react-navigation';
import { 
  Text,
  TouchableHighlight,
  TextInput, 
  ScrollView, 
  KeyboardAvoidingView, 
  View,
  Button,
  StyleSheet,
  ImageBackground
} from 'react-native';

export class RegisterBackground extends Component {
  render() {
    return (
        <ImageBackground
          style={styles.imageStyle}
          source={require('../assets/images/slo-background.jpg')}>
          { <Register navigation={this.props.navigation}/> }
        </ImageBackground>
    );
  }
}

export class Register extends Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.scrollViewWrapper}>
          <ScrollView>
            <Text style={styles.loginText}>SLO Explore Registration</Text>
            <CredentialEntry text='Email:'/>
            <CredentialEntry text='Username:'/>
            <PasswordEntry text='Password:'/>
            <PasswordEntry text='Re-enter password:'/>
          </ScrollView>
            <LoginButton navigation={this.props.navigation}/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export class CredentialEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.credentialText}>{this.props.text}</Text>
          <TextInput style={styles.credentialStyle}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
          />
      </View>
    );
  }
}

export class PasswordEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
 
  render() {
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.credentialText}>{this.props.text}</Text>
          <TextInput secureTextEntry={true} style={styles.credentialStyle}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
          />
      </View>
    );
  }
}

export class LoginButton extends Component {
  render() {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight style={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate('Hike')}>
          <Icon
            name="angle-right"
            color="white"
            size={32} 
            style={styles.iconStyle}
          />
        </TouchableHighlight>
      </View>
    );          
  }
}

LoginButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flex: 1,
  },
  textWrapper: {
    display: "flex",
    flex: 1,
    paddingLeft: 30
  },
  scrollViewWrapper: {
    marginTop: 40,
    flex: 1
  },
  loginText: {
    fontSize: 30,
    color: "white",
    fontWeight: "400",
    marginBottom: 10,
    paddingLeft: 26,
    paddingRight: 30,
    paddingTop: 20,
    textShadowColor: "darkcyan",
    textShadowRadius: 6
  },
  credentialText: {
    color: "darkcyan",
    fontWeight: "300"
  },
  credentialStyle: {
    color: "white",
    borderBottomColor: "darkcyan",
    borderBottomWidth: 2,
    height: 30,
    marginRight: 60,
    marginBottom: 12
  },
  buttonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20,
    paddingTop: 0
  },
  buttonStyle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: "green",
    opacity: 0.6
  },
  iconStyle: {
    marginRight: -2,
    marginTop: -2
  }, 
  imageStyle: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined
  }
});

export default withNavigation(RegisterBackground);
