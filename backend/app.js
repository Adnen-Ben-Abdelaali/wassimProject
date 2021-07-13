//import express module
const express = require('express');

// import body parser module
const bodyParser = require('body-parser');

// import bcrypt module
const bcrypt = require('bcrypt');

// import axios module
const axios = require('axios');

//import mongoose module
const mongoose = require('mongoose');

//connect App to DB and create education DB
mongoose.connect('mongodb://localhost:27017/education', { useNewUrlParser: true, useUnifiedTopology: true });

//importer les fichiers du models "course.js" "trainer.js" et "event.js" situés dans le DOSSIER "models":
const Course = require('./models/course');

const Trainer = require('./models/trainer');

const Event = require('./models/event');

const User = require('./models/user');

const multer = require('multer');

const path = require('path');// node models path c'est un module interne 




//create express application
const app = express();

//configuration body-parser  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('backend/images')));

const MIME_TYPE =
{
  'image/png': 'png',
  'image/jpeg': 'jpg',
  'image/jpg': 'jpg',
  'application/pdf': 'pdf',
  'application/document': 'doc'

};

const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, 'backend/images')
  },
  //filename
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-');
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
      extension;
    cb(null, imgName);
  }
});


//security configuration : pour que s'assurer qu'il n'ya pas un 3 ème agent sur la ligne de communication 
app.use
  (
    (req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
      );
      next();
    }
  );
/******************************************************************************** */
/**************Logic Traitement functions of Course Service***********************/
/******************************************************************************** */
/********************************************************************************* */
// 1- function addCourse() : traitement logique de Add Course :

//the "/" replace l'Url de base     " / : http://localhost:3000/ "
app.post('/course', multer({ storage: storage }).single('img'), (req, res) => {

  console.log('here into Add Course');

  //get json object from FE
  console.log('here Object', req.body);
  let urlDeBase = req.protocol + '://' + req.get('host');

  const course = new Course(
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      numberHours: req.body.numberHours,
      trainer: req.body.trainer,
      studentNumbers: req.body.studentNumbers,
      img: urlDeBase + '/images/' + req.file.filename
    });

  course.save();

});

// 2- function getAllCourses():  traitement logique de Get All Courses:

app.get('/course', (req, res) => {
  console.log('here in get all courses Objects');
  //get all courses objects from DB :
  Course.find((err, docs) => {
    if (err) {
      console.log('Error with DB ');
    }
    else {
      res.status(200).json({ findedCourses: docs });
    }
  });
});

//3-function getCourseById(): traitement logique de Get Course By ID:

app.get('/course/:id', (req, res) => {
  let idBE = req.params.id;
  console.log('here in Get Course Object By Id');
  Course.findOne({ _id: idBE }).then(
    (result) => {
      res.status(200).json({ findedCourse: result })
    }
  );
}
);

//4-function deleteCourse(): traitement logique de Delete Course By ID

app.delete('/course/:id', (req, res) => {
  console.log('here into Delete Object By ID');
  let id = req.params.id;
  Course.deleteOne({ _id: id }).then(
    (result) => {
      if (result) {
        res.status(200).json({ message: 'Deleted desired "course Object"  with success' })
      }
    }
  )
}
);

//5- function editCourse : traitement logique de Edit Course By ID;

app.put('/course/:id', multer({ storage: storage }).single('img'), (req, res) => {
  console.log('here into edit exist Object By ID');
  let urlDeBase = req.protocol + '://' + req.get('host');
  let newCourse = new Course(
    {
      _id: req.body._id,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      numberHours: req.body.numberHours,
      trainer: req.body.trainer,
      studentNumbers: req.body.studentNumbers,
      img: urlDeBase + '/images/' + req.file.filename

    });
  Course.updateOne({ _id: req.body._id }, newCourse).then(
    (result) => {
      if (result) {
        res.status(200).json({ message: 'Edited Course successfuly' })
      }

    }
  );
}
);


/******************************************************************************** */
/**************Logic Traitement functions of "Trainer" Service***********************/
/******************************************************************************** */
/********************************************************************************* */
// 1- function addTrainer() : traitement logique de Add Trainer :

