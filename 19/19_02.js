class MessageH1 extends React.Component {
    
  constructor() {
    super();  
  }    
  
  render() {
      
    let newElement = React.createElement(
      "h1",
      null,
      "おはよう"
    );
    return newElement;
  }
}

const domContainer = document.querySelector("#app");

ReactDOM.render(
    
  React.createElement(MessageH1),
  
  domContainer
);