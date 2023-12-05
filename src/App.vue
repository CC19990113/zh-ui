
<template>
<zh-button @click="aa" type="success">success</zh-button>
<zh-button @click="bb" type="info">info</zh-button>
<zh-button @click="cc" type="warning">warning</zh-button>
<zh-button @click="dd" type="danger">danger</zh-button>
</template>

<script setup>
import Message from '../packages/Message';
const aa = () => {
  Message.success({message:'successsuccesssuccesssuccesssuccesssuccess'})
}
const bb = () => {
  Message.info({message:'infoinfoinfoinfoinfoinfoinfoinfoinfo'})
}
const cc = () => {
  Message.warning({message:'warningwarningwarningwarningwarning'})
}
const dd = () => {
  Message.danger({message:'dangerdangerdangerdangerdanger'})
}
// Message({ message: '123123', type: 'success' })

// Message.info({message:'123123'})
// Message.warning({message:'123123'})
// Message.danger({message:'123123'})
</script>

<style scoped>

</style>
