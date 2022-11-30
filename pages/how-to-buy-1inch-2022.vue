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
        const title = getTitle('How to Buy 1INCH 2022');
        const description = 'How to buy 1INCH in 2022: the fastest and most secure way.';

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
                    <h1>How to Buy 1INCH in 2022</h1>
                    <p class="subtitle-h1">In this simple guide, we will show you how to buy 1INCH in 2022 using the safest crypto wallet in just a couple of steps.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <p>In Honee, you can buy 1INCH by exchanging any liquid cryptocurrency on the Minter network for it. You can also buy 1INCH for ETH, sending the latter from your wallet or exchange account.</p>
                    </div>
                    <div class="article-picture-box-img buy-1inch-1">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-3.avif 1x, /img/articles/buy-1inch-3@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-3.webp 1x, /img/articles/buy-1inch-3@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-3.png" srcset="/img/articles/buy-1inch-3@2x.png 2x" alt="how to buy 1inch 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <p>To do that:</p>
                        <ol>
                            <li>Click Receive → Top up with ETH;</li>
                            <li>Enter the amount of Ether you want to deposit and any coin of Minter Network to receive. Press Buy after;</li>
                            <li>Copy the Ethereum address and top it up in whichever way you want;</li>
                            <li>Go back to Honee in order to buy 1INCH;</li>
                            <li>On the main page, select Swap and set the direction;</li>
                            <li>Check the terms and confirm the operation;</li>
                            <li>Once done, you’ll be able to view details in the Explorer by clicking on the corresponding button.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img buy-1inch-2">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-4.avif 1x, /img/articles/buy-1inch-4@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-4.webp 1x, /img/articles/buy-1inch-4@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-4.png" srcset="/img/articles/buy-1inch-4@2x.png 2x" alt="best way to buy 1inch 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-img buy-1inch-3">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-5.avif 1x, /img/articles/buy-1inch-5@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-5.webp 1x, /img/articles/buy-1inch-5@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-5.png" srcset="/img/articles/buy-1inch-5@2x.png 2x" alt="how to buy 1inch 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img buy-1inch-4">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-6.avif 1x, /img/articles/buy-1inch-6@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-6.webp 1x, /img/articles/buy-1inch-6@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-6.png" srcset="/img/articles/buy-1inch-6@2x.png 2x" alt="how to buy 1inch 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">And those are all the steps that separate you from buying 1INCH in 2022!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
