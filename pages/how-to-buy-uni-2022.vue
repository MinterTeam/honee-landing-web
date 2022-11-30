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
        const title = getTitle('How to Buy UNI 2022');
        const description = 'Honee wallet is the best way to buy and earn UNI cryptocurrency in 2022.';

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
                    <p>This simple guide will help you understand how to buy UNI in 2022 quickly and safely using the best wallet, which is Honee.</p>
                    <h1>How to Buy UNI in 2022</h1>
                    <p class="subtitle-h1">There are two ways to buy UNI within Honee crypto wallet. The first method involves the direct swap of any liquid cryptocurrency in the Minter network for UNIBSC. The UNIBSC ticker on the Minter network is used to signify that it is a mirrored asset fully backed by the original UNI token. The Honee wallet got this opportunity thanks to the <a href="https://www.minter.network/earn/cross-chain">cross-chain transfer</a> mechanism, which is carried out through the Minter Hub bridge.</p>
                    <p>If there is no UNI in your wallet yet, you must first replenish it with any liquid Minter network token or Ether. When replenishing through the Ethereum network, the ETH is automatically converted into the Minter network token of your choice and then exchanged for UNIBSC.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <p>For that:</p>
                        <ol>
                            <li>Click <b>Receive → Top up with ETH</b>;</li>
                            <li>Select the amount of Ether you want to replenish your wallet with, and any base coin of the Minter network. Then click <b>Buy</b>;</li>
                            <li>Copy the Ethereum address and make a transfer;</li>
                            <li>After that, return to Honee to buy UNIBSC;</li>
                            <li>On the main page, select the <b>Swap</b> section and the direction;</li>
                            <li>Check the exchange conditions and confirm the operation;</li>
                            <li>After completion, you will see the details of the swap in the Explorer upon clicking the <b>View transaction</b> button.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img wallet-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1@2x.png 2x" alt="how to buy uni 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/uni/buy-uni-1.avif 1x, /img/articles/uni/buy-uni-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/uni/buy-uni-1.webp 1x, /img/articles/uni/buy-uni-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/uni/buy-uni-1.png" srcset="/img/articles/uni/buy-uni-1@2x.png 2x" alt="how to buy UNI Uniswap 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/uni/buy-uni-2.avif 1x, /img/articles/uni/buy-uni-2@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/uni/buy-uni-2.webp 1x, /img/articles/uni/buy-uni-2@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/uni/buy-uni-2.png" srcset="/img/articles/uni/buy-uni-2@2x.png 2x" alt="how to buy uni 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Now you know how to buy UNI in 2022 from within your Honee crypto wallet. We hope that you have already checked out just how convenient it is!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
