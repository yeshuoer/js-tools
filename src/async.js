/**
 * wait 函数
 * 不能直接使用，需要配合async函数调用
 * const main = async function() {
 *      await wait(3000)
 * }
 * @param {number} ms 毫秒
 * @returns Promise
 */
const wait = function (ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

/**
 * 在外部控制 promise 状态的函数
 * 用法如下：
 *     const deferred = defer();
 *     deferred.resolve();
 * @returns object(带有 promose, resolve, reject 三个属性)
 */
function defer() {
    const deferred = {};
    deferred.promise = new Promise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
}


export {
    wait,
    defer,
}
