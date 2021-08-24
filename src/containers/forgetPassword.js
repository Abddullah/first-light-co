import React, { Component } from "react";
import { View, Image, ActivityIndicator, TouchableOpacity, Text, TextInput, ScrollView, } from 'react-native';
import { connect } from "react-redux";
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from "../assets/styles/Colors";

class forgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loader: false,
            showPassword: true,
            showPasswordRe: true,
            email: "",
            password: "",
            repassword: "",
        };
    }

    forgotPassword = () => {
    }

    render() {
        let { email, password, repassword, loader, showPassword, showPasswordRe } = this.state;
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
                        <Text style={{ fontSize: 30, color: Colors.textPrimary }}>Forgot password?</Text>
                        <Text style={{ color: "grey", textAlign: "center", color: Colors.textPrimary }}>No worries! Password reset instructions {"\n"} will be send to your email</Text>
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
                            style={{ width: "85%", height: 50, marginTop: 30, borderRadius: 25, backgroundColor: Colors.textPrimary }}
                        >
                            <TouchableOpacity
                                onPress={() => this.forgotPassword()}
                            >
                                {
                                    (loader != true) ? (
                                        <Text style={{ textAlign: "center", fontSize: 15, margin: 12, color: Colors.textReverse }}>Forgot password?</Text>
                                    ) : <ActivityIndicator color={Colors.textPrimary} />
                                }
                            </TouchableOpacity>
                        </View>


                        <TouchableOpacity
                            style={{ flexDirection: "row", marginTop: 30, }}
                            onPress={() => this.props.navigation.navigate("SignIn")}
                        >
                            <Text style={{ textAlign: "center", fontSize: 15, color: Colors.textPrimary }}>Back to sign in? </Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(forgotPassword);