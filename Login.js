var React = require('react');
var NavLink = require('./NavLink');

var Login = React.createClass({
	// getDefaultProps:function(){
	// 	return {
	// 		url:'http://www.ranjiaojiao.online/db_login.php'
	// 	}
	// },
	// getInitialState:function(){
	// 	return {
	// 		list:[]
	// 	}
	// },
	// componentWillMount:function(){
	// 	var _this = this;
	// 	$.ajax({url:this.props.url}).then(function(res){
	// 		_this.setState({
	// 			list: res.username
	// 		})
	// 	})
	// },
	
	//谷歌插件allow-control-allow-origin解决跨域,新建php
	handlerLogin:function(){
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		var xhr = new XMLHttpRequest();
		xhr.open("post", "http://www.ranjiaojiao.online/db_login.php", true);
		//请求头
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		xhr.send( username+password);
		xhr.onreadystatechange = function() {
			if(xhr.readyState === 4) {
				if(xhr.status === 200){
					var data = xhr.responseText;
					console.log(data.username)
				}
			}
		}

	},
	render:function(){
		return (
			<div className="container marketing">
		      <div className="row">
		        <div>用户注册</div>
				用户名：<input type="text" ref="username" /><br/>
				密码：<input type="password" ref="password"/><br/>
				<button onClick={this.handlerLogin}>注册</button>
		      </div>
			</div>
		)
	}
});

module.exports = Login;