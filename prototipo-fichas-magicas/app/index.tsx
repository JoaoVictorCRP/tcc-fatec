import style from "@/styles/style";
import { Button, Image, Text, View } from "react-native";

export default function Index() {

  return (
    <View style={style.app}>
      {/* <Text style={style.text}>Edit app/index.tsx to edit this screen.</Text> */}
      
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
            width:250,
            height:250
          }}
        />
        
        <Text style={style.bold}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        <Text style={style.bold}>Vestibulum lobortis turpis nec consectetur tincidunt.</Text>   

      </View>

      <Button
        title="ACESSAR"
        color="#20EB7F"  
      />
    </View>
  );
}
