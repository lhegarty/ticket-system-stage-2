import './App.css';
import TicketOverview from './components/TicketOverview/TicketOverview';
import NavigationBar from './components/NavigationBar/NavigationBar';
import TicketForm from './components/TicketForm/TicketForm';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavigationBar />
                <ToastContainer />

                <Switch>
                    <Route exact path="/" component={TicketOverview} />
                    <Route path="/create" component={TicketForm} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
