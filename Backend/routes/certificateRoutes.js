const express = require('express');
const router = express.Router();
const {
  getCertificatesByUserId,
  createCertificate, 
  getAllCertificates
} = require('../controllers/certificateController');

// GET all certificates for a user
router.get('/:user_id', getCertificatesByUserId);

// POST new certificate
router.post('/', createCertificate);

//fetch all certificates 
router.get('/', getAllCertificates);

module.exports = router;
