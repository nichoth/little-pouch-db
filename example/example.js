var db = require('../index');

db().then(function(db) {
  return db.allDocs({include_docs: true});
}).then(function(resp) {
  console.log('these are in the db: ', resp);
});
