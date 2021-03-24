import React from 'react'
import Auth from './components/Auth'
import Balance from './components/Balance'
import AccountStatus from './components/AccountStatus'
import Banking from './components/Banking'

function App() {
    return (
        <div>
            <Auth/>
            <Balance/>
            <Banking/>
            <AccountStatus/>
        </div>
    )
}

export default App
