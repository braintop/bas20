const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const User = require('./UserModel');

// המרת jwt.verify לפונקציה async
const verifyAsync = promisify(jwt.verify);

// Middleware לאימות JWT token
exports.authenticateToken = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN
        console.log('token', token);
        if (!token) {
            return res.status(401).json({ 
                message: 'גישה נדחתה - לא נמצא טוקן אימות' 
            });
        }

        const jwtSecret = process.env.JWT_SECRET || 'secret-key-change-in-production';

        // שימוש ב-await במקום callback
        const decoded = await verifyAsync(token, jwtSecret);

        // בדיקה שהמשתמש עדיין קיים במסד הנתונים
        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({ 
                message: 'המשתמש לא נמצא במערכת' 
            });
        }

        // שמירת פרטי המשתמש ב-request object
        req.user = {
            userId: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname
        };
        next();
    } catch (err) {
        return res.status(403).json({ 
            message: 'טוקן לא תקין או פג תוקף' 
        });
    }
};

// Middleware אופציונלי לאימות - לא חובה שיהיה טוקן
exports.optionalAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            req.user = null;
            return next();
        }

        const jwtSecret = process.env.JWT_SECRET || 'secret-key-change-in-production';

        // שימוש ב-await במקום callback
        const decoded = await verifyAsync(token, jwtSecret);

        // בדיקה שהמשתמש עדיין קיים במסד הנתונים
        const user = await User.findById(decoded.userId);
        if (!user) {
            req.user = null;
            return next();
        }

        req.user = {
            userId: user._id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname
        };
        next();
    } catch (err) {
        req.user = null;
        next();
    }
};
