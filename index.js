import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
const cloudinary = require("cloudinary").v2
const app = express();
import cors from 'cors'


app.use(cors());
app.use(express.json());
app.use(cookieParser());

const upload = multer({dest : "uploads"});
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "https://oxefalublog.netlify.app/public/upload");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });


app.post("/upload", upload.single("file"), async (req, res)=> {
      try{
        const result = await cloudinary.uploader.upload(req.file.path);
        res.status(200).json(result)
      }catch(error){
          console.log("error",error)
          res.status(400).send(error.message)
      }
});


app.use("/servidor/auth", authRoutes);
app.use("/servidor/users", userRoutes);
app.use("/servidor/posts", postRoutes);


app.listen(8800, () => {
  console.log("Connected!");
});