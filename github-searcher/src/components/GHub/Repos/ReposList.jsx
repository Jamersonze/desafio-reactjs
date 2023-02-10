import Repo from './Repo'

const ReposList = props => {
    return (
        <ul className="repos list-group list-group-flush">
            {props.repos.map((repo, index) => (<Repo repo={repo} key={index} />))}
        </ul>
    )
}

export default ReposList