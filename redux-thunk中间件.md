# redux中间件

## redux-thunk中间件



```
npm install --save redux-thunk
```

## 安装配置

1. 引入**applyMiddleware**,如果你要使用中间件，就必须在redux中引入applyMiddleware.

   ```
   import { createStore , applyMiddleware } from 'redux'
   ```

2.  引入**redux-thunk**库

   ```
   import thunk from 'redux-thunk'
   ```

3. **增强函数compose**

   ```jsx
   import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
   import reducer from './reducer'    
   import thunk from 'redux-thunk'
   
   //增强函数相当于链式函数
   const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   ​    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
   
   const enhancer = composeEnhancers(applyMiddleware(thunk))
   const store = createStore( reducer, enhancer) // 创建数据存储仓库，只能传两个参数
   
   export default store   //暴露出去
   ```



可以看出来redux-thunk最重要的思想，就是可以接受一个返回函数的action creator。如果这个action creator 返回的是一个函数，就执行它，如果不是，就按照原来的next(action)执行。
 正因为这个action creator可以返回一个函数，那么就可以在这个函数中执行一些异步的操作。
 例如：

```jsx
export function addCount() {
  return {type: ADD_COUNT}
} 
export function addCountAsync() {
  return dispatch => {
    setTimeout( () => {
      dispatch(addCount())
    },2000)
  }//欢迎加入全栈开发交流圈一起学习交流：864305860
}//面向1-3年前端人员
```

## redux-saga中间件

