import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MyChums() {
  return (
    <View style={styles.container}>
        <Text>
            My Chums
        </Text>
    </View>
  );    
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerContainer: {
      position: 'absolute',
      top: 44,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      left: 28,
      right: 28
    },
    logo: {
      width: 59,
      aspectRatio: 1,
      marginRight: 10
    },
    searchBar: {
      justifyContent: 'flex-end'
    }
  });