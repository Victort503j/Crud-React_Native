import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, ActivityIndicator, Button, TextInput } from 'react-native';
import { Card } from '@rneui/themed';
import { Modal } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useRolesStore } from '../../stores/rol.store';
import styles from '../Styles/styles';
import CreateRol from './CreateRol';
import UpdateRol from "./UpdateRol";
import { ScrollView } from 'react-native-gesture-handler';
// import Pagination from '../pagination/Pagination';

function ListRol() {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const { roles, OnGetRoles, OnDelete, pagination_roles } = useRolesStore();
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [deleteModalVisible, setDeleteModalVisible] = useState(false);
    const [selectedRoleId, setSelectedRoleId] = useState<number | null>(null);
    const [rolId, setRolId] = useState(0);

    useEffect(() => {
        OnGetRoles(1, 5, "");
    }, []);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const toggleEditModal = () => {
        setEditModalVisible(!editModalVisible);
    };

    const toggleDeleteModal = (id: number) => {
        setSelectedRoleId(id);
        setDeleteModalVisible(!deleteModalVisible);
    };

    const handleSearchChange = (text: React.SetStateAction<string>) => {
        setSearchTerm(text);
    };

    const handleSearch = () => {
        setSearchQuery(searchTerm);
        setSearchTerm("");
    };

    const handleDelete = () => {
        if (selectedRoleId !== null) {
            OnDelete(selectedRoleId);
            setDeleteModalVisible(false);
        }
    };

    const filteredRoles = roles.filter((r) =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleChangePage = (page: number) => {
        OnGetRoles(page, 5, "");
    }

    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <TextInput
                        style={{ flex: 1, marginRight: 10, borderWidth: 1, borderRadius: 5, borderColor: 'lightgrey', padding: 8 }}
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChangeText={handleSearchChange}
                    />
                    <TouchableOpacity
                        style={{ backgroundColor: '#00ABED', borderRadius: 5, padding: 10 }}
                        onPress={handleSearch}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 2 }}>Buscar</Text>
                    </TouchableOpacity>
                </View>
                {filteredRoles.map((rol) => (
                    <Card key={rol.id} containerStyle={styles.card}>
                        <View>
                            <Text>Nombre: {rol.name}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={() => {
                                        setRolId(rol.id);
                                        toggleEditModal();
                                    }}
                                >
                                    <FontAwesome name="pencil" size={18} color="white" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonDelete}
                                    onPress={() => toggleDeleteModal(rol.id)}
                                >
                                    <MaterialIcons name="delete-forever" size={18} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Card>
                ))}
                <View >
                    {/* <Pagination
                        showShadow
                        showControls
                        page={pagination_roles.currentPag}
                        total={pagination_roles.totalPag}
                        onChange={handleChangePage}
                    /> */}
                </View>
            </ScrollView>

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Crear rol</Text>
                        <CreateRol onCloseModal={toggleModal} />
                    </View>
                </View>
            </Modal>

            <Modal
                visible={deleteModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => toggleDeleteModal(0)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Deseas eliminar el registro?</Text>
                        <>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                                <TouchableOpacity
                                    style={{ backgroundColor: 'crimson', borderRadius: 5, padding: 10, marginRight: 58 }}
                                    onPress={() => toggleDeleteModal(0)}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 2 }}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={{ backgroundColor: '#00ABED', borderRadius: 5, padding: 10, marginLeft: 8 }}
                                    onPress={handleDelete}
                                >
                                    <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 2 }}>Aceptar</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    </View>
                </View>
            </Modal>

            <Modal
                visible={editModalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={toggleEditModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Editar Rol</Text>
                        {roles.map((r) => {
                            if (r.id === rolId) {
                                return (
                                    <UpdateRol
                                        key={r.id}
                                        id={r.id}
                                        name={r.name}
                                        onCloseModal={toggleEditModal}
                                    />
                                );
                            }
                            return null;
                        })}
                    </View>
                </View>
            </Modal>

            <TouchableOpacity
                style={{
                    position: 'absolute',
                    bottom: 40,
                    right: 30,
                    backgroundColor: '#1A8F13',
                    borderRadius: 50,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                }}
                onPress={toggleModal}
            >
                <FontAwesome name="plus" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
}

export default ListRol;
