import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class ShoppingCarts extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>ShoppingCarts</Text>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
