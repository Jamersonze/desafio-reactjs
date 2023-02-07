import { useEffect, useState } from "react"

// import api from "../../../API/api"
import maykbrito from "../../../Data/maykbritoUser"

import ProfileInfo from "../../GHub/Profile/ProfileInfo"
import ReposList from "../../GHub/Repos/ReposList"

const Profile = props => {

    const [user, setUser] = useState(maykbrito.user)
    const [repos, setRepos] = useState(maykbrito.repos)

    // useEffect(() => {
    //     api.getUser(props.username).then(result => setUser(result))
    //     api.getRepos(props.username).then(result => setRepos(result))
    // }, [])
    
    return (
        <article className="profile d-flex">
            <ProfileInfo user={user} />
            <ReposList repos={repos} />
        </article>
    )
}

export default Profile