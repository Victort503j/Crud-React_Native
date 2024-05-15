import React from 'react';
import { Modal, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title: string;
}

const ModalGlobal: React.FC<Props> = ({ isOpen, onClose, children, title }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isOpen}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalTitle}>{title}</Text>
                    <View style={styles.modalBody}>{children}</View>
                    <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                        <Text style={styles.closeButtonText}>Cerrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro semi-transparente
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalBody: {
        marginBottom: 20,
    },
    closeButton: {
        marginTop: 10,
    },
    closeButtonText: {
        color: '#007BFF',
    },
});

export default ModalGlobal;
