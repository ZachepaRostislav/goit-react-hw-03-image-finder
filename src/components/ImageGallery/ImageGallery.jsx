import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';
import Loader from 'components/Loader';
import { List } from './ImageGallery.styled';

export default class ImageGallery extends Component {
  state = {
    hits: [],
    page: 1,
    isLoading: false,
    error: null,
  };

  fetchImages = () => {
    const { page } = this.state;
    const { imageName } = this.props;
    console.log(imageName);
    const perPage = 12;
    const url = `https://pixabay.com/api/?q=${imageName}&page=${page}&key=34723066-8d4f91c8f936e3aca5c8bd269&image_type=photo&orientation=horizontal&per_page=${perPage}`;

    this.setState({ isLoading: true });

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`image gallery ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        const newHits = data.hits;
        if (newHits.length === 0) {
          this.setState({ isLoading: false });
          return;
        }
        this.setState(prevState => ({
          hits: [...prevState.hits, ...newHits],
          page: prevState.page + 1,
          isLoading: false,
        }));
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
        console.error('Error:', error);
      });
  };

  componentDidUpdate(prevProps) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    if (prevName !== nextName) {
      this.setState({ hits: [], page: 1 }, () => {
        this.fetchImages();
      });
    }
  }

  render() {
    const { hits, isLoading, error } = this.state;
    return (
      <>
        {error && <div>{error.message}</div>}
        <List>
          {hits.map(hit => (
            <ImageGalleryItem
              key={hit.id}
              id={hit.id}
              previewImg={hit.webformatURL}
              tags={hit.tags}
            />
          ))}
        </List>
        {isLoading && <Loader />}
        {!isLoading && hits.length >= 12 && (
          <Button nextImages={this.fetchImages} />
        )}
      </>
    );
  }
}
