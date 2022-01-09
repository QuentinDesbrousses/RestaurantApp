const Etape = require('../models/etape');
const pool =require('../config/db')

exports.getAllEtape = async (req, res, next) => {
    const etape = new Etape.Etape();
    etape.selectAll()
    .then((etapes) => {
          res.status(200).json(etapes)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'etapes non-envoyees'})}
      ); 
    }

    exports.getEtape = async (req, res, next) => {
        const etape = new Etape.Etape();
        etape.selectById(req.params.id)
        .then((etape) => {
            res.status(200).json(etape)})
        .catch((error) => {
            res.status(400).json({
                error: error,
                message:"etape non-envoyee"})}
        ); 
    }

    exports.createEtape = async (req, res, next) =>{
        const etape = new Etape.Etape();
        var valuesToSave = [req.body];
        etape.addValue(valuesToSave)
        .then(()=> res.status(201).json({message:"etape créée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteEtape = async (req,res,next) =>{
        const etape = new Etape.Etape();
        var condition = [req.body];
        etape.delete(condition)
        .then(()=> res.status(200).json({message:"etape supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = async (req,res,next) => {
        const etape = new Etape.Etape();
        etape.deleteById(req.params.id)
        .then(()=> res.status(201).json({message:"etape supprimée"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyEtape = async (req,res,next)=>{
        const etape = new Etape.Etape();
        var changements = [req.body];
        etape.modify(req.params.id,changements)
        .then(()=> res.status(200).json({message:"etape modifiée"}))
        .catch((err) => res.status(400).json({error:err}));
    }