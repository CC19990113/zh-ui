
<template>
<zh-button @click="aa" type="success">success</zh-button>
</template>

<script setup>
import Message from '../packages/Message';
const aa = () => {
  Message.success({message:'123123',duration:5000})
}
// Message({ message: '123123', type: 'success' })

// Message.info({message:'123123'})
// Message.warning({message:'123123'})
// Message.danger({message:'123123'})
</script>

<style scoped>

</style>
