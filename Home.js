var React = require('react');
var NavLink = require('./NavLink');

var Home = React.createClass({
	// getDefaultProps:function(){
	// 	return {
	// 		url:'http://localhost:3000/db'
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
	// 			list: res.subjects
	// 		})
	// 	})
	// },
	render:function(){
		
		// if(this.state.list.length>0){
		// 	for(var i =0;i<listLen;i++){
		// 		var animate = [];
		// 		var detailUrl = "/detail/" + data[i].id;
		// 		animate.push(
		// 			<div key={i}>
		// 	          <img
		// 	          src={data[i].images.medium} 
		// 	          alt="Generic placeholder image" width="80%" height="300px"/>
		// 	        </div>
		// 		)
		// 	}
		// }




		return (
			<div id="myCarousel" className="carousel slide" data-ride="carousel">
			  <ol className="carousel-indicators">
			    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
			    <li data-target="#myCarousel" data-slide-to="1"></li>
			    <li data-target="#myCarousel" data-slide-to="2"></li>
			  </ol>
			  <div className="carousel-inner" role="listbox">
			    <div className="item active">
			      <img className="first-slide" src="../timg.jpg" alt="First slide"/>
			      <div className="container">
			        <div className="carousel-caption">
			          <h1>Example headline.</h1>
			          <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
			          <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
			        </div>
			      </div>
			    </div>
			    <div className="item">
			      <img className="second-slide" src="../timg.jpg" alt="Second slide"/>
			      <div className="container">
			        <div className="carousel-caption">
			          <h1>Another example headline.</h1>
			          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
			          <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
			        </div>
			      </div>
			    </div>
			    <div className="item">
			      <img className="third-slide" src="../timg.jpg" alt="Third slide"/>
			      <div className="container">
			        <div className="carousel-caption">
			          <h1>One more for good measure.</h1>
			          <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
			          <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
			        </div>
			      </div>
			    </div>
			  </div>
			  <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
			    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
			    <span className="sr-only">Previous</span>
			  </a>
			  <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
			    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
			    <span className="sr-only">Next</span>
			  </a>
			</div>

		)
	}
});

module.exports = Home;

// <div id="myCarousel" className="carousel slide" data-ride="carousel">
//   <ol className="carousel-indicators">
//     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
//     <li data-target="#myCarousel" data-slide-to="1"></li>
//     <li data-target="#myCarousel" data-slide-to="2"></li>
//   </ol>
//   <div className="carousel-inner" role="listbox">
//     <div className="item active">
//       <img className="first-slide" src="../timg.jpg" alt="First slide"/>
//       <div className="container">
//         <div className="carousel-caption">
//           <h1>Example headline.</h1>
//           <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
//           <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
//         </div>
//       </div>
//     </div>
//     <div className="item">
//       <img className="second-slide" src="../timg.jpg" alt="Second slide"/>
//       <div className="container">
//         <div className="carousel-caption">
//           <h1>Another example headline.</h1>
//           <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
//           <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
//         </div>
//       </div>
//     </div>
//     <div className="item">
//       <img className="third-slide" src="../timg.jpg" alt="Third slide"/>
//       <div className="container">
//         <div className="carousel-caption">
//           <h1>One more for good measure.</h1>
//           <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
//           <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
//         </div>
//       </div>
//     </div>
//   </div>
//   <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
//     <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
//     <span className="sr-only">Previous</span>
//   </a>
//   <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
//     <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
//     <span className="sr-only">Next</span>
//   </a>
// </div>