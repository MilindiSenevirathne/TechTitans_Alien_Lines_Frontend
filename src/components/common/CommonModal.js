import React, { useState } from "react";
import { TouchableOpacity, Text, View, Alert, Modal, Animated, ScrollView, SafeAreaView, StyleSheet, Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const CommonModal = ({ containerHeight, content, onOpen, onClose, secondTitle, firstTitle, bottom }) => {
  return (
    <RBSheet
      closeOnDragDown={true}
      closeOnPressMask={false}
      animationType="fade"
      openDuration={400}
      closeDuration={400}
      height={containerHeight}
      keyboardAvoidingViewEnabled={true}
      customStyles={{
        wrapper: {
          backgroundColor: 'rgba(217,217,217,0.8)',
        },
        draggableIcon: {
          backgroundColor: "#000"
        },
        container: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30
        }
      }}
      ref={onOpen}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>{firstTitle}</Text>
        <TouchableOpacity onPress={onClose}>
          <Image source={require('../../images/Multiply.png')} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
      </View>
      {secondTitle && (
        <View style={{ marginLeft: 20 }}>
          <Text style={{ color: '#4C0259', fontSize: 14, fontWeight: '500' }}>{secondTitle}</Text>
        </View>
      )}
      <View style={{padding:20}}>
      {content}
      </View>
      <View style={{ position: 'absolute', width: '110%', bottom: 0, left: '-5%' }}>
        {bottom}
      </View>
    </RBSheet>
  );
};

export { CommonModal };

