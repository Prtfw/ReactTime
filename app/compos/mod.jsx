var React=require("react")
var ReactDom = require("react-dom")
var ReactDomServer = require("react-dom/server")



var ErrMod = React.createClass({
getDefaultProps: function(){
    return{
        title: 'Error'
    }
},

propTypes: {
    title: React.PropTypes.string,
    msg: React.PropTypes.string.isRequired
},
  componentDidMount: function () {
        var {title, msg} = this.props
      var modmarkup = (
             
            <div id='err' className ='reveal tiny text-center' data-reveal=''>
                <h4> {title} </h4>
                <p> {msg}</p>
                <p> <button className='button hollow' data-close=''> okay </button></p>
            </div>
            
            )
            
    var $modal = $(ReactDomServer.renderToString(modmarkup))
    $(ReactDom.findDOMNode(this)).html($modal)
    var modal = new Foundation.Reveal($('#err'));
    modal.open();
  },
    render: function(){
        return(
            <div>
            </div>)
    }
})

module.exports =ErrMod