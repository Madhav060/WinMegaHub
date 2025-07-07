const Certificate = require('../models/Certificate');

exports.getCertificatesByUserId = async (req, res) => {
  const { user_id } = req.params;

  if (!user_id) {
    return res.status(400).json({ message: 'User ID is required.' });
  }

  try {
    const certificates = await Certificate.findAll({
      where: { user_id: user_id }
    });

    if (!certificates || certificates.length === 0) {
      return res.status(404).json({ message: 'No certificates found for this user.' });
    }

    return res.status(200).json({ certificates });
  } catch (err) {
    console.error('Error fetching certificates:', err);
    return res.status(500).json({ message: 'Server error while fetching certificates.' });
  }
};

exports.createCertificate = async (req, res) => {
  const {
    user_id,
    user_name,
    exam_set_id,
    contest_name,
    contest_date,
    raw_marks,
    rank,
    status
  } = req.body;

  if (
    !user_id || !user_name || !exam_set_id || !contest_name ||
    !contest_date || raw_marks === undefined || rank === undefined
  ) {
    return res.status(400).json({ message: 'All required fields must be provided.' });
  }

  try {
    const newCertificate = await Certificate.create({
      user_id,
      user_name,
      exam_set_id,
      contest_name,
      contest_date,
      raw_marks,
      rank,
      status: status ?? 0, // default to 0 if not provided
      generated_at: new Date(),
      updated_at: new Date()
    });

    return res.status(201).json({
      message: 'Certificate created successfully',
      certificate: newCertificate
    });
  } catch (err) {
    console.error('Error creating certificate:', err);
    return res.status(500).json({ message: 'Server error while creating certificate.' });
  }
};

exports.getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.findAll();

    if (!certificates || certificates.length === 0) {
      return res.status(404).json({ message: 'No certificates found.' });
    }

    return res.status(200).json({ certificates });
  } catch (err) {
    console.error('Error fetching all certificates:', err);
    return res.status(500).json({ message: 'Server error while fetching all certificates.' });
  }
};