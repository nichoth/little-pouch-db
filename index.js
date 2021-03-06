var cleardb = require('pouch-clear-db');
var normalize = require('./lib/normalize');
var data = require('./lib/data').map(function(row) {
  return normalize(row);
});

var createDocs = require('./lib/create-docs');
var dataDocs = createDocs(data);

// put all design docs and data in pouch with one bulkDocs call
module.exports = function db(pouch) {

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
              pair.value.forEach(function(val) {
                emit([pair.field, val]);
              });
            });
          }
        }.toString()
      }
    }
  });

  views.push({
    _id: '_design/valuesForField',
    views: {
      'valuesForField': {
        map: function(doc) {
          if (doc.type === 'node') {
            doc.metadata.forEach(function(pair) {
              pair.value.forEach(function(val) {
                emit(pair.field, {_id: val});
              });
            });
          }
        }.toString()
      }
    }
  });

  return cleardb(pouch)
    .then(function() {
      return pouch.bulkDocs( views.concat(dataDocs) );
    }).then(function() {
      return pouch;
    }).catch(function(err) {
      console.log(err);
    });
};
