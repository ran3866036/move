var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var hashHistory = require('react-router').hashHistory;
var IndexRoute = require('react-router').IndexRoute;


var App = require('./modules/App');
var Home = require('./modules/Home');
var About = require('./modules/About');
var Contact = require('./modules/Contact');
var Detail = require('./modules/Detail');
var Login = require('./modules/Login');
var Register = require('./modules/Register');
var List = require('./modules/List');

var Index = React.createClass({
	render:function(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Home}/>
					<Route path="/detail/:id" component={Detail} />
					<Route path="/about" component={About} />
					<Route path="/contact" component={Contact} />
					
					<Route path="/login" component={Login} />
					<Route path="/Register" component={Register} />
					<Route path="/List" component={List} />
				</Route>
			</Router>
		)
	}
})

ReactDOM.render(<Index/>,document.getElementById('app'));