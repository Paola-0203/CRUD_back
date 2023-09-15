import  express  from 'express';

const router = express.Router();

import { getUsuario,
    saveUsuario,
    updateUsuario,
    deleteUsuario,
    listUsuario
} from '../controllers/usuarioController.js';

router.get('/', listUsuario );
router.get('/:id',getUsuario );
router.put('/updateUsuario/:id', updateUsuario);
router.post('/',saveUsuario);
router.delete('/:id', deleteUsuario);

export default router;