import React from 'react';
import { Tabs} from 'antd-mobile';
import userCss from '../../../assets/css/user/userCenter.css';
import oederPit from '../../../assets/images/home/main/order_empty.png';
import { NavBar, Icon } from 'antd-mobile';
// import { withAuth } from "../../../utils/hoc";

const UserCender = function(props) {

    const tabs = [
        { title: '全部' },
        { title: '待付款' },
        { title: '代发货' },
        { title: '待收货' },
      ];

    return (
        <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                    props.history.go(-1);
                    }}
                    style={{backgroundColor:'#e6e6e6'}}
                      >订单管理</NavBar>
                    
                <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false} tabBarBackgroundColor="#e6e6e6" >
                <div className={userCss.menuContent}>
                   <div>
                        <img src={oederPit} alt="" className={userCss.orderPic} />
                        <p className={userCss.orderPicFont}>您还没有相对的订单哦</p>
                        <p className={userCss.orderPicFont}>快去订购逛逛吧~</p>
                   </div>
                </div>

                <div className={userCss.menuContent}>
                    <div>
                        <img src={oederPit} alt="" className={userCss.orderPic} />
                        <p className={userCss.orderPicFont}>您还没有相对的订单哦</p>
                        <p className={userCss.orderPicFont}>快去订购逛逛吧~</p>
                   </div>   
                </div>

                <div  className={userCss.menuContent}>
                    <div>
                        <img src={oederPit} alt="" className={userCss.orderPic} />
                        <p className={userCss.orderPicFont}>您还没有相对的订单哦</p>
                        <p className={userCss.orderPicFont}>快去订购逛逛吧~</p>
                   </div>
                </div>

                <div  className={userCss.menuContent}>
                    <div>
                        <img src={oederPit} alt="" className={userCss.orderPic} />
                        <p className={userCss.orderPicFont}>您还没有相对的订单哦</p>
                        <p className={userCss.orderPicFont}>快去订购逛逛吧~</p>
                   </div>

                </div>
                </Tabs>



        </div>
    )
}


export default UserCender;