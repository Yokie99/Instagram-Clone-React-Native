import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import NavbarComponent from './Components/NavbarComponent';
import PostComponent from './Components/PostComponent';
import StoryComponent from './Components/StoryComponent';
import FooterComponent from './Components/FooterComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <NavbarComponent/>
      {/* <StoryComponent/>
      <PostComponent/>
      <FooterComponent/> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    
  },
});
