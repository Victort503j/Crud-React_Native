// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// interface PaginationProps {
//     totalPages: number;
//     currentPage: number;
//     onPageChange: (page: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({
//     totalPages,
//     currentPage,
//     onPageChange,
// }) => {
//     const renderPageNumbers = () => {
//         const pageNumbers = [];
//         for (let i = 1; i <= totalPages; i++) {
//             pageNumbers.push(
//                 <View key={i} style={styles.pageNumberContainer}>
//                     <TouchableOpacity
//                         style={[
//                             styles.pageNumber,
//                             i === currentPage && styles.currentPageNumber,
//                         ]}
//                         onPress={() => onPageChange(i)}
//                     >
                        
//                         <Text style={styles.pageNumberText}>{i}</Text>
//                     </TouchableOpacity>
//                 </View>
                
//             );
//             console.log(i)
//         }
//         return pageNumbers;
//     };


//     return (
//         <View style={styles.container}>
//             <TouchableOpacity
//                 style={styles.arrow}
//                 onPress={() => onPageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//             >
//                 <Text style={styles.arrowText}>{'<'}</Text>
//             </TouchableOpacity>
//             {renderPageNumbers()}
//             <TouchableOpacity
//                 style={styles.arrow}
//                 onPress={() => onPageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//             >
//                 <Text style={styles.arrowText}>{'>'}</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginVertical: 10,
//     },
//     pageNumberContainer: {
//         marginHorizontal: 5,
//     },
//     pageNumber: {
//         padding: 10,
//         backgroundColor: '#f0f0f0',
//         borderRadius: 5,
//     },
//     currentPageNumber: {
//         backgroundColor: '#00ABED',
//     },
//     pageNumberText: {
//         color: 'black',
//     },
//     arrow: {
//         padding: 10,
//     },
//     arrowText: {
//         fontSize: 18,
//         color: '#00ABED',
//     },
// });

// export default Pagination;
