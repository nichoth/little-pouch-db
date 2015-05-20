module.exports = function transform(obj) {
  var normObj = {
    name: obj.name
  };
  normObj.metadata = [];
  Object.keys(obj).forEach(function(key) {
    if (key == 'name') return;
    normObj.metadata.push({
      field: key,
      value: Array.isArray(obj[key]) ? obj[key] : [ obj[key] ]
    });
  });

  return normObj;
};
