import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route,Redirect} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Topic from './components/Topic';
import Login from './container/Login';
import All from './components/All';
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <div className='main'>
                        <div className="content">
                            <Route exact path = '/' component = {All}></Route>
                            <Route path = '/home' component = {Home}/>
                            <Route path='/api' component={Api} />
                            <Route path='/start' component={Start} />
                            <Route path='/about' component={About} />
                            <Route path='/login' component={Login} />

                            <Route path='/topic/:id' component={Topic} />

                        </div>
                        <div className="sider">
                            <div className='tip'>
                            <p>CNode:Node.js专业中文社区</p>
                            <p>您可以登录或注册，也可以</p>
                            <div><a>通过GitHub登录</a></div>                      
                            </div>
                            <div className='imglist'>
                                <img src='https://static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_'/>
                                <img src='https://static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS'/>
                                <img src='https://static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-'/>
                            </div>
                            <div className='topi'>
                                <h3 className='H3'>无人回复的话题</h3>
                                <p>关于egg-logger的一个问题,...</p>
                                <p>node安装完成后的npm -v检查...</p>
                                <p>前端react window.location.hr...</p>
                                <p>一种支持插件式开发的命令行...</p>
                                <p>请问缓存的内存模式是什么呢</p>
                            </div>     
                            <div className='credit'>
                                <h3>积分榜  TOP 100>></h3>
                                <p>21765  i5ting</p>
                                <p>15675  alsotang</p>
                                <p>9350   leapon</p>
                                <p>9150   atian25</p>
                                <p>8780   jiyinyiyong</p>
                                <p>7340   yakczh</p>
                                <p>6825   im-here</p>
                                <p>6095   DevinXian</p>
                                <p>5815   chapgaga</p>
                                <p>5350   magicdawn</p>
                            </div>

                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}