var mongoose = require('mongoose');
var connectionString = 'mongodb://gogo:gogo123@localhost:27017/fixed';
var mongoosePaginate = require('mongoose-paginate');

mongoose.connect(connectionString, { useNewUrlParser: true });

var fixedSchema = new mongoose.Schema({
    amiiboSeries : String,
    character : String,
    gameSeries : String,
    head : String,
    image : String,
    name : String,
    release : Object,
    tail : String,
    type : String,
});

fixedSchema.plugin(mongoosePaginate);
fixedSchema.index({name: 'text'});

module.exports = mongoose.model('amiiboData',fixedSchema);

