# redux-thunk中间件



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
   
   //链式函数
   const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
   ​    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
   
   const enhancer = composeEnhancers(applyMiddleware(thunk))
   const store = createStore( reducer, enhancer) // 创建数据存储仓库，只能传两个参数
   
   export default store   //暴露出去
   ```


   
