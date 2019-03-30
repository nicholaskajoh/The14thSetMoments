const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/ig-posts', async (req, res, next) => {
  // get 15 most recent IG posts with the hashtag #The14thSetMoments
  try {
    const hashtag = 'The14thSetMoments';
    const hashtagRes = await fetch(`https://www.instagram.com/explore/tags/${hashtag}/?__a=1`);
    if (hashtagRes.status == 404) {
      return res.status(404).json({
        message: 'Hashtag not found.', data: [],
      });
    }
    const hashtagJson = await hashtagRes.json();
    return res.status(200).json({
      message: 'Posts retrieved successfully.',
      data: hashtagJson.graphql.hashtag.edge_hashtag_to_media.edges.slice(0, 15),
    });
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}.`);
});