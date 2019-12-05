import React, { Component } from 'react';

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
        this.clickFun=this.clickFun.bind(this)
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <div><button onClick={this.clickFun}>点击增加</button></div>
            </div>);
    }
    clickFun(){
        var count=this.state.count;
        count++;
        this.setState({
            count:count
        })
    }
}

export default Example;