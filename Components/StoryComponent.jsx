import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

import dog from '../assets/chainsaw dog.png'

const StoryComponent = () => {
  return (
    <ScrollView horizontal style={style.scrollStyle}>
      <Image style={style.ImageStyle} source={dog}/>
      <Image style={style.ImageStyle} source={dog}/>
      <Image style={style.ImageStyle} source={dog}/>
      <Image style={style.ImageStyle} source={dog}/>
      <Image style={style.ImageStyle} source={dog}/>
      <Image style={style.ImageStyle} source={dog}/>
      <Image style={style.ImageStyle} source={dog}/>
      <Image style={style.ImageStyle} source={dog}/>
      <Image style={style.ImageStyle} source={dog}/>


    </ScrollView>
  )
}

const style = StyleSheet.create({
  ImageStyle:{
    height: 80,
    width:80,
    borderRadius: 50,
    marginRight: 20,
   
  },
  scrollStyle:{
    paddingTop:10,
    paddingBottom: 5,

  }
});

export default StoryComponent