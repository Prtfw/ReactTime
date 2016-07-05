var React = require("react"),
Clock = require("clock"),
Cdfrm =require("cdfrm")

var Countd = React.createClass({
    getInitialState: function(){
        return {count:0}
    },
    handsetcountd: function(secs){
        this.setState({
            count: secs
        })
    },
    render: function(){
        return (
            <div>
            <h2>Countdown HERE</h2>
            <Clock tsec={this.state.count} />
            <Cdfrm onSetCountd={this.handsetcountd}/>
            </div>
            )
    }
})

module.exports = Countd