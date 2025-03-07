import style from "@/styles/style";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";

export default function Index() {

  return (
    <View style={style.app}>
      {/* <Text style={style.text}>Edit app/index.tsx to edit this screen.</Text> */}
      
      <Image 
          source={require('@/assets/images/fichasmagicas-logo-v1.png')}
          style={{
            width:150,
            height:100
          }}
        />

      <View style={{
        backgroundColor:"#EBEBEB",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        paddingLeft:20,
        paddingRight:20,
        margin:50,
        borderRadius:20
      }}>
        <Image 
          source={require('@/assets/images/index-art.png')}
          style={{
            width:220,
            height:260
          }}
        />
        
        <Text style={style.bold}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text style={style.bold}>Vestibulum lobortis turpis nec consectetur tincidunt.</Text>   

      </View>

      <View style={{
        'paddingBottom':20,
        'borderRadius':100,
        'width':150,
      }}>
        <TouchableOpacity style={style.successButton}>
          <Text style={{color:"#fff"}}>ACESSAR</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}
