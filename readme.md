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


## data

```json
[
  {
    "views": {
      "kv": {
        "map": "function (doc) {
          if (doc.type === 'node') {
            doc.metadata.forEach(function(pair) {
              emit([pair.field, pair.value]);
            });
          }
        }"
      }
    },
    "_id": "_design/kv",
    "_rev": "45-0cf208660e9f8a4bafd147fea30f6313"
  },
  {
    "views": {
      "name": {
        "map": "function (doc) { emit(doc.name); }"
      }
    },
    "_id": "_design/name",
    "_rev": "45-b6d706e40ea573a7bc4599a328490266"
  },
  {
    "name": "mythology",
    "type": "field",
    "_id": "field16555520-010a-11e5-9822-75338ce32d42",
    "_rev": "1-f13a0162da9728052378fced488f3499"
  },
  {
    "name": "eyes",
    "type": "field",
    "_id": "field16555522-010a-11e5-9822-75338ce32d42",
    "_rev": "1-f284e2cabdfebc004e3043b0fb3e72f7"
  },
  {
    "name": "sex",
    "type": "field",
    "_id": "field16555524-010a-11e5-9822-75338ce32d42",
    "_rev": "1-02ee1df50045b7b35c95325701f9a994"
  },
  {
    "name": "hobbies",
    "type": "field",
    "_id": "field16555526-010a-11e5-9822-75338ce32d42",
    "_rev": "1-3027acdc2700e3d110d2a49dcb2efed1"
  },
  {
    "name": "sphinx",
    "type": "node",
    "metadata": [
      {
        "field": "field16555520-010a-11e5-9822-75338ce32d42",
        "value": [
          "greek"
        ]
      },
      {
        "field": "field16555522-010a-11e5-9822-75338ce32d42",
        "value": [
          2
        ]
      },
      {
        "field": "field16555524-010a-11e5-9822-75338ce32d42",
        "value": [
          "f"
        ]
      },
      {
        "field": "field16555526-010a-11e5-9822-75338ce32d42",
        "value": [
          "riddles",
          "sitting",
          "being a wonder"
        ]
      }
    ],
    "_id": "node1655552a-010a-11e5-9822-75338ce32d42",
    "_rev": "1-bb14bcfaf8fb253a2ca4cfac01c9fe33"
  },
  {
    "name": "hydra",
    "type": "node",
    "metadata": [
      {
        "field": "field16555520-010a-11e5-9822-75338ce32d42",
        "value": [
          "greek"
        ]
      },
      {
        "field": "field16555522-010a-11e5-9822-75338ce32d42",
        "value": [
          18
        ]
      },
      {
        "field": "field16555524-010a-11e5-9822-75338ce32d42",
        "value": [
          "m"
        ]
      },
      {
        "field": "field16555526-010a-11e5-9822-75338ce32d42",
        "value": [
          "coiling",
          "terrorizing",
          "growing"
        ]
      }
    ],
    "_id": "node16557c35-010a-11e5-9822-75338ce32d42",
    "_rev": "1-c32e8cb578771df75a456bf80e21e244"
  },
  {
    "name": "huldra",
    "type": "node",
    "metadata": [
      {
        "field": "field16555520-010a-11e5-9822-75338ce32d42",
        "value": [
          "norse"
        ]
      },
      {
        "field": "field16555522-010a-11e5-9822-75338ce32d42",
        "value": [
          2
        ]
      },
      {
        "field": "field16555524-010a-11e5-9822-75338ce32d42",
        "value": [
          "f"
        ]
      },
      {
        "field": "field16555526-010a-11e5-9822-75338ce32d42",
        "value": [
          "luring",
          "terrorizing"
        ]
      }
    ],
    "_id": "node16557c38-010a-11e5-9822-75338ce32d42",
    "_rev": "1-708a24248eb651b26e2b44cb96c9398e"
  },
  {
    "name": "cyclops",
    "type": "node",
    "metadata": [
      {
        "field": "field16555520-010a-11e5-9822-75338ce32d42",
        "value": [
          "greek"
        ]
      },
      {
        "field": "field16555522-010a-11e5-9822-75338ce32d42",
        "value": [
          1
        ]
      },
      {
        "field": "field16555524-010a-11e5-9822-75338ce32d42",
        "value": [
          "m"
        ]
      },
      {
        "field": "field16555526-010a-11e5-9822-75338ce32d42",
        "value": [
          "staring",
          "terrorizing"
        ]
      }
    ],
    "_id": "node16557c3b-010a-11e5-9822-75338ce32d42",
    "_rev": "1-8f21967a6206c499832f47dc9b12d38c"
  },
  {
    "name": "fenrir",
    "type": "node",
    "metadata": [
      {
        "field": "field16555520-010a-11e5-9822-75338ce32d42",
        "value": [
          "norse"
        ]
      },
      {
        "field": "field16555522-010a-11e5-9822-75338ce32d42",
        "value": [
          2
        ]
      },
      {
        "field": "field16555524-010a-11e5-9822-75338ce32d42",
        "value": [
          "m"
        ]
      },
      {
        "field": "field16555526-010a-11e5-9822-75338ce32d42",
        "value": [
          "growing",
          "god-killing"
        ]
      }
    ],
    "_id": "node16557c3d-010a-11e5-9822-75338ce32d42",
    "_rev": "1-aecbe7d890d892b64cb4985b1f285c51"
  },
  {
    "name": "medusa",
    "type": "node",
    "metadata": [
      {
        "field": "field16555520-010a-11e5-9822-75338ce32d42",
        "value": [
          "greek"
        ]
      },
      {
        "field": "field16555522-010a-11e5-9822-75338ce32d42",
        "value": [
          2
        ]
      },
      {
        "field": "field16555524-010a-11e5-9822-75338ce32d42",
        "value": [
          "f"
        ]
      },
      {
        "field": "field16555526-010a-11e5-9822-75338ce32d42",
        "value": [
          "coiling",
          "staring"
        ]
      }
    ],
    "_id": "node16557c3e-010a-11e5-9822-75338ce32d42",
    "_rev": "1-5a27d2bd8a8fec6294594bec07529ea8"
  },
  {
    "name": "greek",
    "type": "value",
    "_id": "value16555521-010a-11e5-9822-75338ce32d42",
    "_rev": "1-583149193a689dd0d17ea172bbdc0c2c"
  },
  {
    "name": 2,
    "type": "value",
    "_id": "value16555523-010a-11e5-9822-75338ce32d42",
    "_rev": "1-952f41d8f7d96b066139bad0d5eaaf51"
  },
  {
    "name": "f",
    "type": "value",
    "_id": "value16555525-010a-11e5-9822-75338ce32d42",
    "_rev": "1-225fba12e4d38b8e6e41f0fdddfd8e6f"
  },
  {
    "name": "riddles",
    "type": "value",
    "_id": "value16555527-010a-11e5-9822-75338ce32d42",
    "_rev": "1-902abead0b0b9c6f559eb7342e564b8d"
  },
  {
    "name": "sitting",
    "type": "value",
    "_id": "value16555528-010a-11e5-9822-75338ce32d42",
    "_rev": "1-a3fd32b1f3e30d625439f08bfe218977"
  },
  {
    "name": "being a wonder",
    "type": "value",
    "_id": "value16555529-010a-11e5-9822-75338ce32d42",
    "_rev": "1-145764b025cad9dca80e9e72fcfe010a"
  },
  {
    "name": 18,
    "type": "value",
    "_id": "value16557c30-010a-11e5-9822-75338ce32d42",
    "_rev": "1-66ddb2454b801c58992c2880eaef4401"
  },
  {
    "name": "m",
    "type": "value",
    "_id": "value16557c31-010a-11e5-9822-75338ce32d42",
    "_rev": "1-1cb48fa4f9a0fdc4e880ce67e6c7dda6"
  },
  {
    "name": "coiling",
    "type": "value",
    "_id": "value16557c32-010a-11e5-9822-75338ce32d42",
    "_rev": "1-d2fa91092eb4d11960998c938066deb3"
  },
  {
    "name": "terrorizing",
    "type": "value",
    "_id": "value16557c33-010a-11e5-9822-75338ce32d42",
    "_rev": "1-54126e11abbb7723bfc448fd6f76a348"
  },
  {
    "name": "growing",
    "type": "value",
    "_id": "value16557c34-010a-11e5-9822-75338ce32d42",
    "_rev": "1-fdb99bca200f98f73c3752a46b88a3ba"
  },
  {
    "name": "norse",
    "type": "value",
    "_id": "value16557c36-010a-11e5-9822-75338ce32d42",
    "_rev": "1-bec70b6e36f27273e35ba8b0d095bf2e"
  },
  {
    "name": "luring",
    "type": "value",
    "_id": "value16557c37-010a-11e5-9822-75338ce32d42",
    "_rev": "1-c04235c9caccd2d57b615f411ad80fd5"
  },
  {
    "name": 1,
    "type": "value",
    "_id": "value16557c39-010a-11e5-9822-75338ce32d42",
    "_rev": "1-3b684e8898c2cbb4cbe4f996c932e72c"
  },
  {
    "name": "staring",
    "type": "value",
    "_id": "value16557c3a-010a-11e5-9822-75338ce32d42",
    "_rev": "1-9b286df3ba078cffae1a8fdde88994a7"
  },
  {
    "name": "god-killing",
    "type": "value",
    "_id": "value16557c3c-010a-11e5-9822-75338ce32d42",
    "_rev": "1-5fad064f364ae84cd780c8bdf3f0bf9d"
  }
]
```
