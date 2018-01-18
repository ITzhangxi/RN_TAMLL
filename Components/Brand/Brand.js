import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Brand extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Brand</Text>
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
