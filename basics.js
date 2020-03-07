db.tweets.aggregate([
  // Stage 1:
  // Accepts the query, similar to `find`
  {
    $match: {
      'user.verified': true
    }
  },
  // Stage 2:
  // Extract the username and create dummy description
  {
    $project: {
      // Here we are not renaming the field and getting it as it is
      // "user.screen_name": 1,
      'user_name': '$user.screen_name',
      'description': {
        '$concat': ['Find them @', '$user.screen_name']
      }
    }
  }
]);