export const requestImages = (name, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=34723066-8d4f91c8f936e3aca5c8bd269&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(`image gallery ${response.status}`);
      }
      return response.json();
    })
}