const mongoose = require('mongoose');
const uri="mongodb+srv://visakhts:427799@cluster0.70uir.mongodb.net/<Stockes>?retryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB Connectedâ€¦")
  })
  .catch(err => console.log(err));