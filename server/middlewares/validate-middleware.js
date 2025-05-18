const validtae = (schema) => async (req, res, next) => {
    try {
        
        const parsedData = await schema.parseAsync(req.body);
        req.body = parsedData;
        next();

    } catch (error) {
        
        const statusCode = 422;
        const errorMessage = 'Plase fill all the required fields';
        const extraDetails = error.errors[0].message;

        const errorResponse = {
            statusCode,
            errorMessage,
            extraDetails,
        }

        res.status(statusCode).json(errorResponse);

    }
}
module.exports = validtae;