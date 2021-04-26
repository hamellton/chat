import express from 'express'
import * as useSocket from 'socket.io'
import http from 'http'

const app = express()

const server = http.createServer(app)
const io = new useSocket.Server(server, {
    cors: {
        origin: "*",
        credentials: true
    }
})

const rooms = new Map()

app.get('/rooms', (req, res) => {
    res.json(rooms)
})

io.on('connection', socket => {
    console.log('socket connect', socket.id)
})

const PORT = process.env.PORT || 8888
server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Server has been started on PORT: ${PORT}`)
})