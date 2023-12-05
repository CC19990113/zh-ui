<template>
  <div class="zh-message-box">
    <TransitionGroup name="list" tag="div" style="display: flex; align-items: center;; flex-direction: column;">
      <div
        v-for="(item) in messageList"
        :key="item.id"
        :class="['zh-message', `zh-message-${item.type}`]"
      >
        <span>{{item.message}}</span>
        <span class="close" v-if="item.close" @click="close(item)">X</span>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import {  ref, watch } from 'vue'
type Option = {type:string,message:string,id:number,duration:number,close:boolean}
const messageList = ref([] as Option[])
const timerList = ref([] as null | NodeJS.Timeout[]) /*倒计时的数组*/
const info = (options:Option)=>{initMessage(options,'info')}
const success = (options:Option)=>{initMessage(options,'success')}
const warning = (options:Option)=>{initMessage(options,'warning')}
const danger = (options:Option)=>{initMessage(options,'danger')}
const initMessage = (options:Option, type = 'info') => {
  let option = options || {}
  option.type = type
  const config = {
    type: option.type,
    message: option.message || 'message',
    duration: options.duration > 0 ? options.duration : 3000,
    close: option.close ? true : false,
    id: +new Date().getTime()
  }
  messageList.value.push(config)
  // 如果传入的倒计时不为0 就开启倒计时
  if (config.duration != 0) {
    timerList.value?.push(setTimeout(() => {
        messageList.value.splice(0, 1);
    }, config.duration + messageList.value.length * 200))  
  }
}
// 最多存在15个弹窗
watch(() => messageList.value.length, () => {
  if (messageList.value.length >= 16) {
    messageList.value.shift()
  }
})
const close = (item: { id: number; }) => {
  const index = messageList.value.findIndex(items => items.id === item.id);
  if (index != -1) {
    messageList.value.splice(index, 1);
  }
}
//鼠标离开之后开始计时
// @mouseenter="clearTimerFn(index)"
// @mouseleave="startTimerFn(item,index)"
// const startTimerFn = (item: { duration: number | undefined; },index: string | number) => {
//   // 时间大于0，开启倒计时，否则就是无限时间
//   if (item.duration! > 0) {
//         timerList.value![index] = setTimeout(() => {
//           messageList.value.splice(0, 1);
//         }, item.duration);
//       }
// }
// //鼠标进入之后停止计时
// const clearTimerFn = (index: string | number) => {
//   clearTimeout(Number(timerList.value![index]))
// }
// 
defineExpose({
  info,
  success,
  warning,
  danger
})
</script>

<style lang="scss" scoped>
  $colors: (
  success: #67c23a,
  info: #909399,
  warning: #e6a23c,
  danger: #f56c6c
);
$backgroundColors: (
  success: #d1edc4,
  info: #dedfe0,
  warning: #f8e3c5,
  danger: #fcd3d3
);
@each $key, $value in $colors {
  .zh-message-#{$key} {
    color: $value;
  }
}
@each $key, $value in $backgroundColors {
  .zh-message-#{$key} {
    background-color: $value;
  }
}
.zh-message-box {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.zh-message{
  max-width: 1200px;
  min-width: 100px;
  width:fit-content;
  min-height: 40px;
  line-height: 40px;
  border-radius: 5px;
  padding: 0 15px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .close {
    color: #999;
    font-size: 12px;
    cursor: pointer;
  }

}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-leave-to ,
.list-enter-from{
  opacity: 0;
  transform: translate(0,-50px);
}
.list-leave-active {
  position: absolute;
}
</style>