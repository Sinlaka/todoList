import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'
import axios from "axios";

//()=>({}) es6 直接返回一个对象
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    inputValue: value
})
export const addItemAction = (value) => ({
    type: ADD_ITEM,
    inputValue: value
})
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index: index
})
export const getListAction = (data) => ({
    type: GET_LIST,
    data: data
})
/**
 *直接将thunk中间件引入，放在applyMiddleware方法之中，传入createStore方法，就完成了store.dispatch()的功能增强。即可以在reducer中进行一些异步的操作
 * 正因为这个action creator可以返回一个函数，那么就可以在这个函数中执行一些异步的操作
 * @returns {Function}
 */
export const getTodoList = () => {
    /**自带参数
     * ƒ dispatch() {return _dispatch.apply(void 0, arguments);}
     */
    return (dispatch) => {
        axios.get('/getList').then((res) => {
            var action = getListAction(res.data);
            dispatch(action);
        }).catch((err) => {
        })
    }
}
//放到这个actionCreator里，还方便自动化测试，直接调getTodoList()
