import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';
import Dimensions from 'Dimensions';
// 获取手机屏幕的宽度
const {width} = Dimensions.get('window');

export default class BrandActive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            hours: 0,
            minutes: 0,

        };
    }

    render() {
        return (
            // 品牌活动的外盒子
            <View style={styles.container}>
                {/*标题盒子*/}
                <View style={styles.titleBoxStyle}>
                    <Text style={[styles.titleStyle]}>{this.props.data.title}</Text>
                </View>
                {/*主体盒子*/}
                <View style={styles.contentBoxStyle}>
                    {/*左侧图片盒子*/}
                    <View style={styles.leftBoxStyle}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image
                                source={{uri: this.props.data.brandactive[0].uri}}
                                style={styles.leftImageStyle}
                            />
                        </TouchableOpacity>
                    </View>
                    {/*右侧盒子*/}
                    <View style={styles.rightBoxStyle}>
                        <View style={styles.rightTopBoxStyle}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image
                                    source={{uri: this.props.data.brandactive[1].uri}}
                                    style={styles.rightTopImage}
                                    resizeMode={'contain'}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rightBottomBoxStyle}>
                            <TouchableOpacity activeOpacity={0.5}>
                                <Image
                                    source={{uri: this.props.data.brandactive[2].uri}}
                                    style={styles.rightBottomImage}
                                    resizeMode={'contain'}
                                />

                                {/*倒计时*/}
                                <View style={styles.coutdownTime}>
                                    <Text style={styles.numStyle}>{this.state.hours}</Text>
                                    <Text style={styles.symbolStyle}>:</Text>
                                    <Text style={styles.numStyle}>{this.state.minutes}</Text>
                                    <Text style={styles.symbolStyle}>:</Text>
                                    <Text style={styles.numStyle}>{this.state.seconds}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/*底部小广告*/}
                <View style={styles.brandactivesmallBox}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={{uri: this.props.data.brandactivesmall[0].uri}}
                            style={styles.brandactivesmallImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={{uri: this.props.data.brandactivesmall[1].uri}}
                            style={styles.brandactivesmallImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={{uri: this.props.data.brandactivesmall[2].uri}}
                            style={styles.brandactivesmallImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={{uri: this.props.data.brandactivesmall[3].uri}}
                            style={styles.brandactivesmallImage}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            source={{uri: this.props.data.brandactivesmall[4].uri}}
                            style={styles.brandactivesmallImage}
                            resizeMode={'contain'}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    };

    componentDidMount() {
        this.renderCountdownTime()
    };

    componentWillUnmount() {
        clearInterval(this.timer)
    };

    renderCountdownTime() {
        this.timer = setInterval(_ => {
            // 获取现在的时间对象
            let nowDate = new Date();
            // 设置将来的时间对象
            let setWillDate = new Date('2018/2/15');
            // 获取将来时间和现在时间的间隔
            let intervalTime = setWillDate.valueOf() - nowDate.valueOf();
            // 将间隔时间换成以秒为单位
            let intervalSecond = intervalTime / 1000;
            // 获取间隔的天数
            let Dates = Math.floor(intervalSecond / 60 / 60 / 24);
            // 获取间隔的小时
            let Hours = Math.floor((intervalSecond - Dates * 24 * 3600) / 3600);
            // 获取间隔分
            let Minute = Math.floor((intervalSecond - Dates * 24 * 3600 - Hours * 60 * 60) / 60);
            // 间隔秒
            let Second = Math.floor(intervalSecond - Dates * 24 * 3600 - Hours * 60 * 60 - Minute * 60);
            Hours = Hours > 9 ? Hours : ('0' + Hours);
            Second = Second > 9 ? Second : ('0' + Second);
            Minute = Minute > 9 ? Minute : ('0' + Minute);
            this.setState({
                hours: Hours,
                minutes: Minute,
                seconds: Second,
            });
        }, 1000);
    };
};
const styles = StyleSheet.create({
    // 品牌活动的外盒子
    container: {
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center'
        paddingBottom: 5
    },
    // 主体盒子
    contentBoxStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
    },
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
        color: '#4b4b4b'
    },
    // 左侧图片盒子
    leftBoxStyle: {},
    // 左侧图片
    leftImageStyle: {
        width: 150,
        height: 200,
    },
    // 右侧盒子
    rightBoxStyle: {
        height: 200,
        width: (width - 20 - 150),
    },
    // 右侧上边的盒子
    rightTopBoxStyle: {
        width: (width - 20 - 150),
        height: 100,
    },
    // 右侧上方的图片
    rightTopImage: {
        width: (width - 20 - 150),
        height: 100
    },
    // 右侧下边的盒子
    rightBottomBoxStyle: {
        width: (width - 20 - 150),
        height: 100,
    },
    // 右侧下方的图片
    rightBottomImage: {
        width: (width - 20 - 150),
        height: 100
    },
    // 倒计时
    coutdownTime: {
        height: 100,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        alignItems: 'center',
        width: (width - 20 - 150 - 20) / 2,
        justifyContent: 'center',

    },
    // 倒计时数字样式
    numStyle: {
        backgroundColor: '#4c4c4c',
        // 20
        width: Platform.OS === 'ios' ? 20 : 20,
        height: 25,
        lineHeight: 25,
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
    },
    // 倒计时的：
    symbolStyle: {
        height: 25,
        lineHeight: 25,
        textAlign: 'center',
        color: '#4c4c4c',
        fontSize: 20,
        marginLeft: 2,
        marginRight: 2,
    },
    // 底部小广告
    brandactivesmallBox: {
        width: width - 20,
        flexDirection: 'row',
        borderColor: "#efefef",
        borderWidth: 1,
        paddingTop: 1,
        paddingBottom: 2
    },
    // 底部小广告的图片
    brandactivesmallImage: {
        width: 50,
        height: 100,
        marginLeft: ((width - 20) - 50 * 5 ) / 6,
    },
});