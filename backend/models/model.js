const { query } = require("express");
const user = require("../config/db.js");

exports.user = user;
exports.Model = class Model{

    constructor(){
        this.user=user; //connexion BD
    }

    /* Chercher un ou plusieurs éléments contenus dans le tableau elToFind, 
    dans une table selon un ou plusieurs critères, contenus dans le dictionnaire conditions */ 
    select(tableName,elToFind, conditions){
        return new Promise((resolve,reject)=>{
            var request = "SELECT ";
            elToFind.forEach(element => {
                request+=element+", "
            });
            request.substring(0, str.length - 2);
            request+=" FROM "+tableName+" WHERE ";
            for (var [key,value] of condition){
                request+=key+" = \'"+value+"\' AND "; 
            }
            request.substring(0, str.length - 4);
            request+=";";
            
            const query = {
                name :"select",
                text:request,
                values:valCondition
            }

            this.user.query(query, function(err, res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows[0]);
                }
            });
        });
    }

    /*selection d'un seul élément par son id*/
    selectByID(tableName,id,elToFind){
        return new Promise((resolve,reject)=>{
            var request = "SELECT ";
            elToFind.forEach(element => {
                request+=element+", "
            });
            request.substring(0, str.length - 2);
            request+=" FROM "+tableName+" WHERE id =$1;";
            
            const query = {
                name :"select_by_id",
                text:request,
                values:[id]
            }

            this.user.query(query, function(err, res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows[0]);
                }
            });
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
                    resolve(res.rows[0]);
                }
            })
        });
    }

    /*enregistrement de nonuvelles valeurs dans une table avec les valeurs du dictionnaire valuesToSave*/
    save(tableName, valuesToSave){
        return new Promise((resolve,reject)=>{
            var request = "INSERT INTO "+tableName+" (";
            for(var [key,value] of valuesToSave){
                request+=key+", ";
            }
            request.substring(0, str.length - 2);
            request+=") values (";
            for(var [key,value] of valuesToSave){
                request+="\'"+value+"\', ";
            }
            request.substring(0, str.length - 2);
            request+=");";

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
            var request = "DELETE FROM "+tableName+" WHERE ";
            for (var [key,value] of condition){
                request+=key+" = \'"+value+"\' AND "; 
            }
            request.substring(0, str.length - 4);
            request+=";";
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