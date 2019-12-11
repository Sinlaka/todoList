import React, {Component} from 'react';
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI'
import store from './store/index'

import axios from 'axios'

import {changeInputAction, addItemAction, deleteItemAction, getListAction} from './store/actionCreators'

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
        this.deleteItem = this.deleteItem.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    componentDidMount() {
        axios.get('/getList').then((res) => {
            console.log(res)
            // let list = res.data.list;
            // this.setState({
            //     list:list
            // })
            store.dispatch(getListAction(res.data))

        }).catch((err) => {

        })
    }

    render() {
        return (
            <TodoListUI
                emptyText={this.state.emptyText}
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInput={this.changeInput}
                addItem={this.addItem}
                deleteItem={this.deleteItem}
            />
        );
    }

    //key={item + index}
    changeInput(e) {
        store.dispatch(changeInputAction(e.target.value))
    }

    addItem(e) {
        store.dispatch(addItemAction(this.state.inputValue))
    }

    deleteItem(index) {
        // console.log(index)
        store.dispatch(deleteItemAction(index))
    }

    storeChange() {
        this.setState(store.getState())
    }
}

export default TodoList;
