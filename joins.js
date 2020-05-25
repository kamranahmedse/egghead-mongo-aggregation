db.product.aggregate([
    {
        $lookup: {
            from: "category",
            localField: "categoryId",
            foreignField: "_id",
            as: "categoryDetail"
        }
    },
    {
        $project: {
            "name": "$name",
            "category": {
                $arrayElemAt: ["$categoryDetail", 0]
            }
        }
    }
])
