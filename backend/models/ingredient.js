const model = require("./model");

exports.Ingredient = class Ingredient extends model.Model {
    constructor(){
        super();
        this.table="ingredient";
        this.tableId="id_ingredient";
      }
    
      selectById(id){
        return new Promise((resolve,reject)=>{
            var request ="select * from ingredient as i left join categorie_ingredient as ci on i.id_cat_ingr=ci.id_cat_ingr left join allergene as a on a.id_allergene=i.id_allergene left join categorie_allergene as ca on ca.id_cat_al=a.id_cat_al where id_ingredient="+id+";"
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
    
      selectAll(){
        return new Promise((resolve,reject)=>{
            var request ="select * from ingredient as i left join categorie_ingredient as ci on i.id_cat_ingr=ci.id_cat_ingr left join allergene as a on a.id_allergene=i.id_allergene left join categorie_allergene as ca on ca.id_cat_al=a.id_cat_al;"
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
    
      addValue(valuesToSave){
          return super.addValue(this.table, valuesToSave);
      }
    
      delete(condition){
          return super.delete(this.table,condition);
      }
    
      deleteById(id){
          return super.deleteById(this.table,this.tableId,id);
      }
    
      modify(id,changements){
          return super.modify(this.table,this.tableId,id,changements);
      }
    
}