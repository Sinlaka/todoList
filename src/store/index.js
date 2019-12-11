import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
//中间件
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
//加强函数，这样就能同时执行两个window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()和applyMiddleware(thunk)
const enhancer = composeEnhancers(applyMiddleware(thunk))

//store是惟一的,createStore只能接受两个参数
const store = createStore(reducer, enhancer)
// 创建数据存储仓库
//如果浏览器有reducx-devtool(__REDUX_DEVTOOLS_EXTENSION__),就调用这个方法
export default store
