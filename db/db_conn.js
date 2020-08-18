//db 연결을 참조파일 하나로 정리하는 소스
var mysql = require('mysql');                   //mysql 인스턴스 가져옴
var config = require('./db_info').local;        //de 접속 정보 가져옴

module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host: config.host,
                port: config.port,
                user: config.user,
                password: config.password,
                database: config.database
            })
        },
        error : {
            msg : "내부 데이터베이스 오류입니다.\n지속적으로 발생하면 문의 부탁드립니다."
        },
        success : {
            msg : "요청이 성공적으로 완료되었습니다."
        }
    }
};