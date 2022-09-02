const {  DataTypes  } = require('sequelize');


const DbConnect =require("../sequelize");

const sequelize=DbConnect("spotify","root","1234","localhost");
const asyncConnect=async()=>{

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }

}

asyncConnect();

/*
  */
const Artist = sequelize.define('Artist', {
  // Model attributes are defined here
  Aname:{
    type:DataTypes.STRING,
    allowNull: false
},

dob:{
    type:DataTypes.DATE
},

bio:{
    type:DataTypes.STRING,
   
}


 
});

// const Song = sequelize.define('Song', {
//   // Model attributes are defined here
//   Aname:{
//     type:DataTypes.STRING,
//     allowNull: false
// },

// song:{
//     type:DataTypes.STRING
// },
// dor:{
//     type:DataTypes.DATE
// },
// artwork:{
//     type:DataTypes.STRING
// },
// rating:{
//     type:DataTypes.INTEGER,
   
// },
// aid:{
//     type:DataTypes.INTEGER
// }


 
// });


// const Userartist=sequelize.define('Userartist', {
//   // Model attributes are defined here
//       Aname:{
//         type:DataTypes.STRING,
//         allowNull: false
//     }
// })

// Artist.belongsToMany(Song,{through:Userartist})

// Song.belongsToMany(Artist,{through:Userartist})


// sequelize.sync({force:true})

module.exports=Artist;
