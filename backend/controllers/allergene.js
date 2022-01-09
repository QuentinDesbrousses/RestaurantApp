const Allergene = require('../models/allergene');
const pool =require('../config/db')

exports.getAllAllergene = async (req, res, next) => {
    const allergene = new Allergene.Allergene();
    allergene.selectAll()
    .then((allergenes) => {
          res.status(200).json(allergenes)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'allergenes non-envoyes'})}
      ); 
      
    }

    exports.getAllergene = async (req, res, next) => {
        const allergene = new Allergene.Allergene();
        allergene.selectById(req.params.id)
        .then((allergene) => {
            res.status(200).json(allergene)})
        .catch((error) => {
            res.status(400).json({
                error: error,
                message:"allergene non-envoye"})}
        ); 
    }

    exports.createAllergene = async(req, res, next) =>{
        const allergene = new Allergene.Allergene();
        var val ={
            "nom_allergene":req.body.nom_allergene,
            "id_cat_al":req.body.id_cat_al
        }
        console.log(val)
        var valuesToSave = [val];
        allergene.addValue(valuesToSave)
        .then(()=> res.status(201).json({message:"allergene créée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteAllergene = async(req,res,next) =>{
        const allergene = new Allergene.Allergene();
        var condition = [req.body];
        allergene.delete(condition)
        .then(()=> res.status(200).json({message:"allergene supprimé"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = async (req,res,next) => {
        const allergene = new Allergene.Allergene();
        allergene.deleteById(req.params.id)
        .then(()=> res.status(201).json({message:"allergene supprimé"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyAllergene = async (req,res,next)=>{
        const allergene = new Allergene.Allergene();
        var changements = [req.body];
        allergene.modify(req.params.id,changements)
        .then(()=> res.status(200).json({message:"allergene modifié"}))
        .catch((err) => res.status(400).json({error:err}));
    }