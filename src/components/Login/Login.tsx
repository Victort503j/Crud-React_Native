// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useAuthStore } from '../../stores/Auth.store';

// const Login = () => {
//     const { OnMakeLogin } = useAuthStore();
//     const navigate = useNavigate();
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const {
//         register,
//         formState: { errors },
//     } = useForm<User>();

//     const onSubmit = async () => {
//         await OnMakeLogin({ password, email });


//         window.location.href = "/home";

//     };
//     return (
//         <View style={styles.container}>
//             <View>
//                 <Text style={styles.text}>Iniciar Sesión</Text>
//             </View>
//             <TextInput style={styles.input} placeholder='Ingrese su correo' maxLength={100} keyboardType='email-address' />
//             <TextInput style={styles.input} placeholder='Ingrese su contraseña' maxLength={40} />
//             <TouchableOpacity style={styles.button} >
//                 <Text style={styles.text2} >Iniciar Sesión</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#DDE7FF',
//         height: '100%',
//         width: '100%',
//     },
//     text: {
//         fontSize: 22,
//         fontWeight: 'bold',
//         marginBottom: 20
//     },
//     input: {
//         height: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         backgroundColor: 'white',
//         borderRadius: 10,
//         width: '70%',
//         paddingBottom: 10,
//         borderColor: 'gray'
//     },
//     button: {
//         marginTop: 13,
//         alignItems: 'center',
//         justifyContent: 'center',
//         paddingVertical: 12,
//         paddingHorizontal: 32,
//         borderRadius: 4,
//         backgroundColor: 'black'

//     },
//     text2: {
//         color: 'white',
//         fontWeight: 'bold',
//         fontSize: 16
//     }

// });

// export default Login;