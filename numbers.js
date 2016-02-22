var numbersArray = [1,2,3,4,5,6,7,8,9,10]

var Numbers = React.createClass({
	render: function () {   // render function spits out javascript to the page

		var listElements = numbersArray.map(function(e) {
			return <li> {e} </li>
		});

		return (
			<div>
				<h3> Check out my numbers: </h3>
				<ul>
					{ listElements }
				</ul>
			</div>
		)
	}
});

React.render(< Numbers />, 
	document.getElementById('numbers')
	);