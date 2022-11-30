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
        const title = getTitle('The Best DOGE Wallet 2022');
        const description = 'The best DOGE wallet of 2022 for safely storing and earning the cryptocurrency.';

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
                    <h1>The Best DOGE Wallet in 2022</h1>
                    <h2>What’s DOGECOIN?</h2>
                    <p class="subtitle-h1">Today, DOGE is perhaps the most recognizable cryptocurrency in the world. Named after a dog and invented as a joke, the DOGE cryptocurrency quickly gained popularity and broad attention from the crypto community. This guide will show you how to create and set up the best wallet for your DOGE coins in 2022.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/doge/logo-doge.png" srcset="/img/articles/doge/logo-doge@2x.png 2x" alt="best doge dogecoin wallet 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Name</div>
                                <b>Dogecoin</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Symbol</div>
                                <b>DOGE</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Max. supply</div>
                                <b>infinite</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://dogecoin.com/" target="_blank" rel="nofollow">Site</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://bscscan.com/" target="_blank" rel="nofollow">Explorer</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://github.com/dogecoin/dogecoin/blob/master/README.md" target="_blank" rel="nofollow">White Paper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/dogecoin/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Honee crypto wallet is one of the most efficient and reliable tools for storing and earning DOGE cryptocurrency. Honee’s DOGE token is a mirrored asset with the ticker DOGEBSC, which is fully backed by the original DOGE. This is made possible thanks to the cross-chain listing of DOGE.</p>
                    <p><b>DOGE's smart contract on BNB Chain:</b><br>
                    <a href="https://bscscan.com/token/0xba2ae424d960c26247dd6c32edc70b295c744c43" target="_blank" rel="nofollow">bscscan.com/token/0xba2ae424d960c26247dd6c32edc70b295c744c43</a>
                    </p>
                    <p><b>Minter Hub’s smart contract:</b><br>
                    <a href="https://bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f" target="_blank" rel="nofollow">bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f</a>
                    </p>
                </section>
                <section>
                    <h2>How to Create the Best DOGE Wallet 2022</h2>
                    <p>The process of creating a wallet requires minimum effort on the user’s part and is carried out in a few simple steps:</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Go to <a href="https://my.honee.app/">wallet</a> and start the registration process by clicking on the Sign up button;</li>
                                <li>Copy your 12-word wallet login phrase and save it somewhere safe;</li>
                                <li>Activate your wallet by clicking Launch Honee.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to create and set up an doge wallet in 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Honee is a wallet that helps you automate the earning of DOGE cryptocurrency and be calm about its safety. Simple tools, intuitive interface, and advanced technology make Honee the best 2022 wallet for storing DOGE—and the most reliable.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
