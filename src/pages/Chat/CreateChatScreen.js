import React, { Component } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text, Touchable } from 'react-native';

export default class CreateChatScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listType: 'chat'
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.onClose} style={styles.transparent}/>
        
        <View style={styles.bottomContainer}>
            <View style={styles.messageButtonContainer}>
                <TouchableOpacity onPress={this.props.onNewMessage}>
                    <Text style={styles.text}>
                        NEW MESSAGE
                    </Text>                    
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onNewMessage}>
                    <Image style={styles.image} source={require("../../assets/icons/ic_blue_plus.png")}/>                
                </TouchableOpacity>                
            </View>
            <View style={styles.line}/>
            <View style={styles.groupButtonContainer}>
                <TouchableOpacity onPress={this.props.onNewGroup}>
                    <Text style={styles.text}>
                        NEW GROUP
                    </Text>                    
                </TouchableOpacity>
                <TouchableOpacity onPress={this.props.onNewGroup}>
                    <Image style={styles.image} source={require("../../assets/icons/ic_blue_plus.png")}/>                
                </TouchableOpacity>                
            </View>
            <View style={styles.line}/>
        </View>
        
        
    </View>
    );    
  }
  
  onClickChatCell = () => {
    console.log('clicked chat cell')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: 'rgba(0, 0, 0, 0)',    
    // justifyContent: 'space-between'
    // alignItems: 'center',
    // justifyContent: 'space-between'
  },
  transparent: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  bottomContainer: {
    // position: 'absolute',
    bottom: 107,
    left: 0,
    right: 0,
    height: 178,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#ecf0f7'
  },
  messageButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 42,
    marginTop: 42,
  },
  groupButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 42,
    marginTop: 25,
  },
  text: {
    color: '#252430',
    fontWeight: 'bold',
    fontSize: 15,
  },
  image: {
    width: 11,
    height: 11
  },
  line: {
    backgroundColor: '#035BF8',
    height: 0.5,    
    marginHorizontal: 42,
    marginTop: 8
  }
});