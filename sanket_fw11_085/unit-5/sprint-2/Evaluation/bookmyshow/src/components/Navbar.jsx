import { Link, Route, Switch } from 'react-router-dom'
import { Home } from "./Home";
import { About } from "./About";
import { Dashboard } from "./Dashboard";
import { MovieDetails } from './MovieDetails';
export const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Dashboard">Dashboard</Link>

            </div>



            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/About" component={About} />
                <Route exact path="/Dashboard" component={Dashboard} />
                <Route exact path="/movie/:id" component={MovieDetails} />
            </Switch>




        </>
    )
}
