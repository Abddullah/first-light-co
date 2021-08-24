
import { View, Image, Text, ActivityIndicator, StatusBar, } from 'react-native';
import { connect } from "react-redux";
import React, { Component } from "react";
import Colors from "../assets/styles/Colors";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.percent < 100) {
        this.setState({
          percent: this.state.percent + 20
        })
      }
    }, 10);
  }

  render() {
    if (this.state.percent == 100) {
      // this.props.navigation.navigate("SignIn")
    }
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.primaryColor,
        }}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}>
          <Image
            source={require('../../assets/logo.jpg')}
            resizeMode="contain"
            style={{ height: "65%", width: "65%", }}
          />
          <ActivityIndicator style={{ flex: 1.5 }} size={40} color={Colors.textPrimary} />
          <Text style={{ color: Colors.textPrimary, fontWeight: "bold" }}>Loading...</Text>
        </View>
      </View>
    );
  }
}

let mapStateToProps = state => {
  return {
  };
};
function mapDispatchToProps(dispatch) {
  return ({
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
