import React from "react";
import { NavBar, Icon, List, DatePicker} from 'antd-mobile';
import { Avatar, Button, Form} from "antd";
import { UserOutlined } from "@ant-design/icons";
import ProsonCss from '../../../assets/css/user/proson.css'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

const Item = List.Item;

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
if (minDate.getDate() !== maxDate.getDate()) {
  // set the minDate to the 0 of maxDate
  minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

const tailLayout = {
    wrapperCol: {  span: 5 },
  };




class Proson extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        date: now,
        time: now,
        utcDate: utcNow,
        dpValue: null,
        customChildValue: null,
        visible: false,
        disabled: false,
    }
}
  render() {
    return (
        <div>
            <div>
                <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {
                    this.props.history.go(-1);
                }}
                ><p className={ProsonCss.navFont}>个人资料</p></NavBar>
            </div>

            <div className={ProsonCss.usersPic}>
                <Avatar size={64} icon={<UserOutlined />} />
            </div> 

            <div className={ProsonCss.users}>
                <List className="my-list">
                    <Item>账号:</Item>
                </List>

                <List className="my-list">
                    <Item>性别:</Item>
                </List>

                <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
                    <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    onChange={date => this.setState({ date })}
                    >
                    <List.Item arrow="horizontal">出生日期:</List.Item>
                    </DatePicker>
                </List>
            </div>
          
            <div>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit"
                        className={ProsonCss.prosonBtn}
                    >
                    保存
                    </Button>
                </Form.Item>
            </div>

            <div>
                <button
                 type='button'
                 className={ProsonCss.exitFont}
                 onClick={()=>{
                      window.localStorage.clear()
                      this.props.history.push('/home/index')   
                 }}
                 >退出登录</button>
            </div>


        </div>

    );
  }
}





export default Proson;













// const Proson = function(props) {

//     return (
//         <div>


//          
//         <div>
//             <p>账号:</p>
//             <p>性别:</p>
//             <List className="date-picker-list" style={{ backgroundColor: 'white' }}>
//             <DatePicker
//             visible={this.state.visible}
//             value={this.state.dpValue}
//             onOk={date => this.setState({ dpValue: date, visible: false })}
//             onDismiss={() => this.setState({ visible: false })}
//             />

//             <DatePicker
//             mode="time"
//             format="HH:mm"
//             title="Select Time"
//             value={this.state.customChildValue}
//             onChange={v => this.setState({ customChildValue: v })}
//             extra="click to choose"
//             >
         
//         </DatePicker>
            
//             </List>
//         </div>
//     </div>
//     )
// }