import SearchTab from "../../UI/SearchTab/SearchTab"

const Home = () => {
        return (
                <main className="App position-absolute top-50 start-50 translate-middle d-flex flex-column align-items-center">
                        <h1>Search Devs</h1>
                        <SearchTab placeholder='Type a username here' />
                </main>
        )
}

export default Home