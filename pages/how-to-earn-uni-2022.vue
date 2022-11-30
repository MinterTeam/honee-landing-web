<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        locales: ['en'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('How to Earn UNI 2022');
        const description = 'How to earn UNI in 2022? The answer is simple—through liquidity pools and yield-farming in just a few clicks.';

        return {
            title: title,
            meta: [
                { hid: 'og-title', name: 'og:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og-description', name: 'og:description', content: description },
            ],
        };
    },
    computed: {
        appUrl() {
            const localeSuffix = this.$i18n.locale === 'en' ? '' : this.$i18n.locale;
            return `https://my.honee.app/${localeSuffix}`;
        },
    },
};

</script>


<template>
    <div class="page-seo">
        <article>
            <div class="container">
                <div class="top-line">
                    <div class="logo">
                        <a href="/"><img src="/img/logo-honee.svg" alt="Honee" width="122" height="24"/></a>
                    </div>
                    <div class="share">
                        <span>Share</span>
                        <a href="https://twitter.com/intent/tweet?url=https://honee.app/how-to-buy-bitcoin-2022&text=How+to+Buy+Bitcoin+2022" target="_blank" rel="nofollow"><img src="/img/landing/twitter.svg" alt="Share on Twitter" width="40" height="40"></a>
                        <a href="https://www.facebook.com/share.php?u=https://honee.app/how-to-buy-bitcoin-2022&quote=How+to+Buy+Bitcoin+2022" target="_blank" rel="nofollow"><img src="/img/landing/facebook.svg" alt="Share on Facebook" width="40" height="40"></a>
                        <a href="tg://msg_url?url=https://honee.app/how-to-buy-bitcoin-2022&text=How+to+Buy+Bitcoin+2022" rel="nofollow"><img src="/img/landing/telegram.svg" alt="Share on Telegram" width="40" height="40"></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://honee.app/how-to-buy-bitcoin-2022" target="_blank" rel="nofollow"><img src="/img/landing/linkedin.svg" alt="Share on Linkedin" width="40" height="40"></a>
                        <!--<a href="" rel="nofollow"><img src="/img/landing/copy-link.svg" alt="Copy link" width="40" height="40"></a>-->
                    </div>
                </div>
                <section class="article-header">
                    <p>UNI is a token of the Uniswap decentralized exchange created using the AMM (Automated Market Maker) protocol based on the Ethereum blockchain. The main function of the UNI cryptocurrency is to provide voting rights to its holders in matters related to changing the protocol of the exchange. The more UNI tokens a participant has, the stronger their voting power. In this guide, we will show you how to earn UNI in 2022.</p>
                    <h1>How to Earn UNI in 2022</h1>
                    <p class="subtitle-h1">Honee cryptocurrency wallet will help you earn UNI in 2022 with the help of yield farming. Provide UNI to liquidity pools and earn by receiving fees that are charged on swaps made by other participants. The prices of tokens in liquidity pools are balanced automatically, so unlike on centralized exchanges, you do not have to place orders and wait for them to be filled.</p>
                </section>
                <section>
                    <h3>Liquidity Pools: General Info</h3>
                    <ul>
                        <li>The coins should be added into pools in equal amounts;</li>
                        <li>After supplying cryptocurrency to the pool, the participant is given a receipt in the form of an LP token, which gives the right to withdraw liquidity from the pool at any time;</li>
                        <li>Pools can vary greatly in terms of returns (check out the Annual Percentage Yield value on a specific pool’s <a href="https://explorer.minter.network/pools">Explorer</a> page);</li>
                        <li>Take into account the risks associated with <a href="https://www.minter.network/earn/impermanent-loss">Impermanent Loss</a>.</li>
                    </ul>
                </section>
                <section>
                    <h2>How to Earn UNI 2022</h2>
                    <p>On Minter network, the UNI token goes by the UNIBSC ticker. This is a mirrored asset from the Binance Smart Chain network, which is fully backed by the original UNI tokens. This mechanism is made possible by the Minter <a href="https://www.minter.network/earn/hub-staking">oracles</a> who lock tokens on one network and issue their mirrored versions on the other.</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>You are just a few steps away from starting to earn UNI in 2022 using Honee crypto wallet:</p>
                            <ol>
                                <li>While on the main page of the wallet, scroll down to the <b>Earn</b> section and select the <b>Yield farming UNIBSC / BIP</b> card;</li>
                                <li>Click on the <b>Add liquidity</b> button;</li>
                                <li>Enter the number of UNIBSC tokens. The volume of the second asset is calculated automatically;</li>
                                <li>Click <b>Add</b>;</li>
                                <li>Double-check everything and press <b>Confirm</b>;</li>
                                <li>After confirming the transaction, you will receive LP tokens (LP-1210), which give you the right to withdraw your funds from the pool at any time. You’ll be able to see information about a successful operation in the Minter network Explorer.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/earn-1inch-1.avif 1x, /img/articles/earn-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/earn-1inch-1.webp 1x, /img/articles/earn-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/earn-1inch-1.png" srcset="/img/articles/earn-1inch-1@2x.png 2x" alt="how to earn uni 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/uni/earn-uni-1.avif 1x, /img/articles/uni/earn-uni-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/uni/earn-uni-1.webp 1x, /img/articles/uni/earn-uni-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/uni/earn-uni-1.png" srcset="/img/articles/uni/earn-uni-1@2x.png 2x" alt="how to earn UNI Uniswap in 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/uni/earn-uni-2.avif 1x, /img/articles/uni/earn-uni-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/uni/earn-uni-2.webp 1x, /img/articles/uni/earn-uni-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/uni/earn-uni-2.png" srcset="/img/articles/uni/earn-uni-2@2x.png 2x" alt="how to earn uni 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">This is how, in just a few clicks, you can start to earn UNI in 2022. Go on with your life as usual, and leave the cryptocurrency earning process to the best crypto wallet—Honee.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
