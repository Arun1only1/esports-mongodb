use("esports-imdb");
// aggregation => query tool
// pipelines
// ?$match
// ?$sort
// ?$project
// ?$unwind
// ?$lookup
// ?$limit
// ?$skip
// ?$group

// ?$sort => sort documents based upon value and field provided
// 1=> ascending=>small to big
// -1 => descending => big to small

// db.movies.find().count();

// db.movies.aggregate([
//   {
//     $match: { "rating.average": { $gt: 8 } },
//   },
//   {
//     $project: {
//       name: 1,

//       avgRating: "$rating.average",

//       scheduleDay: { $first: "$schedule.days" },

//       genres: 1,
//       // secondGenre: { $arrayElemAt: ["$genres", 1] },
//       // lastGenres: { $last: "$genres" },
//     },
//   },
//   {
//     $sort: {
//       avgRating: -1,
//     },
//   },
// ]);
