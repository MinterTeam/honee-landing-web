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
        const title = getTitle('How to Buy SHIB 2022');
        const description = 'How to buy SHIB in 2022—the most popular and profitable meme token of the last year—inside the Honee wallet.';

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
                    <h1>How to Buy SHIB in 2022</h1>
                    <p class="subtitle-h1">SHIB is a meme token of the ERC-20 standard issued on the Ethereum blockchain. The project was founded in August 2020 by an anonymous developer under the moniker Ryoshi. In this guide, we will show you how to buy SHIB in 2022.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <ol>
                            <li>Go to the “Honee” wallet and click on the “Sign up” button;</li>
                            <li>Copy the obtained seed phrase and save it in a safe place, confirm the action;</li>
                            <li>Click the “Launch Honee” button.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img wallet-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to buy shib 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <p>Fine! The wallet has been created. Now, there’s only a couple of steps left. First, look for the “Receive” button in the dashboard. Next, copy the address and replenish your personal wallet in any convenient way.</p>
                    <p>After your wallet is topped up with tokens, you can buy SHIB. To do this, click “Swap” and select a trading pair in the window that opens. In the first field, indicate the coin that you want to give in exchange for SHIB (for example, let’s take USDTE, the Minter network’s version of USDT). In the second field, enter the SHIB ticker and select the Shiba Inu cryptocurrency from the drop-down list. Next, click the “Swap” button.</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/buy-shib-1.avif 1x, /img/articles/buy-shib-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-shib-1.webp 1x, /img/articles/buy-shib-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-shib-1.png" srcset="/img/articles/buy-shib-1@2x.png 2x" alt="how to buy shiba inu 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/buy-shib-2.avif 1x, /img/articles/buy-shib-2@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-shib-2.webp 1x, /img/articles/buy-shib-2@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-shib-2.png" srcset="/img/articles/buy-shib-2@2x.png 2x" alt="how to buy shib 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">We hope that with the help of our simple guide, you’ve figured out how to buy SHIB in 2022 and replenish your wallet in order to take full advantage of the Minter network for cryptocurrency transactions.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
