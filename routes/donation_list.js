var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();


/* GET users listing. */
/**
 * @api {get} donation_list/ 기부 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup DonationList
 * @apiName 기부목록 보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 *
 */
/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.userInfo) {
        conn.query('SELECT * FROM DonationList', function (err, donation_List) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(donation_List);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {get} donation_list/:donationSeq 기부 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup DonationList
 * @apiName 기부 목록보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} donationSeq
 */
/* GET users listing. */
router.get('/:donationSeq', function (req, res, next) {
    if (req.userInfo) {
        var donationSeq = req.params.donationSeq;
        conn.query('SELECT * FROM DonationList WHERE donationSeq = ?', donationSeq, function (err, donation_List) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(donation_List[0]);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {post} donation_list/ 기부 목록 등록
 * @apiVersion 0.1.0
 * @apiGroup DonationList
 * @apiName 기부 목록 등록
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {Int} donationTime
 * @apiParam {Int} coin
 *

 */

router.post('/', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            coin: req.body.coin,
            donationTime: req.body.donationTime
        };
        conn.query('INSERT INTO DonationList SET ?' , params, function (err, result) {
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
 * @api {post} donation_list/:donationSeq 기부 목록 수정
 * @apiVersion 0.1.0
 * @apiGroup DonationList
 * @apiName 기부 목록 수정
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {Int} donationTime
 * @apiParam  {int} coin
 */
router.post('/:donationSeq',function (req,res,next) {
    if (req.userInfo) {
        var donationSeq = req.params.donationSeq;
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            coin: req.body.coin,
            donationTime: req.body.donationTime
        };
        conn.query('UPDATE donationlist SET userSeq = ?, coin=?, donationTime=? WHERE donationSeq = ?' , [params, donationSeq], function (err, result) {
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
 * @api {post} donation_list/:donationSeq 기부 목록 삭제
 * @apiVersion 0.1.0
 * @apiGroup DonationList
 * @apiName 기부 목록 삭제
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} donationSeq
 */
router.post('/:donationSeq',function (req,res,next) {
    if (req.userInfo) {
        var donationSeq = req.params.donationSeq;

        conn.query('DELETE from DonationList WHERE donationSeq = ?' , donationSeq, function (err, result) {
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
