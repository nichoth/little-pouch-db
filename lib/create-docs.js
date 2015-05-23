var uuid = require('node-uuid');

// create docs and relationships
module.exports = function createDocs(nodes) {
  var docs = [];
  var expandedNodes = nodes.map(function(node) {
    return expandNode(node);
  });

  var allFields = {};
  var allValues = {};

  expandedNodes.forEach(function(expNode) {
    expNode.node.metadata.forEach(function(pair) {
      if ( !allFields[pair.field] ) {
        allFields[pair.field] = create.field(expNode.fields[pair.field]);
        docs.push(allFields[pair.field]);
      }
      pair.field = allFields[pair.field]._id;

      var valIds = [];
      pair.value.forEach(function(val) {
        if ( !allValues[val] ) {
          allValues[val] = create.value(expNode.values[val]);
          docs.push(allValues[val]);
          valIds.push(allValues[val]._id);
        }
      });
      pair.value = valIds;
    });
    var node = create.node(expNode.node);
    docs.push(node);
  });
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
    pair.value.forEach(function(value) {
      valuesByName[value] = { name: value };
    });
  });

  return {
    fields: fieldsByName,
    values: valuesByName,
    node: node
  };
}
