import react from 'react'
import { Route,  Switch} from 'react-router-dom'
import Author from './pages/Author'
import AuthorDetail from './pages/AuthorDetail'
import Errorboundary from './pages/Errorboundary'
import Header from './components/Header'

export default function App  (){

    <Switch>
        <Route exact path="/" component= {<Header/>}
        />
        <Route exact path="/authordetail/:authId" component= {<AuthorDetail/>}
        />
        <Route exact path="/notfound" component= {<Errorboundary/>}
        />
    </Switch>
}
