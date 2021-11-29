class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      hover: false
    }
  }
  hide = (currState) => {
    return {done: !currState.done};
  }
  bold = (curState) => {
    return {hover: !curState.hover};
  }
  handleClick = () => {
    this.setState(this.hide);
  }
  handleHover = () => {
    this.setState(this.bold);
  }
  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : '',
      fontSize: '20px',
      cursor: 'pointer'
    };
    return (
      <li
        style={style}
        onClick={this.handleClick}
        onMouseEnter = {this.handleHover}
        onMouseLeave = {this.handleHover}
      >
        {this.props.item}
      </li>
    )
  }
}