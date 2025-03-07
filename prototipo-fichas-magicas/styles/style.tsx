import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    "app" : {
        backgroundColor:"#000635",
        color:"#fff",
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    "text": {
        color:"#EBEBEB"
    },
    "bold": {
        fontWeight:"bold"
    },
    "successButton": {
        backgroundColor:"green",
        color:"black",
        borderRadius:30,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        width:150,
        height:40
    }
})

export default style