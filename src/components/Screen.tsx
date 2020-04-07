import React from "react";
import { View } from "react-native";
import manager from "../utils/manager";

type IScreen = React.SFC & {
  onFocus?: () => void;
  onBlur?: () => void;
  navigation: NavigationScreenProp;
};

export class FocusScreen extends React.Component<IScreen> {
  // 页面获取焦点
  public onWillFocus() {
    const { onFocus } = this.props;
    manager.runAfterInteractions(() => {
      console.log("页面聚焦回调");
      onFocus && onFocus();
    });
  }

  // 页面获取焦点
  public onWillBlur() {
    const { onBlur } = this.props;
    onBlur && onBlur();
  }

  public componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener("willFocus", this.onWillFocus.bind(this));
    navigation.addListener("willBlur", this.onWillBlur.bind(this));
  }

  public render() {
    return <View style={{ flex: 1 }}>{this.props.children}</View>;
  }
}
