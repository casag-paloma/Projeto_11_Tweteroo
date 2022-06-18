import express from "express"; 

const server = express();
server.use(express.json());
console.log('tá funcionando');
const users = [];
const tweets = [];

server.post('/sign-up', (request, response) => {
    users.push(request.body)
    response.send('OK')
})

server.post('/tweets', (request, response) => {
    tweets.push(request.body)
    response.send('OK')
})

server.listen(5000);


