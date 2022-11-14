const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Look Mama! I can code Node now!!!');
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: 017111111 },
    { id: 2, name: 'Khabana', email: 'khabana@gmail.com', phone: 017111111 },
    { id: 3, name: 'Nabana', email: 'nabana@gmail.com', phone: 017111111 },
    { id: 4, name: 'Dhabana', email: 'dhabana@gmail.com', phone: 017111111 },
    { id: 5, name: 'Jabana', email: 'jabana@gmail.com', phone: 017111111 },
    { id: 6, name: 'Aabana', email: 'aabana@gmail.com', phone: 017111111 },
    { id: 7, name: 'Babana', email: 'babana@gmail.com', phone: 017111111 },
]

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('Request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mongo', 'apple', 'orange']);
});

app.get('/fruits/mongo/fazle', (req, res) => {
    res.send('Sour sour fazle flavor');
})

app.listen(port, () => {
    console.log('Listening to port', port);
});