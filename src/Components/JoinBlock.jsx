import React from 'react'
import socket from "../socket"
import axios from "axios"

const JoinBlock = () => {
    const [roomId, setRoomId] = React.useState('')
    const [userName, setUserName] = React.useState('')

    const onEnter = () => {
        if (!roomId || !userName) {
            return alert('Пустые инпуты!')
        }
        axios.post('/rooms', {
            roomId,
            userName
        }).then(result => {

        })
    }

    return (
        <div className="join-block">
            <input
                type="text"
                placeholder="Room ID"
                value={roomId} onChange={e => setRoomId(e.target.value)}/>
            <input
                type="text"
                placeholder="Ваше имя"
                value={userName}
                onChange={e => setUserName(e.target.value)}/>
            <button onClick={onEnter} className="btn btn-success">Войти</button>
        </div>
    )
}

export default JoinBlock