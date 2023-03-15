import { createSSRApp } from "vue";
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
export function goToUrl(url: string){
  uni.navigateTo({
    url: url,
  });
};