var React = require("react")

var Clock = React.createClass({
    getDefaultProps: function(){
        tsec: 0
    },
    propTypes: {
        tsec: React.PropTypes.number
    },
    formatSec: function(tsec) {
        var sec = tsec%60;
        var min = Math.floor(tsec/60);
        if (sec < 10) {sec = "0"+sec}
        if (min < 10) {min = "0"+min}
        return min + ':' +sec
    },
    render: function(){
        var {tsec} = this.props
        return (
            <div className='clock'>
            <span className='clock-text'>
            <div>{this.formatSec(tsec)}</div>
            </span>
            </div>
            )
    }
})

module.exports = Clock