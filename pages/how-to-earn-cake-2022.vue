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
        const title = getTitle('How to Earn CAKE 2022');
        const description = 'How to earn CAKE in 2022 easily by participating in yield-farming programs without leaving your Honee wallet.';

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
                    <p>CAKE is the native token of the PancakeSwap DEX platform, which is one of the fastest-growing projects in the DeFi space. With the help of the CAKE token, users of this platform can participate in voting on the development of the protocol, staking, and buying lottery tickets on the PancakeSwap exchange. Today, we will tell you how to earn CAKE in 2022 with the best wallet for making crypto, Honee.</p>
                    <h1>How to Earn CAKE in 2022</h1>
                    <p class="subtitle-h1">The Honee wallet has a reliable earning mechanism built atop the liquidity pools and additional reward programs collectively known as yield-farming. Provide CAKE and BIP (1:1) liquidity into pools and earn on the fees paid by traders.</p>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>In order to participate in CAKE farming, you need to:</p>
                            <ol>
                                <li>Log in to your <a href="https://my.honee.app">Honee wallet</a> using your seed phrase and choose the Yield Farming CAKEBSC / BIP card;</li>
                                <li>Click on the Add liquidity button;</li>
                                <li>Select the number of CAKEBSC tokens. BIP volume will be calculated automatically;</li>
                                <li>Press Add;</li>
                                <li>The last step is to confirm the operation.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/earn-1inch-1.avif 1x, /img/articles/earn-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/earn-1inch-1.webp 1x, /img/articles/earn-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/earn-1inch-1.png" srcset="/img/articles/earn-1inch-1@2x.png 2x" alt="how to earn cake 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section>
                    <p>In return, you will receive CAKEBSC / BIP (LP-1209) tokens, which are your guarantee that you may withdraw your funds from the pool at any time. You can see other farming programs on the <a href="https://explorer.minter.network/farming">relative page</a> in Minter network Explorer.</p>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/cake/earn-cake-1.avif 1x, /img/articles/cake/earn-cake-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/cake/earn-cake-1.webp 1x, /img/articles/cake/earn-cake-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/cake/earn-cake-1.png" srcset="/img/articles/cake/earn-cake-1@2x.png 2x" alt="how to earn cake PancakeSwap in 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/cake/earn-cake-2.avif 1x, /img/articles/cake/earn-cake-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/cake/earn-cake-2.webp 1x, /img/articles/cake/earn-cake-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/cake/earn-cake-2.png" srcset="/img/articles/cake/earn-cake-2@2x.png 2x" alt="how to earn cake 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">That’s all! Now you know how to earn CAKE in 2022 at the Annual Percentage Yield specified in the card.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
