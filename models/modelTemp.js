var Schema = require("mongoose").Schema;
var tempSchema = Schema({ temp : Number, date: Number });

module.exports = db.model('tem', tempSchema)