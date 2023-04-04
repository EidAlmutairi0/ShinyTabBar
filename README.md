# rn-shiny-tab-bar

Custom animated shiny-tab-bar for react-native.

![preview](https://github.com/EidAlmutairi0/ShinyTabBar/blob/master/sample.gif)

## 💾 Installation

```
yarn add rn-shiny-tab-bar
```

or

```
npm install rn-shiny-tab-bar
```

## ⚒️ Usage

```jsx
<Tab.Navigator
  tabBar={(props) => {
    return <ShinyTabBar {...props} />;
  }}
>
  <Tab.Screen
    name="Dashboard"
    component={TestScreen}
    options={{
      tabBarIcon: <SimpleLineIcons name="grid" size={20}></SimpleLineIcons>,
      tabBarBackground: "rgb(2 179 189)",
    }}
  />
  <Tab.Screen
    name="Home"
    component={TestScreen}
    options={{
      tabBarIcon: <FontAwesome name="home" size={20}></FontAwesome>,
      tabBarBackground: "rgb(58 107 229)",
    }}
  />
  <Tab.Screen
    name="Profile"
    component={TestScreen}
    options={{
      tabBarIcon: <Icon name="user" size={20}></Icon>,
      tabBarBackground: "rgb(255 59 45)",
    }}
  />
</Tab.Navigator>
```

## 🔧 Props

| Prop                 |    Type     |                 Description                  |
| :------------------- | :---------: | :------------------------------------------: |
| tabBarStyle          | `StyleProp` |          Styling the whole Tab Bar           |
| labelsStyle          | `StyleProp` |              Styling all labels              |
| iconsStyle           | `StyleProp` |              Styling all icons               |
| currentTabLabelStyle | `StyleProp` |      Styling only the current tab label      |
| currentTabIconStyle  | `StyleProp` |      Styling only the current tab icon       |
| currentTabDashStyle  | `StyleProp` | Styling dash component above the current tab |

## 📄 Credits

Big thanks to @AetherAurelia
for the design : https://twitter.com/AetherAurelia/status/1638858062596374528?s=20
