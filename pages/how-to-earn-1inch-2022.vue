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
        const title = getTitle('How to Earn 1INCH 2022');
        const description = 'How to earn 1INCH in 2022? The best answer is through liquidity pools and yield-farming right within your wallet.';

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
                    <h1>How to Earn 1INCH in 2022</h1>
                    <p class="subtitle-h1">1INCH is a token of the decentralized exchange (DEX) aggregator of the same name, which aims to provide users with the most attractive crypto swap conditions. 1INCH is a management token of the platform, meaning its holders can participate in the development of the network through voting, adjusting liquidity pool parameters and some other settings such as fees. This how-to will show you how to earn 1INCH in 2022.</p>
                </section>
                <section>
                    <p>With Honee wallet, you can earn 1INCH via providing liquidity into the pools. By supplying liquidity, you’ll be getting part of the transaction fees paid by other users for making swaps. Unlike exchanges, liquidity pools don’t require you to place orders and wait for them to be filled. The price of tokens within the pool is balanced by an automatic market maker.</p>
                    <h3>Before You Become a Liquidity Provider</h3>
                    <ul>
                        <li>For staking, you need to add both coins in the pair at the same ratio. Their share in total liquidity will be fixed in LP tokens accrued to you</li>
                        <li>The returns are different in different pools, so before supplying liquidity into any of them, check out its <a href="https://explorer.minter.network/pools">APY</a></li>
                        <li>You can withdraw your funds whenever you want</li>
                        <li>Mind the risk of <a href="https://www.minter.network/earn/impermanent-loss">Impermanent Loss</a></li>
                    </ul>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2>How to Earn 1INCH in 2022</h2>
                        <p>To start earning 1INCH in Honee:</p>
                        <ol>
                            <li>Scroll down the page of the wallet interface and locate the <b>Providing liquidity</b> card;</li>
                            <li>Click on the <b>Provide liquidity</b> button;</li>
                            <li>Select <b>1INCH</b> as the first coin and specify its amount;</li>
                            <li>Select the second coin. Its volume is calculated automatically depending on the in-pool exchange rate at the time of transaction;</li>
                            <li>Press <b>Add</b>;</li>
                            <li>If everything checks out, <b>Confirm</b>;</li>
                            <li>Upon transaction confirmation, you’ll receive LP tokens of the pool. It is a receipt allowing you to take your coins back from the pool at any time. The information about a successful operation will be shown in the Minter network’s Explorer.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img earn-1inch-1">
                        <picture>
                            <source srcset="/img/articles/earn-1inch-1.avif 1x, /img/articles/earn-1inch-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-1inch-1.webp 1x, /img/articles/earn-1inch-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-1inch-1.png" srcset="/img/articles/earn-1inch-1@2x.png 2x" alt="how to earn 1INCH 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-1inch-2">
                        <picture>
                            <source srcset="/img/articles/earn-1inch-2.avif 1x, /img/articles/earn-1inch-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-1inch-2.webp 1x, /img/articles/earn-1inch-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-1inch-2.png" srcset="/img/articles/earn-1inch-2@2x.png 2x" alt="how to earn 1inch in 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-1inch-3">
                        <picture>
                            <source srcset="/img/articles/earn-1inch-3.avif 1x, /img/articles/earn-1inch-3@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-1inch-3.webp 1x, /img/articles/earn-1inch-3@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-1inch-3.png" srcset="/img/articles/earn-1inch-3@2x.png 2x" alt="how to earn 1inch 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Using Honee, you can easily figure out how to earn 1INCH in 2022. You’ll be able to do that even in your sleep—just click a couple of buttons, and Honee will do the rest for you.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
