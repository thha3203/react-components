// TODO
class App extends React.Component {
  render() {
    return (
      <GroceryList items={['apple', 'orange', 'rice', 'cereal']}/>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));