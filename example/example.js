var Pouch = require('pouchdb');
var littlePouchDb = require('../');

littlePouchDb( new Pouch('pouch-test') ).then(function(db) {
  return db.allDocs({include_docs: true});
}).then(function(resp) {
  console.log('these are in the db: ', resp);
});
