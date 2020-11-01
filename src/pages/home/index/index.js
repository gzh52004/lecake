import React from 'react';
import { connect } from 'react-redux';
import Css from '../../../assets/css/home/index/index.css';
import { setScrollTop } from '../../../assets/js/utils';
import { Carousel, WingBlank } from 'antd-mobile';


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['1', '2', '3', '4'],
            imgHeight: 176,
        };
        this.fnScrollTop = null;
    }



    componentDidMount() {
        setScrollTop(window.base.pages.index.scrollTop);
        this.fnScrollTop = this.eventScroll.bind(this);
        window.addEventListener("scroll", this.fnScrollTop);

        setTimeout(() => {
            this.setState({
                data: ['6CBE8D718604C6C57D195CED0E49B553', '8FCD7C761EB930B38E5B866DB2A412FF', '0525C81DA20E2262CAB09E2E7CB41AA8', '56F796928E9251C1C2CFEA30693C6535'],
            });
        }, 100);
    }

    eventScroll() {
        window.base.pages.index.scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.fnScrollTop)
    }

    render() {
        return (
            <div className={Css['page']}>
                <WingBlank>
                    <Carousel
                    // autoplay={false}
                    // infinite
                    // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    // afterChange={index => console.log('slide to', index)}
                    >
                        {this.state.data.map(val => (
                            < a
                                key={val}
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={`http://www.lecake.com/postsystem/docroot/images/app/${val}.jpg`}
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
                </WingBlank>


                <div className="section_aha auto_height">
                    <div className="inner auto_pos">
                        <div className="content">
                            <p>尊贵礼遇享不停，升级aha会员</p>
                            <p>预计可省¥358+，<a href="/h5/aha/index" class="more">了解更多</a></p>
                        </div>
                        <div className="btn_wrap">
                            <a class="btn" href="/h5/aha/index">
                                立即开通 ¥99/年                            </a>
                        </div>
                        <div className="bg_aha_rights">
                            <img src="//newimgcdn.lapetit.cn/h5/images/home/ahaRights.png?2020090201" alt=""></img>
                        </div>
                    </div>
                </div>


                <div className="foott">&nbsp;</div>
                {/* <div className={Css['goods-main']} onClick={() => { this.props.history.push(window.base.config.path + "goods") }}>产品</div> */}
            </div >
        )
    }
}
export default connect((state) => {
    return {
        state
    }
})(Index);