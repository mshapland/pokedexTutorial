/**
 * Logs a message from the specified file and function
 * @param {string} message - the message to log
 * @param {string} file - the file that the message is coming from
 * @param {string} theFunction - the function that the message is coming from
 */
exports.logger = (message = "", file = "", theFunction = "") => {
    try {
        console.log(`${message} from ${file} - ${theFunction}()`);
    } catch (err) {
        console.error(`BIG PROBLEM, Error in logging, err: ${err}`);
    }
    
}