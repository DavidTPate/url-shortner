const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD);

const ShortenedUrl = sequelize.define('shortened-urls', {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true
    },
    url: {
        type: Sequelize.STRING
    }
});