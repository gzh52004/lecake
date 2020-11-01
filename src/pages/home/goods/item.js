import React from 'react';
import { NavBar, Icon, WingBlank, Carousel } from 'antd-mobile';
import Css from '../../../assets/css/home/item/index.css';
import request from '../../../assets/js/utils/request'

// 节流函数，每delay时间才执行一次
let delay = (function () {
    let timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

class GoodsItem extends React.Component {
    state = {
        cakeList: [],
        poster: ['http://newimgcdn.lapetit.cn/h5/images/temporary/goods/zeroSugarBanner.jpg?1020'],
        imgHeight: 176,
        num: 1,
    }

    async getCake() {
        if (this.state.cakeList.length > 30) {
            return
        }
        let { data: newCakeList } = await request.get('/good/allcakes', { params: { page: this.state.num, maxcount: 6 } })
        let cakeData = this.state.cakeList.concat(newCakeList.data)
        this.setState({
            cakeList: cakeData,
            num: this.state.num += 1,
        })
    }


    componentDidMount() {
        this.getCake()
        // 第一次渲染后，更新state后，判断是否存在contentNode元素，如果存在就开启监听
        if (this.contentNode) {
            this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
        }
    }

    // 判断页面是否滑到底部
    onScrollHandle(event) {
        const clientHeight = event.target.clientHeight
        const scrollHeight = event.target.scrollHeight
        const scrollTop = event.target.scrollTop
        const isBottom = (clientHeight + scrollTop + 1 >= scrollHeight)
        // 如果到达底部，就请求多6条数据回来
        if (isBottom) {
            // 使用节流函数防止多次触发事件
            delay(() => {
                this.getCake()
            }, 300);
        }
    }

    render() {
        return (
            <div ref={el => this.contentNode = el} className={Css['bigBox']}>
                <NavBar
                    mode="light"
                    icon={<Icon type="loading" />}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >
                    <span style={{ color: 'orangered' }}>综合</span>&nbsp;&nbsp;&nbsp;
                    <span>销量</span>&nbsp;&nbsp;&nbsp;
                    <span>0轻享</span>
                </NavBar>
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                    >
                        {this.state.poster.map(val => (
                            <a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`${val}`}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className={Css['listBox']}>
                    {this.state.cakeList.map(val => (
                        <div className={Css['cakeList']}
                            key={val._id}
                            onClick={() => {
                                this.props.history.push({
                                    pathname: '/goods/details/' + `${val.title}`
                                })
                            }}>
                            <img src={val.url} alt="" />
                            <p>{val.title}</p>
                            <p>{val.command}</p>
                            <p>{val.taste}</p>
                            <p>{val.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default GoodsItem;