var React = require("react");
var Nav = require("nav")
var Countd =require("countdown")
var Timer =require("timer")

var Main = (props)=>{
        return(
            <div>
                        <Nav />
                        
                        {props.children}
                        
            
            </div>
        )
}

module.exports = Main