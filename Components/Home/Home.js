import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    TouchableOpacity,
    TextInput,

} from 'react-native';
// 引入公共样式
import Dimensions from 'Dimensions';

const {width} = Dimensions.get('window')
export default class Home extends Component {
    render() {
        return (
            <View style={[styles.container,]}>
                <View style={styles.header}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            style={styles.rqcodeStyle}
                            source={{uri: 'rqcode'}}
                        />
                    </TouchableOpacity>

                    <Image
                        style={styles.tamalltopStyle}
                        source={{uri: 'tmalltop',}}
                    />
                    <View style={styles.dialogueBox}>

                        <TouchableOpacity activeOpacity={0.5}>
                            <Image
                                source={{uri: 'dialogue'}}
                                style={styles.dialogueStyle}
                            />
                        </TouchableOpacity>
                        <View style={styles.dialogueNum}><Text>9</Text></View>
                    </View>
                    <View style={styles.headerSearchBox}>
                        <Image
                            source={{uri: 'search'}}
                            style={styles.searchIcon}
                        />
                        <TextInput
                            placeholder={'宝宝出行必备'}
                            style={styles.searchStyle}
                            placeholderTextColor={'#afafaf'} // 占位符的颜色
                            selectTextOnFocus={true} // 获取焦点的时候内容全部被选中
                            underlineColorAndroid='transparent'
                        />
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image
                                source={{uri: 'camera'}}
                                style={styles.searchIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
};
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    // 头部区域
    header: {
        paddingTop: Platform.OS === 'ios' ? 30 : 15,
        height: Platform.OS === 'ios' ? 100 : 85,
        paddingLeft: 13,
        paddingRight: 13,
        backgroundColor: '#fd0528',
        position: 'absolute',
        top: 0,
        zIndex: 999,
        left: 0,
        right: 0,
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    // 头部扫码按钮
    rqcodeStyle: {
        width: 20,
        height: 20,
    },
    // 头部扫码按钮点击高亮
    rqcodeStyleTouch: {
        backgroundColor: '#ddd',
        width: 20,
        height: 20,
    },
    // 头部天猫logo
    tamalltopStyle: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
    },
    // 头部对话logo的盒子
    dialogueBox: {
        width: 20,
        height: 20,
    },
    // 头部对话logo
    dialogueStyle: {
        width: 20,
        height: 20,
    },
    // 头部对话个数提示
    dialogueNum: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: 'center',
        position: 'absolute',
        top: -5,
        right: -8,
    },
    // 头部搜索盒子
    headerSearchBox: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 60 : 45,
        height: 30,
        backgroundColor: '#fff',
        left: 13,
        right: 13,
        paddingLeft: 13,
        paddingRight: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    // 头部搜索框中的搜索icon
    searchIcon: {
        width: 15,
        height: 15,
    },
    // 头部搜索框
    searchStyle:{
        flex:1,
        paddingLeft:5,
        borderColor:'red',
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: 0
    }
})
