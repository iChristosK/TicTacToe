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
        borderRadius: 8,
        flexDirection: 'row',
    },
    cell: {
        width: 100,
        height: 100,
        backgroundColor: '#FC4D3C',
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
        color: 'white',
        fontSize: 60,
        fontWeight: 'bold',
    },
});