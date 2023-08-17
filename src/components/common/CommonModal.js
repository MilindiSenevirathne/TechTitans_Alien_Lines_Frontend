import React, { useState } from "react";
import { TouchableOpacity, Text, View, Alert, Modal, Animated, ScrollView } from "react-native";
import { Button } from "react-native-paper";

const CommonModal = ({ mainTopic, subTopic, isButtonAvailable, buttonLabel, icon, commonBtnPress = () => { }, onClose = () => {}, containerHeight, content }) => {

    const[visible,setVisible]=useState(true)

    const renderModal = () => {
        <Modal visible={visible}
        animationType='none'
        transparent

        onRequestClose={()=>{setVisible(false)}}
        onPress={()=>{setVisible(false)}}
      >
        <View 
        >
          <Text
           
          />
          <Animated.View
            style={[
              { height: containerHeight },
              {
                borderTopLeftRadius: 16,
                borderTopEndRadius: 16,
                backgroundColor: "#ffffff",
                minHeight: '30%',
                overflow: 'hidden'

              }
            ]}
          >
            {/* {this._renderTitle()}
            {this._renderMessage()} */}
            {/* {this.renderSearchBox()} */}
            <ScrollView scrollEnabled={true} style={{ flex: 1, width: "100%", paddingHorizontal: 12, marginTop: 15 }}>
              {/* {this._renderOptions()} */}
              {content}
            </ScrollView>
            <View style={{
              marginLeft: 25,
              marginRight: 25,
              marginTop: 15,
              height: 0.5
              , backgroundColor: '#dfe5ee'
            }} />
            {/* {this._renderCancelButton()} */}
          </Animated.View>
        </View>
      </Modal>
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
            {renderModal()}
        </View>
    );
};

export { CommonModal };