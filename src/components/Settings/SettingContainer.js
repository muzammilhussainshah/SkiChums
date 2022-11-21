import React, { Component } from "react";
import { View, StyleSheet, Platform} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import SettingItem from "./SettingItem";

export default class SettingContainer extends Component {
    render() {
        return (
            <>
            {
                <View style={[this.props.style ?? {}, styles.container]}>
                    <TouchableOpacity styl={styles.item} onPress={this.props.onProfileClicked}>
                        <SettingItem type={'profile'}/>
                    </TouchableOpacity>
                    <TouchableOpacity styl={styles.item}>
                        <SettingItem type={'terms'}/>
                    </TouchableOpacity>
                    <TouchableOpacity styl={styles.item}>
                        <SettingItem type={'privacy'}/>
                    </TouchableOpacity>
                    <TouchableOpacity styl={styles.item} onPress={this.props.onLogout}>
                        <SettingItem type={'logout'}/>
                    </TouchableOpacity>
                </View>
                
            }
            </>
        )        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,   
        width: '100%',     
        flexDirection: 'column',        
   
    },
    item: {
        height: 52,
        flex: 1,
        backgroundColor: 'blue'
    }

})