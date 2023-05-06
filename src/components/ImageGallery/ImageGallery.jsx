// import React, { Component } from 'react';
// import ImageGalleryItem from 'components/ImageGalleryItem';
// import Button from 'components/Button';

// export default class ImageGallery extends Component {
//   state = {
//     hits: [],
//     page: 1,
//     isLoading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevName = prevProps.imageName;
//     const nextName = this.props.imageName;
//     if (prevName !== nextName) {
//       fetch(
//         `https://pixabay.com/api/?q=${nextName}&page=1&key=34723066-8d4f91c8f936e3aca5c8bd269&image_type=photo&orientation=horizontal&per_page=12`
//       )
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(`image gallery ${response.status}`);
//           }
//           return response.json();
//         })
//         .then(data => {
//           const hits = data.hits;

//           console.log(hits);
//           this.setState({ hits });
//         })
//         .catch(error => console.error('Error:', error));
//     }
//   }
//   fetchImages = () => {
//     const { page } = this.state;
//     const { imageName } = this.props;
//     fetch(
//       `https://pixabay.com/api/?q=${imageName}&page=${page}&key=34723066-8d4f91c8f936e3aca5c8bd269&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`image gallery ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         const newHits = data.hits;
//         this.setState(prevState => ({
//           hits: [...prevState.hits, ...newHits],
//           page: prevState.page + 1,
//         }));
//       })
//       .catch(error => console.error('Error:', error));
//   };
//   render() {
//     const { hits } = this.state;
//     return (
//       <>
//         <ul className="gallery">
//           {this.state.hits &&
//             this.state.hits.map(hit => (
//               <ImageGalleryItem
//                 key={hit.id}
//                 id={hit.id}
//                 url={hit.webformatURL}
//                 tags={hit.tags}
//               />
//             ))}
//           {hits.length > 0 && <Button onClick={this.fetchImages} />}
//         </ul>
//       </>
//     );
//   }
// }
import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Button from 'components/Button';

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
        <ul className="gallery">
          {hits.map(hit => (
            <ImageGalleryItem
              key={hit.id}
              id={hit.id}
              url={hit.webformatURL}
              tags={hit.tags}
            />
          ))}
        </ul>
        {isLoading && <div>Loading...</div>}
        {!isLoading && hits.length > 0 && (
          <Button nextImages={this.fetchImages} />
        )}
      </>
    );
  }
}
