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
			<div className="CommenList">
				<Comment author="Pete">First comment</Comment>
				<Comment author="John">Second comment</Comment>
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function(){
		return(
			<div className="commentForm">Hello World I am a CommentForm</div>
		);
	}
});

var Comment = React.createClass({
	render: function(){
		return (
			<div className="comment">
				<h2 className="commentAuthor">{this.props.author}</h2>
				{this.props.children}
			</div>
		);
	}
});




ReactDOM.render(<CommentBox/>, document.getElementById('content'));
