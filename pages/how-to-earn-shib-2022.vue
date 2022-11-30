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
        const title = getTitle('How to Earn SHIB 2022');
        const description = 'How to earn SHIB in 2022 using the best practices in the DeFi market without leaving the simplest crypto wallet that helps you earn.';

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
                    <h1>How to Earn SHIB in 2022</h1>
                    <p class="subtitle-h1">SHIB is a meme cryptocurrency that peaked in popularity in the fall of 2021. The project was founded by an anonymous developer known as Ryoshi. In this guide, we will show you how to earn SHIB in 2022 using Honee.</p>
                </section>
                <section>
                    <h2>How to Earn SHIB in 2022?</h2>
                    <p>There are several main methods—farming and staking. By locking your SHIB tokens, you will receive rewards (part of the fees that users pay for transferring on blockchain).</p>
                    <p>Also, on top of the usual provision of liquidity, you can take part in yield-farming programs. By participating in such programs, you will be able to get additional daily rewards by supplying liquidity and keeping it in the pool.</p>
                    <h2>What You Need to Know Before Starting to Farm</h2>
                    <ul>
                        <li>Tokens are added to the pool in equal proportions (50/50);</li>
                        <li>Pools can vary greatly in annual percentage yield (look at <a href="https://explorer.minter.network/pools">APY</a>);</li>
                        <li>You can add/withdraw coins to/from the pool at any time;</li>
                        <li>Remember that when staking and farming, you are not immune to the risks associated with volatility and <a href="https://www.minter.network/earn/impermanent-loss">Impermanent Loss</a>. Tokens that are frozen in pools can significantly change in value as opposed to stablecoins (which are pegged to fiat currencies).</li>
                    </ul>
                    <h3>More on Pools</h3>
                        <p>Pools can be divided into two groups—less risky and more risky. The difference between the two is as follows: if you participate in a pool where one asset is a stablecoin and the other is not, then your only risk is the non-stablecoin token’s volatility.</p>
                        <p>If you participate in pools where neither of the tokens are stablecoins, then the risk increases because both of them can change in price.</p>
                        <p>Consider a real-world example based on a BIP/SHIB pool with an ~6% annual return.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h3>Algo</h3>
                        <ol>
                            <li>Select the Yield farming BIP / SHIB card and click on the <b>Add liquidity</b> button;</li>
                            <li>Specify the amount of cryptocurrency you want to send to the pool. By specifying the amount of one token, the system will automatically load the amount of the other;</li>
                            <li>Click <b>Add</b>;</li>
                            <li>Once again, carefully check the conditions of the pool and, if everything is OK, click <b>Confirm</b>;</li>
                            <li>After that, Honee will display a link to the Minter network explorer.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img earn-1inch-1">
                        <picture>
                            <source srcset="/img/articles/earn-1inch-1.avif 1x, /img/articles/earn-1inch-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-1inch-1.webp 1x, /img/articles/earn-1inch-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-1inch-1.png" srcset="/img/articles/earn-1inch-1@2x.png 2x" alt="how to earn shib 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/earn-shib-1.avif 1x, /img/articles/earn-shib-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-shib-1.webp 1x, /img/articles/earn-shib-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-shib-1.png" srcset="/img/articles/earn-shib-1@2x.png 2x" alt="how to earn shiba inu in 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/earn-shib-2.avif 1x, /img/articles/earn-shib-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-shib-2.webp 1x, /img/articles/earn-shib-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-shib-2.png" srcset="/img/articles/earn-shib-2@2x.png 2x" alt="how to earn shib 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Congratulations! Now you know how to earn SHIB in 2022 right inside your Honee wallet. Honee will continue to improve the service and create new ways to earn money.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
