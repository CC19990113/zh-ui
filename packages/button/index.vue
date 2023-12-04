<!--
  ZhButton 组件：
  - ZhButton 是一个可定制的按钮组件，支持不同的样式、大小和加载状态。
  - 通过传递不同的 props 控制组件的外观和行为。
  @component ZhButton
  @props
    {String} type - 按钮类型 'primary' 'success' 'info' 'warning' 'danger'
    {String} size - 按钮大小 'big' 'normal' 'small'
    {Boolean} round - 是否为椭圆 true false
    {Boolean} disabled - 是否禁用 true false
    {Boolean} loading - 加载状态 true false
-->
<template>
  <div :class="ZhClass">
    <button>
      <div class="zh-button-loading" v-if="loading">
        <div class="loading-content">
          <div :class="['spinner', `spinner-${size}`]"></div>
          加载中
        </div>
      </div>
      <slot v-else></slot>
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
  // 按钮类型 'primary' 'success' 'info' 'warning' 'danger'
  type: {
    type: String,
    default: 'default'
  },
  // 按钮大小 'big' 'normal' 'small'
  size: {
    type: String,
    default: 'normal'
  },
  // 是否为椭圆 true false
  round: {
    type: Boolean,
    default: false
  },
  // 是否禁用 true false
  disabled: {
    type: Boolean,
    default: false
  },
  // 加载状态 true false
  loading: {
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
@import '../assets/common.scss';

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

// 颜色样式
@each $key, $value in $colors {
  .zh-button-#{$key} {
    background: $value;
    border: 1px solid $value;
    button {
      color: #fff;
    }
  }
}

// 大小样式
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

// 椭圆样式
.zh-button-round {
  border-radius: 1em;
}

// 禁用样式
.zh-button-disabled {
  opacity: 0.7;
  cursor: not-allowed;
  button {
    cursor: not-allowed;
  }
}

// 加载中样式
.zh-button-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
.spinner {
  display: inline-block;
  border: 2px solid #3498db;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

$spinner-sizes: (
  normal: 15px,
  big: 20px,
  small: 10px
);

@each $size, $value in $spinner-sizes {
  .spinner-#{$size} {
    width: $value;
    height: $value;
  }
}
</style>
