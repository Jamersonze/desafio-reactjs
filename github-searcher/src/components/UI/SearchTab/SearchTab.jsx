
import InputGroup from 'react-bootstrap/InputGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'
import { Link } from 'react-router-dom'

const SearchTab = props => {

        const [username, setUsername] = useState('')

        const submitHandler = e => props.onSearchSubmit(username)

        const typeUsernameHandler = e => setUsername(e.target.value)

        return (
                <form className='d-flex'>
                        <InputGroup>
                                <input 
                                        type="text"
                                        placeholder={props.placeholder}
                                        onChange={typeUsernameHandler}
                                />
                        </InputGroup>
                        <Link to={'/perfil'} className='text-decoration-none'>
                                <button 
                                        className='
                                                d-flex
                                                justify-content-center
                                                align-items-center
                                                space-around
                                                '
                                        onClick={submitHandler}
                                >
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />Search
                                </button>
                        </Link>
                </form>
        )
}

export default SearchTab