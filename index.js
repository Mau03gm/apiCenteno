const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;
const testRoutes = require('./routes/3a_test1');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router(); // Definir el router

router.use('/api', testRoutes);

app.use('/', router); // Montar el router en la aplicación

app.listen(port, () => {
    console.log(
        `
            (        (        (   
            )\\))(    )\\ )   ( )\\  
           ((_)()\\  (()/(   )((_) 
           (_()((_)  /(_))_((_)_  
           |  \\/  |(_)) __|| _ ) 
           | |\\/| |  | (_ || _ \\ 
           |_|  |_|   \\___||___/  
        `
    );
    console.log(`listening at http://localhost:${port}`);
});
