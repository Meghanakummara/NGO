const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');

router.post('/', async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).send(applicant);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.status(200).send(applicants);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
