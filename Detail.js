var React = require('react');
var NavLink = require('./NavLink');
var Comment = require('./Comment');

var Detail = React.createClass({
	
	getInitialState:function(){
		return {
			detail:[]
		}
	},
	getDefaultProps:function(){
		return {}
	},
	componentWillMount:function(){
		var _this = this;
		$.ajax({url:'http://localhost:3000/db'}).then(function(res){
			_this.setState({
				detail: res.subjects
			})
		})
	},
	render:function(){
		var _id = this.props.params.id;
   		var data = this.state.detail;
   		console.log(data)
       	var detailLen = data.length;
      	var det = [];
        for(var i = 0; i < detailLen; i++){
            if(data[i].id == _id){
                 det.push(<div key={i}><img  
			          src={data[i].images.large} 
			          alt="Generic placeholder image" />
		 	          <p>{"浏览："+data[i].collect_count+"次"}</p>

		 	          </div>)
            }
        };
        var det1 = [];
        for(var i = 0; i < detailLen; i++){
            if(data[i].id == _id){
                 det1.push(<div key={i}>
		 	          <h2>{data[i].title+'('+data[i].year+'年)'}</h2>
		 	           <p>{"英文名："+data[i].directors[0].name}</p>
		 	           <p>{"导演："+data[i].directors[0].name}</p>
		 	           <p>{"剧情："+data[i].genres}</p>
		 	           <p>{"主演："+data[i].casts[0].name+"/"+data[i].casts[1].name+"/"+data[i].casts[2].name}</p>
		 	          <p>{data[i].summary}</p>
		 	          </div>)
            }
        }
		return (
			<div className="container marketing">
		      <div className="row featurette">
		      	<div className="col-md-4 ">
		       	 {det}
		        </div>
		        <div className="col-md-8">
		       	 	{det1}
		        </div>
		      </div>

		      <div className="row featurette">
		       	 <Comment id={this.props.params.id}/>
		      </div>
			</div>
		)
	}
});

module.exports = Detail;
