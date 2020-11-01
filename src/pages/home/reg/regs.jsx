import React from 'react';
import { Form, Input, Button,message} from 'antd';
import request from '../../../assets/js/utils/requests';
import { NavBar, Icon } from 'antd-mobile';

import RegsCss from '../../../assets/css/home/reg/regs.css'
import qqPic from "../../../assets/images/home/main/qq.png";


//   const layout = {
//     labelCol: { span: 2 },
//     wrapperCol: { span: 5 },
//   };
//   const tailLayout = {
//     wrapperCol: {  span: 5 },
//   };

//   const rules = {

//     // 检测用户名是否存在
//     username:[
//         { 
//             required: true, message: '用户名不能为空!' 
//         },
//         {
//             // 自定义校验规则
//           async  validator(rule, value) {
//             if(!value) {
//                 return
//             }

//             // 根据输入的用户名去校验该用户名是否已经被注册 发送ajax 请求
//            const {data} = await request.get('/user/checkname',{
//                params:{
//                    name:value
//                }
//            });
//                 console.log("data=",data);
//                 // debugger;
//                 if (data.code === 1) {
//                   return Promise.resolve();
//                 }
               
//                 return Promise.reject('用户名已存在!');  
//         }
//     }
//     ],

//     // 检测密是否符合规则
//     password:[
//         { 
//             required: true, message: '密码不能为空!'
//          },
//          {
//              // 校验密码的长度符不符合规则
//              min:6,max:12,message:"密码不符，长度需在6-12位字符"
//          }
//     ],
//   } 

  // 注册
// const onFinish = async (values)=>{
//    const {data} = await request.post('/user/regist',values);
//         if(data.code === 1){
//             message.success('注册成功')
//             }

//         this.props.history.push({

//                 pathname:"/login",
//                 state:{username:values.username}

//             });

// }



// class Regs extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//       }
//     render() {
//         return (
//             <div>
//                 <div>
//                     <p className={RegsCss.regFont}>
//                         注册
//                     </p>
//                 </div>
//                 <div className={RegsCss.formWarp}>
//                 <Form
//                     {...layout}
//                     name="basic"
//                     initialValues={{ remember: true }}
//                     onFinish={onFinish}
//                     //onFinishFailed={onFinishFailed}
                    
//                     >
//                     <Form.Item
//                         label="用户名"
//                         name="username"
//                         rules={rules.username}
//                         hasFeedback
//                     >
//                     <Input  className={RegsCss.IptBtn} />
//                     </Form.Item>

//                     <Form.Item
//                         label="密码"
//                         name="password"
//                         rules={rules.password}
//                     >
//                         <Input.Password className={RegsCss.IptBtn}/>
//                     </Form.Item>

//                     <Form.Item {...tailLayout}>
//                         <Button 
//                             type="primary" htmlType="submit"
//                             className={RegsCss.regBtn}

//                         >
//                         注册
//                         </Button>
//                     </Form.Item>
//                 </Form>
//                 </div>

//                 <div style={{ marginLeft: 40, marginTop: 100 }}>
//                     <p style={{ fontSize: 14 }}>
//                         ------------------其他登录方式------------------
//                     </p>
//                     </div>

//                     <div style={{ marginLeft: 150, marginTop: 30 }}>
//                     <a href="https://wx01.lecake.com/customer/union-login.html?t=qq&amp;return_url=http://wx01.lecake.com/h5/customer/index">
//                         <img src={qqPic} alt="qq"></img>
//                     </a>
//                 </div>
//             </div>
//         )
//     }
// }

const Regs = function(props) {

        
    const layout = {
        labelCol: { span: 2 },
        wrapperCol: { span: 5 },
    };
    const tailLayout = {
        wrapperCol: {  span: 5 },
    };


    // 注册验证
    const rules = {
        // 检测用户名是否存在
        username:[
            { 
                required: true, message: '用户名不能为空!' 
            },
            {
                // 自定义校验规则
              async  validator(rule, value) {
                if(!value) {
                    return
                }
    
                // 根据输入的用户名去校验该用户名是否已经被注册 发送ajax 请求
               const {data} = await request.get('/user/checkname',{
                   params:{
                       name:value
                   }
               });
                    console.log("data=",data);
                    // debugger;
                    if (data.code === 1) {
                      return Promise.resolve();
                    }
                   
                    return Promise.reject('用户名已存在!');  
            }
        }
        ],
    
        // 检测密是否符合规则
        password:[
            { 
                required: true, message: '密码不能为空!'
             },
             {
                 // 校验密码的长度符不符合规则
                 min:6,max:12,message:"密码不符，长度需在6-12位字符"
             }
        ],
      };

    // 注册 跳转
    const onFinish = async (values)=>{
        const {data} = await request.post('/user/regist',"name="+ values.username + "&password=" + values.password );
            console.log('values=',values);
             if(data.code === 1){
                 message.success('注册成功')
                 }
                 
                 // 注册成功后跳转页面
                props.history.push({
                     pathname:"/login",
                     state:{username:values.username}
                 });
     }

      return(
        <div>

             <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {
                  props.history.go(-1);
                }}
                >注册</NavBar>

            <div className={RegsCss.formWarp}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    //onFinishFailed={onFinishFailed}
                    
                    >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={rules.username}
                        hasFeedback
                    >
                    <Input  className={RegsCss.IptBtn} />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={rules.password}
                    >
                        <Input.Password className={RegsCss.IptBtn}/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Button 
                            type="primary" htmlType="submit"
                            className={RegsCss.regBtn}

                        >
                        注册
                        </Button>
                    </Form.Item>
                </Form>
                <div>
                    <p  className={RegsCss.logFont} onClick={() => {
                        props.history.push('/login')
                    }}>
                    已有账号？立即登录 &nbsp;&nbsp;&nbsp;&gt;&gt;
                    </p>
                </div>
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
      )
}









export default Regs;