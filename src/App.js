import About from "./Components/About.js"
import NavBar from "./Components/NavBar.js"
import Profile from "./Components/Profile.js"
import Progress from "./Components/Progress.js"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./Components/Home.js"

function App() {
	return (
		<div className='App'>
			<Router>
				<NavBar />
				<Route path={"/Profile"} exact component={Profile} />
				<Route path={"/Progress"} exact component={Progress} />
				<Route path={"/About"} exact component={About} />
				<Route path={"/" || "/home"} exact component={Home} />
				{/* <Progress /> */}
				{/* <About /> */}
			</Router>
		</div>
	)
}

export default App
