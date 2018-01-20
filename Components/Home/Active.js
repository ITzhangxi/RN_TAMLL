import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import Dimensions from 'Dimensions'

const {width} = Dimensions.get('window');
export default class ActiveScreen extends Component {
    render() {
        return (
            //盒子的样式
            <View style={styles.containerStyle}>
                {this.renderImage()}

                {/*标题盒子*/}
                <View style={styles.titleBoxStyle}>
                    <Text style={[styles.titleStyle]}>{this.props.data.title}</Text>
                    <Text style={styles.tipStyle}>{this.props.data.tip}</Text>
                </View>
                {/*主体部分的样式*/}
                <View style={styles.contentBoxStyle}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={{uri: this.props.data.data[0].uri}}
                            style={styles.leftImage}
                            resizeMode={'cover'}
                        />
                    </TouchableOpacity>
                    {/*主体右侧的盒子*/}
                    <View style={styles.rightBoxStyle}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image
                                source={{uri: this.props.data.data[1].uri}}
                                style={styles.rightTopImage}
                                resizeMode={'contain'}
                            />
                        </TouchableOpacity>
                        {/*主体右侧下方的盒子*/}
                        <View style={styles.rightBottomBox}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <View style={styles.rightBottomFirstImage}>
                                    <Image
                                        source={{uri: this.props.data.data[2].uri}}
                                        style={styles.rightBottomImage}
                                        resizeMode={'contain'}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image
                                    source={{uri: this.props.data.data[3].uri}}
                                    style={styles.rightBottomImage}
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        )
    };

    renderImage() {
        let data = this.props.data;
        console.log(this.props.data.title);
        return (
            <View>
                {this.props.title}
            </View>
        )

    };
};
const styles = StyleSheet.create({
    // 盒子的样式
    containerStyle: {},
    // 标题盒子
    titleBoxStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    // 标题
    titleStyle: {
        fontSize: 18,
        fontWeight: '600',
    },
    // 提示
    tipStyle: {
        fontSize: 12,
        color:'#4b4b4b'
    },
    // 主体部分的样式
    contentBoxStyle: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    //主体左侧图片
    leftImage: {
        width: 150,
        height: 200,
    },
    // 主体右侧的盒子
    rightBoxStyle: {
        flex: 1,
    },
    //右侧上方的图片
    rightTopImage: {
        height: 100,
        width: (width - 20 - 150),
    },
    // 主体右侧下方的盒子
    rightBottomBox: {
        height: 100,
        width: (width - 20 - 150),
        flexDirection: 'row',
        alignItems: 'center',
        // borderTopColor: '#ddd',
        // borderTopWidth: 1,
    },
    // 主体右下方图片
    rightBottomImage: {
        height: 100,
        width: (width - 20 - 150) / 2,
    },
    // 主体右下方图片第一个图片
    rightBottomFirstImage: {
        borderRightColor: '#ddd',
        borderRightWidth: 1,
    }
});