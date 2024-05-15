import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRolesStore } from '../../stores/rol.store';
import { TextInput } from 'react-native-gesture-handler';

const CreateRol = ({ onCloseModal }: { onCloseModal: () => void }) => {
    const { OnCreate } = useRolesStore();
    const [name, setName] = useState("");

    const handleCancel = () => {
        onCloseModal();
    };

    const handleCreate = () => {
        OnCreate({ name: name });
        onCloseModal();
    };

    return (
        <>
            <TextInput
                placeholder='    Nombre del rol'
                value={name}
                onChangeText={setName}
                style={{ height: 40, padding: 12, width: 250, borderColor: '#00abed', borderWidth: 2, borderRadius: 5, marginTop: 20, margin: 20 }}
            />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <TouchableOpacity
                    style={{ backgroundColor: 'crimson', borderRadius: 5, padding: 10, marginRight: 58 }}
                    onPress={handleCancel}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 2 }}>Cancelar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{ backgroundColor: '#00ABED', borderRadius: 5, padding: 10, marginLeft: 8 }}
                    onPress={handleCreate}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 2 }}>Aceptar</Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

export default CreateRol;