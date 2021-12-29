const Allergene = require('../models/allergene');
const pool =require('../config/db')

exports.getAllAllergene = (req, res, next) => {
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

    exports.getAllergene = (req, res, next) => {
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

    exports.createAllergene = (req, res, next) =>{
        const allergene = new Allergene.Allergene();
        var valuesToSave = [req.body];
        allergene.addValue(valuesToSave)
        .then(()=> res.status(201).json({message:"allergene créée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteAllergene = (req,res,next) =>{
        const allergene = new Allergene.Allergene();
        var condition = [req.body];
        allergene.delete(condition)
        .then(()=> res.status(200).json({message:"allergene supprimé"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = (req,res,next) => {
        const allergene = new Allergene.Allergene();
        allergene.deleteById(req.params.id)
        .then(()=> res.status(201).json({message:"allergene supprimé"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyAllergene = (req,res,next)=>{
        const allergene = new Allergene.Allergene();
        var changements = [req.body];
        allergene.modify(req.params.id,changements)
        .then(()=> res.status(200).json({message:"allergene modifié"}))
        .catch((err) => res.status(400).json({error:err}));
    }