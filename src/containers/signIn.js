import React, { Component } from "react";
import { View, Image, ActivityIndicator, TouchableOpacity, Text, TextInput, ScrollView, BackHandler, } from 'react-native';
import { connect } from "react-redux";
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from "../assets/styles/Colors";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            showPassword: true,
            email: "",
            password: "",
        };
    }

    signin = () => {
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', BackHandler.exitApp());
    }

    render() {
        let { email, password, loader, showPassword } = this.state;
        return (
            <View>
                <ScrollView
                    style={{
                        width: "100%",
                        height: "100%",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor: Colors.primaryColor,
                        // backgroundColor: "red",
                    }}
                >
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            width: "100%",
                            height: 180,
                            marginTop: "10%",
                            backgroundColor: Colors.primaryColor,
                        }}>
                        <Image
                            source={require('../../assets/logo.jpg')}
                            resizeMode="contain"
                            style={{ width: "80%", }}
                        />
                    </View>


                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>

                        <Text style={{ fontSize: 30, color: Colors.textPrimary }}>Welcome back,</Text>
                        <Text style={{ color: Colors.textPrimary }}> Sign in to First light co</Text>

                        <View
                            style={{
                                width: "85%",
                                marginTop: 10,
                                borderRadius: 25,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: Colors.inputBackGround,
                            }}
                        >
                            <TextInput
                                style={{ height: 50, width: "90%", color: Colors.textSecondry }}
                                onChangeText={(email) => this.setState({ email })}
                                value={email}
                                placeholder={"Email"}
                                placeholderTextColor="grey"
                            />
                        </View>

                        <View
                            style={{
                                width: "85%",
                                flexDirection: "row",
                                marginTop: 10,
                                borderRadius: 25,
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: Colors.inputBackGround,
                            }}
                        >
                            <TextInput
                                secureTextEntry={showPassword}
                                style={{ height: 50, width: "80%", color: Colors.textSecondry }}
                                onChangeText={(password) => this.setState({ password })}
                                value={password}
                                placeholder={"Password"}
                                placeholderTextColor="grey"
                            />
                            <Entypo
                                onPress={() => {
                                    this.setState({ showPassword: !showPassword })
                                }}
                                name={showPassword ? "eye" : "eye-with-line"}
                                style={{ marginLeft: 10, color: '#909090', fontWeight: 'bold', fontSize: 18 }}
                            />
                        </View>

                        <View
                            style={{ width: "85%", height: 50, marginTop: 30, borderRadius: 25, backgroundColor: Colors.textPrimary }}
                        >
                            <TouchableOpacity
                                onPress={() => this.signin()}
                            >
                                {
                                    (loader != true) ? (
                                        <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: Colors.textReverse }}>Sign in</Text>
                                    ) : <ActivityIndicator color={Colors.textPrimary} />
                                }
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate("forgotPassword")}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, marginTop: 20, color: Colors.textPrimary }}>Forgot password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{ flexDirection: "row", marginTop: 10, }}
                            onPress={() => this.props.navigation.navigate("SignUp")}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, color: "#91919D" }}>New user? </Text>
                            <Text style={{ textAlign: "center", fontSize: 15, color: Colors.textPrimary }}>Create an account now!</Text>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
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
export default connect(mapStateToProps, mapDispatchToProps)(Signin);