db.tweets.aggregate([
  // Stage 1:
  // Get all the tweets which are not retweets from the verified users
  {
    $match: {
      "user.verified": true,
      "retweeted_status": null
    }
  },
  // Stage 2:
  // Sort them by the retweet count in each
  {
    $sort: {
      "retweet_count": -1
    }
  },
  // Stage 3, 4:
  // Skip the top retweet and get the second most retweeted one
  {
    $skip: 1
  },
  {
    $limit: 1
  }
  // Stage 5:
  // Project to get only the relevant fields
  {
    $project: {
      "tweet": "$text",
      "username": "$user.screen_name",
      "retweet_count": -1,
    }
  }
]);
