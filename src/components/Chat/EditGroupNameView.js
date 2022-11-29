import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput } from "react-native";

export default class EditGroupNameView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nameValue: ''
        }
    }
    componentDidMount() {
        this.setState({ nameValue: this.props.groupName })
    }
    render() {

        return (
            <View style={[this.props.style ?? {}, styles.container]}>
                <TextInput style={styles.groupTitle} placeholder='Group Title'
                    onChangeText={(val) => {
                        this.setState({ nameValue: val })
                    }}
                    value={this.state.nameValue}
                />
                <View style={styles.line} />
                <View style={styles.messageButtonContainer}>
                    <TouchableOpacity onPress={() => { this.setState({ nameValue: '' }) }}>
                        <Text style={styles.clear}>
                            CLEAR
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.save} onPress={() => this.props.updatedname(this.state.nameValue) }>
                        <Text style={styles.saveTxt}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'white',
        // alignItems: 'center'
    },
    groupTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 30
    },
    messageButtonContainer: {
        // width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 42,
        marginTop: 25,
    },

    save: {
        width: 79,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#0A63EB',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50
    },
    saveTxt: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
    },
    clear: {
        color: '#252430',
        fontSize: 12,
        marginHorizontal: 50
    },
    line: {
        backgroundColor: '#035BF8',
        height: 0.5,
        marginHorizontal: 42,
        marginTop: 8
    },

})