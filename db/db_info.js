//db 접속 정보 모아둘 페이지
module.exports = (function () {          //모듈로 사용할 수 있도록 만들어줌
    return {
        local: {                        //해당 변수안에 배열로 점속정보저장
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: 'jholnw0904',
            database: 'GiveCoin'
        },
        real: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        },
        staging: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        },
        dev: {
            host: '',
            port: '',
            user: '',
            password: '',
            database: ''
        }
    }
})();