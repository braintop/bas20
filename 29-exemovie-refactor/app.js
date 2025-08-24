
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
// Middleware לטיפול ב-JSON
app.use(express.json());
// חיבור למסד הנתונים MongoDB Atlas
const uri = "mongodb+srv://david:Aa123456@cluster0.gqvy99x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri, clientOptions)
.then(() => console.log('✅ התחברות למסד הנתונים MongoDB Atlas הצליחה!'))
.catch(err => console.error('❌ שגיאה בהתחברות למסד הנתונים:', err));


let moiveRouter = require("./api/Movies/MovieRouter")
app.use('/api/v1/movies', moiveRouter);

let userRouter = require("./api/User/UserRouter")
app.use('/api/v1/user', userRouter);


// ➕ POST /movies - מוסיף סרט חדש
// הפעלת השרת
app.listen(port, () => {
  console.log(`🚀 השרת פועל על פורט ${port}`);
  console.log(`📱 פתח את הדפדפן בכתובת: http://localhost:${port}`);
  console.log(`🎬 API הסרטים עם Mongoose מוכן לשימוש!`);
});
