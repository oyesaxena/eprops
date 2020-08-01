require("dotenv").config();

const User = require("./models/user");
const mongoose = require("mongoose");

const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const cookieParser = require("cookie-parser");

const cors = require("cors");
var multer = require("multer");

const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const authRoutes = require("./routes/auth");

const userRoutes = require("./routes/user");

aws.config.update({
  secretAccessKey: "zQCWYH3uAdxSbdXrq08HdfvPlKrqofqwxK1bKlZ3",
  accessKeyId: "AKIA2I74CACGXOEL6Q7Q",
  region: "ap-south-1",
});

s3 = new aws.S3();
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "propssol",
    key: function (req, file, cb) {
      // var newFileName = Date.now() + "-" + file.originalname
      console.log(file);
      cb(null, "foo-folder/" + Date.now() + "_" + file.originalname); //use Date.now() for unique file keys
    },
  }),
});

const port = process.env.PORT || 8000;

//DB connection
let connnection = mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

connnection;

app.use(bodyParser.json());

app.use(cookieParser());

app.use(cors());

app.use("/api", authRoutes);

app.use("/api", userRoutes);

app.get("/userImages/:userId",async (req, res) => {
 await User.findOne({ _id: req.params.userId },{selectedImages:0,videos:0,images:{$slice:[0,8]}})
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error" + err));
});

app.post("/userImages/:userId",async (req,res)=>{
  console.log(req.body.offset)
  const initial = req.body.offset
  await User.findOne({_id:req.body.userId},{selectedImages:0,videos:0,images:{$slice:[initial,8]}})
  .then((user)=>res.json(user))
  .catch((err)=>res.status(400).json("Error"+ err))
})

app.get("/userVideos/:userId", async (req, res) => {
    await User.findOne({ _id: req.params.userId },{selectedImages:0,images:0})
      .then((user) => res.json(user))
      .catch((err) => res.status(400).json("Error" + err));
  });

app.get("/userAddImages/:userId",async (req,res)=>{
  await User.findOne({ _id:req.params.userId},{images:0,selectedImages:0,videos:0})
  .then((user)=> res.json(user))
  .catch((err)=> res.json(400).json("Error"+err))
})  


app.get("/userEdit/:userId",async (req, res) => {
  await User.findOne({ _id: req.params.userId })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error" + err));
});

app.post("/userEdit",async (req, res) => {
  await User.findByIdAndUpdate(
    { _id: req.body.userId },
    {
      $set: {
        name: req.body.name,
        email: req.body.email,
        status: req.body.status,
        title: req.body.title,
      },
    }
  )
  .then(()=>{console.log("User Edited")})
  .catch((err)=>{console.log("User Edit Error --",err)})
});

app.get("/getUsers",async (req, res) => {
  await User.find({role:0}, { images: 0, selectedImages: 0, videos: 0 })
    .then((data) => {
      // console.log('Data: ', data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

app.post("/removeSelectedImage/:userId",async (req, res) => {
 await User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      $pull: {
        selectedImages:req.body.selectedImage
      },
      $push:{
        images:req.body.selectedImage
      },
      $inc:{
        selectedImagesCount:-1,
        imagesCount:1
      }
    }
  )
  .then(()=>{console.log("Images removed")})
  .catch((err)=>{console.log("Error -- ",err)})
});

app.post("/deleteUser", async (req, res) => {
  
  
  await User.findOne({ _id:req.body.id })
  .then ((doc)=>{
    
    for(let i=0;i<doc.images.length;i++){
      
      let params = {
        Bucket: 'propssol',
        Key: doc.images[i].key
        /* 
           where value for 'Key' equals 'pathName1/pathName2/.../pathNameN/fileName.ext'
           - full path name to your file without '/' at the beginning
        */
      };
      
      s3.deleteObject(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else    { 
          console.log("deleted succesfully")
          }           // successful response
      });
    }
     User.deleteOne({ _id: req.body.id },
      (err) => {
     if (err) {
       console.log(err);
     } else {
       console.log("Deleted User");
     }
   });
  
    
  })
  .catch(err=>{console.log("error--",err)})

});



app.get("/selectedImages/:userId",async (req, res) => {
 await User.findOne({ _id: req.params.userId },{images:0,videos:0,selectedImages:{$slice:[0,8]}})
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error" + err));
});

app.post("/selectedImages/:userId",async (req,res)=>{
  console.log(req.body.offset)
  await User.findOne({ _id: req.body.userId },{images:0,videos:0,selectedImages:{$slice:[req.body.offset,8]}})
  .then((user)=> res.json(user))
  .catch((err)=> res.status(400).json("Error"+ err))
})

app.post("/selectImage/:userId",async (req, res) => {
  await User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      $push: {
        selectedImages: req.body.selectedImage,
      },
      $pull:{
        images:req.body.selectedImage
      },
      $inc:{
        selectedImagesCount:1,
        imagesCount:-1
      }
    }
  )
  .then(()=>{console.log("User Updated")})
  .catch((err)=>{console.log(err)})
});

app.post("/userAddImages/:userId",upload.array("imgCollection", 1000),(req,res)=>{
  const reqFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    reqFiles.push(req.files[i]);
  }
  console.log(reqFiles)
   User.findOneAndUpdate({_id : req.body.userId},{
    $push:{
      images:reqFiles
    },
    $inc:{
      imagesCount:reqFiles.length
    }
  },(err)=>{
    if(err){
      console.log(err)
    }else{
      console.log("User Updated")
    }
  })
  
})

app.post("/upload", upload.array("imgCollection", 1000),async (req, res) => {
  const reqFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    reqFiles.push(req.files[i]);
  }
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    title: req.body.title,
    status: req.body.status,
    images: reqFiles,
    videos: req.body.videoCollection,
    imagesCount:reqFiles.length
  });
  newUser.save((err) => {
    if (err) {
      console.log(err);
      res.send("Use different email address");
    } else {
      console.log("user created");
      res.send("User Created");
    }
  });
});

if (process.env.NODE_ENV === "production"){
  app.use(express.static("projfrontend/build"))

  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../projfrontend","build","index.html"))
  })
}

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});