<template>
  <div class="word">
    <scroll-view scroll-x="true" class="scroll-x">
      <text
        v-for="(item, index) in numberList"
        :key="index"
        @click="() => goPlace(`#tab${index}`)"
        >{{ item.title }}</text
      >
    </scroll-view>
    <uni-section
      v-for="(item, index) in numberList"
      :key="index"
      :title="item.title"
      :id="'tab' + index"
      type="line"
      padding
    >
      <uni-row>
        <uni-col
          v-for="val in item.children"
          :key="val.word"
          :span="val.placeholder"
        >
          <uni-tooltip :content="val.word + '，' + val.meaning">
            <view class="flex">
              <text class="label">{{ val.word }}</text>
              <text class="value">{{ val.meaning }}</text>
            </view>
          </uni-tooltip>
        </uni-col>
      </uni-row>
    </uni-section>
  </div>
</template>

<script lang="ts" setup>
import numberData from '@/libs/word/number.json';

const numberList = numberData;

const goPlace = (name: string) => {
  uni.pageScrollTo({
    selector: name,
    duration: 500,
  });
};
</script>

<style lang="scss">
.word {
  width: 100vw;
  min-height: 100vh;
  background: #f5f5f5;
  padding-top: 55px;
  .scroll-x {
    width: 100vw;
    height: 40px;
    z-index: 999;
    padding: 6px 5px;
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
  .uni-row {
    border-top: 1px solid #eeeeee;
    border-left: 1px solid #eeeeee;
    .uni-col {
      border-right: 1px solid #eeeeee;
      border-bottom: 1px solid #eeeeee;
    }
    .uni-col-8 {
      .label {
        max-width: 117px;
      }
    }
    .uni-tooltip {
      .flex {
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .label {
          font-size: 15px;
          font-weight: bold;
          color: #444444;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .value {
          font-size: 12px;
          margin-top: 8px;
          color: #666666;
        }
      }
    }
  }
}
</style>
