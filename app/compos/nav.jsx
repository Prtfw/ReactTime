var React=require("react")
var {Link, IndexLink} = require("react-router")


var Nav = React.createClass({
     render: function(){
         return(
            <div className='top-bar'>

                        <ul className='top-bar-left menu'>
                            <li className='menu-text'> Prod. Timer</li>
                            <li> <Link to='timer' activeClassName='active-link'> Timer </Link></li> 
                            <li> <Link to='countdown' activeClassName='active-link' > Countdown </Link></li>
                        </ul>
                        <div className='top-bar-right'>
                        <ul className='menu' style={{verticalAlign: 'middle'}}>
                            <li className='menu-text' style={{verticalAlign: 'middle'}}> Creator: Mads Prtfw! </li>
                        </ul>
                        </div>
            </div>
    )}
})

module.exports = Nav