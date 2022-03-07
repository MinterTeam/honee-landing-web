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
        const title = getTitle('How to Buy CAKE 2022');
        const description = 'Probably the best way to buy CAKE in 2022 is to turn to Honee, a crypto wallet that will help you not only make a purchase but also to later put your new asset to work.';

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
                    <h1>How to Buy CAKE in 2022</h1>
                    <p class="subtitle-h1">CAKE is a token fueling the PancakeSwap decentralized exchange that runs on the Binance Smart Chain network and uses an Automated Market Maker model. The main utility of CAKE is to incentivize the provision of liquidity into the PancakeSwap pools. This guide will show you how to buy CAKE in 2022 inside probably the best cryptocurrency wallet, Honee.</p>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>The easiest way to buy CAKE in 2022 is to exchange other cryptocurrencies that you already have in your wallet for it. For that:</p>
                            <ol>
                                <li>Press the Swap button, which is located at the very top of the main page of the wallet;</li>
                                <li>Pick any available token from the list, and in the field below, select CAKEBSC. This is the original CAKE, which has been wrapped from the BSC network by Minter oracles;</li>
                                <li>Press the Swap button once more and confirm the operation.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to buy cake 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/cake/buy-cake-1.avif 1x, /img/articles/cake/buy-cake-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/cake/buy-cake-1.webp 1x, /img/articles/cake/buy-cake-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/cake/buy-cake-1.png" srcset="/img/articles/cake/buy-cake-1@2x.png 2x" alt="how to buy cake PancakeSwap 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/cake/buy-cake-2.avif 1x, /img/articles/cake/buy-cake-2@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/cake/buy-cake-2.webp 1x, /img/articles/cake/buy-cake-2@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/cake/buy-cake-2.png" srcset="/img/articles/cake/buy-cake-2@2x.png 2x" alt="how to buy cake 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Now you know how to <b>buy CAKE in 2022</b> and do it quickly thanks to the advanced cryptocurrency wallet that Honee is. We are sure that with the help of Honee, your earning and hodling routine will reach a new level!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
