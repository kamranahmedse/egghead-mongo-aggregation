db.tweets.aggregate([
    {
        $group: {
            _id: "$user.screen_name",
            tweetCount: {
                $sum: 1
            },
            favoriteCount: {
                $sum: "$favorite_count"
            }
        }
    },
    {
        $sort: {
            tweetCount: 1
        }
    }
])
