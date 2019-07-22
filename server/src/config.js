module.exports = {
    basePath: '/api/v1',
    dbUrl: process.env.MONGODB_URL,
    port: process.env.PORT || 3001,
    jwt: {
        secret: process.env.JWT_SECRET || 'secretWeapon',
    },
};