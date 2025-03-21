# Nuxt3-哔哩哔哩

## 简介

Nuxt 框架提供了一种基于 Node.js 的**服务端渲染方案 SSR（Server Side Rendering）**，可以让 Vue 应用在服务器端进行渲染，从而提高页面的加载速度和 SEO。

**完成带数据交互的 哔哩哔哩移动端 项目**，包括以下知识点的应用：

- SEO 优化
- 基于文件的路由系统
- 自动导入
- Nuxt DevTools 调试工具
- 自定义组件
- @vant/nuxt  组件库
- 移动端 vw 适配
- 接口服务器
- 数据获取
- 分页加载
- 动态路由传参
- 项目打包上线

### 服务端渲染

**SPA 和 SSR 是什么**

- SPA（Single Page Application）单页面应用，在**客户端**通过 JS 动态地构建页面。
- SSR（Server-Side Rendering）服务器端渲染，在**服务器端**生成 HTML 页面并发送给客户端。

**有什么不同？**

- SPA 的特点是页面切换流畅，动态渲染变化的部分，**用户体验好**，但是对搜索引擎的支持不够友好。
- SSR 的特点是对搜索引擎友好，可以提高页面**首次加载速度** 和 **SEO**，但是页面切换可能不够流畅，因为每次都是请求一个完整的 HTML 页面。

**Nuxt 框架优势**

- Nuxt 采用了**混合的架构模式**，同时支持 SSR 和 SPA。
-  SSR 服务端渲染： 首次访问页面 ，Nuxt.js 在服务器端执行 Vue 组件的渲染过程，并生成初始 HTML。
- SPA 客户端激活：一旦初始 HTML 被发送到浏览器，Vue.js 会接管页面，后续的页面切换则使用 SPA 的方式进行。
- Nuxt 框架优势：**兼顾了 SSR 和 SPA 的优点**。

**适用场景**

企业网站、商品展示 等 C 端网站，对 SEO 搜索更友好，且页面切换流畅，用户体验更好。

**开启或关闭服务端渲染**

Nuxt 默认开启 SSR 服务端渲染，推荐开启，从而兼顾了 SSR 和 SPA 的优点，也利于 SEO 搜索引擎优化。

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // 是否开启 ssr 服务端渲染
  ssr: true,
})
```

## 打包发布

nuxt 脚手架只是开发过程中，协助开发的工具，当真正开发完了 => 脚手架不参与上线

参与上线的是 => 打包后的源代码

打包：

- 语法解析，ts 解析成 js，scss 解析成 css 等
- 代码分割，代码压缩，tree-shaking （树摇）
- ....

打包后，可以生成，浏览器能够直接运行的网页 => 就是需要上线的源码！

### 打包命令

nuxt 脚手架工具已经提供了打包命令，直接使用即可。

```bash
# 生成用于服务器端运行的优化代码
pnpm build

# 生成静态网站，将应用程序预渲染成静态 HTML 文件，无需服务器端渲染
pnpm generate
```

### 部署上线

- 部署公司的服务器
- 部署到第三方平台，如：[vercel (免费)](https://vercel.com)
