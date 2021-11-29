class GroceryList extends React.Component {

  render() {
    return (
      <div>
        <h1>Grocery List</h1>
        <ul>
          {this.props.items.map(item => (
            <GroceryListItem item={item}/>
          ))}
        </ul>
      </div>
    );
  }
}