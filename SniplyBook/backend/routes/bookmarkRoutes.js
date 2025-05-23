// routes/bookmarkRoutes.js
import { Router } from 'express';
import auth from '../middleware/authMiddleware.js';
import {
  createBookmark,
  getBookmarks,
  deleteBookmark,
  reorderBookmarks
} from '../controllers/bookmarkController.js';

const router = Router();
router.use(auth);
router.post('/', createBookmark);
router.get('/',  getBookmarks);
router.delete('/:id',deleteBookmark);
router.put('/reorder', reorderBookmarks);

export default router;
