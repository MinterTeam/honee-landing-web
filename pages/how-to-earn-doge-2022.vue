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
        const title = getTitle('How to Earn DOGE 2022');
        const description = 'How to earn DOGE in 2022 with the help of yield farming.';

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
                    <p>DOGE is a fork of the Litecoin cryptocurrency with infinite supply, which has established itself as one of the fastest and most convenient means for transferring assets between exchanges. This guide will show you how to earn DOGE in 2022 with the most reliable crypto wallet, Honee.</p>
                    <h1>How to Earn DOGE in 2022</h1>
                    <p class="subtitle-h1">The Honee crypto wallet implements a yield-farming mechanism, thanks to which everyone can not only get more DOGE tokens, but also receive additional rewards in BIP, the base cryptocurrency of the Minter network. For providing liquidity to the pools, your rewards will come from the fees paid by other participants for making transactions with crypto assets.</p>
                </section>
                <section>
                    <h2>How to Earn DOGE 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>To start earning DOGE in your Honee wallet:</p>
                            <ol>
                                <li>Log in to your Honee wallet using your seed phrase;</li>
                                <li>Scroll down to the Earn section;</li>
                                <li>Find the Yield Farming DOGEBSC / BIP card and click Add liquidity;</li>
                                <li>Select the number of DOGEBSC tokens. The volume of the second asset is calculated automatically;</li>
                                <li>Click Add;</li>
                                <li>At the last stage, you need to check all the information again and click Confirm;</li>
                                <li>Once you have locked your funds in the pool, you will receive LP tokens (LP-1208) as confirmation, which is your receipt for providing liquidity. After that, you will start getting rewards.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/earn-1inch-1.avif 1x, /img/articles/earn-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/earn-1inch-1.webp 1x, /img/articles/earn-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/earn-1inch-1.png" srcset="/img/articles/earn-1inch-1@2x.png 2x" alt="how to earn doge 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/doge/earn-doge-1.avif 1x, /img/articles/doge/earn-doge-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/doge/earn-doge-1.webp 1x, /img/articles/doge/earn-doge-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/doge/earn-doge-1.png" srcset="/img/articles/doge/earn-doge-1@2x.png 2x" alt="how to earn doge Dogecoin in 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/doge/earn-doge-2.avif 1x, /img/articles/doge/earn-doge-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/doge/earn-doge-2.webp 1x, /img/articles/doge/earn-doge-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/doge/earn-doge-2.png" srcset="/img/articles/doge/earn-doge-2@2x.png 2x" alt="how to earn doge 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Now you know how to earn DOGE in 2022!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
