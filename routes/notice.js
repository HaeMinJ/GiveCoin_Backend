var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();
/* GET users listing. */
/**
 * @api {get} notice/ 공지사항 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup Notice
 * @apiName 공지사항 목록 보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 *
 */
/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.userInfo) {
        conn.query('SELECT * FROM Notice', function (err, noticeList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(noticeList);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {get} notice/:noticeSeq 공지사항 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup Notice
 * @apiName 공지사항 목록 보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} noticeSeq
 */
/* GET users listing. */
router.get('/:noticeSeq', function (req, res, next) {
    if (req.userInfo) {
        var noticeSeq = req.params.noticeSeq;
        conn.query('SELECT * FROM Notice WHERE noticeSeq = ?', noticeSeq, function (err, noticeList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(noticeList[0]);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {post} notice/ 공지사항 등록
 * @apiVersion 0.1.0
 * @apiGroup Notice
 * @apiName 공지사항 등록
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {Int} title
 * @apiParam {Int} isImportance
 * @apiParam {String} content
 * @apiParam {Int} time
 * @apiParam {int} views
 *
 *
 */

router.post('/', function (req, res, next) {
    if (req.userInfo) {
        var params = {
            title: req.body.title,
            isImportance: req.body.isImportance,
            content: req.body.content,
            time: req.body.time,
            views: req.body.views
        };
        conn.query('INSERT INTO Notice SET ?' , params, function (err, result) {
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
 * @api {post} notice/:noticeSeq 공지사항 수정
 * @apiVersion 0.1.0
 * @apiGroup Notice
 * @apiName 공지사항 수정
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} noticeSeq
 * @apiParam  {Int} title
 * @apiParam {Int} isImportance
 * @apiParam {String} content
 * @apiParam {Int} time
 * @apiParam {int} views
 */
router.post('/:noticeSeq',function (req,res,next) {
    if (req.userInfo) {
        var noticeSeq = req.params.noticeSeq;
        var params = {
            title: req.body.title,
            isImportance: req.body.isImportance,
            content: req.body.content,
            time: req.body.time,
            views: req.body.views
        };
        conn.query('UPDATE Notice SET isImportance=?,title=?,content=?,time=?,views=? WHERE noticeSeq = ?' , [params, noticeSeq], function (err, result) {
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
 * @api {post} notice/:noticeSeq 공지사항 삭제
 * @apiVersion 0.1.0
 * @apiGroup Notice
 * @apiName 공지사항 삭제
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} noticeSeq
 */
router.post('/:noticeSeq',function (req,res,next) {
    if (req.userInfo) {
        var noticeSeq = req.params.noticeSeq;

        conn.query('DELETE from Notice WHERE noticeSeq = ?' , noticeSeq, function (err, result) {
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
