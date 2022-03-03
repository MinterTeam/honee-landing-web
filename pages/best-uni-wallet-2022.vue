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
        const title = getTitle('The Best UNI Wallet 2022');
        const description = 'Honee is the best UNI wallet of 2022 in terms of storing and earning. Keeping your assets has never been so rewarding and safe at the same time.';

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
                    <h1>The Best UNI Wallet in 2022</h1>
                    <h2>What’s UNI?</h2>
                    <p class="subtitle-h1">Uniswap is a decentralized protocol that creates liquidity pools. Thanks to the automatic price calculation mechanism in the pool, traders do not have to wait for others to place their orders. Using the UNI token, market players can take part in project management themselves. Honee is the best wallet for UNI in 2022 to quickly buy the cryptocurrency and enlarge their holdings.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/uni/logo-uni.png" srcset="/img/articles/uni/logo-uni@2x.png 2x" alt="best uni wallet 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Name</div>
                                <b>Uniswap</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Symbol</div>
                                <b>UNI</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Max. supply</div>
                                <b>1,000,000,000</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://uniswap.org/" target="_blank" rel="nofollow">Site</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://etherscan.io/" target="_blank" rel="nofollow">Explorer</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://uniswap.org/whitepaper-v3.pdf" target="_blank" rel="nofollow">White Paper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/uniswap/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>The Honee crypto wallet was created to make your earning as easy and safe as possible. When designing it, we tried to make all operations with assets intuitive. All this makes Honee the best UNI wallet in 2022.</p>
                    <p>In Honee crypto wallet, the UNI token sits as a mirrored asset from the Binance Smart Chain network under the ticker UNIBSC and is fully backed by the original token.</p>
                    <p><b>UNI’s smart contract on Ethereum:</b><br>
                    <a href="https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984" target="_blank" rel="nofollow">etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce</a>
                    </p>
                    <p><b>Minter Hub’s smart contract:</b><br>
                    <a href="https://etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2" target="_blank" rel="nofollow">etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2</a>
                    </p>
                </section>
                <section>
                    <h2>How to Create the Best UNI Wallet 2022</h2>
                    <p>The process of setting up a UNI wallet has never been so simple. To do this, you only need to take 4 simple steps:</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Go to the <a href="https://my.honee.app/">Honee</a> homepage and click <b>Sign up</b>;</li>
                                <li>Write down or copy the suggested passphrase and keep it in a safe place. This is your only wallet key;</li>
                                <li>Tick the checkbox;</li>
                                <li>Press <b>Launch Honee</b> to start using the best wallet for your crypto assets.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to create and set up an uni wallet in 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">With Honee crypto wallet, you can quickly buy, store, and swap UNI for any asset. Simple earning tools that help you generate additional UNI tokens in a few clicks make Honee the best UNI wallet in 2022.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
