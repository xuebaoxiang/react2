import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import All from '../components/All';
import Good from '../components/Good';
import Share from '../components/Share';
import Ask from '../components/Ask';
import Job from '../components/Job';
import Dev from '../components/Dev';
export default class Home extends Component {
    render() {
        return (
            <Router>
            <div className = 'navtab'>
               <Link to = '/home/all' >全部</Link>
               <Link to = '/home/good' >精华</Link>
               <Link to = '/home/share' >分享</Link>
               <Link to = '/home/ask' >问答</Link>
               <Link to = '/home/job' >招聘</Link>
               <Link to = '/home/dev' >客户端测试</Link>
            </div>
            <div className = 'tablelist'>
                <Switch>
                <Route exact path = '/' component = {All}/>
                <Route exact path = '/home' component = {All}/>
                <Route exact path = '/home/all' component = {All}/>
                <Route exact path = '/home/all/:pages' component = {All}/>
                <Route exact path = '/home/good'  component = {Good}/>
                <Route exact path = '/home/good/:pages'  component = {Good}/>
                <Route exact path = '/home/share'  component = {Share}/>
                <Route exact path = '/home/share/:pages'  component = {Share}/>
                <Route exact path = '/home/ask'  component = {Ask}/>
                <Route exact path = '/home/ask/:pages'  component = {Ask}/>
                <Route exact path = '/home/job'  component = {Job}/>
                <Route exact path = '/home/job/:pages'  component = {Job}/>
                <Route exact path = '/home/dev'  component = {Dev}/>
                </Switch>
            </div>
            
            </Router>
           
        )
    }
}
