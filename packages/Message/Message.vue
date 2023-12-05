<template>
  <div class="zh-message-box">
    <TransitionGroup name="list" tag="div">
      <div
      v-for="(item,index) in messageList"
      :key="item.id"
      :class="['zh-message', `zh-message-${item.type}`]"
      @mouseenter="clearTimerFn(index)"
      @mouseleave="startTimerFn(item,index)"
      >
        <span>{{item.message}}</span>
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import {  ref, watch } from 'vue'
type Option = {type:string,message:string,id:number,duration:number}
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
    duration: options.duration>0? options.duration : 3000,
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
const showMessage = ref(true)
//鼠标离开之后开始计时
const startTimerFn = (item,index) => {
  // 时间大于0，开启倒计时，否则就是无限时间
  if (item.duration > 0) {
        timerList.value![index] = setTimeout(() => {
          messageList.value.splice(0, 1);
        }, item.duration);
      }
}
//鼠标进入之后停止计时
const clearTimerFn = (index) => {
  clearTimeout(Number(timerList.value![index]))
}
// 
const close = () => {
  showMessage.value = false
}
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