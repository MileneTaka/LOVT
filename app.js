var session = require('express-session');


app.use(session({
    secret:"projetoExpress",
    resave:true,
    saveUninitialized: true

}))