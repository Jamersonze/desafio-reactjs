import maykbrito from "../../../Data/maykbritoUser"

const ProfileInfo = props => {
    return (
        <aside className="profile-info bg-secondary p-4 h-auto text-light" style={{maxHeight: 'auto', maxWidth: '25%'}}>
            <section className="profile-info__avatar d-flex justify-content-center">
                <img src={props.user.avatar_url} alt="jaca" style={{maxWidth: '300px', maxHeight: '300px'}} />
            </section>
            <section className="profile-info__name">
                <h2>{props.user.name}</h2>
                <h5>@{props.user.login}</h5>
            </section>
            <section className="profile-info__bio">
                <p>{props.user.bio}</p>
            </section>
            <section className="profile-info__stats d-flex">
                {/* Componente para pegar o numero de seguidores, seguindo e estrelas */}
                <p>{props.user.followers} followers</p>
                <p>{props.user.following} following</p>
                <p>{maykbrito.repos.length} stars</p>
            </section>
            <section className="profile-info__details">
                <h5>{props.user.company}</h5>
                <h5>{props.user.location}</h5>
                <h5>{props.user.email}</h5>
                <h5>{props.user.blog}</h5>
                <h5>{props.user.twitter_username}</h5>
            </section>
        </aside>
    )
}

export default ProfileInfo