use("daraz"); //database

// CRUD
// ?Create => Add

// ? insertOne, insertMany

// ? insertOne=> to insert one item to db

// db.product.insertOne({
//   name: "Bottle",
//   brand: "Serve well",
//   price: 700,
// });

// db.product.insertOne({
//   name: "Noodle",
//   brand: "Wai Wai",
//   price: 30,
// });

// db.product.insertOne({
//   name: "Rice cooker",
//   brand: "Samsung",
//   price: 10500,
// });

// ?insertMany
// db.product.insertMany([
//   { name: "Shampoo", brand: "Sunsilk", price: 700 },
//   { name: "Hair oil", brand: "Dabur Amala", price: 500 },
// ]);

// to read or get item from table
// db.customer.insertOne({
//   name: "Prithvi",
//   address: "Kathmandu",
//   email: "prithvi@gmail.com",
// });

// ? read operation
// ? findOne, find

// ? findOne => returns first item that matches the condition
// db.product.findOne({ price: 700 });
// db.product.findOne({ brand: "Wai Wai" });

//? find => returns all product that matches the condition
// db.product.find({ price: 700 });

// db.product.find();

// ?delete => deletes item from table

// ? deleteOne, deleteMany
// db.product.deleteOne({ name: "Rice cooker" });

// db.product.deleteMany({ price: 700 });

// ?update => changes values /edit
// ?updateOne, updateMany

// db.product.updateOne(
//   { name: "Hair oil" },
//   {
//     $set: {
//       price: 1000,
//       brand: "Parachute",
//     },
//   }
// );

// db.product.insertOne({
//   name: "Hair oil",
//   brand: "Streaks",
//   price: 750,
// });

// db.product.updateMany(
//   { name: "Hair oil" },
//   {
//     $set: {
//       price: 1550,
//     },
//   }
// );

db.product.find();
