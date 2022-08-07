const { errorType } = require('./errorContant')

const getErrorCode = (errorName:any = null, errorMessage:any = null) => {
  if(errorMessage != null){
    const graphqlError = {
      message: errorMessage, 
      statusCode: 421
    }
    return graphqlError;
  }
  return errorType[errorName]
}

module.exports = getErrorCode