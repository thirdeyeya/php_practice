class CountButton extends React.Component {
    
  constructor(props) {
    super(props);
    
    this.state = { count : 100 };
  } 
  
  render() {
    return React.createElement(
      "button",
      { onClick:() => this.setState({ count : countFunc(this.state.count) })},
      "カウント数:" + this.state.count
    );  
  }
}

const domContainer = document.querySelector("#app");

ReactDOM.render(
    
  React.createElement(CountButton),
  
  domContainer
);

// カウンタの処理用関数
function countFunc(v) {
  if (v == 0) {
    return 100;
  } else {
    return v - 1;
  }
}