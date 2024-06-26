import * as express from 'express';
import { AddressInfo } from 'net';
import * as path from 'path';

import routes from './routes/index';
import ping from './routes/ping';
import reqRouter from './routes/req'; // Import the req.ts router

const debug = require('debug')('my express app');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/', routes);
app.use('/ping', ping);
app.use('/api', reqRouter); // Mount the req.ts router under /api

// catch 404 and forward to error handler
app.use((req, res, next) => {
    const err = new Error('Not Found!');
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
    debug(`Express server listening on port ${(server.address() as AddressInfo).port}`);
});
