import dotenv from 'dotenv';

dotenv.config();

const Config = {
    PORT: process.env.PORT || 8080,
    MSQL_USER: process.env.MYSQL_USER || 'user',
    MYSQL_PASS: process.env.MYSQL_PASSWORD || 'pass',
    MYSQL_ENV: process.env.MYSQL_ENV || 'dev',
    MONGO_URI: process.env.MONGO_URI || 'mongo uri'
};

export default Config;