<!-- button组件 -->
<template>
  <div :class="ZhClass">
    <button>
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ZhButton'
}
</script>

<script setup>
import { computed } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: {
    type: String,
    default: 'normal'
  },
  round: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
console.log('===>', props)
const ZhClass = computed(() => {
  const classList = ['zh-button', `zh-button-${props.type}`, `zh-button-${props.size}`]
  if (props.round) {
    classList.push('zh-button-round')
  }
  if (props.disabled) {
    classList.push('zh-button-disabled')
  }
  return classList
})
</script>

<style lang="scss" scoped>
button {
  /* 重置默认样式 */
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}
$colors: (
  primary: #409eff,
  success: #67c23a,
  info: #909399,
  warning: #e6a23c,
  danger: #f56c6c
);
.zh-button {
  display: inline-block;
  box-sizing: border-box;
  border-radius: 4px;
  text-align: center;
  border: 1px solid #333;
  &:hover,
  :focus {
    opacity: 0.7;
  }
}

@each $key, $value in $colors {
  .zh-button-#{$key} {
    background: $value;
    border: 1px solid $value;
    button {
      color: #fff;
    }
  }
}

.zh-button-normal {
  margin-right: 15px;
  padding: 0 8px;
  height: 32px;
  font-size: 16px;
  line-height: 30px;
}

.zh-button-big {
  margin-right: 22px;
  padding: 0 12px;
  height: 48px;
  border-radius: 6px;
  font-size: 24px;
  line-height: 46px;
}

.zh-button-small {
  margin-right: 10px;
  padding: 0 6px;
  height: 22px;
  border-radius: 3px;
  font-size: 12px;
  line-height: 20px;
}

.zh-button-round {
  border-radius: 1em;
}
.zh-button-disabled {
  opacity: 0.7;
  cursor: not-allowed;
  button {
    cursor: not-allowed;
  }
}
</style>
