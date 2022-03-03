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
        const title = getTitle('The Best MVI (Metaverse Index) Wallet 2022');
        const description = 'Learn which features will make the best MVI (Metaverse Index) wallet in 2022.';

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
                    <h1>The Best MVI (Metaverse Index) Wallet 2022: Honee Advantages</h1>
                    <p>These days, the entire crypto community’s eyes are on metaverses. Cryptocurrencies from the space of metaverses emerge every now and then, most of which are aimed to incentivize the gameplay in every possible way and give their users special advantages.</p>
                    <h2>What’s MVI?</h2>
                    <p class="subtitle-h1">The Metaverse Index, created by Index Coop, is a basket of the most popular tokens from various metaverses. Honee aims to conquer the title of the best MVI wallet in 2022, allowing its users to store and earn the Metaverse Index token.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/asset-mvi.svg" alt="best mvi metaverse index wallet 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Name</div>
                                <b>Metaverse Index</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Symbol</div>
                                <b>MVI</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Max. supply</div>
                                <b>39,602</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://www.indexcoop.com/metaverse-index-mvi.html" target="_blank" rel="nofollow">Site</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://etherscan.io/" target="_blank" rel="nofollow">Explorer</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://www.tokensets.com/v2/set/0x72e364F2ABdC788b7E918bc238B21f109Cd634D7" target="_blank" rel="nofollow">Token</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/metaverse-index/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Thanks to its convenience and simple interface, Honee has gained popularity among many users. Using Honee, one can buy and exchange the Metaverse Index for any other asset at low fees in just a few clicks.</p>
                    <p>In Honee crypto wallet, the Metaverse Index token goes under the METAINDEX ticker. It is a mirrored asset that is fully backed by the original MVI token from the Ethereum network.</p>
                    <p><b>The smart contract of MVI:</b><br>
                    <a href="https://etherscan.io/address/0x72e364f2abdc788b7e918bc238b21f109cd634d7" target="_blank" rel="nofollow">etherscan.io/address/0x72e364f2abdc788b7e918bc238b21f109cd634d7</a>
                    </p>
                    <p><b>The smart contract of Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2" target="_blank" rel="nofollow">etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2</a>
                    </p>
                </section>
                <section>
                    <h2>How to Set Up the Best MVI (Metaverse Index) Wallet 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Open <a href="https://my.honee.app/">Honee</a>;</li>
                                <li>Sign up;</li>
                                <li>Write down or copy the suggested seed phrase and save it. This phrase is the only key to your wallet, so if you lose it, you won’t be able to access your crypto assets;</li>
                                <li>Click on the Launch Honee icon.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to create and set up an mvi metaindex wallet in 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">When creating the Honee crypto wallet, we tried to make it as easy as possible for you to manage your assets as well as to earn and multiply your funds right inside the wallet. Thanks to its cutting-edge features, Honee has every chance of becoming the best MVI (Metaverse Index) wallet of 2022.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
