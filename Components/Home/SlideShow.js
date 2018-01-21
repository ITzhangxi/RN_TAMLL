import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Image,
    Platform,
} from 'react-native';
import Dimensions from 'Dimensions';
// 获取屏幕宽度
const {width} = Dimensions.get('window');
// 盒子阴影
// import {BoxShadow} from 'react-native-shadow'
export default class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNum: 0,
            SlideShowData: [],
        };
    };

    render() {
        return (
            <View style={styles.scrollVIewBoxStyle}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    ref={'scrollViewRef'}
                    onScrollBeginDrag={this.onScrollBeginDrag.bind(this)}
                    onScrollEndDrag={this.onScrollEndDrag.bind(this)}
                    onMomentumScrollEnd={this.onMomentumScrollEnd.bind(this)}
                >
                    {this.renderSlideShow()}
                </ScrollView>
                <View style={styles.indicatorBoxStyle}>
                    {this.indicator()}
                </View>
            </View>

        )
    };

    componentDidMount() {
        // 获取轮播图图片的数据,这个数据来自于父组件
        let SlideShowData = this.props.data;
        // 将获取的轮播图图片的数据付值给SlideShowData
        this.setState({SlideShowData: SlideShowData});
        // 执行定时器，让轮播图自行转动
        this.slideShowInterval();
    };

    componentWillUnmount() {
        clearImmediate(this.slideShowInterval)
    };

    // 渲染轮播图图片
    renderSlideShow() {
        let renderData = [];
        this.state.SlideShowData.forEach((val, i) => {
            renderData.push(
                <Image
                    key={i}
                    source={{uri: val.uri}}
                    style={styles.slideShowImageStyle}
                    resizeMode={'cover'}
                />
            )
        });
        return renderData;
    };

    // 渲染轮播图下面的指示器
    indicator() {
        let renderData = [];
        let style;
        this.state.SlideShowData.forEach((val, i) => {
            style = this.state.activeNum == i ? {borderBottomColor: '#fff'} : {borderBottomColor: 'rgba(0,0,0,0.2)'}
            renderData.push(
                <View key={i} style={[styles.indicatorStyle, style]}></View>
            )
        });
        return renderData;
    };

    // 执行定时器，让轮播图自行转动
    slideShowInterval() {
        // 获取scrollView这个元素
        let scrollViewRef = this.refs.scrollViewRef;
        let activeNum = 0;
        let offetX;
        let slideShowImageNum = this.props.data.length;
        this.timerInterval = setInterval(_ => {
            if ((this.state.activeNum + 1) >= slideShowImageNum) {
                activeNum = 0;
            } else {
                activeNum = this.state.activeNum + 1;
            }
            ;
            this.setState({
                activeNum: activeNum
            });
            offetX = activeNum * (width - 20);
            scrollViewRef.scrollTo({x: offetX, y: 0, animated: true})
        }, 2000);

    };

    // 开始手动拖动轮播波图开始时
    onScrollBeginDrag() {
        // 清除轮播图的定时器
        clearInterval(this.timerInterval);
    };

    // 开始手动拖动轮播波图结束时
    onScrollEndDrag() {
        this.slideShowInterval();
    };

    // 轮播图滚动结束时纠正activeNum状态值
    onMomentumScrollEnd(e) {
        let offsetX = e.nativeEvent.contentOffset.x;
        let activeNum = Math.floor(offsetX / (width - 20));
        this.setState({
            activeNum: activeNum
        })
    };
};
const styles = StyleSheet.create({
    //轮播图的盒子
    scrollVIewBoxStyle: {
        shadowOffset: {width: 0, height: 5},
        shadowColor: '#9d9d9d',
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 200,
        zIndex: Platform.OS === 'ios' ? 1 : 0
    },
    // 滚动视图
    scrollViewStyle: {
        elevation: 20
    },
    // 轮播图图片
    slideShowImageStyle: {
        width: (width - 20),
        height: 140,
    },
    indicatorBoxStyle: {
        width: width - 20,
        height: 10,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicatorStyle: {
        width: 20,
        borderBottomWidth: 3,
        marginLeft: 3,
        marginRight: 3,
    },
});
