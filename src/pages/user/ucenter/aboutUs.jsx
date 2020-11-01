import React from 'react';
import { NavBar, Icon} from 'antd-mobile';
import usCss from '../../../assets/css/user/aboutUs.css'
import headerPic from '../../../assets/images/home/main/header1.jpg';

const Us = function (props) {
    return (
        <div>
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {
                    props.history.go(-1);
                }}
                ><p className={usCss.usNavFont}>关于我们</p></NavBar>
            </div>

            <div className={usCss.usImgWarp}>
                <img src={headerPic} alt="" className={usCss.usPic} />
            </div>

            <div className={usCss.usFontWarp}>
                <h2 className={usCss.usFont}>体验诺心LE CAKE之旅</h2>

                <p className={usCss.usFonts}>
                    倘若，没有走访世界各个都市的奇幻旅程，也许今日就无法将如此美妙的蛋糕时刻与更多的人分享，更不会找到它的名字"诺心LE CAKE"。诺心LE CAKE的创始人在游历各地的旅程中，品尝了独特创意的美食。而这行程中的点滴回忆，使她迸发出了烘培臻品蛋糕的灵感。
                </p>

                <p className={usCss.usFonts}>
                    于是，为了找寻黄金比例蛋糕配方的她，寻遍了世界各地的上等食材，潜心研究终将诺心LE CAKE完美呈现。也许，是法国巴黎浪漫午后，街边咖啡馆一抹淡淡的幽香；是美国纽约的精彩夜晚，顶级餐厅里甜点的香软绵密；是日本东京的可爱点心铺里，让人爱不释手的精致糕点。又或是香港好味大排档里浓香的丝滑奶茶。就是这些特色滋味，被诺心LE CAKE的创始人统统打包带回。为了将这些欢乐的蛋糕滋味分享给更多的人体验，我们将各国的传统蛋糕工艺与上等原料结合，使用适合的黄金比度烘焙出真正的精致蛋糕。诺心LE CAKE就这样优雅的出现在国人的生活中。
                </p>

                <p className={usCss.usFonts}>
                    诺心LE CAKE倡导用心烘培，秉持品质用心、服务用心、创意用心的理念，每个季节、假日，都会设计不同的产品及包装，用心将诺心LE CAKE打造成您眼中的精致礼物首选之一。我们尊崇欧洲黄金比例配方，烘焙浓情备至的甜蜜礼物，爱与欢乐、爱与分享，由我们为您与家人温馨送上。
                </p>
            </div>



        </div>
    )
}

export default Us;