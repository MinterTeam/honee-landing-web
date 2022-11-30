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
        const title = getTitle('How to Earn MVI (Metaverse Index) 2022');
        const description = 'How to earn MVI (Metaverse Index) in 2022 using Honee crypto wallet in just three clicks.';

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
                    <p>Metaverses have been one of the major trends in the world of cryptocurrencies in 2021. The Metaverse Index is a basket of virtual worlds’ tokens that combines the most popular ones.</p>
                    <p>On the Minter network, the Metaverse Index token—which is the MVI token mirrored from the Ethereum network—has the METAINDEX ticker. Mirrored tokens can be used on the Minter network or transferred to Ethereum. In this guide, we will tell you how to earn MVI (Metaverse Index) in 2022 using the Honee crypto wallet.</p>
                    <h1>How to Earn MVI (Metaverse Index) in 2022</h1>
                    <p class="subtitle-h1">The Metaverse Index token can be earned using the Honee wallet. Yield farming and liquidity pools allow everyone to multiply their METAINDEX tokens in just a few clicks.</p>
                    <p class="subtitle-h1">For providing METAINDEX liquidity to pools, you will receive a portion of the fee on each swap transaction. For earning even more METAINDEX tokens, the Honee wallet provides farming programs, in which liquidity providers get daily payouts in the Minter network’s native digital coin on top of the fees mentioned above (depending on particular program’s terms and conditions).</p>
                </section>
                <section>
                    <h2>How to Earn MVI (Metaverse Index) in 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>To start earning METAINDEX in your Honee wallet, take a couple of simple steps:</p>
                            <ol>
                                <li>While in the Honee wallet, scroll down to the Earn section and find the Yield farming METAINDEX / BIP card and click on the Add liquidity button</li>
                                <li>Indicate the number of coins that you are ready to provide to the pool, the amount of the second coin will be calculated automatically;</li>
                                <li>Click on the Add button;</li>
                                <li>Make sure the specified data is correct and click Confirm;</li>
                                <li>Once completed, you can view the details of the operation on the Explorer page.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/earn-1inch-1.avif 1x, /img/articles/earn-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/earn-1inch-1.webp 1x, /img/articles/earn-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/earn-1inch-1.png" srcset="/img/articles/earn-1inch-1@2x.png 2x" alt="how to earn MVI Metaverse Index 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-img earn-mvi-2">
                        <picture>
                            <source srcset="/img/articles/earn-mvi-1.avif 1x, /img/articles/earn-mvi-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-mvi-1.webp 1x, /img/articles/earn-mvi-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-mvi-1.png" srcset="/img/articles/earn-mvi-1@2x.png 2x" alt="how to earn mvi metaverse in 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-mvi-3">
                        <picture>
                            <source srcset="/img/articles/earn-mvi-2.avif 1x, /img/articles/earn-mvi-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-mvi-2.webp 1x, /img/articles/earn-mvi-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-mvi-2.png" srcset="/img/articles/earn-mvi-2@2x.png 2x" alt="how to earn mvi metaverse index 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Now you know how to earn MVI (METAINDEX) in 2022 with the Honee wallet. And you don’t even need to become a professional trader to do that. Everyone can earn cryptocurrency with Honee!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
