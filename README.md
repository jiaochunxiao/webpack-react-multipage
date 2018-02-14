## webpack multipage
本项目旨在构建多页面工程，项目内代码为个人学习react及react相关框架实践。

### 有意思的事

+ 关于chunks顺序问题
```
new HtmlWebpackPlugin({
    filename: filename.split('/')[0] + '.html',
    chunks: ['vendor', filename],
    minChunks: Infinity,
    template: 'index.html'
})
```
期望注入到页面的js顺序为 vendor > filename
结果发现实际注入的顺序为 filename > vendor
最后通过添加配置： chunkSortMode: 'manual'，问题得以解决。可参考[HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin)
```
new HtmlWebpackPlugin({
    filename: filename.split('/')[0] + '.html',
    chunks: ['vendor', filename],
    minChunks: Infinity,
    chunksSortMode: 'manual',
    template: 'index.html'
})
```

### 减少无用的控制台显示

在本地开发环境中，设置 devServer的 stats 字段。
>stats 选项能让你准确地控制显示哪些包的信息。如果你希望得到部分包的信息（而不是一股脑全部输出），而不想使用 quiet 或者 noInfo 模式的时候，这个选项是一个很好的折衷办法。

配置参见[统计(stats)](https://doc.webpack-china.org/configuration/stats/#stats)
