var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();
/* GET users listing. */
/**
 * @api {get} search_history/ 검색기록 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup SearchHistory
 * @apiName 검색기록 목록보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 *
 */
/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.userInfo) {
        conn.query('SELECT * FROM SearchHistory', function (err, searchHistoryList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(searchHistoryList);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {get} search_history/:userSeq 검색기록 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup SearchHistory
 * @apiName 검색기록 목록보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 */
/* GET users listing. */
router.get('/:userSeq', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        conn.query('SELECT * FROM SearchHistory WHERE userSeq = ?', userSeq, function (err, searchHistoryList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(searchHistoryList[0]);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {post} search_history/ 검색기록 등록
 * @apiVersion 0.1.0
 * @apiGroup SearchHistory
 * @apiName 검색기록 등록
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {String} searchContent
 * @apiParam {Int} searchTime
 *
 *
 */

router.post('/', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            searchContent: req.body.searchContent,
            searchTime: req.body.searchTime
        };
        conn.query('INSERT INTO SearchHistory SET ?' , params, function (err, result) {
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
 * @api {post} search_history/:userSeq 검색기록 수정
 * @apiVersion 0.1.0
 * @apiGroup SearchHistory
 * @apiName 검색기록 수정
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {String} searchContent
 * @apiParam {Int} searchTime
 */
router.post('/:userSeq',function (req,res,next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            searchContent: req.body.searchContent,
            searchTime: req.body.searchTime
        };
        conn.query('UPDATE SearchHistory SET searchContent=?,searchTime=?WHERE userSeq = ?' , [params, userSeq], function (err, result) {
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
 * @api {post} search_history/:userSeq 검색기록 삭제
 * @apiVersion 0.1.0
 * @apiGroup SearchHistory
 * @apiName 검색기록 삭제
 *
 * @apiHeader {String} x-access-token Users Login Token
 */
router.post('/:userSeq',function (req,res,next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;

        conn.query('DELETE from SearchHistory WHERE userSeq = ?' , userSeq, function (err, result) {
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
