import express from 'express';
import {
  canParticipateIn,
  createPerson,
  deletePerson,
  getPerson,
  getPersons,
  updatePerson,
} from '../controllers/personController.js';

const router = express.Router();

router.get('/', getPersons);

router.get('/:id', getPerson);

router.get('/canplay/:id/:sportId', canParticipateIn);

router.post('/', createPerson);

router.delete('/:id', deletePerson);

router.patch('/:id', updatePerson);

export default router;