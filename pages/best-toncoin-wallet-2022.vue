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
        const title = getTitle('The Best Toncoin Wallet 2022');
        const description = 'The best wallet for Toncoin in 2022, in our opinion, should meet all modern requirements in terms of security and focus on a flawless user experience.';

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
                    <h1>The Best Toncoin Wallet in 2022</h1>
                    <h2>What’s TON?</h2>
                    <p class="subtitle-h1">TON is a new blockchain project rapidly gaining popularity. It might be extremely useful to have such a crypto asset in your portfolio. The main keys to the success of The Open Network are a strong development team (winners of various blockchain coding competitions), scalability, high speed of payments, and ease of use. The involvement of Pavel and Nikolai Durov at the initial stage of the development of this project is also a plus. So, what qualities should the best Toncoin wallet of 2022 have?</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/asset-toncoin.svg" alt="best toncoin wallet 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Name</div>
                                <b>Toncoin</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Symbol</div>
                                <b>TONCOIN</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Max. supply</div>
                                <b>5,000,000,000</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://ton.org/" target="_blank" rel="nofollow">Site</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://ton.sh/" target="_blank" rel="nofollow">Explorer</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://ton.org/whitepaper.pdf" target="_blank" rel="nofollow">White Paper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/toncoin/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>The Best Toncoin Wallet 2022: Honee’s Advantages</h2>
                    <p>The choice of a wallet for storing promising tokens is a very important aspect. Security and usability should not be neglected in any way. However, there is a solution, which is Honee! This wallet is completely decentralized (access to the cryptocurrency remains only with you), since it is non-custodial. Also, the fees are low and the interface is user-friendly.</p>
                    <p>In the Honee wallet, The Open Network project is presented as a token under the Toncoin ticker.</p>
                    <p><b>The smart contract of TONCOIN:</b><br>
                    <a href="https://etherscan.io/address/0x582d872a1b094fc48f5de31d3b73f2d9be47def1" target="_blank" rel="nofollow">etherscan.io/address/0x582d872a1b094fc48f5de31d3b73f2d9be47def1</a>
                    </p>
                    <p><b>The smart contract of Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0xc735478ef7562ecc37662fc7c5e521eb835f9dab" target="_blank" rel="nofollow">etherscan.io/address/0xc735478ef7562ecc37662fc7c5e521eb835f9dab</a>
                    </p>
                </section>
                <section>
                    <h2>How to Create the Best Toncoin Wallet of 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Go to <a href="https://my.honee.app/">Honee</a> and click <b>Sign up</b>;</li>
                                <li>Copy the seed phrase and save it in a safeguarded place, check the box afterward;</li>
                                <li>Click <b>Launch Honee</b>.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to create and set up an toncoin wallet in 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Our team has tried to create the best Toncoin wallet of 2022, making it convenient, secure, and super easy-to-use.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
