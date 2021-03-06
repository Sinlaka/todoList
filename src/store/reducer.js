//***Reducer里只能接收state，不能改变state。***//
//默认数据
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST} from './actionTypes'

const defaultStore = {
    emptyText: 'write something',
    inputValue: "gg",
    list: [
        't推拿',
        '针灸']
}
//Reducer必须是纯函数：如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数。
/**Reducer里只能接收state，不能改变state
 *  方法函数
 * @param state  指的是原始仓库里的状态
 * @param action 指的是action新传递的状态
 */
export default (state = defaultStore, action) => {
    // console.log(state, action)
    //因为不能改变原本的state,重新克隆深拷贝一个state返回过去
    let newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case GET_LIST:
            if (action.data.list) {
                newState.list = action.data.list;
            }
            return newState;
        case CHANGE_INPUT:
            newState.inputValue = action.inputValue
            return newState;
        case ADD_ITEM:
            newState.list.push(action.inputValue);
            newState.inputValue = "";
            return newState;
        case DELETE_ITEM:
            newState.list.splice(action.index, 1);
            return newState;
        default:
            console.log('action',action)
            return state
    }
    // return state
}
