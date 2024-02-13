use("esports-imdb");

// ?read operation

// ? comparison operator
// ? $eq, $lt, $lte, $gt,$gte, $ne

// ?$eq => ===
// name ==="Under the Dome"

// db.movies.find({ name: { $eq: "Under the Dome" } });

// ? equivalent code
// db.movies.find({ name: "Under the Dome" });

// ? $lt

// db.movies.find({ runtime: { $lt: 80 } });

// db.movies.find({ id: { $lt: 3 } });

// ?$gt
// db.movies.find({ "rating.average": { $gt: 9 } });

// ? find movies whose language is Japanese
// db.movies.find({ language: "Japanese" });

// ?find movies whose runtime is less than 30
// db.movies.find({ runtime: { $lt: 30 } });

// ? find movies whose runtime is greater than or equal to 90
// db.movies.find({ runtime: { $gte: 90 } });

// ? find movies whose rating is less than or equal to 6
// db.movies.find({ "rating.average": { $lte: 6 } });

// ?$ne
// language!=="English"
// db.movies.find({ language: { $not: { $eq: "English" } } });

// ?equivalent code
// db.movies.find({ language: { $ne: "Japanese" } });

// ? find movies whose status is not "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

// ? find movies whose weight is not 75

// db.movies.find({ weight: { $ne: 75 } });

// ? find movies whose genre includes 'Thriller"
// db.movies.find({ genres: ["Drama"] });

// db.movies.find({ genres: "Drama" });

// ? find movies whose genres includes "Crime"

// db.movies.find({ genres: "Crime" });

// ? logical operator
// ? $and, $or, $not, $nor

// ?$and
// db.movies.find({
//   $and: [
//     { language: "English" },
//     { runtime: 60 },
//     { genres: "Science-Fiction" },
//   ],
// });

// ? find movies whose weight is greater than 75 and
// ?rating is greater than 7

// db.movies.find({
//   $and: [
//     { weight: { $gt: 75 } },
//     {
//       "rating.average": { $gt: 7 },
//     },
//   ],
// });

// ? find movies whose genres is "Drama" and "Crime"
// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Crime" }] });

// ? find movies whose network country name is "United States"
// ? and status is "Running"

// db.movies.find({
//   $and: [{ "network.country.name": "United States" }, { status: "Running" }],
// });

// ? find movies whose rating is greater than  7 and less than equal to 9
// db.movies.find({
//   $and: [
//     { "rating.average": { $gt: 7 } },
//     {
//       "rating.average": { $lte: 9 },
//     },
//   ],
// });

// ? equivalent code
// db.movies.find({ "rating.average": { $gt: 7, $lte: 9 } });

// ? equivalent code
// db.movies.find({ $and: [{ type: "Scripted" }, { language: "English" }] });

// db.movies.find({ type: "Scripted", language: "English" });

// ?$or
// ? find movies whose rating is greater than 8 or genres is "Thriller"

// db.movies.find({
//   $or: [
//     { "rating.average": { $gt: 8 } },
//     {
//       genres: "Thriller",
//     },
//   ],
// });

// ? find movies whose id is less than 5 or runtime is less than 30

// ?$not
// ? find movies whose genres does not include "Thriller"
// db.movies.find({ genres: { $ne: "Thriller" } });

// ? find movies whose status is not "Ended"
// db.movies.find({ status: { $ne: "Ended" } });

// ? $nor
// find movies whose genre is neither "Thriller" nor "Drama"
// db.movies.find({ $nor: [{ genres: "Thriller" }, { genres: "Drama" }] });

//? find movies whose status is neither "Running" nor language is "English"
// db.movies.find({ $nor: [{ status: "Running" }, { language: "English" }] });

// ?$in
// ? find movies whose rating is either 7 or 7.5 or 8 or 8.5 or 9 or 9.3
// db.movies.find({
//   $or: [
//     { "rating.average": 7 },
//     { "rating.average": 7.5 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 9 },
//     { "rating.average": 9.3 },
//   ],
// });

// ? if $or is applied on same field for multiple conditions, we can use $in
// db.movies.find({ "rating.average": { $in: [7, 7.5, 8, 8.5, 9, 9.3] } });

// ?$nin => if $nor is applied on same field, we can use $nin
// ? find movies whose genres is neither "Thriller" nor "Crime" nor "Supernatural"
// db.movies.find({
//   $nor: [
//     { genres: "Thriller" },
//     { genres: "Crime" },
//     { genres: "Supernatural" },
//   ],
// });

// db.movies.find({ genres: { $nin: ["Thriller", "Crime", "Supernatural"] } });
