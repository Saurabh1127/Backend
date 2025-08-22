
import connectDB from "./db/index.js"
import dotenv from "dotenv"

dotenv.config({
   path: "./env"
});

connectDB()
   .then(() => {
      app.on("error", (error) => {
         console.log("ERROR :", error);
         throw error;
      })
      app.listen(process.env.PORT || 8000, () => {
         console.log(`Server Running at ${process.env.PORT}`);
      })
   })
   .catch((error) => {
      console.log("MongoDB connection Failed:", error);
   })















// ; (async () => {
//    try {
//       await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME} `)
// app.on("error", (error) => {
//    console.log("ERROR :", error);
//    throw error;
// })
//       app.listen(process.env.PORT, () => {
//          console.log(`Server is running on PORT ${process.env.PORT}`)
//       })
//    }
//    catch (error) {
//       console.error("ERROR :", error)
//    }
// })()