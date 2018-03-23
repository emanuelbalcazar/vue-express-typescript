// routes.ts - server rest routes.
import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/info', (req: Request, res: Response) => {
    res.send({ name: "vuejs express typescript", version: "1.0", date: "March 2018" });
});

export const Routes = router;