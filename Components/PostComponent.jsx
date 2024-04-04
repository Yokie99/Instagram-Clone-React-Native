import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import dog from '../assets/chainsaw dog.png'
import holosummer from '../assets/HoloSummer.png'
import StoryComponent from './StoryComponent'

import { faHeart, faPaperPlane, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const PostComponent = () => {
  const [posts, setPosts] = useState([
    { ProfilePicture: dog, Username: "Mr. footsaiah", Image: holosummer, NumOfLikes: "9,999", Description: "Look at this Cool cat! So Inspiring!", Comments: [{ UserWhoCommented: "caterpop_89", UsersComment: "Das me!", },], },
    { ProfilePicture: holosummer, Username: "caterpop_89", Image: dog, NumOfLikes: "6,545", Description: "FOR FREE L O L XD??? Follow my boy on twitch!", Comments: [{ UserWhoCommented: "Mr. footsaiah", UsersComment: "L O L Thanks caterpop_89!", },], },]);

  return (
    <ScrollView>
      <StoryComponent />
      {
        posts.map((post, idx) => {
          return (
            <View key={idx}>
              <View style={style.ProfileNav}>
                <View style={{ paddingTop: 10 }}>
                  <Image source={post.ProfilePicture} style={style.ImageStyle} />
                </View>
                <View style={style.ProfileUsername}>
                  <Text style={style.UsernameText}>{post.Username}</Text>
                </View>
                <View style={style.DotsDiv}>
                  <Text style={style.DotsText}>.</Text>
                  <Text style={style.DotsText}>.</Text>
                  <Text style={style.DotsText}>.</Text>

                </View>

              </View>

              <View>
                <Image source={post.Image} style={style.ImagePost} />
              </View>
              <View style={{flexDirection: "row"}}>
                <View style={{ flex: 1, flexDirection: "row", paddingRight: 5, paddingLeft: 14, paddingTop: 10 }}>
                  <FontAwesomeIcon icon={faHeart} style={{ color: "white", marginRight: 20 }} size={25} />
                  <FontAwesomeIcon icon={faComment} style={{ color: "white", marginRight: 20, transform: [{ rotateY: '180deg' }] }} size={25} />
                  <FontAwesomeIcon icon={faPaperPlane} style={{ color: "white", marginRight: 20 }} size={25} />

                </View>
                
                  <View style={{ flex: 1, alignItems: "flex-end", paddingRight: 14, justifyContent: "center", paddingTop: 10 }}>
                    <FontAwesomeIcon icon={faBookmark} style={{ color: "white", marginRight: 20 }} size={25} />
                  </View>
              </View>
            </View>
          )
        })
      }

    </ScrollView>
  )
}


const style = StyleSheet.create({
  ProfileNav: {
    flexDirection: "row",
    paddingBottom: 10,

  },
  ImageStyle: {
    height: 40,
    width: 40,
    borderRadius: 50,
  },
  UsernameText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold"

  },
  ProfileUsername: {
    paddingLeft: 20,
    justifyContent: "center",
    paddingTop: 10
  },
  DotsDiv: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: 10,
    marginBottom: -5
  },
  DotsText: {
    color: "white",
    fontSize: 30,
    lineHeight: 10,

  },
  ImagePost: {
    height: 400,
    width: "100%",


  }
})
export default PostComponent

