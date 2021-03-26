import './App.css';
import TicketOverview from './components/TicketOverview/TicketOverview';
import NavigationBar from './components/NavigationBar/NavigationBar';
import CreateTicketForm from './components/CreateTicketForm/CreateTicketForm';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar />

                <Switch>
                    <Route exact path="/" component={TicketOverview} />
                    <Route path="/create" component={CreateTicketForm} />
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default App;
