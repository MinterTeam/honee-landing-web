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
        const title = getTitle('The Best MATIC Wallet 2022');
        const description = 'Honee wallet is your reliable assistant for holding and earning MATIC cryptocurrency in 2022.';

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
                    <h1>The Best MATIC Wallet in 2022</h1>
                    <h2>What’s MATIC?</h2>
                    <p class="subtitle-h1">MATIC is the governance token of the Polygon network, which is a platform aimed to improve the interoperability and scalability of the Ethereum network. With Honee wallet, you can earn MATIC easily. Intuitive interface, low fees, and fast yet cheap transactions all make Honee the best MATIC wallet of 2022.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/matic/logo-matic.png" srcset="/img/articles/matic/logo-matic@2x.png 2x" alt="best matic polygon wallet 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Name</div>
                                <b>Polygon</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Symbol</div>
                                <b>MATIC</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Max. supply</div>
                                <b>10,000,000,000</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://polygon.technology/" target="_blank" rel="nofollow">Site</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://bscscan.com/" target="_blank" rel="nofollow">Explorer</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://github.com/maticnetwork/whitepaper" target="_blank" rel="nofollow">White Paper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/polygon/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Today, hundreds of users are already enjoying the convenience of the Honee crypto wallet. With it, you can store, exchange, and earn MATIC cryptocurrency at minimal fees, and thanks to a user-friendly interface, all operations within the wallet are clear and simple.</p>
                    <p>In the Honee crypto wallet, the MATIC token has the ticker symbol MATICBSC. It is a fully collateralized asset that has been mirrored from the Binance Smart Chain network by Minter oracles.</p>
                    <p><b>MATIC's smart contract on BNB Chain:</b><br>
                    <a href="https://bscscan.com/token/0xcc42724c6683b7e57334c4e856f4c9965ed682bd" target="_blank" rel="nofollow">bscscan.com/token/0xcc42724c6683b7e57334c4e856f4c9965ed682bd</a>
                    </p>
                    <p><b>Minter Hub’s smart contract:</b><br>
                    <a href="https://bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f" target="_blank" rel="nofollow">bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f</a>
                    </p>
                </section>
                <section>
                    <h2>How to Create the Best MATIC Wallet 2022</h2>
                    <p>Creating the best MATIC wallet in 2022 is very easy. To do that:</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Visit <a href="https://my.honee.app/">Honee</a> homepage;</li>
                                <li>Click on the registration button and save the proposed 12-word phrase in a safe place on your computer or paper;</li>
                                <li>Remember that if the passphrase is lost, it will be impossible to restore;</li>
                                <li>Activate your wallet by clicking Launch Honee.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to create and set up an matic wallet in 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Managing your assets has never been so easy and safe. When creating the Honee crypto wallet, our team tried to take into account all possible shortcomings. That is why today, we think it’s safe to call Honee the best wallet for MATIC in 2022.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
