module.exports = {
    'port': {
        option: '-p, --port <n>',
        description: 'set port',
        default: 8080,
        usage: 'zs --port 3000'
    },
    'directory': {
        option: '-d, --directory <dir>',
        description: 'set directory',
        default: process.cwd(),
        usage: 'zs --directory /usr'
    },
    // todo...
}
