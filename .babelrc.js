module.exports = (api) => ({
    presets: [[
        '@babel/preset-env',
        configFor(api.env())
    ]]
});

function configFor(env) {
    return env === 'core-js' ? {
        useBuiltIns: 'usage',
        corejs: 3
    } : {}
}
