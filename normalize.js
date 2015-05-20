module.exports = function transform(obj) {
  var normObj = {
    name: obj.name
  };
  delete obj.name;

  normObj.metadata = Object.keys(obj).map(function(key) {
    return {
      field: key,
      value: obj[key]
    };
  });

  return normObj;
};
