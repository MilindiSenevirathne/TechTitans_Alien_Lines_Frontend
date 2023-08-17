import React from "react";
import { TouchableOpacity, Text, View, Alert } from "react-native";
import { Button } from "react-native-paper";

const CommonButton = ({ lable, icon, commonBtnPress = () => { }, backgroundColor, shadowColor, fontColor, disabled, isCapitalize = true, isShowCoformation = false, conformationMessage = 'Are you sure?' }) => {

    const showConformation = () => {
        if (isShowCoformation) {
            Alert.alert('confirmation', conformationMessage, [{
                text: 'cancel',
                onPress: () => { },
                style: "cancel"
            },
            {
                text: 'yes',
                onPress: () => {
                    commonBtnPress()
                }
            }
            ])
        }
        else {
            commonBtnPress()
        }

    }

    const renderButton = () => {
        if (disabled) {
            return (
                <TouchableOpacity
                    style={{
                        height: 35,
                        width: "65%",
                        backgroundColor: '#DFE6F2',

                        // borderRadius: 10,

                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20
                    }}
                    disabled={disabled}
                    onPress={() => showConformation()}
                >
                    <Button
                        icon={icon}
                        color={fontColor}
                    >
                        <Text style={{
                            fontFamily: 'inter',
                            fontSize: 15,
                            fontWeight: '800',
                            textTransform: isCapitalize ? "capitalize" : "none",
                            color: fontColor ?? '#FFFFFF'
                        }}>
                            {lable}
                        </Text>
                    </Button>
                </TouchableOpacity>
            )
        } else {
            return (

                <TouchableOpacity
                    style={{
                        height: 35,
                        width: "65%",
                        backgroundColor: '#CA4255',
                        alignSelf: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 20
                    }}
                    disabled={disabled}
                    onPress={() => showConformation()}
                >
                    <Button
                        icon={icon}
                        color={fontColor ?? '#FFFFFF'}
                        textColor={fontColor ?? '#FFFFFF'}
                    >
                        <Text style={{
                            fontFamily: 'inter',
                            fontSize: 15,
                            fontWeight: '500',
                            color: fontColor ?? '#FFFFFF',
                            textTransform: isCapitalize ? "capitalize" : "none",
                        }}>
                            {lable}
                        </Text>
                    </Button>
                </TouchableOpacity>

            )
        }
    }

    return (
        <View style={{
            marginTop: 5,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            paddingBottom: 15,
            width: "100%"
        }}>
            {renderButton()}
        </View>
    );
};

export { CommonButton };