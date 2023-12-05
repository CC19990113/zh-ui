
<template>

</template>

<script setup>
import Message from '../packages/Message';
// Message({ message: '123123', type: 'success' })
Message.success({message:'123123'})
Message.info({message:'123123'})
Message.warning({message:'123123'})
Message.danger({message:'123123'})
</script>

<style scoped>

</style>
