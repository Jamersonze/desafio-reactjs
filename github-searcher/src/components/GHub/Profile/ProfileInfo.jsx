import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUsers, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"

const ProfileInfo = props => {
    return (
        <aside className="profile-info bg-secondary p-3 h-auto text-light sticky-top vh-100" style={{maxWidth: '30%'}}>
            <header className="profile-info__avatar d-flex justify-content-center pt-5">
                <img src={props.user.avatar_url} alt="Avatar" style={{maxWidth: '300px', width: '100%', maxHeight: '300px', height: '100%'}} />
            </header>
            <main className="d-flex flex-column pt-3">
                <section className="profile-info__name">
                    <h3 className="mb-0">{props.user.name}</h3>
                    <h5>@{props.user.login}</h5>
                </section>
                <section className="profile-info__bio text-dark">
                    <p>{props.user.bio}</p>
                </section>
                <section className="profile-info__stats d-flex flex-row justify-content-between">
                    <span><FontAwesomeIcon icon={faUsers} className="pe-1" />{props.user.followers} followers</span>
                    <span><FontAwesomeIcon icon={faHeart} className="pe-1" />{props.user.following} following</span>
                    <span><FontAwesomeIcon icon={faStar} className="pe-1" />{props.user.following} stars</span> 
                </section>
                <section className="profile-info__details pt-2">
                    <h5>{props.user.company}</h5>
                    <h5>{props.user.location}</h5>
                    <h5>{props.user.email}</h5>
                    <h5>{props.user.blog}</h5>
                    {props.user.twitter_username && <h5>@{props.user.twitter_username}</h5>}
                </section>
            </main>
            <footer className="d-flex justify-content-center pt-1">
                <Link to={'/'} className="text-decoration-none">
                    <button className="back px-5 py-2 rounded-3">
                        Voltar
                    </button>
                </Link>
            </footer>
        </aside>
    )
}

export default ProfileInfo