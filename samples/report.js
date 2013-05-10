var hotcode = new Mongo().getDB('hotcode');
var data = hotcode.albums.find().toArray().reduce(function(a, b) {
  a.push([b._id, b.images.length]);
  return a;
}, []);
print("Album,Photos");
data.forEach(function(infoArray, index){
   dataString = infoArray.join(",");
   print(dataString);
});
