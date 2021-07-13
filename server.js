const app = require ('./backend/app');
const port = 3001 ;
app.listen(port,()=>{
    console.log(`APP listening on PORT ${port}`);
});