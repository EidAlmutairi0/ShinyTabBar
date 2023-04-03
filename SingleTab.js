import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const SingleTab = (props) => {
  return (
    <View
      style={[
        styles.tab,
        {
          width: props.width,
        },
      ]}
    >
      <Pressable
        onPress={props.onPress}
        style={{
          marginBottom: 10,
          flex: 1,
          alignContent: "center",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={[
            {
              color: props.color,
            },
            props.iconsStyle,
          ]}
        >
          {props.icon}
        </Text>

        <Text
          style={[
            styles.name,
            {
              color: props.color,
            },
            props.labelStyle,
          ]}
        >
          {props.name}
        </Text>
      </Pressable>
    </View>
  );
};

export default SingleTab;

const styles = StyleSheet.create({
  tab: {
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    alignSelf: "center",
    paddingTop: 4,
    fontSize: 9,
  },
});
