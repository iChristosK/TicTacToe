import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        fontWeight: 'bold',
        margin: 1,
    },
    customButtonContainer: {
        borderRadius: 8,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#FC4D3C'
    },
    customButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
        alignSelf: 'center',
        color: 'white'
    },
});