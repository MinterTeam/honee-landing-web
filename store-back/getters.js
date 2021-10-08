import {COIN_NAME, CHAIN_ID} from '~/assets/variables.js';

export default {
    baseCoin(state) {
        return state.balance.find((coinItem) => {
            return coinItem.coin.symbol === COIN_NAME;
        });
    },
    /**
     * @return {string}
     */
    BASE_COIN() {
        return COIN_NAME;
    },
    /**
     * @return {string}
     */
    COIN_NAME() {
        return COIN_NAME;
    },
    CHAIN_ID() {
        return CHAIN_ID;
    },
};
