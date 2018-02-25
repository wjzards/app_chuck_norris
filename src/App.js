import React from "react";
import Form from "./Components/Form/Form";
import {
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Message
} from "./Theme/GlobalStyle";

class App extends React.Component {
  state = {
    text: ""
  };

  componentDidMount() {
    fetch(`https://api.icndb.com/jokes/random`)
      .then(res => res.json())
      .then(json => json.value.joke)
      .then(joke => this.setState({ text: joke }));
  }

  handleForm = data => {
    if (data.first_name || data.last_name !== "") {
      fetch(
        `https://api.icndb.com/jokes/random?firstName=${data.first_name}&lastName=${data.last_name}`
      )
        .then(res => res.json())
        .then(json => json.value.joke)
        .then(joke => this.setState({ text: joke }));
    } else {
      fetch(`https://api.icndb.com/jokes/random`)
        .then(res => res.json())
        .then(json => json.value.joke)
        .then(joke => this.setState({ text: joke }));
    }
  };

  render() {
    const { text } = this.state;
    return (
      <Container>
        <Modal>
          <ModalHeader>
            <h1>Chuck Norris</h1>
          </ModalHeader>
          <ModalBody>
            <Message>
              <label>Message</label>
              <p>{text}</p>
              <hr />
            </Message>
            <Form handleForm={this.handleForm} />
          </ModalBody>
        </Modal>
      </Container>
    );
  }
}

export default App;
