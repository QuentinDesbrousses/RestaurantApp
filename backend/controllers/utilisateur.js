const Utilisateur = require('../models/utilisateur');
const pool =require('../config/db');
const bcrypt = require('bcrypt');
const utilisateur = new Utilisateur.Utilisateur();
const tokenKey = require('../middleware/tokenKey');


exports.getAllUtilisateur = (req, res, next) => {
    //const utilisateur = new Utilisateur.Utilisateur();
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
        //const utilisateur = new Utilisateur.Utilisateur();
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
        //const utilisateur = new Utilisateur.Utilisateur();
        bcrypt.hash(req.body.mdp, 10)
        .then(hash => {
          req.body.mdp=hash;
          var valuesToSave = [req.body];
          utilisateur.addValue(valuesToSave)
          .then(()=> res.status(201).json({message:"utilisateur créé"}))
          .catch((err) => res.status(400).json({error:err}));
        })
        .catch(err => res.status(500).json({message: "pb encryptage du mot de passe", error:err }) )
    }
    
    exports.login = (req, res, next) => {
      utilisateur.selectByEmail(req.body.email)
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Pas d utilisateur correspondant !' });
          }
          bcrypt.compare(req.body.mdp, user.mdp)
            .then(valid => {
              if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
              }
              console.log(user.id_utilisateur)
              res.status(200).json({
                userId: user.id_utilisateur,
                token: tokenKey.tokenUtilisateur(user)
              });
              let token = req.headers["x-access-token"];
              console.log(token);
            })
            .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
    };

    exports.deleteUtilisateur = (req,res,next) =>{
      //const utilisateur = new Utilisateur.Utilisateur();
      var condition = [req.body];
      utilisateur.delete(condition)
      .then(()=> res.status(200).json({message:"utilisateur supprimé"}))
      .catch((err) => res.status(400).json({error:err}));
    }

    exports.deleteById = (req,res,next) => {
      //const utilisateur = new Utilisateur.Utilisateur();
      utilisateur.deleteById(req.params.id)
      .then(()=> res.status(201).json({message:"utilisateur supprimé"}))
      .catch((err) => res.status(400).json({error:err}));
    }

    exports.modifyUtilisateur = (req,res,next)=>{
      //const utilisateur = new Utilisateur.Utilisateur();
      var changements = [req.body];
      utilisateur.modify(req.params.id,changements)
      .then(()=> res.status(200).json({message:"utilisateur modifié"}))
      .catch((err) => res.status(400).json({error:err}));
    }