<template>
  <view class="article">
    <lu-head title="文章" />
    <scroll-view
      scroll-y="true"
      :style="{ height: `calc(100vh - ${menuInfo.bottom}px)` }"
    >
      <view class="article-list">
        <view
          class="article-item"
          v-for="(item, index) in article_list"
          :key="index"
          @click="() => seaArticle(item)"
        >
          <img :src="item.img_url" alt="" />
          <text class="title">{{ item.title }}{{ item.title }}</text>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import LuHead from "@/components/lu-head/index.vue";
import article from "@/libs/article.json";
import type { ArticleType } from "@/type/type";
const menuInfo = uni.getMenuButtonBoundingClientRect();
const article_list: ArticleType[] = article;

const seaArticle = (item: ArticleType) => {
  uni.navigateTo({
    url: `/pages/webview/web-view?url=${
      item.type == 1 ? item.url : item.content
    }&type=1`,
  });
};
</script>

<style lang="scss">
.article {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .article-list {
    padding: 10px 0;

    .article-item {
      height: 87px;
      background: #ffffff;
      box-shadow: 0px 0px 20px -3px rgba(191, 191, 191, 0.3);
      border-radius: 10px 10px 12px 12px;
      margin: 0 10px 10px;
      display: flex;
      padding: 10px;

      image {
        width: 120px;
        min-width: 120px;
        height: 67px;
        margin-right: 10px;
        border-radius: 8px;
        overflow: hidden;
      }

      .title {
        width: 205px;
        height: 60px;
        font-size: 14px;
        color: #333333;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
    }
  }
}
</style>

