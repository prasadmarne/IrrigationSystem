var mysql=require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    var table1="login";
    var table2="students";
    self.insert(router,connection,table2);
    self.display(router,connection,table2);
    self.search(router,connection,table2);
    self.delete(router,connection,table2);
    self.update(router,connection,table2);
}

REST_ROUTER.prototype.insert= function(router,connection,table2) {

      router.post("/insert",function(req,res,err){

        var values = JSON.parse(JSON.stringify(req.body));
        console.log(values);
        connection.query("INSERT INTO ?? set ? ",[table2,values],function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : err });
            } else {

                res.json({"Error" : false, "Message" : rows});
            }
        });
    });

};

REST_ROUTER.prototype.display= function(router,connection,table2) {

       router.get("/display",function(req,res){
        connection.query("SELECT * FROM ??",table2,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : err});
            } else {
                res.json({"Error" : false, "Message" : "Success", "users" : rows});
            }
        });
    });
};
REST_ROUTER.prototype.search= function(router,connection,table2) {
    router.get("/search",function(req,res){
        connection.query("SELECT * FROM ?? WHERE id=?",[table2,req.query.id],function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : err});
            } else {
                res.json({"Error" : false, "Message" : "Success", "users" : rows});
            }
        });
    });

};

REST_ROUTER.prototype.update= function(router,connection,table2) {
    router.put("/update",function(req,res){

        var values = JSON.parse(JSON.stringify(req.body));
        id=values.id;
        delete values.id;
        connection.query("UPDATE ?? set ? WHERE id = ? ",[table2,values,id],function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : err});
            } else {
                res.json({"Error" : false, "Message" : values});
            }
        });
    });

  };

REST_ROUTER.prototype.delete= function(router,connection,table2) {
    router.delete("/delete",function(req,res){
         connection.query("DELETE from ?? WHERE id=?",[table2,req.query.id],function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : err});
            } else {
                res.json({"Error" : false, "Message" : "deleted"});
            }
        });
    });

};
module.exports = REST_ROUTER;
