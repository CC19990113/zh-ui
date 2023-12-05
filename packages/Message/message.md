# message消息通知

使用方法

在vue文件中单独引入

```vue
import Message from '../packages/Message'
Message.success({message:'123123'})
```

在main.js中挂载到window上
```js
import Message from '../packages/Message'
window.message = Message

//页面中使用

message.success({message:'123'})
```