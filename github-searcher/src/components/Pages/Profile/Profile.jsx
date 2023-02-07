import { useEffect, useState } from "react"
import api from "../../../API/api"

const Profile = props => {

    const [user, setUser] = useState({})
    const [repos, setRepos] = useState([])

    useEffect(() => {
        api.getUser(props.username).then(result => setUser(result))
        api.getRepos(props.username).then(result => setRepos(result))
    }, [])
    
    return (
        <article className="profile d-flex">
            <aside className="profile-info">
                Casal que se ama
                {/* Componente para renderizar a info do perfil */}
            </aside>
            <section className="profile-repos">
                Remedio na cama
                {/* Componente para renderizar a lista de repositorios */}
            </section>
        </article>
    )
}

export default Profile