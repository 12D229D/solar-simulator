import { Router, Request, Response } from 'express';
import { Planet } from '../models/planet';
import * as path from 'path';
import * as fs from 'fs';

const router = Router();
const dataPath = path.resolve(__dirname, '../../../data/planets.json');

// Lee el archivo JSON una vez al iniciar
let planets: Planet[] = [];
try {
  const raw = fs.readFileSync(dataPath, 'utf-8');
  planets = JSON.parse(raw) as Planet[];
} catch (err) {
  console.error('Error loading planets data:', err);
}

router.get('/planets', (req: Request, res: Response) => {
  res.json(planets);
});

export default router;
