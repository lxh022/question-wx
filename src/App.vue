<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
onLaunch(() => {
  console.log("App Launch");
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
@import "@/static/style/iconfont.wxss";

/*每个页面公共css */
body,
view,
text {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
</style>
