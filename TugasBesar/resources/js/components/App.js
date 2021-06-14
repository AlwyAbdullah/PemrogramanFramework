import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Header'
import MenuIndex from './MenuIndex'
import MenuCreate from './MenuCreate'
import MenuShow from './MenuShow'
import MenuEdit from './MenuEdit'
import About from './About';
import Reservasi from './Reservasi'
import Footer from './Footer'
 
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path='/' component={MenuIndex}/>
                        <Route exact path='/create' component={MenuCreate} />
                        <Route path='/menu/edit/:id' component={MenuEdit} />
                        <Route path='/menu/:id' component={MenuShow} />
                        <Route path='/about' component={About} />
                        <Route path='/reservasi' component={Reservasi} />
                    </Switch>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}
 
ReactDOM.render(<App />, document.getElementById('app'))