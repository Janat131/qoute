import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Touchable } from 'react-native';


const App = () =>{
  return(
    <View style={{flex:1,justifyContent:'center', alignItems:'center',backgroundColor:'#5372F0'}}>
      <View style={{width:'90%',backgroundColor:'#fff',borderRadius:20,padding:20}}>
        <Text style={{
        textAlign:'center',
        fontSize:26,
        fontWeight:'600',
        color:'#333',
        marginBottom:20,
        }}>Quote of the Day</Text>
        <FontAwesome5 name="quote-left" style={{fontSize:20}} color="#000"/> 
        <Text style={{
          color:'#000',
          fontSize:16,
          lineHeight:26,letterSpacing:1.1,
          fontWeight:'400',
          textAlign:'center',
          marginBottom:10,
          }}>
        its idhdcb cff
        </Text>
        <Text style={{
        textAlign:'right',
        fontWeight:'300',
        fontStyle:'italic',
        fontSize:16,
        color:'#000',
        }}>_Author Name</Text>
        <TouchableOpacity onPress={() => {}}
        style={{backgroundColor:'#5372F0',
        padding:20,
        borderRadius:30,
        marginVertical:20,
        }}>
          <Text style={{color:'#fff',fontSize:18,textAlign:'center'}}>New Quote</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default App;