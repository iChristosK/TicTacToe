import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,

    },

    winnerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'green',
        margin: 10,
    },
    controlsContainer: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    currentPlayerText: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    controlsRow: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        margin: 10,
    },
    controlButton: {
        flex: 1,
        margin: 5,
    },
});