import React, {useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'
import "./MainPage.scss"

const MainPage = () => {
    const {logout} = useContext(AuthContext)

    return (
        <div className = "hero">
            <h1>Main Page</h1>
            <button className = "wawes-effect wawes-light btn blue" onClick={logout}>Logout</button>
        </div>
    )
}

export default MainPage