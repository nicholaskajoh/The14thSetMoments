function getPosts() {
  return fetch('/ig-posts')
    .then(function(res) {
      return res.json();
    })
    .then(function(json) {
      return json.data;
    })
    .catch(function(err) {
      alert('Could not fetch posts from Instagram! Try reloading this page.');
    });
}

function getNextPhotoIndex(currentIndex, numPhotos) {
  if (numPhotos == 0) return -1;
  if (currentIndex < numPhotos - 1) {
    return currentIndex + 1;
  } else {
    return 0;
  }
}

function displayPhotos(indexes, posts) {
  for (let i = 0; i < indexes.length; i++) {
    const image = document.getElementById(`igp_${i + 1}`);
    image.src = posts[indexes[i]].node.thumbnail_resources.slice(-1)[0].src;
  }
}

getPosts()
  .then(function(posts) {
    const numPhotos = posts.length;
    
    const photoIndexes = [-1, -1, -1];
    for (let i = 0; i < photoIndexes.length; i++) {
      if (numPhotos > i) {
        photoIndexes[i] = i;
      }
    }
    displayPhotos(photoIndexes, posts);
    
    setInterval(function() {
      for (let i = 0; i < photoIndexes.length; i++) {
        photoIndexes[i] = getNextPhotoIndex(photoIndexes[i], numPhotos);
      }
      displayPhotos(photoIndexes, posts);
    }, 5000);
  });