use("netflix");

// add a new movie to movie table

// db.movie.insertOne({
//   name: "Cast away",
//   leadActor: "Tom Hanks",
//   releaseYear: 2002,
//   length: 120,
// });

// ?1. add another movie of your choice
// ? name:"Batman",
// ?leadActor:"Christian Bale",
//? releaseYear:2000,
// ?length:90

// db.movie.insertOne({
//   name: "Batman",
//   leadActor: "Christian Bale",
//   releaseYear: 2000,
//   length: 90,
// });

// ?2.add two movie of your choice
// Chakka Panja
// Dipak Raj Giri
// 2017
// 180

// 12th fail
// Vikrant Massey
// 2023
// 90

// db.movie.insertMany([
//   {
//     name: "Chakka Panja",
//     leadActor: "Dipak Raj Giri",
//     releaseYear: 2017,
//     length: 180,
//   },
//   {
//     name: "12th fail",
//     leadActor: "Vikrant Massey",
//     releaseYear: 2023,
//     length: 90,
//   },
// ]);

// ?

// ?3. find movies whose length is 90

// db.movie.find({ length: 90 });

// ?4. find movie whose lead actor is "Vikrant Massey"
// db.movie.findOne({ leadActor: "Vikrant Massey" });

// ?5. find movie whose name is "Chakka Panja"
// db.movie.findOne({ name: "Chakka Panja" });

// ?6 find movies which was released in 2017
// db.movie.find({ releaseYear: 2017 });

// ?edit
// ?7.change releaseYear of "Chakka Panja" to 2020
// db.movie.updateOne(
//   { name: "Chakka Panja" },
//   {
//     $set: {
//       releaseYear: 2020,
//     },
//   }
// );

// ?8. change "Batman" to "Batman Returns"
// db.movie.updateOne(
//   { name: "Batman" },
//   {
//     $set: {
//       name: "Batman Returns",
//     },
//   }
// );

// ?9.change length of Cast away to 90 minutes
// ?and release year to 2000

// db.movie.updateOne(
//   { name: "Cast away" },
//   {
//     $set: {
//       length: 90,
//       releaseYear: 2000,
//     },
//   }
// );

// ?10 update those movies whose length is 90 to 105
// db.movie.updateMany(
//   { length: 90 },
//   {
//     $set: {
//       length: 105,
//     },
//   }
// );

// ?11 delete movie whose main role is played by "Dipak Raj Giri"

// db.movie.deleteOne({ leadActor: "Dipak Raj Giri" });

// ?12 delete movies whose length is 105
// db.movie.deleteMany({ length: 105 });

// db.movie.find();
