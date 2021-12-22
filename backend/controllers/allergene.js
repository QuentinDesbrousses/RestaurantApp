const express = require('express');
const router = express.Router();

const Allergene = require('../models/allergene');

router.post('/allergene',(req,req,next)=>{
    delete req.body._id;
    const allergene = new Allergene({
        ...req.body
    });
    allergene.save()
        .then(()=> res.status(201).json({message : 'allergene créé'}))
        .catch((error) => res.status(400).json({ error: error}));
});

