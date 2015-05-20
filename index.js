var Pouch = require('pouchdb');
var cleardb = require('pouch-clear-db');
var normalize = require('./normalize');
var data = require('./data').map(function(row) {
  return normalize(row);
});

var createDocs = require('./create-docs');
var dataDocs = createDocs(data);

// put all design docs and data in pouch with one bulkDocs call
module.exports = function db(opts) {

  opts = opts || {};
  opts.name = opts.name || 'pouch-test';

  var pouch = new Pouch(opts);
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

  return cleardb(pouch)
    .then(function() {
      return pouch.bulkDocs( views.concat(dataDocs) );
    }).then(function() {
      return pouch;
    }).catch(function(err) {
      console.log(err);
    });
};
