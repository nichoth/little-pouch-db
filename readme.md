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

Mythological monsters

```js
[
  {
    name: "sphinx",
    mythology: "greek",
    eyes: 2,
    sex: "f",
    hobbies: ["riddles","sitting","being a wonder"]
  },
  {
    name: "hydra",
    mythology: "greek",
    eyes: 18,
    sex: "m",
    hobbies: ["coiling","terrorizing","growing"]
  },
  {
    name: "huldra",
    mythology: "norse",
    eyes: 2,
    sex: "f",
    hobbies: ["luring","terrorizing"]
  },
  {
    name: "cyclops",
    mythology: "greek",
    eyes: 1,
    sex: "m",
    hobbies: ["staring","terrorizing"]
  },
  {
    name: "fenrir",
    mythology: "norse",
    eyes: 2,
    sex: "m",
    hobbies: ["growing","god-killing"]
  },
  {
    name: "medusa",
     mythology: "greek",
     eyes: 2,
     sex: "f",
     hobbies: ["coiling","staring"]
   }
]
```
