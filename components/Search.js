import React from 'react';
import {View, TextInput, StyleSheet, ImageBackground, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import {Button} from 'react-native-elements'
import List from './List';

class Search extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            city : '94108'
        }
    }

    setCity (city) {
        this.setState( {
            city: city
        })
    }

    submit() {
        this.props.navigation.navigate('Result', {city: this.state.city})
    }
        
    render() {
            return (
                <ImageBackground source={require('../Assets/background.png')} style={styles.homeWall} >
                <Text style={styles.textTitle} >Check 5-day Weather</Text>
                <View style={styles.viewSearch}>
                    <TextInput style={styles.searchInput}
                    value={this.state.city}
                    clearButtonMode={'while-editing'}
                    onChangeText={(text) => this.setCity(text)} />
                   
                   

         <View style={styles.ButtonContainer}>
            <Button
                title='Check Weather'
                buttonStyle={{
                backgroundColor: '#3B8AB8',
                width: 200,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
                }}
                onPress = {() => this.submit()}
            />
         </View>
         </View>
     </ImageBackground>
       )
    }
}


const styles = StyleSheet.create({
  homeWall: {
    width: '100%',
    height: '100%',
    flex:1
  },
  viewSearch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput:{
      width: '80%',
      height: 60,
      borderColor: '#ffffff',
      borderWidth: 2,
      padding: 10,
      margin: 120,
      marginTop: 90,
      fontSize: 20,
      textAlign: 'center',
      borderRadius: 3,
      color: '#f1f1f1'
  },

  textTitle:{
    width: '80%',
    height: 40,
    padding: 10,
    margin: 40,
    marginTop: 180,
    fontSize: 24,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#f1f1f1',
    fontWeight: "bold"
},
  ButtonContainer: {
    marginBottom: 180
}

});

const ModalStack = createStackNavigator({
    Search: {
        screen: Search
    },
    Result: {
        screen: List
    },

});

export default ModalStack;