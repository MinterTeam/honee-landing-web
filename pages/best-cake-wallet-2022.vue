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
        const title = getTitle('The Best CAKE Wallet 2022');
        const description = 'Honee is the best 2022 CAKE wallet that will help you store the cryptocurrency at an advantage, meaning it can ‘bake’ CAKEs without your participation whatsoever.';

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
                    <h1>The Best CAKE Wallet 2022</h1>
                    <h2>What’s CAKE?</h2>
                    <p class="subtitle-h1">Token of the PancakeSwap DeFi platform, CAKE was created to help users make use of the platform’s decentralized finance initiatives. In this guide, we will walk you through how to set up the best CAKE wallet of 2022.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/cake/logo-cake.png" srcset="/img/articles/cake/logo-cake@2x.png 2x" alt="best cake PancakeSwap wallet 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Name</div>
                                <b>PancakeSwap</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Symbol</div>
                                <b>CAKE</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Max. supply</div>
                                <b>infinite</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://pancakeswap.finance/" target="_blank" rel="nofollow">Site</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://bscscan.com/" target="_blank" rel="nofollow">Explorer</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://docs.pancakeswap.finance/tokenomics/cake" target="_blank" rel="nofollow">About token</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/pancakeswap/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Your reliable assistant in earning and securing your crypto holdings is just a few clicks apart. To start enjoying all the benefits, go to the Honeee wallet <a href="/">home page</a> and follow a simple registration process.</p>
                    <p><b>CAKE's smart contract on BNB Chain:</b><br>
                    <a href="https://bscscan.com/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" target="_blank" rel="nofollow">bscscan.com/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82</a>
                    </p>
                    <p><b>Minter Hub’s smart contract:</b><br>
                    <a href="https://bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f" target="_blank" rel="nofollow">bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f</a>
                    </p>
                </section>
                <section>
                    <h2>How to Create the Best CAKE Wallet 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>While on the home page, click Sign up;</li>
                                <li>Save your seed phrase somewhere secure and back it up. Remember that it’s the only key to your assets;</li>
                                <li>Tick the checkbox;</li>
                                <li>Launch your wallet.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to create and set up an cake wallet in 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Honee crypto wallet was designed to make your earning adventure simple and the storing of cryptocurrencies, as safe as possible. Create the best 2022 wallet for CAKE now!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
