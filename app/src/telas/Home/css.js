import { StyleSheet } from "react-native";


const estilo = StyleSheet.create({
    container:{
    },
    userInfo:{
        width:"100%",
        minHeight:"22%",
        alignItems:"center",
        backgroundColor:"black"
    },
    imageInfo:{
        width:150,
        height:150,
        borderRadius:100,
        position:"absolute",
        marginTop:100,
        borderWidth:5,
        borderColor:"white"
    },
    nomeInfo:{
        fontSize:40,
        fontWeight:"bold",
        color:"white"
    },
    acessoInfo:{
        fontSize:20,
        color:"white"
    },
    listContainer:{
        marginTop:120,
        width:"90%",
        height: "60%",
        marginHorizontal:"5%",
        marginVertical:10,
        elevation:2,
        borderWidth:2,
        borderColor:"black",
        borderRadius:10,
        paddingHorizontal:5,
        paddingVertical:5
    },
    itemContainer:{
        width:"100%",
        flexDirection:"row",
        justifyContent:"space-between",
        height:100,
        backgroundColor:"#caf0f8",
        marginVertical:10,
        alignItems:"center",
        borderRadius:10
    },
    itemInfo:{
        flexDirection:"row",
        width:"50%",
        height:"100%",
        alignItems:"center"
    },
    listImage:{
        width:50,
        height:50,
        marginLeft:20,
        borderRadius:100
    },
    textContainer:{
       marginLeft:15,
       justifyContent:"space-evenly",
       height:"80%" 
    },
    textList:{
        fontSize:20,
        color:"white"
    },
    listButton:{
        width:100,
        height:60,
        justifyContent:"space-around",
        alignItems:"center",
    },
    listButtonText:{
        color:"white"
    }

});
export default estilo;