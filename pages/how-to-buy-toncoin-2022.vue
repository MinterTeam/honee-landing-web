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
        const title = getTitle('How to Buy Toncoin 2022');
        const description = 'How to buy Toncoin in 2022 in the most convenient way and immediately start multiplying your assets? The answer is simple: use Honee, a crypto wallet that helps you earn!';

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
                    <h1>How to Buy Toncoin in 2022</h1>
                    <p class="subtitle-h1">The Open Network is a unique blockchain project that was founded by the Durov brothers in 2017, but over time, was handed over to the Telegram messenger community due to problems with the SEC. In this guide, we’ll tell you how to buy Toncoin in 2022.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <ol>
                            <li>Go to the Honee wallet and click on the Sign up button;</li>
                            <li>Copy the received seed phrase and save it in a safe place, then confirm the action;</li>
                            <li>Press the Launch Honee button.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img wallet-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to buy ton coin 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <p>Now, in order to buy Toncoin, we need to click on the Receive button in the dashboard. Then copy the address and top up the wallet in any convenient way.</p>
                    <p>As soon as your wallet is replenished, we can proceed to the next step. To do this, look for the Swap button in the dashboard. When you click, a window will appear where you need to specify a pair. In the first field, select the asset you want to give in exchange for Toncoin. For example, let’s take USDTE (USDT on the Minter network). In the second field, enter the TON ticker and select The Open Network cryptocurrency from the drop-down list.</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/buy-ton-1.avif 1x, /img/articles/buy-ton-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-ton-1.webp 1x, /img/articles/buy-ton-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-ton-1.png" srcset="/img/articles/buy-ton-1@2x.png 2x" alt="how to buy ton 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/buy-ton-2.avif 1x, /img/articles/buy-ton-2@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-ton-2.webp 1x, /img/articles/buy-ton-2@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-ton-2.png" srcset="/img/articles/buy-ton-2@2x.png 2x" alt="how to buy toncoin 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">That’s all! It took us just a couple of minutes to purchase the TON cryptocurrency in the Honee app. We hope that with our simple guide, you will easily figure out how to buy Toncoin in 2022 and fund your wallet in order to take full advantage of the Minter network’s cryptocurrency transactions capacities.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
