    var React = require("react")
    var ReactDom = require("react-dom")
    var {Route, Router, IndexRoute, hashHistory} = require("react-router")

    //load foundation 
    require("style!css!foundation-sites/dist/foundation.min.css")
    $(document).foundation()
      require("style!css!sass!appcss")
  

    
    /* //ES6 destructuring syntax 
       var Route = require('react-router').Route ect... 
       var obj={name: 'mads'} || var {name} = obj: <=> var name = obj.name
    */
    
    var Main = require("main")
    var Timer = require("timer")
    var Countd = require("countdown")
    

   
    ReactDom.render(
            <Router history={hashHistory}>
                <Route path='/' component={Main}> //nested routes
                   <Route path='timer' component={Timer}/>
                   <Route path='countdown' component={Countd}/>
                   
                   <IndexRoute  component={Timer}/>
                </Route>
            </Router>,
        document.getElementById('app')
        
        )
        
        
        
//when button gets clicked, call a parent function on the prop called child'name=parentfunctionName = setState
//hook up statevar=updated name to the rendering compo = passin

//containers has state, dumb compo don't
//can't ever update props... you just get those, can update state tho if container
//containers should not do much other than rendering children (should have a root div but that's about it)