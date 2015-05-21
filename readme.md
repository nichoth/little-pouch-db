# little pouch db

Little pouch database for testing with relational data

```js
var Pouch = require('pouchdb');
var littlePouchDb = require('little-pouch-db');

littlePouchDb( new Pouch('pouch-test') ).then(function(db) {
  return db.allDocs({include_docs: true});
}).then(function(resp) {
  console.log('these are in the db: ', resp);
});

```

## install

    $ npm install https://github.com/nichoth/little-pouch-db/tarball/master
