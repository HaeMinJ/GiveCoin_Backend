var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();


/**
 * @api {get} budget/ 예산서 목록 보기
 * @apiName GetBudgetList
 * @apiVersion 0.1.0
 * @apiGroup Budget
 *
 * @apiHeader {String} x-access-token Users Login Token
 *
 */
/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.userInfo) {
        conn.query('SELECT * FROM Budget', function (err, budgetList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(budgetList);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {get} budget/:budgetSeq  예산서 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup Budget
 * @apiName 예산서 목록보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} budgetSeq
 */
/* GET users listing. */
router.get('/:budgetSeq', function (req, res, next) {
    if (req.userInfo) {
        var budgetSeq = req.params.budgetSeq;
        conn.query('SELECT * FROM Budget WHERE budgetSeq = ?', budgetSeq, function (err, budgetList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(budgetList[0]);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @apiName 예산서 등록
 * @api {post} budget/ 예산서 등록
 * @apiVersion 0.1.0
 * @apiGroup Budget
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {Int} exchangeTime
 * @apiParam {Int} price
 * @apiParam {String} content
 * @apiParam {Int} projectSeq
 * @apiParam {String} clientName
 *
 *
 */

router.post('/', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            exchangeTime: req.body.exchangeTime,
            price: req.body.price,
            content: req.body.content,
            projectSeq: req.body.projectSeq,
            clientName: req.body.clientName
        };
        conn.query('INSERT INTO Budget SET ?' , params, function (err, result) {
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
 * @api {post} budget/:budgetSeq 예산서 수정
 * @apiGroup Budget
 * @apiName ModifyBudget
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} budgetSeq
 * @apiParam  {Int} exchangeTime
 * @apiParam {Int} price
 * @apiParam {String} content
 * @apiParam {Int} projectSeq
 * @apiParam {String} clientName
*/
router.post('/:budgetSeq',function (req,res,next) {
    if (req.userInfo) {
        var budgetSeq = req.params.budgetSeq;
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            exchangeTime: req.body.exchangeTime,
            price: req.body.price,
            content: req.body.content,
            projectSeq: req.body.projectSeq,
            clientName: req.body.clientName
        };
        conn.query('UPDATE Budget SET userSeq = ?, exchangeTime=?,price=?,content=?,projectSeq=?,clientName=? WHERE budgetSeq = ?' , [params, budgetSeq], function (err, result) {
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
 * @api {post} budget/:budgetSeq 예산서 삭제
 * @apiVersion 0.1.0
 * @apiGroup Budget
 * @apiName 예산서 삭제
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} budgetSeq
 */
router.post('/:budgetSeq',function (req,res,next) {
    if (req.userInfo) {
        var budgetSeq = req.params.budgetSeq;

        conn.query('DELETE from Budget WHERE budgetSeq = ?' , budgetSeq, function (err, result) {
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
