# zh-ui

小竹合的ui库，刚刚开始写，希望各位大佬指导指导

# 开发规范
packages 文件目录下放组件格式为 新建文件夹 button下才放index.js index.vue

examples目录下放使用示例 格式为 新建文件夹 button 下放index.vue

新建分支规范: zh-feat/button zh-开发者 feat 新功能 button分支名

不要擅自发版! 版本号需要依次递增 找我就好

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

vue文件中使用 button 组件
```vue
<zh-button>按钮</zh-button>
<zh-button type='primary'>按钮</zh-button>
<zh-button type='success'>按钮</zh-button>
<zh-button type='info'>按钮</zh-button>
<zh-button type='warning'>按钮</zh-button>
<zh-button type='danger'>按钮</zh-button>
```

椭圆
```vue
<zh-button round>按钮</zh-button>
<zh-button type='primary' round>按钮</zh-button>
<zh-button type='success' round>按钮</zh-button>
<zh-button type='info' round>按钮</zh-button>
<zh-button type='warning' round>按钮</zh-button>
<zh-button type='danger' round>按钮</zh-button>
```
禁用
```vue
<zh-button disabled>按钮</zh-button>
<zh-button type='primary' disabled>按钮</zh-button>
<zh-button type='success' disabled>按钮</zh-button>
<zh-button type='info' disabled>按钮</zh-button>
<zh-button type='warning' disabled>按钮</zh-button>
<zh-button type='danger' disabled>按钮</zh-button>
```