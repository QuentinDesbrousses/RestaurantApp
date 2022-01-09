const { query } = require("express");
const user = require("../config/db.js");

exports.user = user;
exports.Model = class Model{

    constructor(){
        this.user=user; //connexion BD
    }

    /*selection d'un seul élément par son id*/
    selectById(tableName,id,tableId){
        return new Promise((resolve,reject)=>{
            var request = "select * from "+tableName+" where "+tableId+" = "+id+";";

            const query = {
                name:"selectbyid",
                text:request,
                values:[]
            }

            this.user.query(query,function(err,res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows[0]);
                }
            })
        });
    }


    /*selectionner une table entière*/
    selectAll(tableName){
        return new Promise((resolve,reject)=>{
            var request = "select * from "+tableName+";";

            const query = {
                name:"selectAll",
                text:request,
                values:[]
            }

            this.user.query(query,function(err,res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows);
                }
            })
        });
    }

    /*enregistrement de nonuvelles valeurs dans une table avec les valeurs du dictionnaire valuesToSave*/ 
    addValue(tableName, valuesToSave){
        return new Promise((resolve,reject)=>{
            valuesToSave=valuesToSave[0]
            var attributs = Object.keys(valuesToSave);
            var request = "INSERT INTO "+tableName+" (";
            attributs.forEach(att => 
                request+=att +", "
                );
            request=request.substring(0, request.length - 2);
            request+=") values (";
            for (var el in valuesToSave){
                request+="\'"+valuesToSave[el]+"\', ";
            }
            request=request.substring(0, request.length - 2);
            request+=") returning *;";
            this.user.query(request,function(err,res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows[0]);
                }
            })
        })
    }

    /*supprime u ou plusieurs éléments d'une table correspondant aux conditions du dictionnaire condition*/
    delete(tableName,condition){
        return new Promise((resolve,reject)=>{
            condition=condition[0]
            var attributs = Object.keys(condition);
            var request = "DELETE FROM "+tableName+" WHERE ";
            for (var el in condition){
                request+=el+" = \'"+condition[el]+"\' AND ";
            }
            request=request.substring(0, request.length - 4);
            request+=";";
            console.log(request)
            this.user.query(request,function(err,res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows[0]);
                }
            })
        })
    }

    deleteById(tableName,tableId,id){
        return new Promise((resolve,reject)=>{
            var request = "delete from "+tableName+" where "+tableId+" = "+id+";";
            this.user.query(request,function(err,res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows[0]);
                }
            })
        })
    }

    modify(tableName,tableId,id,changements){
        return new Promise((resolve,reject)=>{
            changements=changements[0]
            var request = "update "+tableName+" set ";
            for (var el in changements){
                request+=el+" = \'"+changements[el]+"\', ";
            }
            request=request.substring(0, request.length - 2);
            request+="where "+tableId+" = "+id+" returning *;";
            this.user.query(request,function(err,res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows[0]);
                }
            })
        })
    }
}