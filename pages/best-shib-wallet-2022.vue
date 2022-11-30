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
        const title = getTitle('The Best SHIB Wallet 2022');
        const description = 'The best SHIB wallet of 2022: a meme token that evolved into a full-fledged project also needs security, as well as terrific user experience.';

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
                    <h1>The Best SHIB Wallet in 2022</h1>
                    <h2>What’s SHIB?</h2>
                    <p class="subtitle-h1">SHIB is a meme cryptocurrency named after a Japanese dog breed. The project initially did not focus on technology, but with the rise in popularity, the founders of SHIB promised to create a DEX and an NFT marketplace.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/asset-shib.svg" alt="best shib wallet 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Name</div>
                                <b>Shiba Inu</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Symbol</div>
                                <b>SHIB</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Max. supply</div>
                                <b>infinite</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://shibatoken.com/" target="_blank" rel="nofollow">Site</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://etherscan.io/" target="_blank" rel="nofollow">Explorer</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://github.com/shytoshikusama/woofwoofpaper/raw/main/SHIBA_INU_WOOF_WOOF.pdf" target="_blank" rel="nofollow">White Paper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/shiba-inu/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>The Best SHIB Wallet in 2022</h2>
                    <p>When buying cryptocurrency, it is important to have a serious approach. What should the best SHIB wallet in 2022 look like? The wallet that will store your tokens must be non-custodial and secure. That is why Honee might be the best solution.</p>
                    <p>Honee is a proven wallet that works in a completely decentralized way, meaning the user can safely store their coins without worrying about safety. In addition to technical aspects, it is worth mentioning that Honee’s interface is friendly towards even novice crypto enthusiasts.</p>
                    <p>In the Honee wallet, the Shiba Inu project is represented as a token under the ticker SHIB.</p>
                    <p><b>SHIB’s smart contract on Ethereum:</b><br>
                    <a href="https://etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce" target="_blank" rel="nofollow">etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce</a>
                    </p>
                    <p><b>Minter Hub’s smart contract:</b><br>
                    <a href="https://etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2" target="_blank" rel="nofollow">etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2</a>
                    </p>
                </section>
                <section>
                    <h2>How to Create the Best SHIB Wallet 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Go to <a href="https://my.honee.app/">Honee</a> and click <b>Sign up</b>;</li>
                                <li>Copy the generated seed phrase and save it somewhere safe, tick the box afterwards;</li>
                                <li><b>Launch Honee</b>.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to create and set up an shib wallet in 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Honee is probably the best SHIB wallet of 2022—fast, secure, and convenient!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
