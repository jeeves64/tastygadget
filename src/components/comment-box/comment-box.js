var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
        <CommentList comments={this.props.comments} />
        <CommentForm />
      </div>
    );
  }
});
