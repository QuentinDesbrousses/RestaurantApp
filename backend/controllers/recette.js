const Recette = require('../models/recette');
const pool =require('../config/db')

exports.getAllRecette = (req, res, next) => {
    const recette = new Recette.Recette();
    recette.selectAll()
    .then((recettes) => {
          res.status(200).json(recettes)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'recettes non-envoyees'})}
      ); 
}

exports.getRecette = (req, res, next) => {
    const recette = new Recette.Recette();
    recette.selectById(req.params.id)
    .then((recette) => {
        res.status(200).json(recette)})
    .catch((error) => {
        res.status(400).json({
            error: error,
            message:"recette non-envoyee"})}
    ); 
}

exports.createRecette = (req, res, next) =>{
    const recette = new Recette.Recette();
    var valuesToSave = [req.body];
    recette.addValue(valuesToSave)
    .then(()=> res.status(201).json({message:"recette créée"}))
    .catch((err) => res.status(400).json({error:err}));
}

exports.deleteRecette = (req,res,next) =>{
    const recette = new Recette.Recette();
    var condition = [req.body];
    recette.delete(condition)
    .then(()=> res.status(200).json({message:"recette supprimée"}))
    .catch((err) => res.status(400).json({error:err}));
}

exports.deleteById = (req,res,next) => {
    const recette = new Recette.Recette();
    recette.deleteById(req.params.id)
    .then(()=> res.status(201).json({message:"recette supprimée"}))
    .catch((err) => res.status(400).json({error:err}));
}

exports.modifyRecette = (req,res,next)=>{
    const recette = new Recette.Recette();
    var changements = [req.body];
    recette.modify(req.params.id,changements)
    .then(()=> res.status(200).json({message:"recette modifiée"}))
    .catch((err) => res.status(400).json({error:err}));
}