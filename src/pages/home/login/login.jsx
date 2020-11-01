import React from 'react';
import { Form, Input, Button, message } from 'antd';
import { NavBar, Icon } from 'antd-mobile';
 import request from '../../../assets/js/utils/requests';

import RegsCss from '../../../assets/css/home/login/login.css'
import qqPic from "../../../assets/images/home/main/qq.png";





    const layout = {
      labelCol: { span: 2 },
      wrapperCol: { span: 5 },
    };

    const tailLayout = {
      wrapperCol: {  span: 5 },
    };

    const rules = {
      // 检测用户名是否存在
      username:[{required: true, message: '用户名不能为空!'}],

      // 检测密是否符合规则
      password:[
          { 
              required: true, message: '密码不能为空!'
          },
      ],
    } 


const Login = function(props) {

  const onFinish = async (values)=>{
      const {data} = await request.get('/user/login',"name=" + values.username + "&password=" + values.password);
            localStorage.setItem('currentUser',JSON.stringify(data))
          if(data.code === 1){
              message.success('登录成功')
                // 注册成功后跳转页面
                props.history.push({
                  pathname:"/home/my"
              });
              // 登录成功后 将信息保存在本地存储里
              
          } else {
            message.error('用户名或密码错误')
          }
              
      
      }

      return (
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {
                  props.history.go(-1);
                }}
                >登录</NavBar>

            <div className={RegsCss.formWarp}>
              <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  // onFinishFailed={onFinishFailed}
                  
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
                        <Button type="primary" htmlType="submit"
                            className={RegsCss.loginBtn}
                        >
                        登录
                        </Button>
                    </Form.Item>
              </Form>

              <div>
                    <p  className={RegsCss.logFont} 
                    onClick={() => {
                        props.history.push('/regs')
                    }}>
                    没有账号？免费注册 &nbsp;&nbsp;&nbsp;&gt;&gt;
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

export default Login;
