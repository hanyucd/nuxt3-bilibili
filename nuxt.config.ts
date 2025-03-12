// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  // 调试工具
  devtools: { enabled: true },
  // 应用模块
  modules: ['@vant/nuxt'],
  postcss: {
    plugins: {
      // 移动端适配
      'postcss-px-to-viewport': {
        viewportWidth: 375, // 设计稿宽度（默认以iPhone6/7/8的375px为准）
        unitPrecision: 5, // 转换后的精度（小数点后位数）
        viewportUnit: 'vw', // 转换成的视窗单位
        fontViewportUnit: 'vw', // 字体使用的视窗单位
        selectorBlackList: [], // 忽略转换的选择器（保留px单位）
        exclude: [/node_modules/], // 排除文件
        minPixelValue: 1, // 最小转换像素值
        mediaQuery: false, // 是否转换媒体查询中的px
      }
    }
  }
})
