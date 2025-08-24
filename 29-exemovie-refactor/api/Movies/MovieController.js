const Movie = require('./MovieModel');

exports.create= async function  (req, res) {
    try {
      const { title, director, price, isShowing } = req.body;
      
      // בדיקת תקינות הנתונים
      if (!title || !director || price === undefined || isShowing === undefined) {
        return res.status(400).json({ 
          "message": "כל השדות נדרשים: title, director, price, isShowing" 
        });
      }
      
      // בדיקת תקינות המחיר
      if (typeof price !== 'number' || price < 10 || price > 1000) {
        return res.status(400).json({ 
          "message": "המחיר חייב להיות מספר בין 10 ל-1000" 
        });
      }
      
      // יצירת סרט חדש (ה-ID ייווצר אוטומטית)
      const newMovie = new Movie({
        title,
        director,
        price,
        isShowing
      });
      
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (error) {
      if (error.code === 11000) {
        res.status(400).json({ "message": "כותרת הסרט כבר קיימת במערכת" });
      } else {
        res.status(500).json({ "message": "שגיאה בהוספת הסרט", "error": error.message });
      }
    }
}
  
  exports.get = async function (req, res) {
    const movies = await Movie.find();
    res.json(movies);
  }
  
  
  exports.getById = async function (req, res) {
    const id = req.params.id;
    const movie = await Movie.findById(id);
    res.json(movie);
  };
  
  // 💰 GET /movies/price/average - מחשב את ממוצע המחירים של כל הסרטים
  exports.average = async (req, res) => {
    try {
      const result = await Movie.aggregate([
        {
          $match: { isShowing: true },
          $group: {
            _id: null,
            averagePrice: { $avg: "$price" }
          }
        }
      ]);
      
      const averagePrice = result.length > 0 ? Math.round(result[0].averagePrice * 100) / 100 : 0;
      
      res.json({
        "averagePrice": averagePrice
      });
    } catch (error) {
      res.status(500).json({ "message": "שגיאה בחישוב ממוצע המחירים", "error": error.message });
    }
  };
  

  exports.update =  async (req, res) => {
    const id = req.params.id;
    const { title, director, price, isShowing } = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(id, { title, director, price, isShowing }, { new: true });
    res.json(updatedMovie);
  };
  
  exports.delete =  async (req, res) => {
    const id = req.params.id;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    res.json(deletedMovie);
  };


