import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import axios from 'axios'
import store from './store/index'

const data = [
    '早8点开晨会，分配今天的开发工作',
    '早9点和项目经理作开发需求讨论会',
    '晚5:30对今日代码进行review'
]

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.buttonClick = this.buttonClick.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
        // console.log(this.state)
    }

    componentDidMount() {
        axios.get('/getList').then((res) => {
            //console.log(res)
        }).catch((err) => {

        })
    }

    render() {
        return (
            <div>
                <Input placeholder={this.state.emptyText}
                       value={this.state.inputValue}
                       style={{width: '200px'}}
                    // ref={(Input) => {
                    //     this.Input = Input
                    // }}
                       onChange={this.buttonClick}/>

                <Button type="primary">Primary</Button>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={item => <List.Item>{item}</List.Item>}></List>
            </div>
        );
    }

    buttonClick(e) {
        const action = {
            type: 'changeInput',
            emptyText: e.target.value
        }
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
}

export default TodoList;
