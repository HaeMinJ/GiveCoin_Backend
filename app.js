var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var authToken = require('./middleware/auth_token');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var budgetRouter = require('./routes/budget');
var charityRouter = require('./routes/charity');
var donarion_listRouter = require('./routes/donation_list');
var donorRouter = require('./routes/donor');
var exchange_listRouter = require('./routes/exchange_list');
var noticeRouter = require('./routes/notice');
var projectRouter = require('./routes/project');
var searchhistoryRouter = require('./routes/search_history');
var userRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(authToken.checkToken);


app.use('/', express.static('apidoc'));
app.use('/users', usersRouter);
app.use('/budget', budgetRouter);
app.use('/charity', charityRouter);
app.use('/donotion_list', donarion_listRouter);
app.use('/donor', donorRouter);
app.use('/exchange_list',exchange_listRouter);
app.use('/notice',noticeRouter);
app.use('/project', projectRouter);
app.use('/searchhistory', searchhistoryRouter);
app.use('/user', userRouter);
app.use('/apidoc', function (req, res, next) {
  res.send(',/apidoc/index.html')
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
