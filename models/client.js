const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    //   required: true,
    },

    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
    },

    message: {
      type: String,
    },
  },
  { timestamps: true }
);

// create a person model           // person nam model
const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
