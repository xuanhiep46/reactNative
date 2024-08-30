import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    logo: {
        height: 130,
        alignItems: 'center',
    },
    logo_image: {
        resizeMode: 'contain',
        width: 100,
        height: 80,
    },
    logo_text: {
        color: "#ffb6c1",
        fontSize: 20,
        fontWeight: "600",
        textAlign: 'center',
        marginTop: 10,
    },
    header: {
        fontSize: 36,
        color: "black",
        textAlign: 'center',
        fontWeight: "700",
        marginTop: 15,
        marginBottom: 10,
    },
    img: {
        width: '100%',
        height: undefined, //tính chiều cao theo aspectRatio
        aspectRatio: 16/9, //tỉ lệ khung hình
        resizeMode: 'contain',
    },
    img1: {
        //flex: 1,
    },
    cards: {
        alignItems: 'center',
        height: 700,
    },
    card: {
        //width: '90%',
        //backgroundColor: '#696969',
    },
    bottomButton: {
        backgroundColor: 'green',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        padding: 15,
        marginHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },

});

export default styles;