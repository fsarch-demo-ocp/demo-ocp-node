const app = require('express')()

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.get('/', (req, res) => {
  res.send("Hello from Plain Node xPaaS Demo!");
});

console.log("Listing on port "+port);
app.listen(port);
