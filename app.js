"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const index_1 = require("./routes/index");
const ping_1 = require("./routes/ping");
const req_1 = require("./routes/req"); // Import the req.ts router
const debug = require('debug')('my express app');
const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
// Middleware to parse JSON bodies
app.use(express.json());
app.use('/', index_1.default);
app.use('/ping', ping_1.default);
app.use('/api', req_1.default); // Mount the req.ts router under /api
// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found vedya');
    err['status'] = 404;
    next(err);
});
// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err['status'] || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
app.set('port', process.env.PORT || 3000);
const server = app.listen(app.get('port'), () => {
    debug(`Express server listening on port ${server.address().port}`);
});
//# sourceMappingURL=app.js.map