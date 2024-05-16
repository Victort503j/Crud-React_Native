import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    totalPages,
    currentPage,
    onPageChange,
}) => {
    const renderPageNumbers = () => {
        const pageNumbers = [];

        // Agregar el primer número de página
        pageNumbers.push(
            <TouchableOpacity
                key={1}
                style={[styles.pageNumber, currentPage === 1 && styles.currentPageNumber]}
                onPress={() => onPageChange(1)}
            >
                <Text style={styles.pageNumberText}>1</Text>
            </TouchableOpacity>
        );

        // Agregar puntos suspensivos si el número actual de página es mayor a 3
        if (currentPage > 3) {
            pageNumbers.push(<Text key="ellipsis1" style={styles.ellipsisText}>...</Text>);
        }

        // Agregar los números de página cercanos al número actual de página
        const startPage = Math.max(currentPage - 1, 2);
        const endPage = Math.min(currentPage + 1, totalPages - 1);
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <TouchableOpacity
                    key={i}
                    style={[styles.pageNumber, i === currentPage && styles.currentPageNumber]}
                    onPress={() => onPageChange(i)}
                >
                    <Text style={styles.pageNumberText}>{i}</Text>
                </TouchableOpacity>
            );
        }

        // Agregar puntos suspensivos si el número actual de página es menor que totalPages - 2
        if (currentPage < totalPages - 1) {
            pageNumbers.push(<Text key="ellipsis2" style={styles.ellipsisText}>...</Text>);
        }

        // Agregar el último número de página
        if (totalPages > 1) {
            pageNumbers.push(
                <TouchableOpacity
                    key={totalPages}
                    style={[styles.pageNumber, totalPages === currentPage && styles.currentPageNumber]}
                    onPress={() => onPageChange(totalPages)}
                >
                    <Text style={styles.pageNumberText}>{totalPages}</Text>
                </TouchableOpacity>
            );
        }

        return pageNumbers;
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.arrow}
                onPress={handlePrevPage}
                disabled={currentPage === 1}
            >
                <Text style={styles.arrowText}>{'<'}</Text>
            </TouchableOpacity>
            <View style={styles.pageNumbersContainer}>{renderPageNumbers()}</View>
            <TouchableOpacity
                style={styles.arrow}
                onPress={handleNextPage}
                disabled={currentPage === totalPages}
            >
                <Text style={styles.arrowText}>{'>'}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    pageNumbersContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '80%',
    },
    pageNumber: {
        padding: 10,
        backgroundColor: '#00ABED',
        borderRadius: 5,
        marginHorizontal: 5,
    },
    currentPageNumber: {
        backgroundColor: '#00ABED',
    },
    pageNumberText: {
        color: 'white',
    },
    ellipsisText: {
        color: '#00ABED',
        fontSize: 16,
        marginHorizontal: 5,
    },
    arrow: {
        padding: 10,
    },
    arrowText: {
        fontSize: 18,
        color: '#00ABED',
    },
});

export default Pagination;