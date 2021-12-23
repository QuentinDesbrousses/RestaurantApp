const Utilisateur = require('../models/utilisateur');
const pool =require('../config/db')

exports.getAllUtilisateur = (req, res, next) => {
    const utilisateur = new Utilisateur.Utilisateur();
    utilisateur.selectAll()
    .then((utilisateur) => {
          res.status(200).json(utilisateur)})
    .catch((error) => {
          res.status(400).json({
            error: error,
            message:'utilisateurs non-envoyes'})}
      ); 
    }

    exports.getUtilisateur = (req, res, next) => {
        const utilisateur = new Utilisateur.Utilisateur();
        utilisateur.selectById(req.params.id)
        .then((utilisateur) => {
            res.status(200).json(utilisateur)})
        .catch((error) => {
            res.status(400).json({
                error: error,
                message:'utilisateur non-envoye'})}
        ); 
    }

    exports.createUtilisateur = (req, res, next) =>{
        const utilisateur = new Utilisateur.Utilisateur();
        var valuesToSave = [req.body];
        utilisateur.addValue(valuesToSave)
        .then(()=> res.status(201).json({message:"utilisateur créé"}))
        .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteUtilisateur = (req,res,next) =>{
      const utilisateur = new Utilisateur.Utilisateur();
      var condition = [req.body];
      utilisateur.delete(condition)
      .then(()=> res.status(200).json({message:"utilisateur supprimé"}))
      .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = (req,res,next) => {
      const utilisateur = new Utilisateur.Utilisateur();
      utilisateur.deleteById(req.params.id)
      .then(()=> res.status(201).json({message:"utilisateur supprimé"}))
      .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyUtilisateur = (req,res,next)=>{
      const utilisateur = new Utilisateur.Utilisateur();
      var changements = [req.body];
      utilisateur.modify(req.params.id,changements)
      .then(()=> res.status(200).json({message:"utilisateur modifié"}))
      .catch((err) => res.status(400).json({error:err}));
    }