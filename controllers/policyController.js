import { Policy } from '../models/index.js';

export const getPolicies = async (req, res) => {
  try {
    const policies = await Policy.findAll();
    res.json(policies);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch policies' });
  }
};

export const calculateBenefits = async (req, res) => {
  const { policyId, age, premium } = req.body;

  try {
    const policy = await Policy.findByPk(policyId);
    if (!policy) return res.status(404).json({ message: 'Policy not found' });

    const benefit = premium * 10 + age * 200;
    res.json({ benefit });
  } catch (error) {
    res.status(500).json({ message: 'Calculation failed' });
  }
};
