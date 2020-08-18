var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();

router.checkToken = function (req, res, next) {
    var token = req.headers['x-access-token'];
    if(token){
        conn.query("SELECT * FROM User where accessToken = ?",token, function (err, userInfos) {
            if(err){
                console.log(err);
                next();
            }else if(userInfos.length === 0){
                next();
            }else{
                req.userInfo = userInfos[0];
                next();
            }
        })
    }else{
        next();
    }
};

module.exports = router;