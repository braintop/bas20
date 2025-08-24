const mongoose = require('mongoose');

// יצירת סכמה למשתמשים
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  }
}, {
  timestamps: true // מוסיף שדות createdAt ו-updatedAt אוטומטית
});

// יצירת מודל מהסכמה
const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
