import bodyParser from 'body-parser';
import compression from 'compression';
import express from 'express';
import cookieParser from 'cookie-parser';
import render from './render';
import Loadable from 'react-loadable';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//bloqueia o acesso ao arquivo de servidor
app.use('/server.js', (req, res) => {
    res.status(404).send();
});
//bloqueia o static renderizar o index.html antes do ssr
app.get('/', render)
//arquivos estaticos
app.use(express.static(__dirname + '/'));
//renderiza react para todas outras urls
app.use(render)
Loadable.preloadAll().then(() => {
    app.listen(PORT, console.log(`App listening on port ${PORT}!`));
})