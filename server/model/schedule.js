const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const ScheduleSchema = new Schema({
//   author: ObjectId,

  plan: {
      type: String,
      require: true,
  },

  gameJoin: {
      type: String,
      require: true,
    },
  hopeGame:{ 
      type: String,
      require: true, 
    },
  freeWords: {
      type: String,
      require: true, 
      max:[100,'最大100文字までです!']
    },
  userName: {
      type: String,
      require: true, 
    },
  date: {
      type: String,
      require: true,
    },
    
});

module.exports = mongoose.model('Schedule', ScheduleSchema);