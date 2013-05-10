var hotcode = new Mongo().getDB('hotcode');
var albumImages = hotcode.albums.find().toArray().reduce(function(a, b) {
    return a.concat(b.images);
}, []);

print("Initial amount: ", hotcode.images.count());
hotcode.images.remove({ _id: { $not: { $in: albumImages }}});
print("Result amount: ", hotcode.images.count());
