//***Reducer里只能接收state，不能改变state。***//
//默认数据
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionTypes'

const defaultStore = {
    emptyText: 'write something',
    inputValue:"gg",
    list: [
        't推拿',
        '针灸']
}

/**Reducer里只能接收state，不能改变state
 *  方法函数
 * @param state  指的是原始仓库里的状态
 * @param action 指的是action新传递的状态
 */
export default (state = defaultStore, action) => {
    console.log(state, action)
    //因为不能改变原本的state,重新克隆深拷贝一个state返回过去
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case CHANGE_INPUT:
            newState.inputValue = action.inputValue
            return newState;
        case ADD_ITEM:
            newState.list.add(action.inputValue);
            return newState;
        case DELETE_ITEM:
            newState.list.splice(action.index,1);
            return newState;
    }
    return state
}
