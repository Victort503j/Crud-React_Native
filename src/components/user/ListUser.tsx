import React from 'react';
import { FlatList, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { styles } from '../Styles/styles';

const users = [
    { id: '1', name: 'John Doe' },
    { id: '2', name: 'Jane Smith' },
    { id: '3', name: 'Bob Johnson' },
];

function ListUser() {
    const renderUser = ({ item }: { item: { id: string, name: string } }) => (
        <Card wrapperStyle={styles.card}>
            <Text>{item.name}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="pencil" size={18} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonDelete}>
                    <MaterialIcons name="delete-forever" size={18} color="white" />
                </TouchableOpacity>
            </View>
        </Card >
    );

    return (
        <View>
            <View style={styles.Container1}>

            </View>
            <View style={styles.textContainer}>
                <TextInput style={styles.buscar} placeholder='Buscar por nombre' />
            </View>
            <FlatList
                data={users}
                renderItem={renderUser}
                keyExtractor={user => user.id}
            />
        </View>
    );
}

export default ListUser;
