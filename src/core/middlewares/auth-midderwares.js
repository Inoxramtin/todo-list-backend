import { jwtvalidate } from "../auth/jwt-auth.js";

const authValidationMiddlewares = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new Error('Authorization header is missing');
        }

        const jwtToken = authHeader.split(' ')[1];

        if (!jwtToken) {
            throw new Error('JWT token is missing');
        }

        const tokenData = jwtvalidate(jwtToken);
        req.user = tokenData; // Store token data in the request object
        next(); // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(401).json({ message: error.message });
    }
};

export { authValidationMiddlewares };




