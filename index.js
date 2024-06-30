import express from 'express';
import Connection from './Database/db.js';
import routes from './Routes/Route.js';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 8000;

const __dirname = path.resolve();
// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', routes);

app.use(express.static(path.join(__dirname,"./client/build")));

app.get("*", function(_, res) {
    res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
        res.status(500).send(err);
    })
})
// Database Connection
Connection();

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));