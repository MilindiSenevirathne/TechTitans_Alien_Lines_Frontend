import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Image, TouchableOpacity } from 'react-native';

const SuccessErrorModal = ({ isError, title, message, visible }) => {
    const [modalVisible, setModalVisible] = useState(visible);

    return (
        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity style={{ flexDirection: 'row-reverse' }} onPress={() => setModalVisible(false)}>
                            <Image source={require('../../images/Multiply.png')} style={{ height: 20, width: 20 }} />
                        </TouchableOpacity>
                        {isError ? (
                            <Image source={require('../../images/Error.png')} style={{ height: 150, width: 153, alignSelf: 'center', marginTop: 40 }} />
                        ): 
                        (
                            <Image source={require('../../images/SuccessfulImage.png')} style={{ height: 150, width: 153, alignSelf: 'center', marginTop: 40 }} />
                        )}
                        <Text style={{ alignSelf: 'center', fontSize: 16, fontWeight: '700', marginTop: 30 }}>{title+'!'}</Text>
                        <Text style={{ alignSelf: 'center', fontSize: 12, fontWeight: '500', marginTop: 5, textAlign: 'center' }}>{message}</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

export default SuccessErrorModal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background
    },
    modalView: {
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 30,
        width: 260,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    // ... other styles
});
