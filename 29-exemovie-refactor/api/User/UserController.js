const User = require('./UserModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async function (req, res) {
    try {
        const { firstname, lastname, email, password, birthday } = req.body;
        // let firstname = req.body.firstname;
        // let lastname = req.body.lastname;
        // let email = req.body.email;
        // let password = req.body.password;
        // let birthday = req.body.birthday;
        
        // בדיקת תקינות הנתונים
        if (!firstname || !lastname || !email || !password || !birthday) {
            return res.status(400).json({ 
                "message": "כל השדות נדרשים: firstname, lastname, email, password, birthday" 
            });
        }
        
        // בדיקת תקינות האימייל (בדיקה בסיסית)
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if (!emailRegex.test(email)) {
        //     return res.status(400).json({ 
        //         "message": "פורמט האימייל אינו תקין" 
        //     });
        // }
        
        // בדיקת חוזק הסיסמה (לפחות 6 תווים)
        if (password.length < 6) {
            return res.status(400).json({ 
                "message": "הסיסמה חייבת להכיל לפחות 6 תווים" 
            });
        }
        
        // הצפנת הסיסמה
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log(hashedPassword);
        // יצירת משתמש חדש עם הסיסמה המוצפנת
        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPassword,
            birthday: new Date(birthday)
        });
        
        const savedUser = await newUser.save();
        
        // מחזירים את המשתמש ללא הסיסמה
        const userResponse = {
            _id: savedUser._id,
            firstname: savedUser.firstname,
            lastname: savedUser.lastname,
            email: savedUser.email,
            birthday: savedUser.birthday,
            createdAt: savedUser.createdAt,
            updatedAt: savedUser.updatedAt
        };
        
        res.status(201).json(userResponse);
        
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({ "message": "האימייל כבר קיים במערכת" });
        } else {
            res.status(500).json({ "message": "שגיאה ברישום המשתמש", "error": error.message });
        }
    }
};

exports.login = async function (req, res) {
    try {
        const { email, password } = req.body;
        
        // בדיקת תקינות הנתונים
        if (!email || !password) {
            return res.status(400).json({ 
                "message": "אימייל וסיסמה נדרשים" 
            });
        }
        
        // חיפוש המשתמש לפי אימייל
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).json({ 
                "message": "אימייל או סיסמה שגויים" 
            });
        }
        
        // השוואת הסיסמה עם הסיסמה המוצפנת
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ 
                "message": "אימייל או סיסמה שגויים" 
            });
        }
        
        // יצירת JWT token
        const jwtSecret = process.env.JWT_SECRET || 'secret-key-change-in-production';
        const token = jwt.sign(
            { 
                userId: user._id,
                email: user.email 
            },
            jwtSecret,
            { 
                expiresIn: '24h' // התוקף של הטוקן - 24 שעות
            }
        );
        
        // אם הכל תקין, מחזירים את פרטי המשתמש (ללא סיסמה) ואת הטוקן
        const userResponse = {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            birthday: user.birthday,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt
        };
        
        res.status(200).json({
            "message": "התחברות הצליחה",
            "user": userResponse,
            "token": token
        });
        
    } catch (error) {
        res.status(500).json({ "message": "שגיאה בהתחברות", "error": error.message });
    }
};
