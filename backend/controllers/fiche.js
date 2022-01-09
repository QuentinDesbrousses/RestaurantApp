const Fiche = require('../models/fiche');
const pool =require('../config/db')

exports.getAllFiche = async (req, res, next) => {
    const fiche = new Fiche.Fiche();
    fiche.selectAll()
    .then((fiches) => {
          res.status(200).json(fiches)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'fiches non-envoyees'})}
      ); 
    }

    exports.getFiche = async (req, res, next) => {
        const fiche = new Fiche.Fiche();
        fiche.selectById(req.params.id)
        .then((fiche) => {
            res.status(200).json(fiche)})
        .catch((error) => {
            res.status(400).json({
                error: error,
                message:"fiche non-envoyee"})}
        ); 
    }

    exports.createFiche = async (req, res, next) =>{
        const fiche = new Fiche.Fiche();
        var valuesToSave = [req.body];
        fiche.addValue(valuesToSave)
        .then(()=> res.status(201).json({message:"fiche créée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteFiche = async (req,res,next) =>{
        const fiche = new Fiche.Fiche();
        var condition = [req.body];
        fiche.delete(condition)
        .then(()=> res.status(200).json({message:"fiche supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = async (req,res,next) => {
        const fiche = new Fiche.Fiche();
        fiche.deleteById(req.params.id)
        .then(()=> res.status(201).json({message:"fiche supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyFiche = async (req,res,next)=>{
        const fiche = new Fiche.Fiche();
        var changements = [req.body];
        fiche.modify(req.params.id,changements)
        .then(()=> res.status(200).json({message:"fiche modifiée"}))
        .catch((err) => res.status(400).json({error:err}));
    }