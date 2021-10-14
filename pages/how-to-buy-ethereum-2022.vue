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
        const title = getTitle('How to Buy Ethereum 2022');
        const description = 'If you want to know how to buy Ethereum in 2022 and spend as little time and money as possible—following the changes in its price as well—this guide on the Honee wallet is designed to help you do exactly that.';

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
                    <h1>How to Buy Ethereum (ETH) in 2022</h1>
                    <p class="subtitle-h1">In this guide, you’ll learn step by step how to buy Ethereum in 2022 with any token that the Honee crypto wallet provides support for.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2><span class="h2-badge">1</span>Deposit</h2>
                        <p>To buy Ethereum, an address in the Honee crypto wallet is needed. You may sign in using the one you’ve created already or set up a fresh one.</p>
                    </div>
                    <div class="article-picture-box-img buy-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/buy-bitcoin-1.avif 1x, /img/articles/buy-bitcoin-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-bitcoin-1.webp 1x, /img/articles/buy-bitcoin-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-bitcoin-1.png" srcset="/img/articles/buy-bitcoin-1@2x.png 2x" alt="how to buy ethereum 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <p>Upon logging in, you’ll be taken to your personal wallet. Now, you have to replenish it with the cryptocurrency that you store somewhere else. To do that:</p>
                        <ol>
                            <li>Click the <b>Deposit</b> button on the home screen</li>
                            <li>Send the crypto you’ve chosen to <b>the address</b> you see</li>
                            <li>Transfer the necessary amount (for example, from an account on an exchange or a different wallet)</li>
                        </ol>
                        <p>After the transaction has been completed, the deposited amount will show up on your balance.</p>
                    </div>
                    <div class="article-picture-box-img buy-bitcoin-2">
                        <picture>
                            <source srcset="/img/articles/buy-bitcoin-2.avif 1x, /img/articles/buy-bitcoin-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-bitcoin-2.webp 1x, /img/articles/buy-bitcoin-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-bitcoin-2.png" srcset="/img/articles/buy-bitcoin-2@2x.png 2x" alt="best way to buy ethereum 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <h2><span class="h2-badge">2</span>How to Buy Ethereum 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Once your wallet has been replenished with the tokens you’d want to swap for Ethereum, click on Swap or pick the Buy Ethereum card.</p>
                            <p>In the newly opened window:</p>
                            <ol>
                                <li>Select the coin you’d like to spend</li>
                                <li>Enter the amount</li>
                                <li>Pick the coin under the ticker <b>ETH</b> (if you’ve opted for the <b>Buy Ethereum</b> card, it’ll be set by default)</li>
                                <li>Check the price and the receivable amount of ETH</li>
                                <li>Click <b>Confirm</b></li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img buy-bitcoin-3">
                            <picture>
                                <source srcset="/img/articles/buy-ethereum-3.avif 1x, /img/articles/buy-ethereum-3@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-ethereum-3.webp 1x, /img/articles/buy-ethereum-3@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-ethereum-3.png" srcset="/img/articles/buy-ethereum-3@2x.png 2x" alt="how to buy ether 2022" role="presentation">
                            </picture>
                        </div>
                    </div>
                    <p>After the buy Ethereum transaction has been carried out, it will be shown on your balance.</p>
                </section>
                <section class="article-last-block">
                    <h2>Ethereum Price</h2>
                    <p>There are two ways how you could find out the price of the second-biggest cryptocurrency:</p>
                    <ol>
                        <li>Through the <b>Buy Ethereum</b> card (or when you click <b>Swap</b>)</li>
                        <li>On the page of the balance, press ETH to see the price chart for Ethereum</li>
                    </ol>
                    <p class="subtitle-h1">We hope that after reading this article, you have an answer to the question, <i>How to buy Ethereum in 2022?</i> and will use Honee!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
