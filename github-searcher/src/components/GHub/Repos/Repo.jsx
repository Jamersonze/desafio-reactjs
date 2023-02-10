import { faStar, faCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Repo = props => {
    return (
        <li className="repo list-group-item">
            <h4>{props.repo.name}</h4>
            <p>{props.repo.description}</p>
            <section className="details">
                <span className="pe-3"><FontAwesomeIcon icon={faStar} className="pe-1" />{props.repo.stargazers_count} stars</span>
                <span><FontAwesomeIcon icon={faCircle} className="pe-1" />{props.repo.stargazers_count} stars</span>
            </section>
        </li>
    )
}

export default Repo