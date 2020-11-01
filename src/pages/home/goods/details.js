import React from 'react';
import { Carousel, ActionSheet } from 'antd-mobile';
import Css from '../../../assets/css/home/details/index.css';
import request from '../../../assets/js/utils/request'

class GoodsDetails extends React.Component {
  state = {
    goodsList: [{
      command: "人气推荐",
      detailUrl: "http://47.115.115.207:3004/img/xingtaochuliandetailpc.jpg",
      hotnum: 332,
      lunbo1: "http://47.115.115.207:3004/img/xingtaochulianlunbo1.jpg",
			lunbo2: "http://47.115.115.207:3004/img/xingtaochulianlunbo2.jpg",
			lunbo3: "http://47.115.115.207:3004/img/xingtaochulianlunbo3.jpg",
			lunbo4: "http://47.115.115.207:3004/img/xingtaochulianlunbo4.jpg",
      price: "￥298.00",
      salenum: 787,
      size1: "{'price':'198','size':'16cm*10cm*5cm','weight':'454g','num':'5'}",
      size2: "{'price':'298','size':'23cm*14cm*5cm','weight':'908g','num':'10'}",
      size3: "{'price':'428','size':'28cm*18cm*5cm','weight':'1.36kg','num':'15'}",
      size5: "{'price':'728','size':'36cm*22cm*5.5cm','weight':'2.27kg','num':'20'}",
      tag: "新品",
      taste: "['奶油','水果']",
      title: "杏桃初恋新品",
      type: "goods",
      url: "http://47.115.115.207:3004/img/xingtaochulian1.jpg",
      _id: "5f938ab36244821d9cfc30d3",
    }],
    data:['1','2','3','4']
  }


  dataBuy = this.state.goodsList.map(obj => ({
    icon: <span>{obj.size1.size}</span>,
    title: obj.price,
  }));

  dataGift = [].map(obj => ({}))

  //轮播图定时器
  componentDidMount() {
    let { id } = this.props.match.params
    request.get('/good/getcake', { params: { name: id } })
      .then(res => {
        this.setState({
          goodsList: res.data.data
        })
      })
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: [this.state.goodsList[0].lunbo1,
        this.state.goodsList[0].lunbo2,
        this.state.goodsList[0].lunbo3,
        this.state.goodsList[0].lunbo4],
      })
    }, 100)
  }

  //点击购买弹出的菜单
  showBuy = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataBuy,
      // title: 'title',
      message: '建议食用人数',
    },
      (buttonIndex) => {
        this.setState({ clicked1: buttonIndex > -1 ? this.dataList[buttonIndex].title : 'cancel' });
        // also support Promise
        return new Promise((resolve) => {
          setTimeout(resolve, 10);
        });
      });
  }

  showGift = () => {
    ActionSheet.showShareActionSheetWithOptions({
      options: this.dataGift,
      message: `赠品周末庆生专享赠盒子蛋糕
          即日起至2020.11.30，单笔正价购买此蛋糕并选择周五至周日配送，赠「盒子蛋糕」一个，两种口味(巧克力松露/草莓优格)任选。赠品可能会与蛋糕分开配送，请留意分批查收。本活动不与其他优惠同享(如优惠券、蛋糕券、兑换券、储值卡、银行优惠等)。            满减 限时立减60元         
          即日起至2020.10.31，单笔订单正价购买此蛋糕享60元立减优惠。本活动不与其他优惠同享(如优惠券、蛋糕券、兑换券、储值卡、银行优惠等)。`,
    },
      (buttonIndex) => {
        this.setState({});
        // also support Promise
        return new Promise((resolve) => {
          setTimeout(resolve, 10);
        });
      });
  }

  render() {
    return (
      <div>
        <div className={Css['bottom-nav']}>
          <ul className={Css['home']} onClick={() => {
            this.props.history.push('/home/index')
          }}>
            <li>&nbsp;</li>
          </ul>
          <ul className={Css['call']} >
            <li></li>
            <li>&nbsp;</li>
          </ul>
          <ul className={Css['cart']} onClick={() => {
            this.props.history.push('/home/cart')
          }}>
            <li></li>
            <li>&nbsp;</li>
            <li className={Css['spot'] + " hide"}></li>
          </ul>
          <ul className={Css['addCart']} >
            <li></li>
            <li>加入购物车</li>
          </ul>
        </div>
        <div>
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.data.map(val => (
              <a
                key={val}
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
              >
                <img
                  src={`${val}`}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top' }}
                  onLoad={() => {
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </div>
        <div className={Css['cakeName']}>
          <p>{this.state.goodsList[0].title}</p><i>&nbsp;</i>
          <p>{this.state.goodsList[0].price}</p>
          <div className={Css['vip']}>
            <h3>aha会员尊享多重礼遇</h3>
            <h4>开通仅￥99预计可省￥358</h4>
            <span>￥99开通 &gt;</span>
          </div>
          <div className={Css['buy']} onClick={this.showBuy}>
            已选规格：2-4人食
                    <b>＞</b> </div>
          <span>慕斯蛋糕</span>
          <div>甜度★★☆☆☆</div>
        </div>

        {/* 上下留间隙，漏出底色灰色 */}
        <div className={Css['gift']} onClick={this.showGift}>
          <span>赠品</span>&nbsp;
           周末庆生专享 赠盒子蛋糕
                    <i>&gt;</i>
        </div>
        <div>
          <h2 style={{backgroundColor:'while',textAlign:'center'}}>找寻心中美味</h2>
          <img src={this.state.goodsList[0].detailUrl} alt="" style={{width:'100%'}}/>
          <p>关于食用</p>
        </div>
        <div>
          <p>-猜你喜欢-</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default GoodsDetails;