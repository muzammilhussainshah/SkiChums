import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native'

export default class SCTabBar extends Component {
    render() {
        let {
            renderIcon,
            getLabelText,
            activeTintColor,
            inactiveTintColor,
            onTabPress,
            onTabLongPress,
            getAccessibilityLabel,
            navigation,
            showLabel
        } = this.props
    
        let { routes, index: activeRouteIndex } = navigation.state
    
        return (
            <View style={styles.tabBar}>
            {routes.map((route, routeIndex) => {
              let isRouteActive = routeIndex === activeRouteIndex
              let tintColor = isRouteActive ? activeTintColor : inactiveTintColor
    
              return (
                <TouchableOpacity
                  key={routeIndex}
                  style={styles.tab}
                  onPress={() => {
                    onTabPress({ route })
                  }}
                  onLongPress={() => {
                    onTabLongPress({ route })
                  }}
                  accessibilityLabel={getAccessibilityLabel({ route })}
                >
                  {renderIcon({ route, focused: isRouteActive, tintColor })}
                  {showLabel ? <Text>{getLabelText({ route })}</Text> : null}
                </TouchableOpacity>
              )
            })}
          </View>
        )
    }
}

const styles = StyleSheet.create({
    tab: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    tabBar: {
      alignSelf: 'center',
      backgroundColor: Colors.primary,
      borderRadius: 50,
      bottom: 10,
      elevation: 2,
      flexDirection: 'row',
      height: 65,
      position: 'absolute',
      width: '95%',
    },
    infinity: {
      width: 80,
      height: 100,
    },
    infinityBefore: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      borderWidth: 20,
      borderColor: 'red',
      borderStyle: 'solid',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 0,
      transform: [{ rotate: '-135deg' }],
    },
    infinityAfter: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 0,
      height: 0,
      borderWidth: 20,
      borderColor: 'red',
      borderStyle: 'solid',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 0,
      borderBottomRightRadius: 50,
      borderBottomLeftRadius: 50,
      transform: [{ rotate: '-135deg' }],
    },
  })