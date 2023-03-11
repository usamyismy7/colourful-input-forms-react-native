import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextInput, FlatList, Alert, Pressable } from 'react-native';


export default function App() {

  let [state, setState] = useState({
    textValue: "",
  });

  const onSubmit = () => {
    setState({ textValue: "" });
  };

const generateRandomColor = () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgba(${red},${green},${blue},0.5)`;
};

  const [title,setTitle] = useState('');
  const [post,setPost] = useState('');
  const [title1, setTitle1] = useState([]);
  const [post1, setPost1] = useState([]);
  const [date,setDate] = useState('');
  const [color,setColor] = useState([]);
  

  const save = () => {
    if(title!=="" && post!==""){
      setTitle1([...title1,title]);
      setPost1([...post1,post]);
      setColor([...color,generateRandomColor()]);
      setDate(getCurrentDate());
      onSubmit();
    }
    else{
      Alert.alert(
        "Alert!",
        "Please fill all the required fields",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { 
            text: "OK",
            onPress: () => console.log("OK Pressed")
          }
        ]
      );
    }
  }

  const getCurrentDate= () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + '-' + month + '-' + year;
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.input}>
        <Text style={styles.header}>Input Form</Text>

        <View style={styles.userInput}>
          <Text style={styles.label}>Title</Text>
          <TextInput style={styles.textArea}
            onChangeText={(val) => {
              setTitle(val);
              setState(val);
            }}
            value={state.textValue}
          />
        </View>
        
        <View style={styles.userInput}>
          <Text style={styles.label}>Post</Text>
            <TextInput style={styles.textArea}
              multiline={true}
              numberOfLines={3}
              onChangeText={(val) => {
                  setPost(val);
                  setState(val);
                }}
              value={state.textValue}
            />  
        </View>

        <View style={styles.userInput}>
          <Text style={{width:'30%'}}></Text>
          <View style={styles.buttons}>
            <Pressable 
              style={[styles.pressable,{backgroundColor:'grey'}]}
              onPress={onSubmit}
            >
              <Text style={{color:"#fff"}}>Reset Button</Text>
            </Pressable>
            
            <Pressable
              style={[styles.pressable,{backgroundColor:'darkblue'}]}
              onPress={save} 
            >
              <Text style={{color:"#fff"}}>Save Button</Text>
            </Pressable>
          </View>
        </View>

      </View>

      <Text style={{fontSize:20, fontWeight:'bold', marginTop:10}}>Posts Lists</Text>

      <View style={{width:'80%'}}>
      
      {title1.map((item, index) => {
        
        return(
          <View style={[styles.output,{backgroundColor: color[index], width:'100%'}]}>
            <View style={styles.outputBox}>
              <Text >Title: <Text style={{textDecorationLine:'underline'}}>{item}</Text></Text>
            </View>

            <View style={styles.outputBox}>
              <Text>POSTS Details: <Text style={{textDecorationLine:'underline'}}>{post1[index]}</Text></Text>
            </View>

            <View>
              <Text style={{textAlign:'right'}}>
                Date: <Text style={{textDecorationLine:'underline'}}>{date}</Text>
              </Text>
            </View>
        </View>
        );
      })}
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    margin:10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  input: {
    display:'flex',
    flexDirection:'column',
    borderWidth:1,
    width:'80%',
  },
  header: {
    backgroundColor:"#14A9FF",    
    width:'100%',
    textAlign:'center',
    paddingVertical:5,
  },
  userInput: {
    display:'flex',
    flexDirection:'row',
    width:'100%',
  },
  label: {
    borderRightWidth:1,
    borderBottomWidth:1,
    paddingHorizontal:5,
    width:'30%',
    textAlign:'right',
  },
  textArea: {
    width:'70%',
    borderBottomWidth:1,
    paddingHorizontal:10,
    paddingVertical:3,
  },
  buttons: {
    display:'flex',
    flexDirection:'row',
    width:'70.1%',
  },
  pressable: {
    width:'50%',
    borderLeftWidth:1,
    paddingLeft:5,
    paddingVertical:3,
  },
  output: {
    display:'flex',
    flexDirection:'column',
    marginTop:20,
    width:'80%',
    borderWidth:1,
    padding:10,
    // backgroundColor:'#14A9FF',
  },
  outputBox: {
    borderBottomWidth:1,
    paddingBottom:20,
    marginBottom:5,
  },
});
