var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();
/* GET users listing. */
/**
 * @api {get} donor/ 기부자 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup Donor
 * @apiName 기부자 목록 보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 *
 */
/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.userInfo) {
        conn.query('SELECT * FROM Donor', function (err, donorList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(donorList);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {get} donor/:userSeq 기부자 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup Donor
 * @apiName 기부자 목록 보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 */
/* GET users listing. */
router.get('/:userSeq', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        conn.query('SELECT * FROM Donor WHERE userSeq = ?', userSeq, function (err, donorList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(donorList[0]);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {post} donor/ 기부자 등록
 * @apiVersion 0.1.0
 * @apiGroup Donor
 * @apiName 기부자 등록
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {String} nickName
 * @apiParam {String} gender
 *
 */

router.post('/', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            nickName: req.body.nickName,
            gender: req.body.gender
        };
        conn.query('INSERT INTO Donor SET ?' , params, function (err, result) {
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
 * @api {post} donor/:userSeq 기부자 수정
 * @apiVersion 0.1.0
 * @apiGroup Donor
 * @apiName 기부자 수정
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {String} nickName
 * @apiParam {String} gender
 */
router.post('/:userSeq',function (req,res,next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            nickName: req.body.nickName,
            gender: req.body.gender
        };
        conn.query('UPDATE Donor SET userSeq = ?, nickName=?,gender=? WHERE userSeq = ?' , [params, userSeq], function (err, result) {
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
 * @api {post} donor/:userSeq 기부자 삭제
 * @apiVersion 0.1.0
 * @apiGroup Donor
 * @apiName 기부자 삭제
 *
 * @apiHeader {String} x-access-token Users Login Token
 */
router.post('/:userSeq',function (req,res,next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;

        conn.query('DELETE from Donor WHERE userSeq = ?' , userSeq, function (err, result) {
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
