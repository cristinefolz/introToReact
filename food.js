//Render Mexican food items to the page.

var DATA = {  // DATA is an object, that contains key/value pairs
  title: 'Menu',
  items: [  // item is a key that has a value of an array
    { id: 1, name: 'tacos', type: 'mexican'},
    { id: 2, name: 'burritos', type: 'mexican'},
    { id: 3, name: 'egg roles', type: 'chinese'},
    { id: 4, name: 'tostada', type: 'mexican'},
    { id: 5, name: 'pizza', type: 'italian'}
  ]
};

// just filter for mexican food, map the name of filtered food

var mexican = function(food) {
  return food.type === 'mexican';
};

var foodName = function(food) {
  return <li> {food.name} </li>;
};

var Menu = React.createClass({
  render: function(){
                              // DATA.items points to the array of the items property
    var filterAndMapFoodHere = DATA.items.filter(mexican).map(foodName);  // returning an array (not a DATA object with fewer items)

    return (
      // '{' braces make the data in them dynamic
      <div>
        <h3> { DATA.title } </h3> 
        <ul>
          { filterAndMapFoodHere }
        </ul>
      </div>
      )
  }
})

React.render(<Menu/>, document.getElementById('food'))