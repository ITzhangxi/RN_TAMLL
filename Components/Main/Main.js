import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform
} from 'react-native'
import {TabNavigator} from 'react-navigation';

// 引入组件
import HomeComponent from '../Home/Home'
import BrandComponent from '../Brand/Brand'
import MemberComponent from '../Member/Member'
import ShoppingCartComponent from '../ShoppingCart/ShoppingCart'
import MineComponent from '../Mine/Mine'

// 精选
class HomeScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '精选',
        tabBarIcon: (({tintColor}) => (
            <Image
                source={{uri: 'home'}}
                style={[styles.iconStyle, {tintColor: tintColor}]}
            />
        ))
    };

    render() {
        return <HomeComponent/>
    }

};

// 品牌
class BrandScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '品牌',
        tabBarIcon: (({tintColor}) => (
            <Image
                source={{uri: 'brand'}}
                style={[styles.iconStyle, {tintColor: tintColor}]}
            />
        ))
    };

    render() {
        return <BrandComponent/>
    }
};

// 品牌
class MemberScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '会员',
        tabBarIcon: (({tintColor}) => (
            <Image
                source={{uri: 'member'}}
                style={[styles.iconStyle, {tintColor: tintColor}]}
            />
        )),
    };

    render() {
        return <MemberComponent/>
    }
};

// 品牌
class ShoppingCartScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '购物车',
        tabBarIcon: (({tintColor}) => (
            <Image
                source={{uri: 'shoppingcart'}}
                style={[styles.iconStyle, {tintColor: tintColor}]}
            />
        ))
    };

    render() {
        return <ShoppingCartComponent/>
    }
};

// 品牌
class MineScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '我的',
        tabBarIcon: (({tintColor}) => (
            <Image
                source={{uri: 'mine'}}
                style={[styles.iconStyle, {tintColor: tintColor}]}
            />
        ))
    };

    render() {
        return <MineComponent/>
    }
};


const MainApp = TabNavigator({
    Home: {
        screen: HomeScreen
    },
    Brand: {
        screen: BrandScreen
    },
    Member: {
        screen: MemberScreen
    },
    ShoppingCart: {
        screen: ShoppingCartScreen
    },
    Mine: {
        screen: MineScreen
    }
}, {
    swipeEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        activeTintColor: '#fe0041',
        inactiveTintColor: '#616568',
        style: {
            height: Platform.OS === 'ios' ? 50 : 55,
            backgroundColor: '#fff',
        },
        labelStyle: {
            marginTop: Platform.OS === 'ios' ? 15 : 0
        },
    },

});


// 样式
const styles = StyleSheet.create({
    iconStyle: {
        width: 20,
        height: 20,
    },
    tabBarStyle: {
        height: 30
    }
})
export default class Main extends Component {
    render() {
        return <MainApp/>
    }
}