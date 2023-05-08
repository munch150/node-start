
const {app} = require('./app');
const port = 3002;
var server = app.listen(port, ()=>{
    console.log('server started! ' );
});

module.exports = {
    server
}