# simple-vite-templete-v2

1. install dependencies

```sh
pnpm install
```

2. start dev server

```sh
pnpm run dev
```

3. build

```sh
pnpm run build
```

4. commit changes

```sh
git cz
```



**vue 项目模板，支持 markdown**

- 支持 eslint
- 支持规范化 commit
- 支持 markdown，markdown 文件会被解析为 vue 组件
- 支持 Components 自动导入和注册组件
- 支持 AutoImport 自动导入常用的 api


## @unocss/preset-icons 使用

```sh
pnpm -D @unocss/preset-icons @iconify-json/[the-collection-you-want]
```

例子：要使用[iconify](https://icon-sets.iconify.design/)中的`carbon`图标集, 需要安装`@iconify-json/carbon`包， 如下：

```sh
pnpm -D @unocss/preset-icons @iconify-json/carbon
```

选择`carbon`中的一个图标后，既可以在页面上使用`i-carbon-[icon-name]`的方式使用

如当选择`carbon:dicom-overlay`图标后，可以在页面上使用`i-carbon-dicom-overlay`的方式使用

```vue
<div i-carbon-dicom-overlay />
```
