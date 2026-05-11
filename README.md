# AI Tools Directory

一个面向 SEO 内容增长的 AI 工具导航网站模板，适合部署到 Vercel。

## 本地运行

```bash
npm install
npm run dev
```

打开 `http://localhost:3000`。

## 部署到 Vercel

1. 把项目推到 GitHub。
2. 在 Vercel 选择 `Import Project`。
3. 选择这个仓库，保持默认 Next.js 配置。
4. 点击 Deploy。

## 内容维护

- 工具数据：`data/tools.js`
- 文章数据：`data/articles.js`
- 分类数据：`data/categories.js`
- 广告位组件：`components/AdSlot.jsx`

拿到 Google AdSense 代码后，把 `components/AdSlot.jsx` 里的占位区域替换成广告脚本或 `ins.adsbygoogle` 配置即可。