app.post('/trainer', (req, res) => {
  console.log('here into Add Trainer object');
  //get json object from FE 
  console.log('here Object', req.body)
  const trainer = new Trainer
    (
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        speciality: req.body.speciality,
        grade: req.body.grade,
        email: req.body.email,
        password: req.body.password,
        tel: req.body.tel,
        img: req.body.img
      }
    );
  trainer.save();
}
);

//2-function getAllTrainers:traitement logique de Get All Trainers:

app.get('/trainer', (req, res) => {
  //the objects trainers array coming from DataBase connexion:
  Trainer.find((err, docs) => {
    if (err) {
      console.log('Error with DB');
    }
    else {
      res.status(200).json({ findedAllTrainers: docs });
    }
  });
});


//3-function getTrainerById(): traitement logique de GetById trainer :

app.get('/trainer/:id', (req, res) => {
  console.log('Here Object', req.body);
  let idTrainerBE = req.params.id;
  Trainer.findOne({ _id: idTrainerBE }).then(
    (result) => {
      if (result) {
        res.status(200).json({ findedDesiredTrainer: result });
      }
    });
});

//4-function deleteTrainer(): traitement logique de Delete trainer By ID  :

app.delete('/trainer/:id', (req, res) => {
  console.log('Here into delete Trainer Object By ID ');
  let idTrainerBE = req.params.id;
  Trainer.deleteOne({ _id: idTrainerBE }).then(
    (result) => {
      if (result) {
        res.status(200).json({ message: 'Deleted desired "Trainer"  with success' });
      }
    }
  );
});

//5-function editTrainer(): traitement logique de Edit "Trainer" By ID:

app.put('/trainer/:id', (req, res) => {
  console.log('Here into edit exist Object By ID');
  let newTrainer = new Trainer(
    {
      _id: req.body._id,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      speciality: req.body.speciality,
      grade: req.body.grade,
      email: req.body.email,
      password: req.body.password,
      tel: req.body.tel,
      img: req.body.img,
    });
  Trainer.updateOne({ _id: req.body._id }, newTrainer).then(
    (result) => {
      if (result) {
        res.status(200).json({ message: 'Edited Trainer successfuly' });
      }
    });
});
/******************************************************************************** */
/**************Logic Traitement functions of "Event" Service***********************/
/******************************************************************************** */
/********************************************************************************* */
// 1- function addEvent() : traitement logique de Add Event Object : 

app.post('/event/post', (req, res) => {
  console.log('here into Add Event object');
  //get json object from FE 
  console.log('here Object', req.body)
  const event = new Event(
    {
      title: req.body.title,
      place: req.body.place,
      day: req.body.date,
      month: req.body.month,
      year: req.body.year,
      beginTime: req.body.beginTime,
      endTime: req.body.endTime,
      description: req.body.description,
      image: req.body.image
    });
  event.save();
});

//2-functions:getAllEvents(): Traitement logique de Get All Events Objects:

app.get('/event', (req, res) => {
  Event.find((err, docs) => {
    if (err) {
      console.log('Error with DB');
    }
    else {
      res.status(200).json({ findedAllEvents: docs });
    }
  });
});

//3-function getEventById(): traitement logique de Get Event Object By Id:

app.get('/event/:id', (req, res) => {
  console.log('here Object', req.body);
  let idEventBE = req.params.id;
  //console.log('Here in Get By Id',idEventBE);
  Event.findOne({ _id: idEventBE }).then(
    (result) => {
      if (result) {
        res.status(200).json({ findedDesiredEvent: result });
      }
    });
});

//4- function deleteEvent():traitement logique de delete event By ID:

app.delete('/event/:id', (req, res) => {
  console.log('here into delete Event Object By ID ');
  let idEventBE = req.params.id;
  Event.deleteOne({ _id: idEventBE }).then(
    (result) => {
      if (resullt) {
        res.status(200).json({ message: 'Deleted desired "Event"  with success' });
      }
    });
});

//5- function editEvent():traitement logique de edit event By ID:

