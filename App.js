const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/ig-posts', async (req, res) => {
  // get 15 most recent IG posts with the hashtag #The14thSetMoments 
  const hashtag = 'The14thSetMoments';
  const hashtagRes = await fetch(`https://www.instagram.com/explore/tags/${hashtag}/?__a=1`);
  const hashtagJson = await hashtagRes.json();
  res.status(200).json({
    message: 'Posts retrieved successfully.',
    data: hashtagJson.graphql.hashtag.edge_hashtag_to_media.edges.slice(0, 15),
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});