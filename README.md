# create-context-connect
将`React`的`Context`通过`connect`到组件，类似`React Redux`的`connect`

## 安装

`npm install --save react-widget-create-context-connect`

## 使用

```tsx
import { createContextConnect,createCombineConnect } from 'react-widget-create-context-connect'

interface IContext1 {
  name: string
  gender: number
}
interface IContext2 {
  age: number
}

const connect = createContextConnect(IContext1)
const combineConnect = createContextConnect({
  ctx1:IContext1,
  ctx2:IContext2,
})

// Component.ts
function Component(props: {username: string, age: number}){
  // TODO:
}

// 连接单个Context到组件
export default connect((value, ownProps) => {
  // value.name
  // value.gender
  return {
    username: value.name
  }
})(Component)

// 或

// 连接多个Context到组件
export default  combineConnect((values, ownProps) => {
  // values.ctx1.name
  // values.ctx1.gender
  // values.ctx2.age
  return {
     username: values.ctx1.name
  }
})(Component)


// App.tsx
import Component from './Component'

<Component age={18} />

```