app.put('/event/:id', (req, res) => {
  console.log('Here into edit exist Object By ID');
  let newEvent = new Event(
    {
      _id: req.body._id,
      title: req.body.title,
      place: req.body.place,
      day: req.body.day,
      month: req.body.month,
      year: req.body.year,
      beginTime: req.body.beginTime,
      endTime: req.body.endTime,
      description: req.body.description,
      image: req.body.image

    });
  Event.updateOne({ _id: req.body._id }, newEvent).then(
    (result) => {
      if (result) {
        res.status(200).json({ message: 'Edited Event successfuly' });
      }
    });
});

/******************************************************************************** */
/**************Logic Traitement functions of "User" Service***********************/
/******************************************************************************** */
/********************************************************************************* */
//1- function adduser(): Traitement logique de Add User
app.post('/user/signup', multer({ storage: storage }).single('avatar'), (req, res) => {
  //get json object from FE
  console.log('Here object from FE', req.body);
  // console.log('file',req.file);
  //définir l'url de base :
  let url = req.protocol + '://' + req.get('host');
  bcrypt.hash(req.body.password, 10).then( //intensité du hashage sur l'echelle de 10
    (cryptedPwd) => {
      const user = new User(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: cryptedPwd,    // mot de passe crypté
          //    verification password côté FE pas besoin  de transmettre confirmPwd : req.body.confirmPwd
          role: req.body.role,
          avatar: url + '/images/' + req.file.filename
        });
      user.save().then(    // pour informer dans le FE (console ) que le user a été ajouté 
        (result) => {
          if (result) {
            res.status(200).json({
              message: 'User added with success'
            })
          }
        }
      );
    }
  )
});

//2- function userLogin(): Traitement logique du userLogin

app.post('/user/login', (req, res) => {
  User.findOne({ email: req.body.email })
    .then((findedUser) => {
      if (!findedUser) {
        res.status(200).json({
          message: "0",
        });
      }
      return bcrypt.compare(req.body.password, findedUser.password);
    })
    .then((correctUserPwd) => {
      console.log("correctUserPwd", correctUserPwd);
      if (!correctUserPwd) {
        res.status(200).json({
          message: "1",
        });
      }
      User.findOne({ email: req.body.email }).then((finalUser) => {
        let user = {
          id: finalUser._id,
          firstName: finalUser.firstName,
          lastName: finalUser.lastName,
          role: finalUser.role,
        };
        res.status(200).json({
          user: user,
          message: "2",
        });
      });
    });
});

/******************************************************************************** */
/**************Logic Traitement functions of "Search" Service***********************/
/******************************************************************************** */
/********************************************************************************* */
//1- function search() for courseComponent: Traitement logique 
app.post('/course/search', (req, res) => {
  console.log('Here course title  from FE to search:', req.body.title);
  let searchedTitle = req.body.title
  Course.find({ name: { $regex: searchedTitle, $options: 'i' } }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          message: `Here searched courses with title :${req.body.title}`,
          findedSearchedCourses: result
        })
      }
    }
  )

});

//2- same function getCoursesByTitle() "with .get()":
app.get('/course/search/:title', (req, res) => {
  console.log('Here course title from FE to search:', req.body.title);
  let searchTitle = req.params.title;
  Course.find({ name: searchTitle }).then(
    (result) => {
      if (result) {
        res.status(200).json({
          message: `Here searched courses:${req.body.title}`,
          findedSearchedCourses: result
        })
      }
    }
  )

});

/******************************************************************************** */
/**************Logic Traitement functions of "Weather" Service***********************/
/******************************************************************************** */
/********************************************************************************* */
//1- function searchingByCityName() : Traitement logique 
app.post('/weather/search', (req, res) => {
  const country = req.body.cityName;
  const apiKey = "2833572c5e9de4d06be7b519ac08a74e";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + country + "&appid=" + apiKey + "&units=metric";

  axios.get(apiUrl).then((response) => {
    // console.log('Here response', response);
    const weather = response.data.main;
    console.log(`Here weather main of ${country}`, weather);
    const iconcode = response.data.weather[0].icon;
    const result =
    {
      temp: weather.temp,
      pressure: weather.pressure,
      humidity: weather.humidity,
      cityName: country,
      icon:"http://openweathermap.org/img/w/" + iconcode + ".png"
    }
    res.status(200).json({
      weatherParamSearchedCity: result
    })
  });
});



//make app exportable
module.exports = app;
