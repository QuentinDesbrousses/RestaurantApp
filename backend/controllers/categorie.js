const Categorie = require('../models/categorie');
const pool =require('../config/db')

exports.getAllCategorie = async (req, res, next) => {
    const categorie = new Categorie.Categorie();
    categorie.selectAll()
    .then((categories) => {
          res.status(200).json(categories)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'categories non-envoyees'})}
      ); 
    }

    exports.getCategorie = async (req, res, next) => {
        const categorie = new Categorie.Categorie();
        categorie.selectById(req.params.id)
        .then((cat) => {
            res.status(200).json(cat)})
        .catch((error) => {
            res.status(400).json({
                error: error,
                message:"categorie non-envoye"})}
        ); 
    }

    exports.createCategorie = async (req, res, next) =>{
        const categorie = new Categorie.Categorie();
        var valuesToSave = [req.body];
        categorie.addValue(valuesToSave)
        .then(()=> res.status(201).json({message:"categorie créée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteCategorie = async (req,res,next) =>{
        const categorie = new Categorie.Categorie();
        var condition = [req.body];
        categorie.delete(condition)
        .then(()=> res.status(200).json({message:"categorie supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = async (req,res,next) => {
        const categorie = new Categorie.Categorie();
        categorie.deleteById(req.params.id)
        .then(()=> res.status(201).json({message:"categorie supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyCategorie = async (req,res,next)=>{
        const categorie = new Categorie.Categorie();
        var changements = [req.body];
        categorie.modify(req.params.id,changements)
        .then(()=> res.status(200).json({message:"categorie modifiée"}))
        .catch((err) => res.status(400).json({error:err}));
    }