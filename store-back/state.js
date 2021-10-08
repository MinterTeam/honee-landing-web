export default function() {
    return {
        history: [],
        authRedirectPath: '',
        onLine: true,
        isSnackbarActive: false,
    };
    // vuex-persistedstate enabled in nuxt.config.js
}




/**
 * @typedef {Object} Transaction
 * @property {string} name
 * @property {number} amount
 * @property {string} coin
 * @property {string} image
 * @property {string} timestamp
 */

