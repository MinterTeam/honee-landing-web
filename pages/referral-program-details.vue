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
        const title = getTitle('Multilevel referral program');
        const description = 'The Honee crypto wallet referral program allows users to earn by referring friends to the wallet staking options.';

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
                        <a href="https://twitter.com/intent/tweet?url=https://honee.app/referral-program-details&text=Multilevel+referral+program+Honee" target="_blank" rel="nofollow"><img src="/img/landing/twitter.svg" alt="Share on Twitter" width="40" height="40"></a>
                        <a href="https://www.facebook.com/share.php?u=https://honee.app/referral-program-details&quote=Multilevel+referral+program+Honee" target="_blank" rel="nofollow"><img src="/img/landing/facebook.svg" alt="Share on Facebook" width="40" height="40"></a>
                        <a href="tg://msg_url?url=https://honee.app/referral-program-details&text=Multilevel+referral+program+Honee" rel="nofollow"><img src="/img/landing/telegram.svg" alt="Share on Telegram" width="40" height="40"></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://honee.app/referral-program-details" target="_blank" rel="nofollow"><img src="/img/landing/linkedin.svg" alt="Share on Linkedin" width="40" height="40"></a>
                        <!--<a href="" rel="nofollow"><img src="/img/landing/copy-link.svg" alt="Copy link" width="40" height="40"></a>-->
                    </div>
                </div>
                <section class="article-header">
                    <h1>Multilevel referral program</h1>
                    <p class="subtitle-h1">The Honee crypto wallet referral program allows users to earn by referring friends to the wallet staking options.</p>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>How to use:</p>
                            <ol>
                                <li>Register with <a href="https://my.honee.app/">Honee</a>;</li>
                                <li>Activate the referral link;</li>
                                <li>Copy the referral link;</li>
                                <li>Share your referral link with your friends.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/ref/ref-1.avif 1x, /img/articles/ref/ref-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/ref/ref-1.webp 1x, /img/articles/ref/ref-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/ref/ref-1.png" srcset="/img/articles/ref/ref-1@2x.png 2x" alt="Multilevel referral program Honee" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <p>You can refer friends to any wallet page, for example, to specific staking programs for which you will receive payments from friends' stakes. To do this, open the card with the program and copy your referral link from the address bar of your browser.</p>
                        <p>Reward Tiers:</p>
                        <ol>
                            <li>Level 1 = 10% of the referral's stake</li>
                            <li>Level 2 = 7% of the referral's stake</li>
                            <li>Level 3 = 4% of the referral's stake</li>
                            <li>Level 4 = 2% of the referral's stake</li>
                            <li>Level 5 = 1% of the referral's stake</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img buy-bitcoin-2">
                        <picture>
                            <source srcset="/img/articles/ref/ref-2.avif 1x, /img/articles/ref/ref-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/ref/ref-2.webp 1x, /img/articles/ref/ref-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/ref/ref-2.png" srcset="/img/articles/ref/ref-2@2x.png 2x" alt="Multilevel referral program Honee" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <p>The list of programs for which referral rewards will occur:</p>
                    <ul>
                        <li><a href="https://my.honee.app/stake/19" target="_blank">BEE staking</a> (3 year staking lock)</li>
                        <li><a href="https://my.honee.app/stake/19" target="_blank">HUBSTAKE staking</a> (5 year staking lock)</li>
                        <li><a href="https://my.honee.app/stake/19" target="_blank">MUSD staking </a> (3 year staking lock)</li>
                    </ul>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Please note that payouts require your referral to use the maximum staking period!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
