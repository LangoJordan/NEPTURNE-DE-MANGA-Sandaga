import React, { useState } from 'react';
import {Entypo} from "@expo/vector-icons";
import { View, Text, Image, StyleSheet, StatusBar, ScrollView, button} from 'react-native';


const menu = require('../assets/images/menu.png')
const orange = require('../assets/images/orange.png')
const raisin = require('../assets/images/raisain.png')
const search = require('../assets/images/search.png')
const person = require('../assets/images/person.png')
const pp = require('../assets/images/pp.jpg')


const slides = [{

    type: 'View',
    content: (
        <View style={{
            marginTop: '60px',
            height: 10,
            display: 'flex',
            flexDirection: 'row',
            borderRadius: 20,
            padding: '5%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: '150px',
        }}>

            <View style={{
                width: 60,
                height: 30,
                display: 'flex',
                borderStartColor: 'yellow',
                borderRadius: '30px',
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '5px',
            }} >Orange</View>

            <View style={{
                width: 60,
                height: 30,
                display: 'flex',
                borderStartColor: 'yellow',
                borderRadius: '30px',
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '5px',
            }} >Grapes</View>

            <View style={{
                width: 60,
                height: 30,
                display: 'flex',
                borderStartColor: 'yellow',
                borderRadius: '30px',
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '5px',
            }} >Watermelon</View>

            <View style={{
                width: 60,
                height: 30,
                display: 'flex',
                borderStartColor: 'yellow',
                borderRadius: '30px',
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '5px',
            }} >Mangos</View>

            <View style={{
                width: 60,
                height: 30,
                display: 'flex',
                borderStartColor: 'yellow',
                borderRadius: '30px',
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: '5px',
            }} >Pineaple</View>
        </View>
    ),



}]

const slides2 = [{
    type: 'View',
    content: (
        <View style={{
            backgroundColor: 'pink',
            width: 250,
            height: 250,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
        }}>

            <Image source={orange} style={{
                backgroundColor: 'pink',
                width: 100,
                height: 100,
                display: 'flex',
                marginHorizontal: '140px',
                borderColor: '#fff',
                borderRadius: 60,
                borderWidth: 0,
                marginLeft:50,

            }} />
            <Text style={{
                marginTop: '40px',
                fontFamily: 'arial',
                fontSize: '15px',
                marginTop: '40px',
                fontFamily: 'arial',
                fontWeight: 'bold',
                marginBottom: '40px',
                  }}>Orange                           $10</Text>

            <View style={{
                display: 'flex',
                marginLeft: 50,
                width: 90,
                height: 30,
                justifyContent: 'center',
                backgroundColor: 'yellow',
                borderRadius: '20px',
                alignContent: 'center',
                alignItems:'center',
            }}>ADD
            </View>


        </View>
        
    ),

},

{
    type: 'View',
    content: (
        <View style={{
            backgroundColor: 'purple',
            width: 250,
            height: 250,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 20,
            padding: '5%',
        }}>

            <Image source={raisin} style={{
                backgroundColor: 'purple',
                width: 100,
                height: 100,
                display: 'flex',
                marginHorizontal: '140px',
                borderColor: '#fff',
                borderRadius: 60,
                borderWidth: 0,
                marginLeft:50,

            }} />

            <Text style={{
                marginTop: '40px',
                fontFamily: 'arial',
                fontSize: '15px',
                marginTop: '40px',
                fontFamily: 'arial',
                fontWeight: 'bold',
                marginBottom: '40px',
            }}>Grapes                                 $10</Text>

<View style={{
                display: 'flex',
                marginLeft: 50,
                width: 90,
                height: 30,
                justifyContent: 'center',
                backgroundColor: 'yellow',
                borderRadius: '20px',
                alignContent: 'center',
                alignItems:'center'
            }}>ADD
            </View>
        </View>
    ),



},
];

const HomeScreen=()=> {
    const [text, setText] = useState('');

    return (
        <View style={styles.body}>
            <View style={styles.app}>
                <View style={styles.header}>
                <Image source={menu} style={styles.menu} />
                    <Image source={pp} style={styles.pp} />

                </View>
                <View style={styles.sousHeader}>
                    <View style={styles.sousHeaderLeft}>
                        <View style={styles.sousHeaderSousLeft}>
                            <Text style={styles.Texte12}> Discover seasonal</Text>
                        </View>
                        <Text style={styles.Text12}> Fruits and Vegetables </Text>
                    </View>

                </View>

                <StatusBar style="auto" />
                <ScrollView horizontal={true}>
                    {slides.map((slide, index) => (
                        <View key={index} style={{ width: '65%', height: 100, }}>
                            {slide.type === 'View' && slide.content}
                        </View>
                    ))}


                </ScrollView>
                <StatusBar style="auto" />
                <ScrollView horizontal={true}>
                    {slides2.map((slide, index) => (
                        <View key={index} style={{ width: '55%', height: 200, marginVertical: 10 }}>
                            {slide.type === 'View' && slide.content}
                        </View>
                    ))}


                </ScrollView>
                <View style={styles.avantGraphe}>
                    <View style={styles.sousHeaderLeft}>
                        <text style={{ fontWeight: 'bold', marginBottom:'6px', marginVertical: 5 }}> Nearby Shop</text>

                    </View>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>


    );
}
const styles=StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'rgb(92,93,92)',
        alignItems:'center',
        justifyContent:'center',
    },
    app:{
width:320,
height:500,
borderRadius:30,
flex:1,
paddingTop:20,
paddingBottom:20,
backgroundColor:'white',
paddingLeft:'2%',
paddingRight:'2%',

    },
    header:{
 width:'auto',
 height:'6%',
 display:'flex',
 flexDirection:'row',
 justifyContent:'space-between',

    },

    menu:{
        marginTop:'0%',
        padding:'10px',
        width:'10%',
        height:'50%',
        resizeMode:'contain',
        backgroundColor:'#fff',
        borderRadius:50,
        borderWidth:5,
        borderColor:'#fff',
    

    },

    pp:{
        marginTop:'0%',
        padding:'10px',
        width:'10%',
        height:'50%',
        resizeMode:'contain',
        backgroundColor:'#fff',
        borderRadius:50,
        borderWidth:5,
        borderColor:'#fff',


    },

    sousHeader:{

        width:'auto',
        height:'10%',
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
    },

    sousHeaderLeft:{
        width:'80%',
        height:'100%',
        resizeMode:'contain',
        alignContent:'center',
        display:'flex',
        flexDirection:'column',
    },

    Texte12: {
        fontFamily: 'arial',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop:35,
    },

    Text12: {
        fontFamily: 'arial',
        fontSize: 18,
        fontWeight: 'bold',
        
    },

    sousHeaderSousLeft: {
        width: '80%',
        height: '100%',
        resizeMode: 'contain',
        alignContent: 'center',
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        // borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },

    avantGraphe: {
        width: '100%',
        height: '15%',
        resizeMode: 'contain',
        alignContent: 'center',
        // backgroundColor: 'blue',
        display: 'flex',
        flexDirection: 'row',
        // backgroundColor: '#000',
        // borderRadius: 50,
        borderWidth: 5,
        borderColor: '#fff',
    },

    textAvantGraphe: {
        marginTop: '-37px',
        fontFamily: 'arial',
        fontSize: '10px',
        fontWeight: 'bold',
    },

})
export default HomeScreen;

