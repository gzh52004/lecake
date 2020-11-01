import React,{lazy,Suspense} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
// import GoodsNav from '../../../components/goodsNav';
const GoodsItem=lazy(()=>import("./item"));
const GoodsDetails=lazy(()=>import("./details"));
const GoodsReview=lazy(()=>import("./review"));
class Index extends React.Component {

    render() {
        return (
            <div>
                {/* <button type="button" onClick={this.props.history.go.bind(this,-1)}>返回</button> */}
                {/* <GoodsNav></GoodsNav> */}
                <div>
                    <Suspense fallback={<React.Fragment/>}>
                        <Switch>
                            <Route path={window.base.config.path+"goods/item"} component={GoodsItem}></Route>
                            <Route path={window.base.config.path+"goods/details/:id"} component={GoodsDetails}></Route>
                            <Route path={window.base.config.path+"goods/review"} component={GoodsReview}></Route>
                            <Redirect to={window.base.config.path+"goods/item"}></Redirect>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        )
    }
}

export default Index;