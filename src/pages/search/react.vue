<template>
  <view class="shorthand">
    <scroll-view scroll-x="true" class="scroll-x">
      <text
        v-for="(item, index) in reactList"
        :key="index"
        @click="() => goPlace(`#tab${index}`)"
        >{{ item.name }}</text
      >
    </scroll-view>
    <view
      v-for="(item, index) in reactList"
      :key="index"
      class="shorthand-item"
      :id="'tab' + index"
      :class="`round${index + 1}`"
    >
      <view class="title">
        <img :src="`../../static/img/round${index + 1}.png`" alt="" />
        {{ item.name }}
      </view>
      <view v-if="item.name == '生命周期'">
        <uni-section title="挂载阶段" type="line">
          <view class="row">
            <text>constructor()</text>
            <text>在React组件挂载之前，会调用它的构造函数</text>
          </view>
          <view class="row">
            <text>getDerivedStateFromProps()</text>
            <text
              >在调用render方法之前调用，并且在初始挂载及后续更新时都会被调用</text
            >
          </view>
          <view class="row">
            <text>render()</text>
            <text>class组件中唯一必须实现的方法</text>
          </view>
          <view class="row">
            <text>componentDidMount()</text>
            <text>在组件挂载后（插入 DOM 树中）立即调用</text>
          </view>
        </uni-section>

        <uni-section title="更新阶段" type="line">
          <view class="row">
            <text>getDerivedStateFromProps()</text>
            <text
              >在调用render方法之前调用，并且在初始挂载及后续更新时都会被调用</text
            >
          </view>
          <view class="row">
            <text>shouldComponentUpdate()</text>
            <text>当props或state发生变化时，会在渲染执行之前被调用</text>
          </view>
          <view class="row">
            <text>render()</text>
            <text>class组件中唯一必须实现的方法</text>
          </view>
          <view class="row">
            <text>getSnapshotBeforeUpdate()</text>
            <text>在最近一次渲染输出（提交到 DOM 节点）之前调用</text>
          </view>
          <view class="row">
            <text>componentDidUpdate()</text>
            <text>在更新后会被立即调用</text>
          </view>
        </uni-section>
        <uni-section title="卸载" type="line">
          <view class="row">
            <text>componentWillUnmount()</text>
            <text>在组件卸载及销毁之前直接调用</text>
          </view>
        </uni-section>
        <view class="tips">
          render()方法是class组件中唯一必须实现的方法，其他方法可以根据自己的需要来实现。
        </view>
      </view>
      <view class="row" v-for="(val, i) in item.children" :key="i">
        <text>{{ val.command }}</text>
        <text>{{ val.explain }}</text>
      </view>
      <view class="markdown" v-show="item.name == 'JSX语法'">
        <view class="label">样式速记</view>
        <markdown-view :html="styleContent" />
        <view class="label">内部HTML</view>
        <markdown-view :html="htmlContent" />
        <view class="label">列表渲染</view>
        <markdown-view :html="listContent" />
        <view class="label">条件判断</view>
        <markdown-view :html="condContent" />
        <view class="label">三目运算</view>
        <markdown-view :html="operatContent" />
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import MarkdownView from '@/components/mp-html/markdown-view.vue';
import reactData from '@/libs/search/React.json';
import { onMounted, reactive, toRefs } from 'vue';
const reactList = reactData;
const state: any = reactive({
  tagStyle: '',
  styleContent: '',
  htmlContent: '',
  listContent: '',
  condContent: '',
  operatContent: '',
});

const goPlace = (name: string) => {
  uni.pageScrollTo({
    selector: name,
    duration: 500,
  });
};

const initTagStyle = () => {
  const themeColor = '#007AFF';
  const codeBgColor = '#2d2d2d';
  let zeroStyle = {
    p: `
				margin:5px 5px;
				font-size: 15px;
				line-height:1.75;
				letter-spacing:0.2em;
				word-spacing:0.1em;
				`,
    // 一级标题
    h1: `
				margin:25px 0;
				font-size: 24px;
				text-align: center;
				font-weight: bold;
				color: ${themeColor};
				padding:3px 10px 1px;
				border-bottom: 2px solid ${themeColor};
				border-top-right-radius:3px;
				border-top-left-radius:3px;
				`,
    // 二级标题
    h2: `
				margin:40px 0 20px 0;	
				font-size: 20px;
				text-align:center;
				color:${themeColor};
				font-weight:bolder;
				padding-left:10px;
				// border:1px solid ${themeColor};
				`,
    // 三级标题
    h3: `
				margin:30px 0 10px 0;
				font-size: 18px;
				color: ${themeColor};
				padding-left:10px;
				border-left:3px solid ${themeColor};
				`,
    // 引用
    blockquote: `
				margin:15px 0;
				font-size:15px;
				color: #777777;
				border-left: 4px solid #dddddd;
				padding: 0 10px;
				 `,
    // 列表
    ul: `
				margin: 10px 0;
				color: #555;
				`,
    li: `
				margin: 5px 0;
				color: #555;
				`,
    // 链接
    a: `
				// color: ${themeColor};
				`,
    // 加粗
    strong: `
				font-weight: border;
				color: ${themeColor};
				`,
    // 斜体
    em: `
				color: ${themeColor};
				letter-spacing:0.3em;
				`,
    // 分割线
    hr: `
				height:1px;
				padding:0;
				border:none;
				// border-top:medium solid #333;
				text-align:center;
				background-image:linear-gradient(to right,rgba(248,57,41,0),${themeColor},rgba(248,57,41,0));
				`,
    // 表格
    table: `
				border-spacing:0;
				overflow:auto;
				min-width:100%;
				margin:10px 0;
				border-collapse: collapse;
				`,
    th: `
				border: 1px solid #202121;
				color: #555;
				`,
    td: `
				color:#555;
				border: 1px solid #555555;
				`,
    pre: `
				border-radius: 5px;
				white-space: pre;
				overflow: auto;
				background: ${codeBgColor};
				font-size:12px;
				`,
  };
  state.tagStyle = zeroStyle;
};

onMounted(() => {
  initTagStyle();
  state.styleContent =
    '```javascript\nconst style = { height:10px }\nreturn <div style={ style }></div>\n```';
  state.htmlContent =
    "```javascript\nfunction markdown() { return '<p>123</p>'}\n<divdangerouslySetInnerHTML={{ _html:markdown() }} /> \n```";
  state.listContent =
    '```javascript\nconst list = [1,2,3,4]\nlist.map(item => {\n\t<span key={item}>{item}</span>\n})\n```';
  state.condContent =
    '```javascript\n<div>\n\t{status\n\t? <span>123</span>\n\t: <span>456</span>}\n</div>\n```';
  state.operatContent =
    '```javascript\n<div>\n\t{status && <span>123</span>}\n</div>\n```';
});
const {
  tagStyle,
  styleContent,
  htmlContent,
  listContent,
  condContent,
  operatContent,
} = toRefs(state);
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
  .tips {
    padding: 10px 15px;
    font-size: 12px;
    color: #f3a73f;
  }
  .row {
    display: flex;
    align-items: center;
    padding: 12px 0 12px 10px;
    text {
      font-size: 13px;
      color: #666666;
      padding-left: 10px;
      word-break: break-word;
      &:first-child {
        flex: 3;
        max-width: 132px;
      }
      &:last-child {
        flex: 5;
      }
    }
    &:nth-child(2n) {
      background: #f9f9f9;
    }
  }
  .markdown {
    padding: 0 15px;
    .label {
      color: #555555;
      margin: 5px 0;
    }
  }
}
</style>
