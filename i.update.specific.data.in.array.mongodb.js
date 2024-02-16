use("esports-imdb");

// db.friends.updateOne(
//   { name: "Prithvi" },
//   {
//     $set: {
//       scores: { sub: "Science" },
//     },
//   }
// );

// ?$, $[],$[identifier]

// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $push: {
//       scores: {
//         $each: [
//           { sub: "English", point: 25 },
//           { sub: "Computer", point: 55 },
//         ],
//       },
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana", "scores.sub": "Science" },
//   {
//     $set: {
//       "scores.$.sub": "Social",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana", "scores.sub": "Computer" },
//   {
//     $set: {
//       "scores.$.sub": "MERN",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana", "scores.sub": "English" },
//   {
//     $set: {
//       "scores.$.sub": "Nepali",
//       "scores.$.point": 59,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana", "scores.point": 55 },
//   {
//     $set: {
//       "scores.$.sub": "Python",
//     },
//   }
// );

// db.friends.updateOne({name:"Jibana"},{
//     $set:{
//         "scores.$[].point":70
//     }
// })

// db.friends.updateOne(
//   { name: "Jibana", "scores.sub": "Nepali" },
//   {
//     $set: {
//       "scores.$.point": 65,
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana", "scores.sub": "Python" },
//   {
//     $set: {
//       "scores.$.point": 60,
//     },
//   }
// );

// ? decrease point of all subjects by 10
// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $inc: {
//       "scores.$[].point": -10,
//     },
//   }
// );

// ?update "Cycling" to "Rafting"
// db.friends.updateOne(
//   { name: "Jibana", hobbies: "Cycling" },
//   {
//     $set: {
//       "hobbies.$": "Rafting",
//     },
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $set: {
//       "scores.$[item].point": 70,
//     },
//   },
//   {
//     arrayFilters: [{ "item.point": { $gte: 55 } }],
//   }
// );

// ? change Jibana's hobbies of Gaming and Rafting to Cycling

// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $set: {
//       "hobbies.$[item]": "Cyling",
//     },
//   },
//   {
//     arrayFilters: [{ $or: [{ item: "Gaming" }, { item: "Rafting" }] }],
//   }
// );

// db.friends.updateOne(
//   { name: "Jibana" },
//   {
//     $set: {
//       "hobbies.$[item]": "Cycling",
//     },
//   },
//   {
//     arrayFilters: [{ item: "Cyling" }],
//   }
// );
db.friends.find();
