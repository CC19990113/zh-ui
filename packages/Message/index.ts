import Message from "./Message.vue";
import { createVNode, render, ref } from "vue";
// const flag = document.querySelector('.zh-message')
// let div:HTMLElement
// if (!flag) {
//   div = document.createElement('div')
// div.setAttribute('class', 'zh-message')
// document.body.appendChild(div)
// div.style.position = 'fixed'
// div.style.top = '20px'
// div.style.left = '50%'
// div.style.transform = 'translateX(-50%)'
// } else {

// }
// const count = ref(0)
// const cutCount = () => {
//   count.value--
//   let messageBoxDomList = document.querySelectorAll('.zh-message-success')
//   for (let i = 0; i < messageBoxDomList.length; i++) { // 遍历一下这个DOM伪数组
//     let dom = messageBoxDomList[i] // 所有的都往上移动60像素
//     dom.style['top'] = parseInt(dom.style['top']) - 60 + 'px'
// }
// }
// export default ({ type, content }) => {
//   count.value++
//   const vnode = createVNode(Message, { type, content })
//   render(vnode, div)
//   console.log(count.value);
 
// }