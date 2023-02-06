import InputGroup from 'react-bootstrap/InputGroup'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchTab = props => (
        <section className='d-flex'>
                <InputGroup>
                        <input type="text" placeholder={props.placeholder} />
                </InputGroup>
                <button className='d-flex justify-content-center align-items-center space-around'><FontAwesomeIcon icon={faMagnifyingGlass} />Search</button>
        </section>
)

export default SearchTab