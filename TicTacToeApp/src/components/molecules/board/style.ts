import { StyleSheet } from "react-native";

export default StyleSheet.create({
    board: {
        marginTop: 10,
        flex: 1,
        alignSelf: 'stretch',
        padding: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        margin: 0,
        backgroundColor: '#f54a28',
        borderRadius: 8,
        flexDirection: 'row',
    },
    cell: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 6,
        borderRadius: 5,
        aspectRatio: 0.9,
    },
    cellButton: {
        width: 150,
        height: 150,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cellText: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
    },
});