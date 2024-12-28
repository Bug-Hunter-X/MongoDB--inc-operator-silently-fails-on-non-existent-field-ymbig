```javascript
//Correct usage of $inc operator, using $setOnInsert
db.collection.updateOne({"_id":ObjectId("someId")},{
  $inc:{"field":value},
  $setOnInsert:{"field":0}
});

//Alternative solution checking if the field exist first
let doc = db.collection.findOne({"_id":ObjectId("someId")});
if(doc && doc.field){
db.collection.updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
}else{
 db.collection.updateOne({"_id":ObjectId("someId")},{$set:{field:value}});
}
```