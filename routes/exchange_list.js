var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();
/* GET users listing. */
/**
 * @api {get} exchange_list/ 환전 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup ExchangeList
 * @apiName 환전 목록 보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 *
 */
/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.userInfo) {
        conn.query('SELECT * FROM ExchangeList', function (err, exchange_List) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(exchange_List);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {get} exchange_list/:userSeq 환전 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup ExchangeList
 * @apiName 환전 목록 보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 */
/* GET users listing. */
router.get('/:userSeq', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        conn.query('SELECT * FROM ExchangeList WHERE userSeq = ?', userSeq, function (err, exchange_List) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(exchange_List[0]);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {post} exchange_list/ 환전 목록 등록
 * @apiVersion 0.1.0
 * @apiGroup ExchangeList
 * @apiName 환전 목록 등록
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {Int} date
 * @apiParam {Int} price
 * @apiParam {String} type
 *
 *
 */

router.post('/', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            date: req.body.date,
            price: req.body.price,
            type: req.body.type
        };
        conn.query('INSERT INTO ExchangeList SET ?' , params, function (err, result) {
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
 * @api {post} exchange_list/:userSeq 환전 목록 수정
 * @apiVersion 0.1.0
 * @apiGroup ExchangeList
 * @apiName 환전 목록 수정
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {Int} date
 * @apiParam {Int} price
 * @apiParam {String} type
 */
router.post('/:userSeq',function (req,res,next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            date: req.body.date,
            price: req.body.price,
            type: req.body.type
        };
        conn.query('UPDATE ExchangeList SET userSeq = ?, price=?,date=?,type=? WHERE userSeq = ?' , [params, userSeq], function (err, result) {
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
 * @api {post} exchange_list/:userSeq 환전 목록 삭제
 * @apiVersion 0.1.0
 * @apiGroup ExchangeList
 * @apiName 환전 목록 삭제
 *
 * @apiHeader {String} x-access-token Users Login Token
 */
router.post('/:userSeq',function (req,res,next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;

        conn.query('DELETE from ExchangeList WHERE userSeq = ?' , userSeq, function (err, result) {
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
