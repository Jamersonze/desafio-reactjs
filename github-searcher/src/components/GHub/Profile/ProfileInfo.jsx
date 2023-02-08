import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"

const ProfileInfo = props => {
    return (
        <aside className="profile-info bg-secondary p-3 h-auto text-light position-absolute top-0 start-0 bottom-0 height-100 d-flex flex-column justify-content-around" style={{maxWidth: '25%'}}>
            <header className="profile-info__avatar d-flex justify-content-center">
                <img src={props.user.avatar_url} alt="jaca" style={{maxWidth: '300px', maxHeight: '300px'}} />
            </header>
            <section className="profile-info__name">
                <h3 className="mb-0">{props.user.name}</h3>
                <h5>@{props.user.login}</h5>
            </section>
            <section className="profile-info__bio text-dark">
                <p>{props.user.bio}</p>
            </section>
            <section className="profile-info__stats d-flex flex-row justify-content-between">
                <span><FontAwesomeIcon icon={faUsers} />{props.user.followers} followers</span>
                <span><FontAwesomeIcon icon={faHeart} />{props.user.following} following</span>
                <span><FontAwesomeIcon icon={faStar} />{props.user.following} stars</span>
            </section>
            <section className="profile-info__details">
                <h5>{props.user.company}</h5>
                <h5>{props.user.location}</h5>
                <h5>{props.user.email}</h5>
                <h5>{props.user.blog}</h5>
                {props.user.twitter_username && <h5>@{props.user.twitter_username}</h5>}
            </section>
            <footer className="d-flex justify-content-center">
                <Link to={'/perfil'} className="text-decoration-none">
                    <button className="back px-5 py-2 rounded-3">
                        Voltar
                    </button>
                </Link>
            </footer>
        </aside>
    )
}

export default ProfileInfo