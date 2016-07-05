var React = require("react"),
ReactDOM = require("react-dom"),
expect = require("expect"),
$ = require("jquery"),
testUtils = require("react-addons-test-utils"),
Clock = require("clock")


describe('Clock', ()=>{
    it('should exist', ()=> {
        expect(Clock).toExist();
    })
})


describe('render', ()=>{
    it('should render clock to output', ()=> {
        var clock = testUtils.renderIntoDocument(<Clock tsec={62}/>)
        var $el= $(ReactDOM.findDOMNode(clock));
        var actual = $el.find('.clock-text').text();
        expect(actual).toBe("01:02");
    })
})

describe('Format Seconds', ()=>{
    it('should format seconds', ()=> {
        var clock = testUtils.renderIntoDocument(<Clock/>)
        //console.log(clock)
        var tsec=615;
        var want = '10:15'
        var actual = clock.formatSec(tsec)
        expect(actual).toBe(want)
    })
})

describe('Format Seconds', ()=>{
    it('should format seconds/min when single digit', ()=> {
        var clock = TestUtils.renderIntoDocument(<Clock/>)
        //console.log(clock)
        var tsec=61;
        var want = '01:01'
        var actual = clock.formatSec(tsec)
        expect(actual).toBe(want)
    })
})