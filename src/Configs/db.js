const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    // `mongodb+srv://RohansDatabase:bestRandomData00@cluster0.2evx1.mongodb.net/Ideacart?retryWrites=true&w=majority`
    `mongodb+srv://myinternative:giri172006@cluster0.vguya57.mongodb.net/InternativeEnquiry?retryWrites=true&w=majority`
  );
};

module.exports = connect;
