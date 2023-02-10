import SearchTab from "../../UI/SearchTab/SearchTab"

const Home = props => (
        <main className="App position-absolute bottom-50 start-50 translate-middle d-flex flex-column align-items-center">
                <h1>Search Devs</h1>
                <SearchTab placeholder='Type a username here' onSearchSubmit={props.onSubmit}/>
        </main>
)

export default Home