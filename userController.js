// const User = require('./user.model'); // Update the path accordingly

// // Controller to handle user registration
// const registerUser = async (req, res) => {
//   try {
//     const { username, email, password, firstName, lastName } = req.body;

//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Create a new user instance
//     const newUser = new User({
//       username,
//       email,
//       password, // You may want to hash the password before saving
//       firstName,
//       lastName,
//     });

//     // Save the user to the database
//     await newUser.save();

//     return res.status(201).json({ message: 'User registered successfully', user: newUser });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Server error', error });
//   }
// };

// module.exports = {
//   registerUser,
// };
