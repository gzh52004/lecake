import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import mineCss from "../../../assets/css/home/mine/mine.css";
import { Grid } from "antd-mobile";
import { withAuth } from "../../../utils/hoc";

import beijingPic from "../../../assets/images/home/main/beijing2.png";

// const data = Array.from(new Array(4)).map((_val, i) => ({
//   icon: "https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png",
//   text: `name${i}`,
// }));

const order = [
  {
    icon: require("../../../assets/images/home/main/daifukuan.png"),
    text: "待付款",
    name: "pay",
  },
  {
    icon: require("../../../assets/images/home/main/daifahuo.png"),
    text: "待发货",
    name: "deGoods",
  },
  {
    icon: require("../../../assets/images/home/main/daishouhuo.png"),
    text: "代收货",
    name: "take",
  },
  {
    icon: require("../../../assets/images/home/main/dingdan.png"),
    text: "我的订单",
    name: "oders",
  },
];

const serve = [
  {
    icon: require("../../../assets/images/home/main/shengri.png"),
    text: "生日助手",
    name: "bri",
  },
  {
    icon: require("../../../assets/images/home/main/geren.png"),
    text: "个人资料",
    name: "personage",
    path: "/prosonData",
  },
  {
    icon: require("../../../assets/images/home/main/chuzhi.png"),
    text: "储蓄卡",
    name: "deposit",
  },
  {
    icon: require("../../../assets/images/home/main/kefu.png"),
    text: "在线客服",
    name: "service",
  },
  {
    icon: require("../../../assets/images/home/main/fapiao.png"),
    text: "我的发票",
    name: "invoice",
  },
  {
    icon: require("../../../assets/images/home/main/us.png"),
    text: "关于我们",
    name: "us",
    path: "/aboutUs",
  },
];

// const data = arr.map((item) => {
//   return item;
// });

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() { }
  render() {
    return (
      <div>
        {/* <div className={mineCss.Top}>
          <div className={mineCss.avatarPic}>
            <Avatar size={64} icon={<UserOutlined />} />
          </div>

          <div className={mineCss.Btn}>
            <Button
              type="ghost"
              inline
              size="small"
              style={{
                marginRight: "4px",
                marginLeft: "124px",
                backgroundColor: "#a38d6b",
                color: "white",
              }}
              onClick={() => {
                this.props.history.push("/login");
              }}
            >
              登录
            </Button>

            <Button
              type="ghost"
              inline
              size="small"
              style={{
                marginRight: "4px",
                backgroundColor: "#a38d6b",
                color: "white",
              }}
              onClick={() => {
                this.props.history.push("/regs");
              }}
            >
              注册
            </Button>
          </div>
        </div> */}

        {
          // 登录成功后的页面
        }

        <div className={mineCss.Tops}>
          <div className={mineCss.avatarPics}>
            <Avatar
              size={64}
              icon={<UserOutlined />}
              onClick={() => {
                this.props.history.push({
                  pathname: "/prosonData",
                });
              }}
            />
            <span className={mineCss.userFont}>Finok</span>
            <span className={mineCss.userLevel}>LV 1</span>
          </div>

          <div className={mineCss.userBack}>
            <span className={mineCss.BackFont}>0</span>
            <p className={mineCss.BackFonts}>aha值返利</p>
          </div>

          <div className={mineCss.userBacks}>
            <span className={mineCss.BackFontss}>0</span>
            <p className={mineCss.BackFonts}>优惠券</p>
          </div>
        </div>

        <div className={mineCss.crawl}>
          <div className={mineCss.order}>
            <p className={mineCss.orderFont}>我的订单</p>
            <Grid
              data={order}
              hasLine={false}
              onClick={() => {
                this.props.history.push({
                  pathname: "/userCenter",
                });
              }}
            />
          </div>
          <div className={mineCss.bgc}>
            <img src={beijingPic} alt=""></img>
          </div>
          <div className={mineCss.serve}>
            <p className={mineCss.serveFont}>我的服务</p>
            <Grid
              data={serve}
              hasLine={false}
              onClick={(el, index) => {
                this.props.history.push({
                  pathname: el.path,
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

Index = withAuth(Index);

export default Index;
// export default connect((state) => ({ state }))(Index);
