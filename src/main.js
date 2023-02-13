import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import lazyPlugin from 'vue3-lazy'
// 全局注册图片懒加载
const app = createApp(App)
const getAssetsImages = (name) => {
    return new URL(name, import.meta.url).href
}
app.use(lazyPlugin, {
    loading: '', // 加载时默认图片
    error: ''// 图片失败时默认图片
})
app.mount('#app')
