var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();


/* GET users listing. */
/**
 * @api {get} charity/ 후원단체 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup Charity
 * @apiName 후원단체 목록보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 *
 */
/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.userInfo) {
        conn.query('SELECT * FROM Charity', function (err, charityList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(charityList);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {get} charity/:userSeq 후원단체 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup Charity
 * @apiName 후원단체목록보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} budgetSeq
 */
/* GET users listing. */
router.get('/:userSeq', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        conn.query('SELECT * FROM Charity WHERE userSeq = ?', userSeq, function (err, userList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(userList[0]);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {post} charity/ 후원단체 등록
 * @apiVersion 0.1.0
 * @apiGroup Charity
 * @apiName 후원단체 등록
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {String} charityName
 * @apiParam {String} intro
 *
 *
 */

router.post('/', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            charityName: req.body.charityName,
            intro: req.body.intro
        };
        conn.query('INSERT INTO Charity SET ?' , params, function (err, result) {
            if(err){
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else{
                res.status(200).send(mysql_odbc.success);
            }
        });
    }else{
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {post} charity/:userSeq 후원단체 수정
 * @apiVersion 0.1.0
 * @apiGroup Charity
 * @apiName 후원단체 수정
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {String} charityName
 * @apiParam {String} intro
 *
 *
 */
router.post('/:userSeq',function (req,res,next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            charityName: req.body.charityName,
            intro: req.body.intro
        };
        conn.query('UPDATE Charity SET userSeq = ?, charityName=?,intro=? WHERE userSeq = ?' , [params, userSeq], function (err, result) {
            if(err){
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else{
                res.status(200).send(mysql_odbc.success);
            }
        });
    }else{
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {post} charity/:userSeq 후원단체 삭제
 * @apiVersion 0.1.0
 * @apiGroup Charity
 * @apiName 후원단체 삭제
 *
 * @apiHeader {String} x-access-token Users Login Token
 *
 */
router.post('/:userSeq',function (req,res,next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;

        conn.query('DELETE from Charity WHERE userSeq = ?' , userSeq, function (err, result) {
            if(err){
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else{
                res.status(200).send(mysql_odbc.success);
            }
        });
    }else{
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

module.exports = router;
