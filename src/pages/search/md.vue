<template>
  <view class="shorthand markdown">
    <scroll-view scroll-x="true" class="scroll-x">
      <text
        v-for="(item, index) in mdList"
        :key="index"
        @click="() => goPlace(`#tab${index}`)"
        >{{ item }}</text
      >
    </scroll-view>
    <view class="shorthand-item round1" id="tab1">
      <view class="title">
        <img src="../../static/img/round1.png" alt="" />
        markdown
      </view>
      <view class="content"> </view>
    </view>
    <view class="shorthand-item round1" id="tab1">
      <view class="title">
        <img src="../../static/img/round2.png" alt="" />
        标题
      </view>
      <view class="row">
        <text># 一级标题</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="# 一级标题"
        />
      </view>
      <view class="row">
        <text># 二级标题</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="## 二级标题"
        />
      </view>
      <view class="row">
        <text># 三级标题</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="### 三级标题"
        />
      </view>
      <view class="row">
        <text># 四级标题</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="#### 四级标题"
        />
      </view>
      <view class="row">
        <text># 五级标题</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="##### 五级标题"
        />
      </view>
      <view class="row">
        <text># 六级标题</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="###### 六级标题"
        />
      </view>
    </view>
    <view class="shorthand-item round2" id="tab2">
      <view class="title">
        <img src="../../static/img/round2.png" alt="" />
        文本
      </view>
      <view class="row">
        <text>*斜体文本*/_斜体文本_</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="*强调文本* | _强调文本_"
        />
      </view>
      <view class="row">
        <text>**加粗文本**/__加粗文本__</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="**加粗文本** | __加粗文本__"
        />
      </view>
      <view class="row">
        <text>~~删除文本~~</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="~~删除文本~~"
        />
      </view>
      <view class="row">
        <text>>引用文本</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content=">引用文本"
        />
      </view>
      <view class="row">
        <text>{{'<u>带下划线文本</u>'}}</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="<u>带下划线文本</u>"
        />
      </view>
      <view class="row">
        <text>{{'H<sub>2</sub>O'}}</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="H<sub>2</sub>O"
        />
      </view>
      <view class="row">
        <text>{{'2<sup>10</sup>'}}</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="2<sup>10</sup>"
        />
      </view>
    </view>
    <view class="shorthand-item round3" id="tab3">
      <view class="title">
        <img src="../../static/img/round3.png" alt="" />
        列表
      </view>
      <view class="head">无序列表</view>
      <view class="row">
        <text>- 项目</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="- 项目"
        />
      </view>
      <view class="row">
        <text>* 项目</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="* 项目"
        />
      </view>
      <view class="row">
        <text>+ 项目</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="+ 项目"
        />
      </view>
      <view class="head">有序列表</view>
      <view class="row">
        <text>1. 项目</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="1. 项目"
        />
      </view>
      <view class="row">
        <text>2. 项目</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="2. 项目"
        />
      </view>
      <view class="row">
        <text>3. 项目</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="3. 项目"
        />
      </view>
    </view>

    <view class="shorthand-item round4" id="tab4">
      <view class="title">
        <img src="../../static/img/round4.png" alt="" />
        链接
      </view>
      <view class="head">链接</view>
      <view class="row">
        <text style="flex: 4">链接：[link](https://www.baidu.com/).</text>
        <mp-html
          class="mark"
          style="flex: 1"
          :tag-style="tagStyle"
          :markdown="true"
          content="[百度](https://www.baidu.com/)"
        />
      </view>
      <view class="head">图片</view>
      <view class="row">
        <text style="flex: 4">![alt 属性文本](图片地址)</text>
        <mp-html
          class="mark"
          style="flex: 1"
          :tag-style="tagStyle"
          :markdown="true"
          content="![RUNOOB 图标](https://p3-passport.byteimg.com/img/user-avatar/05be33057df4b3773e7c6b95e74507a9~180x180.awebp)"
        />
      </view>
    </view>
    <view class="shorthand-item round5" id="tab5">
      <view class="title">
        <img src="../../static/img/round5.png" alt="" />
        代码
      </view>
      <view class="head">行内</view>
      <view class="row">
        <text>`printf()` 函数</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="`printf()` 函数"
        />
      </view>
      <view class="head">代码区块</view>
      <view class="row">
        <text>{{ blockHtml }}</text>
      </view>
      <view class="row">
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          :content="blockHtml"
        />
      </view>
      <view class="head">指定代码格式</view>
      <view class="row">
        <text>{{ block2Html }}</text>
      </view>
      <view class="row">
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          :content="block2Html"
        />
      </view>
    </view>
    <view class="shorthand-item round6" id="tab6">
      <view class="title">
        <img src="../../static/img/round6.png" alt="" />
        表格
      </view>
      <view class="head">表格</view>
      <view class="row">
        <text>{{ tableHtml }}</text>
      </view>
      <view class="row">
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          :content="tableHtml"
        />
      </view>
      <view class="head">对齐方式</view>
      <view class="row">
        <text>{{ table2Html }}</text>
      </view>
      <view class="row">
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          :content="table2Html"
        />
      </view>
    </view>
    <view class="shorthand-item round7" id="tab7">
      <view class="title">
        <img src="../../static/img/round7.png" alt="" />
        分割线
      </view>
      <view class="row">
        <text>{{ lineHtml }}</text>
      </view>
      <view class="row line-round-row">
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          :content="lineHtml"
        />
      </view>
    </view>
    <view class="shorthand-item round8" id="tab8">
      <view class="title">
        <img src="../../static/img/round8.png" alt="" />
        高级技巧
      </view>
      <view class="head">支持HTML元素</view>
      <view class="row">
        <text>不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。\n目前支持的 HTML 元素有：{{'<kbd> <b> <i> <em> <sup> <sub> <br>'}}等 ，如：</text>
      </view>
      <view class="row text">
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          :content="docHtml"
        />
      </view>
      <view class="row text">
        <text>输出结果为：</text>
      </view>
      <view class="row">
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑"
        />
      </view>
      <view class="head">转义</view>
      <view class="row">
        <text>Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠转义特殊字符：</text>
      </view>
      <view class="row text">
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="```\*\* 正常显示星号 \*\*```"
        />
      </view>
      <view class="row text">
        <text>输出结果为：</text>
        <mp-html
          class="mark"
          :tag-style="tagStyle"
          :markdown="true"
          content="\*\* 正常显示星号 \*\*"
        />
      </view>
      <view class="head">公式</view>
      <view class="row">
        <text>Markdown Preview Enhanced 使用 KaTeX 或者 MathJax 来渲染数学表达式。</text>
      </view>
      <view class="row text">
        <text>1. $...$ 或者 \(...\) 中的数学表达式将会在行内显示。\n 2. $$...$$ 或者 \[...\] 或者 ```math 中的数学表达式将会在块内显示。</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import MpHtml from '@/components/mp-html/mp-html.vue';
import { onMounted, reactive, toRefs } from 'vue';

const state: any = reactive({
  mdList: [
    'markdown',
    '标题',
    '文本',
    '列表',
    '链接',
    '代码片段',
    '表格',
    '分割线',
    '高级技巧',
  ],
  tagStyle: '',
  headContent: '',
  blockHtml: '```\n// name\nvar name = 123\n```',
  block2Html: '```javascript\n// name\nvar name = 123\n```',
  tableHtml:
    '|  表头   | 表头  |\n|  ----  | ----  |\n| 单元格  | 单元格 |\n| 单元格  | 单元格 |',
  table2Html:
    '| 左对齐 | 右对齐 | 居中对齐 |\n| :-----| ----: | :----: |\n| 单元格 | 单元格 | 单元格 |\n| 单元格 | 单元格 | 单元格 |',
  lineHtml: '***\n* * *\n*****\n- - -\n----------',
  docHtml:'```html\n使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑\n```'
});

const {
  mdList,
  tagStyle,
  headContent,
  blockHtml,
  block2Html,
  tableHtml,
  table2Html,
  lineHtml,
  docHtml
} = toRefs(state);

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
				font-size: 13px;
				line-height:1.75;
				letter-spacing:0.2em;
				word-spacing:0.1em;
				`,
    // 引用
    blockquote: `
				margin:15px 0;
				font-size:13px;
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
  state.headContent = '# 一级标题';
});
</script>

<style lang="scss">
.shorthand {
  width: 100vw;
  min-height: 100vh;
  background: #f5f5f5;
  padding-top: 55px;
  padding-bottom: 20px;
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

  .head {
    font-size: 16px;
    display: block;
    margin: 0 15px;
    padding: 5px 0;
    border-bottom: 2px solid #cccccc;
  }

  .row {
    display: flex;
    align-items: center;
    padding: 12px 10px;
    text {
      flex: 1;
      font-size: 13px;
      color: #666666;
      padding-left: 10px;
    }
    .mark {
      flex: 1;
      overflow: auto;
    }
    &:nth-child(2n) {
      background: #f9f9f9;
    }
  }
  .text{
    padding:0 10px;
  }
}
.markdown{
  rich-text{
    font-size: 13px;
  }
}
</style>
