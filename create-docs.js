var uuid = require('node-uuid');

// return array of related pouch docs from a single object
module.exports = function createDocs(node) {
  var expandedNode = expandNode(node);

  // create relationships indexed on id, create array of docs
  var docs = [];
  expandedNode.node.metadata.forEach(function(pair) {
    var field = create.field( expandedNode.fields[pair.field] );
    var value = create.value( expandedNode.values[pair.value] );
    pair.field = field._id;
    pair.value = value._id;
    docs.push(field);
    docs.push(value);
  });
  docs.push(create.node( expandedNode.node ));

  return docs;
};

function createId(type) {
  return type+uuid.v1();  // time based uuid
}

function createDoc(type, doc) {
  doc.type = type;
  doc._id = createId(type);
  return doc;
}

var create = {
  field: createDoc.bind({}, 'field'),
  value: createDoc.bind({}, 'value'),
  node: createDoc.bind({}, 'node')
};

function expandNode(node) {
  var fieldsByName = {};
  var valuesByName = {};
  node.metadata.forEach(function(pair) {
    fieldsByName[pair.field] = { name: pair.field };
    valuesByName[pair.value] = { name: pair.value };
  });

  return {
    fields: fieldsByName,
    values: valuesByName,
    node: node
  };
}
