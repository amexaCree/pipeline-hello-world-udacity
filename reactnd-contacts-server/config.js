const dotenv = require("dotenv");
dotenv.config()

exports.port = process.env.PORT || 4000
exports.origin = process.env.ORIGIN || `http://localhost:${exports.port}`

exports.db_host = process.env.POSTGRES_HOST
exports.db_name = process.env.POSTGRES_DB
exports.db_port = process.env.POSTGRES_PORT
exports.db_user = process.env.POSTGRES_USERNAME
exports.db_pwd = process.env.POSTGRES_PASSWORD
