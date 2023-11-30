<!-- -->
<template>
  <div :class="tClass">
    <button><slot /></button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ZhButton'
}
</script>
<script setup lang="ts">
import { computed } from 'vue'
type Props = {
  type?: string
}
const props = withDefaults(defineProps<Props>(), {
  type: 'default'
})
console.log('props', props.type)
const tClass = computed(() => {
  return ['zh-button', `zh-button-${props.type}`]
})
</script>

<style lang="scss" scoped>
button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
}
.zh-button {
  button {
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    &:hover,
    &:focus {
      opacity: 0.7;
    }
  }
}
.zh-button-default {
  button {
    background: #b4b0b0;
    color: #000;
  }
}
.zh-button-success {
  button {
    background: #0eac77;
    color: #fff;
  }
}
.zh-button-warning {
  button {
    background: red;
    color: #fff;
  }
}
</style>

