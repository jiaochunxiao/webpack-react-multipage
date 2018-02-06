module.exports = {
    presets: [
        ['es2015', {modules: false}],
        "env",
        "stage-0"
    ],
    plugins: [
        ['import', {
            "libraryName": 'antd',
            "libraryDirectory": 'lib',
            "style": true
        }],
        "transform-object-rest-spread",
        "transform-decorators-legacy",
        "transform-class-properties"
    ]
}