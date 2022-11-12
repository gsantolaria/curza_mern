import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;

    if(!authorization){
        res.status(403);
        return res.send({
            status: 'error',
            error: "Falta el token"
        });
    }

    const token = authorization.split(" ")[1];

    jwt.verify(token, "secretKey", (error, authData) => {
        if(error){
            res.status(403);
            return res.send({
                status: 'error',
                error: "Token inválido"
            });
        }

        req.authData = authData;
        next();
    })

}