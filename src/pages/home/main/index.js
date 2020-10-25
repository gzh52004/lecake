import React,{lazy,Suspense} from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import Css from '../../../assets/css/home/main/index.css';
const IndexPage=lazy(()=>import("../index"));
const CartPage=lazy(()=>import("../cart"));
const CakePage=lazy(()=>import("../goods/item"));
const SnacksPage=lazy(()=>import("../goods/snacks"));
const UcenterPage=lazy(()=>import("../../user/ucenter"));
class Index extends React.Component {
    constructor(){
        super();
        this.state = {
            homeStyle:true,
            cartStyle:false,
            myStyle:false,
            cakeStyle:false,
            snacksStyle:false,
        }
    }
    componentDidMount() {
        this.setBottomNavStyle(this.props.location.pathname);
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.setBottomNavStyle(nextProps.location.pathname)
    }

    setBottomNavStyle(pathName){
        switch (pathName) {
            case window.base.config.path+"home/index":
                this.setState({homeStyle:true,cartStyle:false,myStyle:false,cakeStyle:false,snacksStyle:false});
                break;
            case window.base.config.path+"home/cart":
                this.setState({homeStyle:false,cartStyle:true,myStyle:false,cakeStyle:false,snacksStyle:false});
                break;
            case window.base.config.path+"home/my":
                this.setState({homeStyle:false,cartStyle:false,myStyle:true,cakeStyle:false,snacksStyle:false});
                break;
            case window.base.config.path+"home/cake":
                this.setState({homeStyle:false,cartStyle:false,myStyle:false,cakeStyle:true,snacksStyle:false});
                break;
            case window.base.config.path+"home/snacks":
                this.setState({homeStyle:false,cartStyle:false,myStyle:false,cakeStyle:false,snacksStyle:true});
                break;
            default:
                this.setState({homeStyle:true,cartStyle:false,myStyle:false,cakeStyle:false,snacksStyle:false});
                break;
        }
    }

    goPage(url){
        this.props.history.replace(window.base.config.path+url);
    }
    render() {
        return (
            <div>
                <div>
                    <Suspense fallback={<React.Fragment/>}>
                        <Switch>
                            <Route path={window.base.config.path+"home/index"} component={IndexPage}></Route>
                            <Route path={window.base.config.path+"home/cart"} component={CartPage}></Route>
                            <Route path={window.base.config.path+"home/cake"} component={CakePage}></Route>
                            <Route path={window.base.config.path+"home/snacks"} component={SnacksPage}></Route>
                            <Route path={window.base.config.path+"home/my"} component={UcenterPage}></Route>
                            <Redirect to={window.base.config.path+"home/index"}></Redirect>
                        </Switch>
                    </Suspense>
                </div>
                <div className={Css['bottom-nav']}>
                    <ul className={this.state.homeStyle?"ulnone "+Css["home"]+" "+Css['active']:"ulnone "+Css["home"]} onClick={this.goPage.bind(this, "home/index")}>
                        <li></li>
                        <li>首页</li>
                    </ul>
                    <ul className={this.state.cakeStyle?"ulnone "+Css["cake"]+" "+Css['active']:"ulnone "+Css["cake"]} onClick={this.goPage.bind(this, "home/cake")}>
                        <li></li>
                        <li>生日蛋糕</li>
                    </ul>
                    <ul className={this.state.snacksStyle?"ulnone "+Css["snacks"]+" "+Css['active']:"ulnone "+Css["snacks"]} onClick={this.goPage.bind(this, "home/snacks")}>
                        <li></li>
                        <li>OK零食</li>
                    </ul>
                    <ul className={this.state.cartStyle?"ulnone "+Css["cart"]+" "+Css['active']:"ulnone "+Css["cart"]} onClick={this.goPage.bind(this, "home/cart")}>
                        <li></li>
                        <li>购物车</li>
                        <li className={Css['spot']+" hide"}></li>
                    </ul>
                    <ul className={this.state.myStyle?"ulnone "+Css["my"]+" "+Css['active']:"ulnone "+Css["my"]} onClick={this.goPage.bind(this, "home/my")}>
                        <li></li>
                        <li>我的</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Index;