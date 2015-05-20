# little pouch db

Little pouch database for testing with relational data

```js
var db = require('little-pouch-db');

db().then(function(db) {
  return db.allDocs({include_docs: true});
}).then(function(resp) {
  console.log('these are in the db: ', resp);
});
```

## install

    $ npm install https://github.com/nichoth/little-pouch-db/tarball/master
