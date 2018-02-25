import React from "react";
import { FormBox } from "./Form.style";
import { Button } from "../../Theme/GlobalStyle";

class Form extends React.Component {
  state = {
    data: {
      first_name: "",
      last_name: ""
    },
    error: {}
  };

  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handleForm(this.state.data);
  };

  render() {
    const { data } = this.state;
    return (
      <FormBox>
        <div>
          <label>First Name</label>
          <input
            name="first_name"
            type="text"
            value={data.first_name}
            placeholder="First Name"
            onChange={this.onChange}
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            name="last_name"
            type="text"
            value={data.last_name}
            placeholder="Last Name"
            onChange={this.onChange}
          />
        </div>
        <span></span>
        <Button onClick={this.onSubmit}>Send</Button>
      </FormBox>
    );
  }
}

export default Form;
