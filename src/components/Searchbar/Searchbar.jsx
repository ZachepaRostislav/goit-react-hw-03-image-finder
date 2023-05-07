import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Header,
  Form,
  FormBtn,
  FormBtnLabel,
  FormInput,
} from './Searchbar.styled';

// const KEY = '34723066-8d4f91c8f936e3aca5c8bd269';
// const PATH = `https://pixabay.com/api/?q=cat&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;

// fetch(PATH)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Network response was not ok: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => console.log(data.hits))
//   .catch(error => console.error('Error:', error));

export default class Searchbar extends Component {
  state = {
    imageName: '',
  };

  handleImageChange = e => {
    this.setState({ imageName: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
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
        <Header>
          <Form onSubmit={this.handleSubmit}>
            <FormBtn type="submit">
              <FormBtnLabel>Search</FormBtnLabel>
            </FormBtn>

            <FormInput
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              value={this.state.imageName}
              placeholder="Search images and photos"
              onChange={this.handleImageChange}
            />
          </Form>
        </Header>
      </>
    );
  }
}
