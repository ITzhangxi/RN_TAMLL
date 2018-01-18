import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Member extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Member</Text>
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
