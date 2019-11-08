import React, { Component } from 'react'
import {Link} from 'react-router-dom';
export default class Login extends Component {
    render() {
        return (
           <div>
               <div id = 'login'>
                   <Link style={{color:'green'}} to='/home'>主页</Link>
                   <Link to='#'>/ 登录</Link>
               </div>
               <div id ='input'>
                <div id='input1'> 
                <label for = 'username'/>用户名
                <input type ='text' id = 'username'/>
                </div>
                <div id='input2'>
                <label for='pwd'/>密码
                <input type='password' id='pwd'/>
                </div>
                <div id='loginbutton'>
                    <Link to='/home'>登录</Link>
                </div>
               </div>
           </div>
        )
    }
}
