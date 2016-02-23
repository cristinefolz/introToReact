var greetingsArr = ["hello", "bonjour", "hola", "konitchewa", "nihao", "komsomidah", "HEY", "aloha"];

var Gravatar = React.createClass({
	render: function() {
		var title = 'greetings from around the world!'
		var greetings = this.props.hellos.map(function(e) {
			return <li> { e } </li>                     // this is what is produced for each element in the array
		});
		return (
			// this.props.name comes from the property that we passed in via the React.render line
			<div>
				<h3> { title } </h3>
				<h5> { this.props.name } </h5>
				<h5> { this.props.age } years old </h5>
				<input type="text" />
				<ul>
					{ greetings }
				</ul>
			</div>
		)
	}
});

React.render(< Gravatar 
		name="Cristine"
		age="57" 
		hellos={ greetingsArr } />,
	document.getElementById('gravatar'));
// name, age = properties that we are passing into Gravatar




// var makeList = function(el) {
// 	return <li> { e } </li>
// };
// var greetingsArr = greetings.map(makeList);