const mongoose = require("mongoose");
 
 const ThreadSchema = new mongoose.Schema({
     board: {type: String,
         required: true,
         minlength: 1,
         trim:true
     },
     text: {type: String,
         required: true,
         minlength: 1,
         trim:true
     },
     delete_password: {type: String,
         required: true,
         minlength: 1,
         trim:true
     },
     created_on: {type: Date,
         default: Date.now()
     },
     bumped_on: {type: Date,
         default: Date.now()
     },
     reported: {type: Boolean,
             default: false
         },
     replies: [{
         text: {type: String,
         required: true,
         minlength: 1,
         trim:true
     },
         delete_password: {type: String,
         required: true,
         minlength: 1,
         trim:true
     },
         created_on: {type: Date,
         default: Date.now()
     },
         reported: {type: Boolean,
             default: false
         }
     }]
 });
 
 const Thread = mongoose.model("Thread", ThreadSchema);
 
 module.exports = {Thread};
 