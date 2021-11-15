import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#9600F7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: "bold",
        letterSpacing: 1,
        fontSize: 20,
        color: '#FFFF'
    },
    input: {
        color: '#FFFF'
    },
    header: {
        width: '100%',
        height: '33%',
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 2,
        borderWidth: 2,
        backgroundColor: "#9A9898"
    },
    iconProfile: {
        flex: 1,
        width: 45,
        marginLeft: '45%',
        marginTop: '10%',
        resizeMode: 'contain'
    },
    imageHeader: {
        marginLeft: '40%'
    },

    // SIGNIN CSS
    signin: {
        marginStart: '15%',
        marginEnd: '15%',
        marginTop: '55%',
        backgroundColor: '#007EE7',
    },
    signinText: {
        borderWidth: 1,
        paddingTop: '5%',
        paddingBottom: '5%',
        paddingLeft: '5%',
        borderRadius: 5
    },
    signinImage: {
        width: '50%',
        marginLeft: '25%',
        resizeMode: 'contain',
        marginBottom: '-80%',
        marginTop: '-45%'
    }
})

