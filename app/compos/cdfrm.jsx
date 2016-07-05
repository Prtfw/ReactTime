var React = require("react")

var Cdfrm = React.createClass({
    
    onSub: function(e) {
          e.preventDefault()
          console.log(this.refs.secs)
          var strsec = this.refs.secs.value;
          if (strsec.match(/^[0-9]*$/g)){
              this.refs.secs.value ='';
              this.prosp.onSetCountd(parseInt(strsec,10));
          }
      },
  render: function(){
      
      
      return (
          <div>
            <form  onSubmit={this.onSub} className='cdfrm'>
                <input type='text' ref='secs' placeholder="enter time in secs" />
                <button type='submit' className="button expanded"> Go!</button>
                
            </form>
          </div>
          )
  }
})

module.exports = Cdfrm