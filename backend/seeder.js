const mongoose = require('mongoose');
const User = require('./model/User'); // Adjust the path if your models folder is elsewhere
require('dotenv').config(); // Load environment variables from .env file

// --- CONFIGURE YOUR ADMIN USER HERE ---
const adminUser = {
  email: 'admin@example.com',
  password: 'admin123', // Use a secure password
};
// ------------------------------------

const importData = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected for seeding...');

    // 2. Clear existing users (Optional: useful for a clean slate, but be careful!)
    // await User.deleteMany(); 
    // console.log('Existing users deleted.');

    // 3. Check if the admin user already exists
    const existingUser = await User.findOne({ email: adminUser.email });

    if (existingUser) {
      console.log('Admin user already exists. No action taken.');
    } else {
      // 4. Create the new admin user
      // The .create() method will trigger the 'pre-save' hook in your User model
      // to automatically hash the password.
      await User.create(adminUser);
      console.log('✅ Admin user created successfully!');
    }

    // 5. Disconnect from the database
    await mongoose.disconnect();
    console.log('MongoDB Disconnected.');
    process.exit();

  } catch (error) {
    console.error(`❌ Error seeding data: ${error}`);
    process.exit(1);
  }
};

// This allows you to run the script directly from the command line
importData();