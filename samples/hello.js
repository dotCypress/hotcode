print('Hello hotcode!\n');

print('Databases:');
function printName(name){
  print('Database: ' + name);
}
db.getMongo().getDBNames().forEach(printName);
