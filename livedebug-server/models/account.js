const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  accountNumber: {
    type: String
  },
  balance: {
    type: Number,
    default: 500000,
    min: [ 200000, 'Minimal balance 200000']
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

accountSchema.pre('save', function(next) {
  this.accountNumber = String(Math.random()).substring(2,12);
  console.log('masuk accountschema model pre save')
  console.log('di pre saveeee', this.accountNumber)
  next()

})

// console.log(accountSchema.obj)

let Account = mongoose.model('Account', accountSchema);


module.exports = Account
