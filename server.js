import express from "express"; 
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());
const users = [];
const tweets = [];
let avatar = '';

server.post('/sign-up', (request, response) => {
    users.push(request.body)
    avatar = request.body.avatar
    response.send('OK')
})

server.post('/tweets', (request, response) => {
    tweets.push({
      username: request.body.username,
	  avatar: avatar,
	  tweet: request.body.tweet
    })
    response.send('OK')
})

server.get('/tweets', (request, response) => {
    const lastTweets = tweets.slice(-10)
    response.send(lastTweets.reverse())
})

server.listen(5000);


