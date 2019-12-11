import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM,GET_LIST} from './actionTypes'
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
