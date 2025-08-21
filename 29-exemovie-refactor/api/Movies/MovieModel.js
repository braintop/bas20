const mongoose = require('mongoose');

// יצירת סכמה לסרטים
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  director: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 10,
    max: 1000
  },
  isShowing: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
  timestamps: true // מוסיף שדות createdAt ו-updatedAt אוטומטית
});

// יצירת מודל מהסכמה
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
