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
        const title = getTitle('How to Buy DOGE 2022');
        const description = 'How to buy DOGE in 2022 with Honee’s wallet in the most straightforward and user-oriented way.';

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
                    <p>Named after an Internet meme, the DOGE cryptocurrency quickly gained incredible popularity among the broad mass of crypto investors. Today, anyone can add DOGE cryptocurrency into their portfolio thanks to the Honee crypto wallet.</p>
                    <h1>How to Buy DOGE in 2022</h1>
                    <p class="subtitle-h1">The mechanism on how to buy DOGE in 2022 is very simple. In the Honee wallet, DOGE is represented as a DOGEBSC token mirrored from the Binance Smart Chain network. DOGEBSC is fully backed by the original asset, which is possible thanks to the implemented mechanism of cross-chain transfers.</p>
                    <p>The purchase is carried out in two stages. First, you fund your Honee wallet with any liquid Minter-powered cryptocurrency or purchase one via Ethereum; then, swap it for DOGEBSC.</p>
                </section>
                <section>
                    <h3>How to Top Up Honee Wallet</h3>
                    <p>You can replenish your Honee wallet with any liquid Minter network token or with Ether.</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>To make a deposit into your Honee wallet via the Ethereum network:</p>
                            <ol>
                                <li>On the main page, click Receive → Top up with ETH;</li>
                                <li>Specify the amount of Ether and pick any of the coins of the Minter network to swap it for, e.g. BIP. Its amount will be calculated automatically;</li>
                                <li>Click Buy and copy the deposit address on the Ethereum network;</li>
                                <li>Send ETH tokens to the copied address in any way convenient for you and wait for the funds to arrive in your Honee wallet.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to buy doge 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>How to Buy DOGE 2022</h2>
                    <p>You can buy DOGE within Honee by swapping any tokens of the Minter network for it. To do that:
                        <ul>
                            <li>While in dashboard, click on the Swap button;</li>
                            <li>Specify the amount of the Minter network token and select DOGEBSC below. Its amount will be calculated automatically;</li>
                            <li>Press Swap and confirm the operation in the next window.</li>
                        </ul>
                    </p>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/doge/buy-doge-1.avif 1x, /img/articles/doge/buy-doge-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/doge/buy-doge-1.webp 1x, /img/articles/doge/buy-doge-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/doge/buy-doge-1.png" srcset="/img/articles/doge/buy-doge-1@2x.png 2x" alt="how to buy doge Dogecoin 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/doge/buy-doge-2.avif 1x, /img/articles/doge/buy-doge-2@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/doge/buy-doge-2.webp 1x, /img/articles/doge/buy-doge-2@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/doge/buy-doge-2.png" srcset="/img/articles/doge/buy-doge-2@2x.png 2x" alt="how to buy doge 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">The Honee wallet allows you to trade in the world’s leading digital assets from within a fully decentralized environment. Thanks to the Minter blockchain, transactions in the Honee wallet are at super-low fees and high speeds (5 seconds, give or take). Now that you know how to buy DOGE in 2022, you can give it a try!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
