import React, { Component } from 'react'

export default class Topic extends Component {
    constructor(){
        super();
        this.state = {
            data : {}
        }
    }
    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1/topic/' + id)
        .then((res)=>res.json())
        .then((res)=>{
            let data = res;
            console.log(data);
            this.setState({
                data : data.data
            })
        })
    }
    render() {
        return (
            <div className = 'topics'>
                <h1>{this.state.data.title}</h1>
                <div  dangerouslySetInnerHTML={{__html:this.state.data.content}}>
            </div>
            </div>
            
        )
    }
}
