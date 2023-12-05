<template>
    <div class="zh-message-box">
      <div
      v-for="(item,index) in messageList"
      :key="item.id"
      :class="['zh-message', `zh-message-${item.type}`]"
      :ref= 'el => { if (el) contentList[index] = el}'
      @mouseenter="clearTimerFn"
      @mouseleave="startTimerFn"
    >
    <span>{{item.message}}</span>
  </div>
    </div>
</template>

<script setup lang="ts">
import { ComponentOptionsBase, ComponentPublicInstance, ref, watch } from 'vue'
type Option = {type:string,message:string,id:number,duration:number}
setInterval(() => {
  // success({})
  // console.log(messageList.value.length);
}, 2000);
const messageList = ref([] as Option[])
const contentList = ref([] as Element| ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}>, {}, {}>[])
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
    // 倒计时开启的时候先给需要隐藏的元素加类名，然后再删除
    setTimeout(() => {
      contentList.value[0].className += ' messageHide';
      setTimeout(() => {
        messageList.value.splice(0, 1);
      }, 300);
    }, config.duration + messageList.value.length * 1000);
  }
}
watch(() => messageList.value.length, () => {
  console.log(messageList.value.length);
  // if (messageList.value.length >= 3) {
    // messageList.value.shift()
  // }
})
const showMessage = ref(true)
const timer = ref<null | NodeJS.Timeout>(null)
//鼠标离开之后开始计时
const startTimerFn = () => {
  // // 时间大于0，开启倒计时，否则就是无限时间
  // if (props.duration > 0) {
  //       timer.value = setTimeout(() => {
  //         close(); // 倒计时结束，隐藏弹窗
  //       }, props.duration);
  //     }
}
//鼠标进入之后停止计时
const clearTimerFn = () => {
  // clearTimeout(Number(timer.value))
}
// 隐藏弹窗  会触发上面的handleAfterLeave函数
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
  animation: messageShow .5s;
  animation-fill-mode: forwards;
  animation-iteration-count:1; /*动画只执行一次*/
}

.messageHide {
        animation: messageHide .2s linear;
        animation-fill-mode: forwards;
    }
@keyframes messageShow {
    0% {
        transform: translateY(-50px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes messageHide {
    0% {
        transform: translateY(0);
        opacity: 1;
    }
    100% {
        transform: translateY(-50px);
        opacity: 0;
    }
}
</style>