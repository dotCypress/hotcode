print("\"Album\",\"Photos\"");
var data = [];
data.push(["Gavana", 12]);
data.push(["Thai", 22]);

data.forEach(function(infoArray, index){
   dataString = infoArray.join(",");
   print(dataString);
});
