import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import React, { useRef } from "react";

import {
  Animated,
  Dimensions,
  StyleProp,
  StyleSheet,
  View,
} from "react-native";
import SingleTab from "./SingleTab";

export type Props = {
  tabBarStyle?: StyleProp<any>;
  labelsStyle?: StyleProp<any>;
  iconsStyle?: StyleProp<any>;
  currentTabLabelStyle?: StyleProp<any>;
  currentTabIconStyle?: StyleProp<any>;
  currentTabDashStyle?: StyleProp<any>;
};

const ShinyTabBar: React.FC<BottomTabBarProps & Props> = ({
  tabBarStyle,
  labelsStyle,
  iconsStyle,
  currentTabDashStyle,
  currentTabIconStyle,
  currentTabLabelStyle,
  state,
  descriptors,
  navigation,
}) => {
  const { routes } = state;

  const singleTabWidth: number = Dimensions.get("screen").width / routes.length;

  const currentTabColor =
    descriptors[routes[state.index].key].options?.tabBarBackground?.toString();

  const handleTabPressed = (index: number, route: any) => {
    const isFocused = state.index === index;

    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      Animated.spring(animateTab, {
        toValue: index * singleTabWidth,
        useNativeDriver: true,
      }).start();
      navigation.navigate(route.name);
    }
  };

  const animateTab = useRef(
    new Animated.Value(state.index * singleTabWidth)
  ).current;

  const content = routes.map((route, index) => {
    const { options } = descriptors[route.key];
    const label =
      options.tabBarLabel !== undefined
        ? options.tabBarLabel
        : options.title !== undefined
        ? options.title
        : route.name;

    const Icon = options?.tabBarIcon;

    const onPress = () => {
      handleTabPressed(index, route);
    };
    const tab = (
      <SingleTab
        key={index}
        name={label}
        icon={Icon}
        onPress={onPress}
        width={singleTabWidth}
        iconStyle={[iconsStyle, state.index === index && currentTabIconStyle]}
        labelStyle={[
          labelsStyle,
          state.index === index && currentTabLabelStyle,
        ]}
        color={
          state.index === index
            ? descriptors[route.key].options.tabBarBackground
            : null
        }
      />
    );
    return tab;
  });

  return (
    <View
      style={[
        styles.tabBar,
        tabBarStyle,
        {
          width: Dimensions.get("screen").width,
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            position: "absolute",
            flex: 1,
            height: "100%",
            width: singleTabWidth,
            alignItems: "center",
          }}
        >
          <Animated.View
            style={{
              height: "100%",
              alignSelf: "center",
              transform: [
                {
                  translateX: animateTab,
                },
              ],
            }}
          >
            <View
              style={{
                top: 0,
                flex: 1,
                width: 10,
                alignSelf: "center",
                backgroundColor: currentTabColor,
              }}
            ></View>
          </Animated.View>
        </View>
        <BlurView
          intensity={500}
          style={[
            {
              position: "absolute",
              height: "100%",
              flex: 1,
            },
          ]}
        >
          <View
            style={{
              position: "absolute",
              flex: 1,
              height: "100%",
              width: singleTabWidth,
              alignItems: "center",
            }}
          >
            <Animated.View
              style={{
                transform: [
                  {
                    translateX: animateTab,
                  },
                ],
                width: singleTabWidth,

                alignSelf: "center",
              }}
            >
              <View
                style={[
                  {
                    position: "absolute",
                    alignSelf: "center",
                    top: 0,
                    width: 40,
                    height: 5,
                    zIndex: 400,
                    borderRadius: 10,
                    backgroundColor: currentTabColor,
                  },
                  currentTabDashStyle,
                ]}
              ></View>
            </Animated.View>
          </View>
          <View style={[styles.tabsWrapper]}>{content}</View>
        </BlurView>
      </View>
    </View>
  );
};

export default ShinyTabBar;

const styles = StyleSheet.create({
  tabBar: {
    bottom: 0,
    height: 80,
    backgroundColor: "white",
    alignSelf: "center",
    shadowOffset: { width: 1, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabsWrapper: {
    height: "100%",
    alignSelf: "center",
    flex: 1,
    flexDirection: "row",
  },
});
