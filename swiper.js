import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  Animated,
  Dimensions,
} from 'react-native';

import { ParallaxSwiper, ParallaxSwiperPage } from 'react-native-parallax-swiper';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');
const assets = {
    one: require('./assets/democontent-one.png'),
    two: require('./assets/democontent-two.png'),
    three: require('./assets/democontent-three.png'),
    four: require('./assets/democontent-four.png'),
}

export default class Swiper extends Component {

    constructor(props) {
        super(props)

        this.state = {
            scrollIndex: 1 // <----------- Change this value
        }

        this.animated = new Animated.Value(0); 
    }

    renderForeground() {
        return(
            <Text>This is me</Text>
        )
    }

    renderBackground(type = 'one') {
        return (
            <Image
            style={styles.image}
            source={assets[type]}
          />
        )
    }

    render() {
        return(
            <ParallaxSwiper
                speed={0.25}
                animatedValue={this.myCustomAnimatedValue}
                scrollToIndex={this.state.scrollIndex}
                dividerWidth={8}
                dividerColor="black"
                backgroundColor="black"
                onMomentumScrollEnd={activePageIndex => console.log(activePageIndex)}
                showProgressBar={true}
            >
                <ParallaxSwiperPage
                    BackgroundComponent={this.renderBackground('one')}
                    ForegroundComponent={this.renderForeground('one')}
                />
                <ParallaxSwiperPage
                    BackgroundComponent={this.renderBackground('two')}
                    ForegroundComponent={this.renderForeground('two')}
                    />
                <ParallaxSwiperPage
                    BackgroundComponent={this.renderBackground('three')}
                    ForegroundComponent={this.renderForeground('three')}
                    />
                <ParallaxSwiperPage
                    BackgroundComponent={this.renderBackground('four')}
                    ForegroundComponent={this.renderForeground('four')}
                    />
            </ParallaxSwiper>
        )
    }

}

const styles = StyleSheet.create({
    image: {
        width: deviceWidth,
        height: deviceHeight,
    },
})