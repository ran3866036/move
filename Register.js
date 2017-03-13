var React = require('react');
var Register = React.createClass({
	handlerRegister:function(){
		var username = this.refs.username.value;
		var password = this.refs.password.value;
		var xhr = new XMLHttpRequest();
		xhr.open("post", "http://www.ranjiaojiao.online/db_login.php", true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send("username="+ username +"&password=" + username);
		xhr.onreadystatechange = function(){
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					var data = JSON.parse(xhr.responseText);
					if(data.status == 4){
						alert('登录失败')
					}else{
						alert('登录成功')
					}
				}
			}
		}

	},
	render:function(){
		return (
			<div className="container marketing">
		      <div className="row">
		        <div>用户登录</div>
				用户名：<input type="text" ref="username" /><br/>
				密码：<input type="password" ref="password"/><br/>
				<button onClick={this.handlerRegister}>登录</button>

		      </div>
			</div>
		)
	}
});

module.exports = Register;