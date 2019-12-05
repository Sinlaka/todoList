import {createStore} from 'redux'
import reducer from './reducer'

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// 创建数据存储仓库
//如果浏览器有reducx-devtool(__REDUX_DEVTOOLS_EXTENSION__),就调用这个方法
export default store
