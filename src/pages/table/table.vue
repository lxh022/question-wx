<template>
  <view class="table">
    <view
      class="table-item"
      v-for="(item, index) in table_list"
      :key="index"
      @click="() => goToUrl(item.url)"
    >
      <text
        :class="'iconfont ' + item.icon"
        :style="{ color: item.color }"
      ></text>
      <text class="name">{{ item.name }}</text>
    </view>
  </view>
</template>

<script setup lang="ts">
import search from '@/libs/search.json';
import word from '@/libs/word.json';
import { goToUrl } from '@/main';
import type { TableType } from '@/type/type';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
const table_list = ref<TableType[]>([]);
uni.setNavigationBarTitle({ title: '速查表' });
onLoad((options) => {
  console.log(options);
  if (options?.type == 1) {
    table_list.value = search;
    uni.setNavigationBarTitle({ title: '速查表' });
  } else {
    table_list.value = word;
    uni.setNavigationBarTitle({ title: '程序单词' });
  }
});
</script>

<style lang="scss">
.table {
  width: 100vw;
  min-height: 100vh;
  padding: 15px;
  background: #f5f5f5;
  .table-item {
    width: 105px;
    height: 85px;
    background: #ffffff;
    box-shadow: 0px 2px 6px 0px rgba(160, 200, 199, 0.2);
    border-radius: 8px;
    text-align: center;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    margin-bottom: 15px;
    &:nth-child(3n) {
      margin-right: 0;
    }
    .iconfont {
      font-size: 30px;
      margin-bottom: 5px;
    }
    .name {
      color: #666666;
      font-size: 12px;
    }
  }
}
</style>
