db.tweets.aggregate([
  {
    $project: {
      'username': '$user.screen_name',
      'hashtags': '$entities.hashtags',
      'tweet': '$text'
    }
  },
  {
    $unwind: '$hashtags'
  },
  {
    $group: {
      _id: '$hashtags.text',
      count: {
        $sum: 1
      }
    }
  },
  {
    $sort: {
      count: -1
    }
  },
  {
    $limit: 5
  }
]);
