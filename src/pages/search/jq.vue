<template>
  <view class="shorthand">
    <scroll-view scroll-x="true" class="scroll-x">
      <text
        v-for="(item, index) in jqList"
        :key="index"
        @click="() => goPlace(`#tab${index}`)"
        >{{ item.name }}</text
      >
    </scroll-view>
    <view
      v-for="(item, index) in jqList"
      :key="index"
      class="shorthand-item"
      :id="'tab' + index"
      :class="`round${index + 1}`"
    >
      <view class="title">
        <img :src="`../../static/img/round${index + 1}.png`" alt="" />
        {{ item.name }}
      </view>
      <view class="row" v-for="(val, i) in item.children" :key="i">
        <text :style="{ flex: index + 1 == jqList.length ? '1' : '3' }">{{
          val.command
        }}</text>
        <text :style="{ flex: index + 1 == jqList.length ? '1' : '5' }">{{
          val.explain
        }}</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import jqData from '@/libs/search/jQuery.json';

const jqList = jqData;

const goPlace = (name: string) => {
  uni.pageScrollTo({
    selector: name,
    duration: 500,
  });
};
</script>

<style lang="scss">
.shorthand {
  width: 100vw;
  min-height: 100vh;
  background: #f5f5f5;
  padding-top: 55px;
  .scroll-x {
    width: 100vw;
    height: 40px;
    padding: 6px 5px;
    z-index: 999;
    display: flex;
    align-items: center;
    white-space: nowrap;
    background: #ffffff;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    text {
      height: 26px;
      line-height: 26px;
      display: inline-flex;
      font-size: 14px;
      margin-right: 10px;
      border: 1px solid #cccccc;
      padding: 0 10px;
      border-radius: 16px;
      color: #999999;
    }
  }
  .shorthand-item {
    padding: 10px 0;
    border-radius: 7px;
    background: #ffffff;
    margin: 0 10px 15px;
  }
  .title {
    display: flex;
    align-items: center;
    font-weight: bold;
    padding: 0 10px 5px;
    image {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }
  .row {
    display: flex;
    align-items: center;
    padding: 12px 0 12px 10px;
    text {
      font-size: 13px;
      color: #666666;
      padding-left: 10px;
      &:first-child {
        flex: 3;
      }
      &:last-child {
        flex: 5;
      }
    }
    &:nth-child(2n) {
      background: #f9f9f9;
    }
  }
}
</style>
