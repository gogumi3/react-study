import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { UserContext } from './UserContext'

const Footer = () => {
    const { dark, setDark } = useContext(ThemeContext);
    const { user, setUser } = useContext(UserContext);

    return (
        <div className={`footer ${dark ? 'black' : 'gray'}`}>

            <button onClick={() => setDark(!dark)}>
                {dark ? 'Light Mode' : 'Dark Mode'}
            </button>

        </div>
    )
}

export default Footer