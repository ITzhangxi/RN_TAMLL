import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    TouchableOpacity,
    TextInput,
    ScrollView,
} from 'react-native';
import Dimensions from 'Dimensions';
//获取页面的宽度
const {width} = Dimensions.get('window');
// 引入头部轮播图组件
import SliderShow from './SlideShow'
// 引入天猫官网直营组件
import Active from './Active'
// 引入品牌活动组件
import BrandActive from './BrandActive'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchBoxTop: Platform.OS === 'ios' ? 60 : 45,
            searchBoxLeft: 13,
            headerHeight: Platform.OS === 'ios' ? 100 : 85,
            tamalltopLogoOpacit: 1,
            tamalltopBoxPaddingTop: Platform.OS === 'ios' ? 30 : 15,
        };
    };

    render() {
        return (
            <View style={[styles.container]}>
                {/*头部*/}
                <View style={[styles.header, {height: this.state.headerHeight}]}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Image
                            style={styles.rqcodeStyle}
                            source={{uri: 'rqcode'}}
                        />
                    </TouchableOpacity>

                    <View style={[styles.tamalltopBoxStyle, {top: this.state.tamalltopBoxPaddingTop}]}>
                        <Image
                            style={[styles.tamalltopStyle, {opacity: this.state.tamalltopLogoOpacit}]}
                            source={{uri: 'tmalltop'}}
                        />
                    </View>
                    <View style={styles.dialogueBox}>

                        <TouchableOpacity activeOpacity={0.5}>
                            <Image
                                source={{uri: 'dialogue'}}
                                style={styles.dialogueStyle}
                            />
                        </TouchableOpacity>
                        <View style={styles.dialogueNum}><Text>9</Text></View>
                    </View>
                    <View style={[styles.headerSearchBox, {
                        top: this.state.searchBoxTop,
                        left: this.state.searchBoxLeft,
                        right: this.state.searchBoxLeft
                    }]}>
                        <Image
                            source={{uri: 'search'}}
                            style={styles.searchIcon}
                        />
                        <TextInput
                            placeholder={'宝宝出行必备'}
                            style={styles.searchStyle}
                            placeholderTextColor={'#afafaf'} // 占位符的颜色
                            selectTextOnFocus={true} // 获取焦点的时候内容全部被选中
                            underlineColorAndroid='transparent' // 清除安卓下划线
                        />
                        <TouchableOpacity activeOpacity={0.5}>
                            <Image
                                source={{uri: 'camera'}}
                                style={styles.searchIcon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView
                    contentContainerStyle={styles.mainScrollViewStyle}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={50}
                    onScroll={this.contentScroll.bind(this)}
                >
                    {/*商家菜单盒子*/}
                    <View style={styles.merchantMuneBox}>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.merchantBox}>
                                <Image
                                    source={{uri: 'suning'}}
                                    style={styles.merchantLogo}
                                />
                                <Text style={styles.merchatTitle}>苏宁易购</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.merchantBox}>
                                <Image
                                    source={{uri: 'tmallshop'}}
                                    style={styles.merchantLogo}
                                />
                                <Text style={styles.merchatTitle}>天猫超市</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.merchantBox}>
                                <Image
                                    source={{uri: 'tmallguoji'}}
                                    style={styles.merchantLogo}
                                />
                                <Text style={styles.merchatTitle}>天猫国际</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.merchantBox}>
                                <Image
                                    source={{uri: 'juhuasuan'}}
                                    style={styles.merchantLogo}
                                />
                                <Text style={styles.merchatTitle}>聚划算</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}>
                            <View style={styles.merchantBox}>
                                <Image
                                    source={{uri: 'fenlei'}}
                                    style={styles.merchantLogo}
                                />
                                <Text style={styles.merchatTitle}>分类</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/*轮播图*/}
                    <View style={styles.slideShowBoxStyle}>
                        <SliderShow
                            data={require('../../TMLLData/HomeSlideShow.json').data}
                        />
                    </View>
                    {/*天猫官方直营*/}
                    <View style={styles.activeBoxStyle}>
                        <Active
                            data={require('../../TMLLData/TMLLzhiyingImage.json')}
                        />
                    </View>
                    {/*品牌活动*/}
                    <View style={styles.activeBoxStyle}>
                        <BrandActive
                            data={require('../../TMLLData/BrabdActive.json')}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    };

    // 滚动主体时候，每一帧的出发事件
    contentScroll(e) {
        let offsetY = e.nativeEvent.contentOffset.y;
        //处理输入框的
        if (offsetY < 0) {
            offsetY = 0
        }
        ;
        if (offsetY > 33) {
            offsetY = 33
        }
        ;
        this.setState({
            searchBoxLeft: offsetY + 13,
            searchBoxTop: Platform.OS === 'ios' ? (60 - offsetY) : (45 - offsetY),
            headerHeight: Platform.OS === 'ios' ? (100 - offsetY) : (85 - offsetY),
            tamalltopBoxPaddingTop: Platform.OS === 'ios' ? (30 - offsetY - 5) : (15 - offsetY - 5),
            tamalltopLogoOpacit: (1 - offsetY / 33)
        });
    };
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // 头部区域
    header: {
        paddingTop: Platform.OS === 'ios' ? 30 : 15,
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
    // 头部天猫logo的盒子
    tamalltopBoxStyle: {
        width: width,
        alignItems: 'center',
        position: 'absolute',
    },
    // 头部天猫logo
    tamalltopStyle: {
        width: 100,
        height: 20,
        resizeMode: 'contain',
        position: 'absolute',
        opacity: 0.5
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
        height: 30,
        backgroundColor: '#fff',
        paddingLeft: 13,
        paddingRight: 13,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    // 头部搜索框中的搜索icon
    searchIcon: {
        width: 15,
        height: 15,
    },
    // 头部搜索框
    searchStyle: {
        flex: 1,
        paddingLeft: 5,
        borderColor: 'red',
        alignItems: 'center',
        paddingTop: 0,
        paddingBottom: 0
    },
    // 主体的滚动试图
    mainScrollViewStyle: {
        marginTop: Platform.OS === 'ios' ? 100 : 85,
        backgroundColor: '#fff',
        paddingBottom: Platform.OS === 'ios' ? 300 : 305,
    },
    // 商家菜单盒子
    merchantMuneBox: {
        width: width,
        flexDirection: 'row',
        paddingTop: 10,
    },
    // 商家菜单中商家
    merchantBox: {
        alignItems: 'center',
        marginLeft: (width - 46 * 5) / 6,
    },
    // 商家菜单中的商家头像
    merchantLogo: {
        width: 46,
        height: 46,
        borderRadius: 23,

    },
    // 商家菜单中透析那个的title
    merchatTitle: {
        fontSize: 12,
        marginTop: 5,
    },
    // 轮播入盒子
    slideShowBoxStyle: {
        width: width,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 15,
    },
    // 活动盒子
    activeBoxStyle: {
        width: width,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 25,
    },
})
