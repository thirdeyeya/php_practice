class CountButton extends React.Component {
    
  constructor(props) {
    super(props);
    
    this.state = { count : 100 };
  } 
  
  render() {
    return React.createElement(
      "button",
      { onClick:() => this.setState({ count : this.state.count - 1 })},
      "カウント数:" + this.state.count
    );  
  }
}

const domContainer = document.querySelector("#app");

ReactDOM.render(
    
  React.createElement(CountButton),
  
  domContainer
);