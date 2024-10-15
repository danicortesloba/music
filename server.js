// Importamos el módulo express
import express from 'express';
import 'dotenv/config'
import helmet from 'helmet';
import morgan from 'morgan';
import { createRandomPlaylist, createRandomSong } from './data.js';

const app = express();

app.use(helmet());
app.use(morgan('dev'));

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
res.send('Hola Mundo!');
});

app.get('/song', (req, res) => {
    res.json(createRandomSong());
});

app.get('/playlist', (req, res) => {
    res.json(createRandomPlaylist());
});

app.listen(port, () => {
console.log(`El servidor está activo en el puerto: ${port}`);
});