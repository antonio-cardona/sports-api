import express from 'express';
import {
  createActivity,
  deleteActivity,
  getActivity,
  getActivities,
  updateActivity,
} from '../controllers/activityLevelController.js';

const router = express.Router();

router.get('/', getActivities);

router.get('/:id', getActivity);

router.post('/', createActivity);

router.delete('/:id', deleteActivity);

router.patch('/:id', updateActivity);

export default router;