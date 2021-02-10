import './App.css';
import Header from "./Components/Header";
import AddTodo from "./Components/AddTodo";
import {Switch,Route} from 'react-router-dom';
import TodoList from './Components/TodoList';
import ConfirmAdd from './Components/ConfirmAdd';
import ThemeButton from './Components/ThemeButton';
import {useSelector} from 'react-redux';
// import 'office-ui-fabric-react/dist/css/fabric.css';
function App() {
  const {theme} = useSelector(state => ({...state}))
  return (
    <div className={theme.mode?"ms-Grid App-light":"ms-Grid App-dark"} dir="ltr">
    <div className="ms-Grid-row">
      <div className="ms-Grid-col ms-sm2 ">
        <Header />
      </div>
      <div className="main-element ms-Grid-col ms-sm10">
        <div className="ms-Grid-row center-child">
          <Switch>
            <Route exact path = "/" component = {TodoList} />
            <Route exact path = "/add" component = {AddTodo} />
            <Route exact path = "/confirm" component = {ConfirmAdd} />
          </Switch>
        </div>
        <ThemeButton />
      </div>
    </div>
  </div>
  );
}

export default App;
