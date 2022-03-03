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
        const title = getTitle('How to Buy MATIC 2022');
        const description = 'How to buy MATIC in 2022 from within a secure Honee wallet. A fast, safe way.';

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
                    <p>MATIC is a native token of the secure autonomous sidechain network Polygon that was created to increase the scalability and speed of transactions on the Ethereum network. Our guide will show you how to buy MATIC cryptocurrency in 2022 with Honee crypto wallet.</p>
                    <h1>How to Buy MATIC in 2022</h1>
                    <p class="subtitle-h1">In Honee, you can buy MATIC quickly and securely. To do that, you need to fund your Honee wallet with any supported cryptocurrency and then swap it for MATICBSC. It is the MATIC cryptocurrency’s ticker on the Minter network, which is fully backed by the original tokens from the Binance Smart Chain network.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h3>So, how to buy MATIC in 2022?</h3>
                        <ul>
                            <li>As soon as your wallet is replenished with any cryptocurrency of the Minter network, go to the main page and click the Swap button;</li>
                            <li>Indicate the coin of the Minter network available on the wallet, and select the MATICBSC coin from the dropdown field below. Its amount will be calculated automatically;</li>
                            <li>Click on the Swap icon and complete the exchange by confirming the operation in the next window.</li>
                        </ul>
                    </div>
                    <div class="article-picture-box-img wallet-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to buy matic 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/matic/buy-matic-1.avif 1x, /img/articles/matic/buy-matic-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/matic/buy-matic-1.webp 1x, /img/articles/matic/buy-matic-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/matic/buy-matic-1.png" srcset="/img/articles/matic/buy-matic-1@2x.png 2x" alt="how to buy MATIC Polygon 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/matic/buy-matic-2.avif 1x, /img/articles/matic/buy-matic-2@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/matic/buy-matic-2.webp 1x, /img/articles/matic/buy-matic-2@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/matic/buy-matic-2.png" srcset="/img/articles/matic/buy-matic-2@2x.png 2x" alt="how to buy matic 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Thanks to Honee’s advanced tools, trading becomes intuitive and safeguarded. The high speed of transactions without the need for Layer-2 solutions make the Minter blockchain and Honee crypto wallet the best mix of solutions for trading and storing crypto assets. Now you know how to buy MATIC in 2022 and how to do it quickly.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
