class App extends React.Component {
  constructor (props) {
    super(props);
    console.log('App constructor')
    this.state = {
      text: '',
      showChild: true
    }
  }

  componentDidMount () {
    console.log('App componentDidMount')
    fetch('http://52.90.22.200/test')
    .then((resp) => resp.json())
    .then((result) => {
      console.log('SUCCESS', result);
    })
    .catch((err) => {
      console.log('FAILURE', err)
    })
  }

  render () {
    console.log('App render')
    return (
      <div className='app'>
        <button
          onClick={() => {
            this.setState((prevState) => ({
              showChild: !prevState.showChild
            }));
          }}
        >
          SHOW CHILD
        </button>

        <button
          onClick={() => {
            this.setState((prevState) => ({
              text: prevState.text + '-hello'
            }));
          }}
        >
          UPDATE TEXT
        </button>

        {this.state.showChild ? <Lifecycles text={this.state.text}/> : null}
      </div>
    )
  }
}

class Lifecycles extends React.Component {
  constructor(props) {
    super(props);
    //We can declare state inside constructor. State becomes initialized on this class called Lifecycles
    console.log('Lifecycles constructor');
  }

  componentDidMount () {
    console.log('Lifecycles componentDidMount');
  }

  componentDidUpdate () {
    console.log('Lifecycles componentDidUpdate');
  }

  componentWillUnmount () {
    console.log('Lifecycles componentWillUnmount');
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('Lifecycles shouldComponentUpdate', nextProps);
    return this.props.text !== nextProps.text;
  }

  render () {
    console.log('Lifecycles render');
    return (
      <div className='lifecycles'>
        <h2>LIFECYCLES COMPONENT</h2>
        {this.props.text}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
