import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

export default class SCProfileAboutView extends Component {
    render() {
        return (
            <>
                {
                    <View style={[this.props.style ?? {}, styles.container]}>
                        <Text style={styles.about}>
                            About
                        </Text>
                        <Text style={styles.description}>
                            {this?.props?.currentUser?.about}
                            {/* Hey, I am an expert skater. Hey, I am an expert skater. Hey, I am an expert skater. Hey, I am an expert skater. */}
                        </Text>
                    </View>

                }
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    about: {
        textAlign: 'center',
        color: '#0245F5',
        fontWeight: '500',
        fontSize: 12
    },
    description: {
        marginTop: 9,
        color: 'black',
        fontSize: 11,
        textAlign: 'center'
    }

})