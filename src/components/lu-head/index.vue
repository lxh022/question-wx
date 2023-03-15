<template>
  <view>
    <view
      class="status_bar"
      :style="{
        height: menuInfo.bottom + 'px',
        paddingTop: menuInfo.top + 'px',
      }"
    >
      {{ props.title }}
    </view>
  </view>
</template>

<script setup lang="ts">
const menuInfo = uni.getMenuButtonBoundingClientRect();
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<style lang="scss">
.status_bar {
  width: 100%;
  background: $uni-color-primary;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
}
</style>

