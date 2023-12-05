<!-- ParentComponent.vue -->
<template>
  <div class="example-item">
    <div class="title">基础用法</div>
    <ZhButton type="primary">主要按钮</ZhButton>
    <ZhButton type="success">成功按钮</ZhButton>
    <ZhButton type="info">信息按钮</ZhButton>
    <ZhButton type="warning">警告按钮</ZhButton>
    <ZhButton type="danger">危险按钮</ZhButton>
  </div>

  <div class="example-item">
    <div class="title">大尺寸</div>
    <ZhButton type="primary" size="big">主要按钮</ZhButton>
    <ZhButton type="success" size="big">成功按钮</ZhButton>
    <ZhButton type="info" size="big">信息按钮</ZhButton>
    <ZhButton type="warning" size="big">警告按钮</ZhButton>
    <ZhButton type="danger" size="big">危险按钮</ZhButton>
  </div>

  <div class="example-item">
    <div class="title">小尺寸</div>
    <ZhButton type="primary" size="small">主要按钮</ZhButton>
    <ZhButton type="success" size="small">成功按钮</ZhButton>
    <ZhButton type="info" size="small">信息按钮</ZhButton>
    <ZhButton type="warning" size="small">警告按钮</ZhButton>
    <ZhButton type="danger" size="small">危险按钮</ZhButton>
  </div>

  <div class="example-item">
    <div class="title">椭圆</div>
    <ZhButton type="primary" round>主要按钮</ZhButton>
    <ZhButton type="success" round>成功按钮</ZhButton>
    <ZhButton type="info" round>信息按钮</ZhButton>
    <ZhButton type="warning" round>警告按钮</ZhButton>
    <ZhButton type="danger" round>危险按钮</ZhButton>
  </div>

  <div class="example-item">
    <div class="title">禁用状态</div>
    <ZhButton type="primary" disabled>主要按钮</ZhButton>
    <ZhButton type="success" disabled>成功按钮</ZhButton>
    <ZhButton type="info" disabled>信息按钮</ZhButton>
    <ZhButton type="warning" disabled>警告按钮</ZhButton>
    <ZhButton type="danger" disabled>危险按钮</ZhButton>
  </div>

  <div class="example-item">
    <div class="title">加载中</div>
    <ZhButton type="primary" loading>主要按钮</ZhButton>
    <ZhButton type="success" loading>成功按钮</ZhButton>
    <ZhButton type="info" loading>信息按钮</ZhButton>
    <ZhButton type="warning" loading>警告按钮</ZhButton>
    <ZhButton type="danger" loading>危险按钮</ZhButton>
  </div>
</template>
  
  <script>
import ZhButton from '../../packages/button/index.vue'

export default {
  components: {
    ZhButton
  }
}
</script>

<style lang="scss" scoped>
.example-item {
  margin-bottom: 20px;
}
</style>
  