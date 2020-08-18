var express = require('express');
var router = express.Router();
var mysql_odbc = require('../db/db_conn')();
var conn = mysql_odbc.init();
/* GET users listing. */
/**
 * @api {get} project/ 프로젝트 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup Project
 * @apiName 프로젝트 목록보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 *
 */
/* GET users listing. */
router.get('/', function (req, res, next) {
    if (req.userInfo) {
        conn.query('SELECT * FROM Project', function (err, projectList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(projectList);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {get} project/:projectSeq 프로젝트 목록 보기
 * @apiVersion 0.1.0
 * @apiGroup Project
 * @apiName 프로젝트 목록보기
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} projectSeq
 */
/* GET users listing. */
router.get('/:projectSeq', function (req, res, next) {
    if (req.userInfo) {
        var projectSeq = req.params.projectSeq;
        conn.query('SELECT * FROM Project WHERE projectSeq = ?', projectSeq, function (err, projectList) {
            if (err) {
                console.log(err);
                res.status(500).send(mysql_odbc.error);
            } else {
                res.status(200).send(projectList[0]);
            }
        })
    } else {
        res.status(403).send({msg: '권한이 없습니다.'});
    }
});

/**
 * @api {post} project/ 프로젝트 등록
 * @apiVersion 0.1.0
 * @apiGroup Project
 * @apiName 프로젝트 등록
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {String} title
 * @apiParam {String} content
 * @apiParam {String} projectCategory
 * @apiParam {String} charityName
 * @apiParam {int} updateTime
 * @apiParam {int} views
 *
 */

router.post('/', function (req, res, next) {
    if (req.userInfo) {
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            title: req.body.title,
            content: req.body.content,
            projectCategory: req.body.projectCategory,
            charityName: req.body.charityName,
            updateTime: req.body.updateTime,
            views: req.body.views
        };
        conn.query('INSERT INTO Project SET ?' , params, function (err, result) {
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
 * @api {post} project/:projectSeq 프로젝트 수정
 * @apiVersion 0.1.0
 * @apiGroup Project
 * @apiName 프로젝트 수정
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} projectSeq
 * @apiParam  {String} title
 * @apiParam {String} content
 * @apiParam {String} projectCategory
 * @apiParam {String} charityName
 * @apiParam {int} updateTime
 * @apiParam {int} views
 */
router.post('/:projectSeq',function (req,res,next) {
    if (req.userInfo) {
        var projectSeq = req.params.projectSeq;
        var userSeq = req.userInfo.userSeq;
        var params = {
            userSeq : userSeq,
            title: req.body.title,
            content: req.body.content,
            projectCategory: req.body.projectCategory,
            charityName: req.body.charityName,
            updateTime: req.body.updateTime,
            views: req.body.views
        };
        conn.query('UPDATE Project SET userSeq = ?, title=?,projectCategory=?,content=?,projectSeq=?,charityName=?,updateTime=?,views=? WHERE projectSeq = ?' , [params, projectSeq], function (err, result) {
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
 * @api {post} project/:projectSeq 프로젝트 삭제
 * @apiVersion 0.1.0
 * @apiGroup Project
 * @apiName 프로젝트 삭제
 *
 * @apiHeader {String} x-access-token Users Login Token
 * @apiParam  {int} projectSeq
 */
router.post('/:projectSeq',function (req,res,next) {
    if (req.userInfo) {
        var projectSeq = req.params.projectSeq;

        conn.query('DELETE from Project WHERE projectSeq = ?' , projectSeq, function (err, result) {
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
