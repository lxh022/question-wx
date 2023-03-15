<template>
  <view id="app">
    <LuHead title="首页" />
    <!-- 轮播图 -->
    <swiper
      class="swiper"
      circular
      :indicator-dots="true"
      :autoplay="true"
      :duration="500"
      indicator-active-color="#fff"
    >
      <swiper-item v-for="item in swiper" :key="item.img_url">
        <view class="swiper-item" @click="goBanner(item.url)">
          <image :src="item.img_url"></image>
        </view>
      </swiper-item>
    </swiper>
    <!-- 刷题分区 -->
    <view class="questionList">
      <view class="base" @click="() => goToUrl('/pages/table/table?type=1')"
        ><text class="iconfont icon-chaxun"></text><text>速查表</text></view
      >
      <view class="true" @click="() => goToUrl('/pages/table/table?type=2')"
        ><text class="iconfont icon-zhongyingwenyingwen02-01"></text
        ><text>程序单词</text></view
      >
    </view>
  </view>
</template>

<script setup lang="ts">
import LuHead from '@/components/lu-head/index.vue';
import { goToUrl } from '@/main';
import { reactive } from 'vue';
const swiper = reactive([
  {
    url: 'https://mp.weixin.qq.com/s/3c5y9BEg0qvsWZ8C5Onhqg',
    img_url:
      'https://mmbiz.qpic.cn/mmbiz_jpg/esXNorlungnGzb6Z4OVCAFs3NnFmHB54V72URK2TVEDE9bVV5O9icCzFnTfygFtmUBk82ZlCTk4ibVoaf5YWEZzw/0?wx_fmt=jpeg',
  },
  {
    url: 'https://mp.weixin.qq.com/s/yOA_Fd5AB064MLRMRMW7qg',
    img_url:
      'http://mmbiz.qpic.cn/mmbiz_jpg/esXNorlungn8NW54TnH0WcspqyDeJlALzCxiaA0fewDfDxLFd7h6wjgy8NVG1n8wgMdyrzE7SGQVibYE5KuhoPBw/0?wx_fmt=jpeg',
  },
]);
const goBanner = (url: string) => {
  uni.navigateTo({
    url: `/pages/webview/web-view?url=${url}type=1`,
  });
};
</script>

<style lang="scss">
#app::after {
  content: '';
  width: 130%;
  height: 230px;
  position: absolute;
  left: -15%;
  top: 0;
  z-index: -1;
  border-radius: 0 0 50% 50%;
  background: $uni-color-primary;
}

#app {
  padding: 0 15px 15px;

  .swiper {
    width: 100%;
    height: 190px;
    box-shadow: 0 16px 16px rgba(10, 16, 20, 0.24),
      0 0 16px rgba(10, 16, 20, 0.12);
    border-radius: 18px;
    margin-bottom: 10px;
    margin-top: 20px;

    swiper-item {
      border-radius: 18px;

      .swiper-item {
        width: 100%;
        height: 100%;

        image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .questionList {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 110px;

    view {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .iconfont {
        font-size: 30px;
        margin-bottom: 8px;
      }
    }
    .base {
      width: 48%;
      border-radius: 12px;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      background: #2eb976;
    }

    .true {
      width: 48%;
      border-radius: 12px;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      background: #9966cc;
    }
  }
}
</style>
