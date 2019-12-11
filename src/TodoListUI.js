// import React, {Component} from 'react';
//无状态组件不需要引用{Component}
import React from 'react'

import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

//无状态组件，没有state,适用于只有UI层
const TodoListUI = (props) => {
    console.log('无状态组件参数',props)
    return (
        <div>
            <Input placeholder={props.emptyText}
                   value={props.inputValue}
                   style={{width: '200px', margin: '10px'}}
                   onChange={props.changeInput}
            />
            <Button type="primary" onClick={props.addItem}>Primary</Button>
            <List
                bordered
                dataSource={props.list}
                renderItem={
                    (item, index) => (
                        <List.Item onClick={() => {
                            props.deleteItem(index)
                        }}>
                            {item}
                        </List.Item>
                    )
                }
            ></List>
        </div>
    );
}
//继承于Component组件，有状态
// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return (
//             <div>
//                 <Input placeholder={this.props.emptyText}
//                        value={this.props.inputValue}
//                        style={{width: '200px', margin: '10px'}}
//                        onChange={this.props.changeInput}
//                 />
//                 <Button type="primary" onClick={this.props.addItem}>Primary</Button>
//                 <List
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => <List.Item onClick={()=>{this.props.delItem(index)}}>{item}</List.Item>}></List>
//             </div>
//         );
//     }
//
// }

export default TodoListUI;
//              renderItem={(item, index) => <List.Item onClick={(index)=>{//这个index不需要传，外面已经传过了
//                    this.props.delItem(index) }
//                    }>{item}</List.Item>
//                }></List>
