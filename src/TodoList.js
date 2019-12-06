import React, {Component} from 'react';
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'
import axios from 'axios'
import store from './store/index'

import {changeInputAction, addItemAction, deleteItemAction} from './store/actionCreators'
//知识点：
// Store的角色是整个应用的数据存储中心，集中大部分页面需要的状态数据；
// ActionCreators ,view 层与data层的介质；
// Reduce ，接收action并更新Store。
// 所以流程是 用户通过界面组件 触发ActionCreator，携带Store中的旧State与Action 流向Reducer,Reducer返回新的state，并更新界面。


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInput = this.changeInput.bind(this)
        this.addItem = this.addItem.bind(this)

        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
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
                       style={{width: '200px', margin: '10px'}}
                       ref='input'
                       onChange={this.changeInput}
                />
                <Button type="primary" onClick={this.addItem}>Primary</Button>
                <List
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item, index) => <List.Item onClick={this.delItem.bind(this,index)}>{item}</List.Item>}></List>
            </div>
        );
    }

    //key={item + index}
    changeInput(e) {
        store.dispatch(changeInputAction(e.target.value))
    }

    addItem(e) {
        //console.log(this.refs)
        store.dispatch(addItemAction(this.state.inputValue))
    }

    delItem(e,index) {
        store.dispatch(deleteItemAction(index))
    }

    storeChange() {
        this.setState(store.getState())
    }
}

export default TodoList;
