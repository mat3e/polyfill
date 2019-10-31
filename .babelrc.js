module.exports = (api) => ({
    presets: [[
        '@babel/preset-env',
        configFor(api.env()) // NODE_ENV
    ]]
});

function configFor(env) {
    return env === 'core-js' ? {
        useBuiltIns: 'usage',
        corejs: 3
    } : {}
}
