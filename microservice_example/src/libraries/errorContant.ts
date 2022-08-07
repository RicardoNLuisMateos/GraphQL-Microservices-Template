
exports.errorName = {
    NOTFOUND: 'NOTFOUND',
    FORBIDDEN: 'FORBIDDEN',
    UNAUTHORIZED: 'UNAUTHORIZED',
    REQUIRED_PARAMETER: 'REQUIRED_PARAMETER',
    REQUIRED_PARAMETER_LIMIT: 'REQUIRED_PARAMETER_LIMIT',
}

exports.errorType = {
    NOTFOUND: {
        name: 'NOTFOUND',
        message: 'Requested record not found',
        statusCode: 404
    },
    FORBIDDEN: {
        name: 'FORBIDDEN',
        message: 'You have no access to this content',
        statusCode: 401
    },
    UNAUTHORIZED: {
        name: 'UNAUTHORIZED',
        message: 'This Token is Invalid',
        statusCode: 401
    },
    REQUIRED_PARAMETER: {
        name: 'REQUIRED_PARAMETER',
        message: 'Param Require',
        statusCode: 401
    },
    REQUIRED_PARAMETER_LIMIT: {
        name: 'REQUIRED_PARAMETER_LIMIT',
        message: 'Param Require Limit ',
        statusCode: 401
    },
}

