import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.json({ pingResponse: true });
});

export default router;
