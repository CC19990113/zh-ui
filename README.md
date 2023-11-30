# zh-ui

小竹合的ui库，刚刚开始写，希望各位大佬指导指导

# how to use?
```
npm install xiaozh-ui
```

全局引入方式

main.js 引入
```js
import ZhUI from "xiaozh-ui"
import 'xiaozh-ui/style.css';

app.use(ZhUI)
```

vue文件中使用
```vue
<zh-button type="success">按我</zh-button>
<zh-button type="warning">按你</zh-button>
```