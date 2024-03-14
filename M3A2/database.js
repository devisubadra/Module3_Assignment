
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://dvenka12:Devisubadra5@m3a1cluster.ocxtahc.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  if (err) {
         console.error('Database connection failed', err);
         return;
}
  console.log('Connected to MongoDB');
  client.close();
});