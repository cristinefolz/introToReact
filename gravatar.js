var people = [
	{name: 'andrew', email: 'andrew@myspace.com'},
	{name: 'douglas', email: 'doug@kosmojo.com'},
	{name: 'sally sue', email: 'sueSally@facebook.com'},
	{name: 'billy bob', email: 'bob@billy.com'}
	];

var G_URL = "http://gravatar.com/avatar"

var ImageMagic = React.createClass({  // create a Gravatar React Component
	render: function() {
	// console.log(this.props.people);

		var peopleName = function(p) {   // to each element (name) in the array, apply the function described
			var email = p.email;
  			var size = 36;
  			var hash = md5(email);  //using a script tag for the md5 functionality
  			var url = G_URL + '/' + hash + '?s=' + size;
  			console.log(url);
  		
	  		return ( <li> 
	  					<p> { p.name } </p>
	  					<p> { p.email } </p>
	  					<p> <img src={ url }/> </p>
					 </li> 
					)
	  		};

		var listItems = this.props.people.map(peopleName);  // this.props.people array, apply .map method, pass in peopleName method to apply to each index in array

			return (
				<div>
					<h3> People </h3>
					<ul>
						{ listItems }
					</ul>
				</div>
			)
	}
});

React.render(<ImageMagic 
		people={ people }/>,
	document.getElementById('gravatar'));

// var G_URL = "http://gravatar.com/avatar";

// var Gravatar = React.createClass({
//   render: function(){

//   var listItems = this.props.people.map(function(p){

//     var email = p.email;
//     var size = 36;
//     var hash = md5(email);
//     console.log(hash);
//     var url = G_URL + '/' + hash + '?s=' + size;

//     return ( <li> 
//                 <p> { p.name } </p>
//                 <p> { p.email } </p>
//                 <p> <img src={ url }/> </p>
//             </li> 
//           )
//   });

//     return (
//       <div>
//         <h3> people </h3>
//         <ul>
//           {  listItems }
//         </ul>
//       </div>
//       )
//   }
// });

// React.render(<Gravatar 
//               people={ people }/>, 
//   document.getElementById('gravatar'));