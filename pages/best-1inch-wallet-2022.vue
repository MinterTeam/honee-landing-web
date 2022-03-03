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
        const title = getTitle('The Best 1INCH Wallet 2022');
        const description = 'Honee is the best wallet for storing and earning 1INCH in 2022. Generate crypto even when you’re asleep.';

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
                    <h1>The Best 1INCH Wallet in 2022: Honee Advantages</h1>
                    <h2>What’s 1INCH?</h2>
                    <p class="subtitle-h1">1INCH is an aggregator that unites several decentralized exchanges onto a single platform for searching the most efficient swap routes. One may view Honee as the best 1INCH wallet of 2022 as it helps you buy and put 1INCH to work in no time.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/asset-1inch.svg" alt="best 1inch wallet 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Name</div>
                                <b>1inch Network</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Symbol</div>
                                <b>1INCH</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Max. supply</div>
                                <b>infinite</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://1inch.io/" target="_blank" rel="nofollow">Site</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://etherscan.io/" target="_blank" rel="nofollow">Explorer</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://1inch.io/token/" target="_blank" rel="nofollow">Token</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/1inch/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>In Honee crypto wallet, earning gets safe and straightforward. When creating it, we tried to make all operations in cryptocurrency intuitive so that even newcomers to trading could master its basics.</p>
                    <p>In Honee, 1INCH has the same ticker. It is a wrapped asset on the Minter network, which is fully backed by the original ERC-20 1INCH token from Ethereum.</p>
                    <p><b>The smart contract of 1INCH:</b><br>
                    <a href="https://etherscan.io/address/0x111111111117dc0aa78b770fa6a738034120c302" target="_blank" rel="nofollow">etherscan.io/address/0x111111111117dc0aa78b770fa6a738034120c302</a>
                    </p>
                    <p><b>The smart contract of Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2" target="_blank" rel="nofollow">etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2</a>
                    </p>
                </section>
                <section>
                    <h2>How to Create the Best 1INCH Wallet 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>The whole process of creating a wallet takes one minute, tops.</p>
                            <ol>
                                <li>Open the <a href="https://my.honee.app/">Honee</a> wallet and click on <b>Sign up</b>;</li>
                                <li>Put a seed phrase you got someplace safe and make its backup. Friendly reminder: if you lose it, you’ll lose your funds as well;</li>
                                <li>Check the corresponding box;</li>
                                <li><b>Launch</b>.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to create and set up an 1inch wallet in 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">With Honee, you can buy and exchange 1INCH for other assets at the click of a mouse. Simple and convenient interface, breakthrough technologies, and easy-to-use earning instruments all make Honee the best 1INCH wallet of 2022.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
