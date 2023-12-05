<template>
  <Transition name="messageBox">
    <div v-if="flag" class="zh-message-mask">
      <div class="zh-message-box">
        <div class="zh-message-header">
          <div class="zh-message-box-title">Title</div>
          <div class="zh-message-box-close">+</div>
        </div>
        <div class="zh-message-box-body">
          message
        </div>
        <div class="zh-message-box-footer">
          <ZhButton type="info" size="small" @click="confirm('cencel',undefined)">取消</ZhButton>
          <ZhButton type="primary" size="small" @click="confirm('confirm',undefined)">确定</ZhButton>
        </div>
      </div>
  </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ZhButton from '../button/index'
const flag = ref(false)

const show = () => {
  flag.value = true
}
const confirm = (type, config, confirmCallback?, cencelCallback?) => {

  return new Promise((res,err) => {
    flag.value = true
    if (type == 'confirm') {
      res('成功')
    }
    if (type == 'cencel') {
      err('取消')
    }
  })
  
}
defineExpose({
  show,
  confirm
})
</script>

<style lang="scss" scoped>
.zh-message-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: #000000, $alpha: .4);
  .zh-message-box {
    background-color: #efefef;
    width: 400px;
    height: 150px;
    border-radius: 5px;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .zh-message-header {
      position: relative;
      .zh-message-box-title{
        font-weight: 500;
        font-size: 18px;
      }
      .zh-message-box-close{
        position: absolute;
        right: 0;
        top: -20px;
        font-size: 30px;
        font-weight: 100;
        transform: rotate(45deg);
        cursor: pointer;
        &:hover{
          color: #409eff;
        }
      }

    }
    .zh-message-box-body{
      margin-top: 10px;
      font-weight: 300;
    }
    .zh-message-box-footer{
      display: flex;
      justify-content: end;
    }
  }
}
.zh-button{
  font-size: 16px;
}
.messageBox-move,
.messageBox-enter-active,
.messageBox-leave-active {
  transition: all 0.5s ease;
}
.messageBox-leave-to ,
.messageBox-enter-from{
  opacity: 0;
}
</style>