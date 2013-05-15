var hotcode = new Mongo().getDB('hotcode');
var albumImages = hotcode.albums.
  find().
  toArray().
  reduce(function(a, b) {
    return a.concat(b.images);
  }, []);

print("Initial amount: ", hotcode.images.count());
var selector = { _id: { $not: { $in: albumImages }}};
hotcode.images.remove(selector);
print("Result amount: ", hotcode.images.count());
