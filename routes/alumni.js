var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'xx',
    database: 'AlumniDB'
});

// try to connect

connection.connect(function(error){
    //callback function define what to do when we are connected
    if(error){
        /*res.json({
            "code" : 100,
            "status": "Error in connection database"
        });*/
        console.log('Error during connection');
    } else {
        console.log('Connected to database...');
    }
});

//get all the alumni
router.get('/getall', function(req, res, next){
    
});

//get a specific alumni
router.get('/get', function(req, res, next){
    connection.query('SELECT * FROM Alumni', function(error, rows, fields){
        //callback function to exectute after query
        if(error){
            console.log('Error in query');
        }else{
            console.log('Successful query');
            res.json(rows);
        }
    });
});


//insert a new alumni
router.post('/insert', function(req,res,next){
    var reqObj = req.body;        
    console.log(reqObj);
    var insertSql = "INSERT INTO Alumni SET ?";
    var insertValues = {
        "FirstName" : reqObj.firstName,
        "LastName" : reqObj.lastName,
        "DateOfBirth" : reqObj.dateOfBirth,
        "Address" : reqObj.address,
        "City" : reqObj.city,
        "State" : reqObj.state,
        "Zip" : reqObj.zip,
        "Email" : reqObj.email,
        "Campus" : reqObj.campus,
        "School" : reqObj.school,
        "Major" : reqObj.major,
        "GraduationYear" : reqObj.graduationYear,
        "CompanyName" : reqObj.companyName,
        "CompanyWeb" : reqObj.companyWeb,
        "Position" : reqObj.position,
        "JobDesc" : reqObj.jobDesc,
        "LinkedIn" : reqObj.linkedIn,
        "Memories" : reqObj.memories,
        "Recommendation" : reqObj.recommendation,
    };
    connection.query(insertSql, insertValues, function (err, result){
        if(err){
            console.error('SQL error: ', err);
            return next(err);
        }
        var user_Id = result.insertId;
        res.json({"user_id":user_Id});
    });
        
});


module.exports = router;