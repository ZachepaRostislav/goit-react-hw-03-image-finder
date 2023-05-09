import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, FormBtn, FormInput, Header } from './Searchbar.styled';

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleImageNameChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.error('field cannot be empty', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });

      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };
  render() {
    return (
      <>
        <Header className="searchbar">
          <Form className="form" onSubmit={this.handleFormSubmit}>
            <FormBtn type="submit" className="button">
              Click Me
            </FormBtn>

            <FormInput
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              value={this.state.imageName}
              placeholder="Search images and photos"
              onChange={this.handleImageNameChange}
            />
          </Form>
        </Header>
      </>
    );
  }
}
