import express from "express";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import cors from 'cors'

const app = express();
app.use(cors({
  origin: 'https://oxefalublog.netlify.app', // replace with your Netlify app URL
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(cookieParser());


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/servidor/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("./upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/servidor/auth", authRoutes);
app.use("/servidor/users", userRoutes);
app.use("/servidor/posts", postRoutes);


app.listen(8800, () => {
  console.log("Connected!");
});