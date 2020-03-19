import React, { Component, Suspense } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import routers from './router/index'


class  App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            {
              routers.map(router => {
                if (router.exact) {
                  return (
                    <Route 
                      key={router.name} 
                      path={router.path}
                      exact
                      render= {props => (
                        <Suspense  fallback={<div></div>}>
                           <router.component {...props} routers={router.routers}/>
                        </Suspense>
                        
                      )}
                    />
                  )
                } else {
                  return (
                    <Route 
                      key={router.name} 
                      path={router.path} 
                      render= {props => (
                        <Suspense  fallback={<div></div>}>
                          <router.component {...props} routers={router.routers} />
                        </Suspense>
                      )}
                    />
                  )
                }
              })
            }
          </Switch>
      </Router>
    );
  }
}

export default App;
