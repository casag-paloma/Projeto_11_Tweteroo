import express from "express"; 
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
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

server.get('/tweets', (request, response) => {
    const lastTweets = tweets.slice(-10)
    response.send(lastTweets.reverse())
})

server.listen(5000);


