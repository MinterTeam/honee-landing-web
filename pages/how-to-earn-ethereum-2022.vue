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
        const title = getTitle('How to Earn Ethereum 2022');
        const description = 'When it comes to how to earn Ethereum in 2022, Honee will have a wide variety of DeFi money-making tools such as liquidity mining and yield farming. That’s not to mention more conventional ways like good old trading or randomized giveaways.';

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
                    <h1>How to Earn Ethereum in 2022</h1>
                    <p class="subtitle-h1">Ethereum (ETH) is one of the largest cryptocurrencies in terms of capitalization, which every crypto investor knows about. No portfolio is complete without this token, which means that everyone would like to know how to earn Ethereum. Honee is a modern crypto wallet that allows you not only to buy and store Ether, but also to make money. Honee will be gradually rolling out new earning programs, and the user only needs to pick the ones they like the most.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2>How to Earn Ethereum 2022</h2>
                        <h3>Trading ETH</h3>
                        <p>The most popular strategy for earning Ether is trading. By buying ETH cheaper and selling more expensive, you can increase your deposit. Honee has convenient tools for exchanging any tokens, which makes trading fast and easy.</p>
                        <p>Having entered the interface, you need to select the available tokens for sale (all popular stablecoins are available in Honee) and specify the amount. The wallet will display the amount of Ether receivable and, of course, the purchase price.</p>
                    </div>
                    <div class="article-picture-box-img earn-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/earn-ethereum-1.avif 1x, /img/articles/earn-ethereum-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-ethereum-1.webp 1x, /img/articles/earn-ethereum-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-ethereum-1.png" srcset="/img/articles/earn-ethereum-1@2x.png 2x" alt="how to earn Ethereum 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <h3>Ethereum Liquidity Mining</h3>
                        <p>Perhaps the second most-popular option for earning is getting a share of fees in liquidity pools, which has taken its crown place in the DeFi segment. ETH liquidity providers earn commission fees that traders pay when making swap transactions in pools. Here’s an example: you are a member of the ETH-USDT pool with some liquidity. A trader, making an exchange in this pool, pays commission fees in the Ethereum token, thereby increasing the pool and making it richer. You, as a liquidity provider, are entitled to receive a share of this commission equal to your share of the total liquidity of all providers. To receive the earned fee, you only need to withdraw it from the pool by performing the liquidity removal operation.</p>
                        <p>In order to become a member of the Ethereum pool, you need to select the desired card in the Honee wallet and add liquidity in the corresponding tokens. An important parameter for evaluating the pool is APY, which stands for Annual Percentage Yield, as it can be used to understand how much fees the pool generates at the moment.</p>
                    </div>
                    <div class="article-picture-box-img earn-bitcoin-2">
                        <picture>
                            <source srcset="/img/articles/earn-ethereum-2.avif 1x, /img/articles/earn-ethereum-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-ethereum-2.webp 1x, /img/articles/earn-ethereum-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-ethereum-2.png" srcset="/img/articles/earn-ethereum-2@2x.png 2x" alt="how to earn ether 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <h3>Ether Yield-Farming</h3>
                    <p>Farming is an additional earning program for Ethereum liquidity providers. Farming programs are temporary and in most cases have an end date. During farming, pool members are earning rewards for providing liquidity every day.</p>
                    <p>The most important indicator of profitability is APR, or the Annual Percentage Rate. For example, if <b>APR = 36.6%</b>, then each provider will receive <b>0.1%</b> of the provided liquidity in pools with Ether daily. If the supplier’s liquidity is <b>$1,000</b>, then the earnings will be $1 per day.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2>How to Get Ethereum for Free 2022</h2>
                        <p>Another way to earn Ethereum is through giveaways for liquidity providers. A prize—expressed either in absolute numbers or percentage—is drawn daily and goes to one random participant of the Ether pool. The amount of ETH in the pool directly affects the odds in the draw, so large-volume providers have a better chance of winning.</p>
                    </div>
                    <div class="article-picture-box-img earn-bitcoin-3">
                        <picture>
                            <source srcset="/img/articles/earn-ethereum-3.avif 1x, /img/articles/earn-ethereum-3@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-ethereum-3.webp 1x, /img/articles/earn-ethereum-3@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-ethereum-3.png" srcset="/img/articles/earn-ethereum-3@2x.png 2x" alt="how to get free ethereum 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">We have analyzed the main ways of how to earn Ethereum. In 2022, the Honee app will be released, so stay tuned for the new cards to help you earn money!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
