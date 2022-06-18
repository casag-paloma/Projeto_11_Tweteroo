import { sign } from "crypto";
import express from "express"; 

const app = express();
app.use(express.json());
console.log('tá funcionando');
const users = []

app.post('/sign-up', (request, response) => {
    users.push(request.body);
    response.send('OK')
})

app.get('/sign-up', (req, res) =>{
    res.send(users);
})

app.listen(5000);


