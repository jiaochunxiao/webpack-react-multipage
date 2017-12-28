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
