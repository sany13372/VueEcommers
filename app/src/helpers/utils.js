// Переделать
// ###
function pause(ms, cb, ...args){
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            try {
                resolve(await cb?.(...args))
            } catch (error) {
                reject(error)
            }
        }, ms)
    });
}

const utils = {
    delay : pause
}
export default utils;
