import React from "react";
import { Redirect } from "react-router-dom";

export function withUser(MyComponent) {
  return function OuterComponent(props) {
    // 获取本地存储信息
    let currentUser = localStorage.getItem("currentUser");
    try {
      currentUser = JSON.parse(currentUser);
    } catch (err) {
      currentUser = {};
    }
    return <MyComponent {...props} currentUser={currentUser} />;
  };
}

// 用户访问权限高阶组件

export function withAuth(InnerComponent) {
  // 返回 函数组件 或者 类组件 都行
  //  写法一:
  //   class OuterComponent extends React.Component {
  //     componentDidMount() {}
  //     render() {
  //       // 包装后即可通过该方法获取用户信息
  //       if (this.props.currentUser) {
  //         // 用户登录后才显示的内容
  //         return <InnerComponent {...this.props} />;
  //       } else {
  //         return <Redirect to="/login" />;
  //       }
  //     }
  //   }

  // 方法二：
  class OuterComponent extends InnerComponent {
    componentDidMount() {
      super.componentDidMount();
    }

    render() {
      if (this.props.currentUser) {
        // 用户登录后才显示的内容
        return super.render();
      } else {
        return <Redirect to="/login" />;
      }
    }
  }

  // 由于 已经在上面获取了用户信息 所以 现在只需要包装该组件即可    该类写法  只适用于类组件
  return withUser(OuterComponent);
}
