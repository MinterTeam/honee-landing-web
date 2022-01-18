<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        locales: ['en'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('How to Earn Toncoin 2022');
        const description = 'How to earn Toncoin in 2022 even without deep knowledge of digital assets and the distributed ledger technology.';

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
                    <h1>How to Earn Toncoin in 2022</h1>
                    <p class="subtitle-h1">The Open Network is a project that solved the problems with high fees for Internet payments and also developed a highly scalable blockchain for various financial (and not only) solutions on its basis.</p>
                </section>
                <section>
                    <p>Crypto wallet Honee answers the question, <i>How to earn Toncoin in 2022?</i> in several ways. The main ones are farming and staking. By locking some of your Toncoin tokens, you will receive rewards (a share of the fees that users pay for transfers on the blockchain).</p>
                    <p>In addition to the classic provision of liquidity, you can participate in various farming programs. ‘Yield farming’ means additional reward programs for those who provide liquidity. The main difference is that the provider receives an additional daily reward for keeping the cryptocurrency in the pool.</p>
                    <h2>How to Earn Toncoin in 2022: Before You Start Farming</h2>
                    <ul>
                        <li>Coins are added to the pool in equal proportions (50/50);</li>
                        <li>Pools can be very different in terms of annual percentage yield (pay attention to the <a href="https://explorer.minter.network/pools">APY</a> value);</li>
                        <li>You can add/withdraw your coins to/from the pool whenever you want;</li>
                        <li>Remember that when staking and farming, you are not immune to the risks of volatility and <a href="https://www.minter.network/earn/impermanent-loss">Impermanent Loss</a>. Tokens that are frozen in pools can vary greatly in value in relation to stablecoins (fiat currencies).</li>
                    </ul>
                    <h3>Pools Without Risks</h3>
                        <p>For conservative participants in the crypto ecosystem, it’s better to use pools where either of the assets is a stablecoin. This will reduce the risks associated with fluctuations. For those who are more ‘venture,’ a good choice could be a pool with two cryptocurrencies that are not stablecoins.</p>
                        <p>Honee offers users 124% per annum in the TON/BIP pair. Let’s take a closer look.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h3>Algorithm</h3>
                        <ol>
                            <li>Select the <b>Yield Farming TON / BIP</b> card and click on the <b>Add liquidity</b> button;</li>
                            <li>Specify the amount of tokens that you want to send to the pool. By specifying the amount of one token, the system will automatically fetch the amount of the other;</li>
                            <li>Click <b>Add</b>;</li>
                            <li>Once again, carefully check the conditions of the pool and, if everything is OK, click <b>Confirm</b>;</li>
                            <li>After that, Honee will display a link to the Minter Network Explorer.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img earn-1inch-1">
                        <picture>
                            <source srcset="/img/articles/earn-1inch-1.avif 1x, /img/articles/earn-1inch-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-1inch-1.webp 1x, /img/articles/earn-1inch-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-1inch-1.png" srcset="/img/articles/earn-1inch-1@2x.png 2x" alt="how to earn toncoin 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/earn-ton-1.avif 1x, /img/articles/earn-ton-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-ton-1.webp 1x, /img/articles/earn-ton-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-ton-1.png" srcset="/img/articles/earn-ton-1@2x.png 2x" alt="how to earn ton in 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/earn-ton-2.avif 1x, /img/articles/earn-ton-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-ton-2.webp 1x, /img/articles/earn-ton-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-ton-2.png" srcset="/img/articles/earn-ton-2@2x.png 2x" alt="how to earn toncoin 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Now you know how to earn Toncoin in 2022 without active trading, and most importantly, without profound knowledge in the world of digital assets. In the future, Honee will continue to improve the service and offer new ways to earn.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
