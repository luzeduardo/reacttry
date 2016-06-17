var CommentBox = React.createClass({
	render: function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommenList />
				<CommentForm />
			</div>
		);
	}
});

var CommenList = React.createClass({
	render: function(){
		return (
			<div className="CommenList">Hello World I am a CommenList</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return(
			<div className="commentForm">Hello World I am a CommentForm</div>
		);
	}
}) 

ReactDOM.render(<CommentBox/>, document.getElementById('content'));