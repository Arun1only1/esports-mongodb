use("esports-imdb");

// ?array update operators
// ?$push,$addToSet, $pop, $pull, $pullAll

// ?$push => adds new data to end of array

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       hobbies: "Dancing",
//     },
//   }
// );

// ? multiple value push using $push
// ?$each is called a modifier
// ? push "Singing" and "Riding" to Laxman's hobbies

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       hobbies: { $each: ["Singing", "Riding"] },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $push: {
//       hobbies: "Cardio",
//     },
//   }
// );

// ?$addToSet =>push value to array if that item is not already there

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $addToSet: {
//       hobbies: "Cycling",
//     },
//   }
// );

db.friends.updateOne(
  { name: "Laxman" },
  {
    $addToSet: {
      hobbies: { $each: ["Riding", "Book"] },
    },
  }
);

db.friends.find();
