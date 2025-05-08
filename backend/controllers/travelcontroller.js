const Travel = require('../models/Travel');

exports.getTravels = async (req, res) => {
  const data = await Travel.find();
  res.json(data);
};

exports.addTravel = async (req, res) => {
  const travel = new Travel(req.body);
  await travel.save();
  res.status(201).json({ message: 'Travel entry added' });
};
