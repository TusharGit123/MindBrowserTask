import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserDashboard from "./components/UserDashboard";
import AddUserForm from "./components/AddUserForm";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={UserDashboard} />
            <Route path="/adduserform" component={AddUserForm} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
// commit 18-03-21
