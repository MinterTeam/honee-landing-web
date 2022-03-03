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
        const title = getTitle('How to Earn MATIC 2022');
        const description = 'How to earn MATIC in 2022 with Honee crypto wallet in just a few steps.';

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
                    <p>MATIC is the utility token of the Polygon network, which was created to solve the bandwidth problems of the Ethereum network. In 2021, in just a few months, MATIC showed an explosive growth of more than 10,000%, which attracted the attention of a large number of crypto enthusiasts from around the world. In this guide, we will tell you how to earn MATIC in 2022.</p>
                    <h1>How to Earn MATIC in 2022</h1>
                    <p class="subtitle-h1">Honee crypto wallet allows you to earn MATIC via yield farming and providing liquidity to pools. For that, you will receive a part of the fees that other participants pay when making swaps. You do not need to dive into complex earning schemes. The wallet interface consists of intuitive cards, so you only need to make a couple of clicks to start earning MATIC in your wallet right away.</p>
                    <p>On the Minter network, the MATIC token has the ticker MATICBSC, which is a mirrored asset from Binance Smart Chain. Now, we will tell you how to earn MATIC in 2022 using the Honee crypto wallet.</p>
                    <p>In addition to transaction fees, the farming incentive program includes additional payments of BIP tokens to MATICBSC providers in pools, so your earnings with Honee become even more attractive.</p>
                </section>
                <section>
                    <h2>How to Earn MATIC 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>It is very easy to earn MATIC with Honee crypto wallet:</p>
                            <ol>
                                <li>Go to the Honee wallet and scroll down to the Earn section;</li>
                                <li>Click on the Yield Farming MATICBSC / BIP card;</li>
                                <li>Click on the Add liquidity button;</li>
                                <li>Select the number of MATICBSC tokens that you are ready to lock in the pool. The number of BIP tokens will be calculated automatically;</li>
                                <li>Click Add;</li>
                                <li>Check all the data again and hit Confirm.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/earn-1inch-1.avif 1x, /img/articles/earn-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/earn-1inch-1.webp 1x, /img/articles/earn-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/earn-1inch-1.png" srcset="/img/articles/earn-1inch-1@2x.png 2x" alt="how to earn matic 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/matic/earn-matic-1.avif 1x, /img/articles/matic/earn-matic-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/matic/earn-matic-1.webp 1x, /img/articles/matic/earn-matic-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/matic/earn-matic-1.png" srcset="/img/articles/matic/earn-matic-1@2x.png 2x" alt="how to earn MATIC Polygon in 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/matic/earn-matic-2.avif 1x, /img/articles/matic/earn-matic-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/matic/earn-matic-2.webp 1x, /img/articles/matic/earn-matic-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/matic/earn-matic-2.png" srcset="/img/articles/matic/earn-matic-2@2x.png 2x" alt="how to earn matic 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Hundreds of Honee users are already enjoying complete decentralization, low fees, and a truly transparent transactions mechanism. Now that you know how to earn MATIC in 2022, you can become one, too!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
