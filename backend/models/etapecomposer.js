const model = require("./model");

exports.EtapeComposer = class EtapeComposer extends model.Model{

    constructor(){
        super();
        this.table="etapecomposer";
        this.tableId="id_recette";
    }
    selectById(id){
        return new Promise((resolve,reject)=>{
            var request = "select * from "+this.table+" where id_recette="+id+";";

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
                    resolve(res.rows);
                }
            })
        });
    }

    selectAll(){
        return super.selectAll(this.table);
    }

    addValue(valuesToSave){
        return new Promise((resolve,reject)=>{
            var request = "INSERT INTO "+this.table+" (id_recette,id_etape,place) values (";
            for (var el in valuesToSave){
                request+=valuesToSave[el]+", ";
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

    delete(condition){
        return super.delete(this.table,condition);
    }

    deleteById(id){
        return super.deleteById(this.table,"id_recette",id);
    }

/*    modify(changements){
        return new Promise((resolve,reject)=>{
            changements=changements[0]
            console.log("chgmt id etape"+changements.id_etape);
            var request = "update "+tableName+" set ";
            for (var el in changements){
                request+=el+" = \'"+changements[el]+"\', ";
            }
            request=request.substring(0, request.length - 2);
            request+="where id_etape="+changements.id_etape+" and id_ingredient="+changements.id_etape+";";
            this.user.query(request,function(err,res){
                if (err || (res==undefined && res.rows==undefined && res.rows.length==0)) {
                    reject(err.stack)
                } 
                else{
                    resolve(res.rows[0]);
                }
            })
        })
    }*/
        
}