import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import JoinBlock from "./Components/JoinBlock"

const App = () => {
    const [ state, dispatch ] = React.useReducer(reducer, {
        isAuth: false
    })

    const onLogin = () => {
        dispatch({
            type: 'IS_AUTH',
            payload: true
        })
    }
    return (
        <div className="wrapper">
            <JoinBlock onLogin={onLogin}/>
        </div>
    )
}

export default App
