var HelloWorld = React.createClass ({
	render: function() {
		return (
			<div>
			  <h3> Hello World! </h3>
		    </div>
		    )
	}
});

var GoodBye = React.createClass ({
	render: function() {
		var sentence = "Smell ya later!";
		return (
			<div>
			  <h3> {sentence} </h3>
		    </div>
		    )
	}
});

var App = React.createClass ({
	render: function() {
		return (
			<div>
				< HelloWorld />
				< GoodBye />
			</div>
		)
	}
});

React.render(< App />, 
	document.getElementById('app'));
