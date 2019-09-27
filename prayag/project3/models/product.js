var connect=require("../config/connect")

var dbName="tss5"
var table="product"



module.exports.find=function(where,cb){
    connect(function(err,client){
        var db=client.db(dbName)
        db.collection(table).find(where).toArray(cb)
    })
}

module.exports.insert=function(obj,cb){
    connect(function(err,client){
        var db=client.db(dbName)
        db.collection(table).insert(obj,cb)
    })
}

module.exports.update=function(where,obj,cb){
    connect(function(err,client){
        var db=client.db(dbName)
        db.collection(table).update(where,{$set:obj},cb)
    })
}

module.exports.delete=function(where,cb){
    connect(function(err,client){
        var db=client.db(dbName)
        db.collection(table).remove(where,cb)
    })
}

module.exports.deleteMany=function(where,cb){
    connect(function(err,client){
        var db=client.db(dbName)
        db.collection(table).removeMany(where,cb)
    })
}