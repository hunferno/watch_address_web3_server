import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.CONNECT_USER_PASSWORD +
      "@cluster0.epzqyxm.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB", err));