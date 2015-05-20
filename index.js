var Pouch = require('pouchdb');
var normalize = require('./normalize');
var data = require('./data').map(function(row) {
  return normalize(row);
});
var createDocs = require('./createDocs');

// put all design docs and data in pouch with one bulkDocs call
module.exports = function db(name) {

  var pouch = new Pouch(name || 'pouch-test');
  var views = [];
  views.push({
    _id: '_design/name',
    views: {
      'name': {
        map: function (doc) { emit(doc.name); }.toString()
      }
    }
  });

  // index on user-created metadata
  views.push({
    _id: '_design/kv',
    views: {
      'kv': {
        map: function(doc) {
          if (doc.type === 'node') {
            doc.metadata.forEach(function(pair) {
              emit([pair.field, pair.value]);
            });
          }
        }.toString()
      }
    }
  });

  var dataDocs = [];
  data.forEach(function(row) {
    dataDocs.concat( createDocs(row) );
  });
  var docs = views.concat( dataDocs );

  return pouch.bulkDocs(docs).then(function() {
    return pouch;
  }).catch(function(err) {
    console.log(err);
  });
};
