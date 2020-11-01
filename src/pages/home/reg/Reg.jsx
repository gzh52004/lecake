import React from "react";
import { List, TextareaItem, Button, WhiteSpace,InputItem } from "antd-mobile";
// import { FontSizeOutlined } from "@ant-design/icons";
// import { createForm } from "rc-form";

import qqPic from "../../../assets/images/home/main/qq.png";

// const qqPic = require("./assets/images/home/qq.png");

class Reg extends React.Component {
  componentDidMount() {
    this.autoFocusInst.focus();
  }


  render() {
    return (
      <div>
        <div>
          <List renderHeader={() => "注册"}>
            <TextareaItem
              title="用户名"
              placeholder="请输入用户名"
              data-seed="logId"
              ref={(el) => (this.autoFocusInst = el)}
              autoHeight
              name="username"
            />
            
            <InputItem
            type="password"
            placeholder="请输入密码"
            name="password"
          >密码
          </InputItem>
          </List>
        </div>

        <div>
          <Button
            style={{
              backgroundColor: "tomato",
              fontSize: 18,
              color: "white",
              marginTop: 80,
              width: 350,
              marginLeft: 10,
            }}
          >
            注册
          </Button>
          <p style={{marginTop:30, fontSize:12, marginLeft:10}}>
          登录即代表您已同意
          <a href="###" style={{color:"#fe4320"}}>《诺心lecake用户服务协议》</a>  
          </p>
          <WhiteSpace />
        </div>

        <div style={{ marginLeft: 40, marginTop: 100 }}>
        <p style={{ fontSize: 14 }}>
            ------------------其他登录方式------------------
          </p>
        </div>

        <div style={{ marginLeft: 150, marginTop: 30 }}>
          <a href="https://wx01.lecake.com/customer/union-login.html?t=qq&amp;return_url=http://wx01.lecake.com/h5/customer/index">
            <img src={qqPic} alt="qq"></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Reg;
