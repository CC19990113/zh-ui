
<template>
<zh-button @click="show">show</zh-button>
</template>

<script setup>
import MessageBox from '../packages/MessageBox';
const show = () => {
  // {},()=>{},()=>{}
  MessageBox.confirm('', {}).then(res => {
    console.log(res);
  })
}
</script>

<style scoped>

</style>
