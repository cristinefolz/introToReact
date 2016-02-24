var ToggleContent = React.createClass({
// GET INITIAL STATE
	// setting an initial value with getInitialStatus (a React method)
	getInitialState: function() {
		return {
			toShowDetails: true
		}
	},

	toggler: function() {
		// .setState is a React method(that is taking an object)
		this.setState ({
			toShowDetails: !this.state.toShowDetails,
		})
	},
// RENDER STUFF
	showContent: function() {
		var shouldShow = this.state.toShowDetails;
		if(shouldShow) {
			return this.props.children;
			// children are the lines of HTML that are within the <ToggleContent> tag we created/added to the App class
		} else {
			null;
		}
	},
// CHANGE THE STATE OF STUFF (via button click)
	render: function() {
		return (
			<div>
			  <h3> { this.props.title } </h3>
			  <button onClick={this.toggler} >toggle</button>
			  { this.showContent() }
		    </div>
		    )
	}
});

var App = React.createClass({
	render: function() {
		return(
			<div>
			  <ToggleContent title="This is a title" >
			    <p> This is the bomb!! </p>
		      </ToggleContent>
		  	</div>
		  	)
	}

});

React.render(<App/>, document.getElementById('toggle'))
// <App/> is from above
// ToggleContent is being rendered into App


// 'children' content exists between the <ToggleContent> tags; to use it in ToggleContent, call it via this.props.children