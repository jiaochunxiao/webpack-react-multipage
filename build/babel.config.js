module.exports = {
    presets: [
        ['es2015', {modules: false}]
    ],
    plugins: [
        // "transform-runtime",
        "transform-object-rest-spread",
        "transform-decorators-legacy",
        "transform-class-properties"
    ]
}