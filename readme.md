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

    $ npm install little-pouch-db

## views

Docs are indexed by name and related fields and values.

```js
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
  ```

## data

Three doc types: nodes, fields, values.

Example:

```json
[
  {
    "name": "hobbies",
    "type": "field",
    "_id": "field16555526-010a-11e5-9822-75338ce32d42",
    "_rev": "1-3027acdc2700e3d110d2a49dcb2efed1"
  },
  {
    "name": "luring",
    "type": "value",
    "_id": "value16557c37-010a-11e5-9822-75338ce32d42",
    "_rev": "1-c04235c9caccd2d57b615f411ad80fd5"
  },
  {
    "name": "sphinx",
    "type": "node",
    "metadata": [
      {
        "field": "fielde80fc400-0110-11e5-8938-872c40161038",
        "value": [
          "valuee80feb10-0110-11e5-8938-872c40161038"
        ]
      },
      {
        "field": "fielde80feb11-0110-11e5-8938-872c40161038",
        "value": [
          "valuee80feb12-0110-11e5-8938-872c40161038"
        ]
      },
      {
        "field": "fielde80feb13-0110-11e5-8938-872c40161038",
        "value": [
          "valuee80feb14-0110-11e5-8938-872c40161038"
        ]
      },
      {
        "field": "fielde80feb15-0110-11e5-8938-872c40161038",
        "value": [
          "valuee80feb16-0110-11e5-8938-872c40161038",
          "valuee80feb17-0110-11e5-8938-872c40161038",
          "valuee80feb18-0110-11e5-8938-872c40161038"
        ]
      }
    ],
    "_id": "nodee80feb19-0110-11e5-8938-872c40161038",
    "_rev": "1-883a09ccfe5d7f978914dce3d3773658"
  }
]
