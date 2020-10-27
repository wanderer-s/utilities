/**
 * express router에서 async, await를 사용할 수 있도록 함
 * 
 * @callback fn
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {function} next
 * 
 * @returns {function}
 */
function asyncWrap(fn) {
    return async function(req, res, next) {
        try {
            return await fn(req, res, next);
        } catch(e) { 
            return next(e); 
        }
    }
}

module.exports = asyncWrap;