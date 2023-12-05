<template>
   <Transition-group ref="message" name="message-fade" @after-leave="handleAfterLeave">
    <div :class="ZhClass" @mouseenter="clearTimerFn"
      @mouseleave="startTimerFn">
    <span @click="handleAfterLeave">{{props.content}}</span>
  </div>
</Transition-group>

</template>

<script setup lang="ts">
import { computed,ref } from 'vue'
const props = defineProps({
  // 弹窗类型。枚举四种
  type: {
    type: String,
    default: 'info',
    validator: (value:string) => {
      return ["info", "success", "warning","danger"].includes(value);
    }
  },
  // 弹窗内容
  content: {
    type: String,
    default: 'messagesdsddsfsdfsdfsdfdsfdsfdsf'
  },
  // 弹窗延迟
  duration: {
    type: Number,
    default:-1
  },
})
const ZhClass = computed(() => {
  return ['zh-message', `zh-message-${props.type}`]
})
const info = (options)=>{initMessage(options,'info')}
const success = (options)=>{initMessage(options,'success')}
const warning = (options)=>{initMessage(options,'warning')}
const danger = (options)=>{initMessage(options,'danger')}
const initMessage = (options, type = 'info') => {
  let option = options || {}
  option.type = type
  const config = {
    type: option.type,
    message: option.message || 'message',
  }
}
const showMessage = ref(true)
const timer = ref<null | NodeJS.Timeout>(null)
const message = ref() // 当前组件实例
// 过渡消失离开之后
const handleAfterLeave = () => {
  // 销毁当前实例
  // console.log(message.value);
  
  // message.value.$distroy()
}
//鼠标离开之后开始计时
const startTimerFn = () => {
  // 时间大于0，开启倒计时，否则就是无限时间
  if (props.duration > 0) {
        timer.value = setTimeout(() => {
          close(); // 倒计时结束，隐藏弹窗
        }, props.duration);
      }
}
//鼠标进入之后停止计时
const clearTimerFn = () => {
  clearTimeout(Number(timer.value))
}
// 隐藏弹窗  会触发上面的handleAfterLeave函数
const close = () => {
  showMessage.value = false
}

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
.zh-message{
  max-width: 1200px;
  min-width: 100px;
  width:fit-content;
  min-height: 40px;
  line-height: 40px;
  border-radius: 5px;
  padding: 0 15px;
}

// 过渡效果样式
.message-fade-enter,
.message-fade-leave-active {
  opacity: 0;
  -webkit-transform: translate(-50%, -100%);
  transform: translate(-50%, -100%);
}
</style>