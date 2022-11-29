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
        const title = getTitle('How to earn cryptocurrency for likes and retweets on Twitter');
        const description = 'Honee crypto wallet users have the opportunity to receive cryptocurrency for supporting community posts on Twitter.';

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
                        <a href="https://twitter.com/intent/tweet?url=https://honee.app/how-earn-cryptocurrency-for-likes-retweets-on-twitter&text=How+to+earn+cryptocurrency+for+likes+and+retweets+on+Twitter" target="_blank" rel="nofollow"><img src="/img/landing/twitter.svg" alt="Share on Twitter" width="40" height="40"></a>
                        <a href="https://www.facebook.com/share.php?u=https://honee.app/how-earn-cryptocurrency-for-likes-retweets-on-twitter&quote=How+to+earn+cryptocurrency+for+likes+and+retweets+on+Twitter" target="_blank" rel="nofollow"><img src="/img/landing/facebook.svg" alt="Share on Facebook" width="40" height="40"></a>
                        <a href="tg://msg_url?url=https://honee.app/how-earn-cryptocurrency-for-likes-retweets-on-twitter&text=How+to+earn+cryptocurrency+for+likes+and+retweets+on+Twitter" rel="nofollow"><img src="/img/landing/telegram.svg" alt="Share on Telegram" width="40" height="40"></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://honee.app/how-earn-cryptocurrency-for-likes-retweets-on-twitter" target="_blank" rel="nofollow"><img src="/img/landing/linkedin.svg" alt="Share on Linkedin" width="40" height="40"></a>
                        <!--<a href="" rel="nofollow"><img src="/img/landing/copy-link.svg" alt="Copy link" width="40" height="40"></a>-->
                    </div>
                </div>
                <section class="article-header">
                    <h1>How to earn cryptocurrency for likes and retweets on Twitter</h1>
                    <p class="subtitle-h1">Honee crypto wallet users have the opportunity to receive cryptocurrency for supporting community posts on Twitter.</p>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>To do this:</p>
                            <ol>
                                <li>Log into your <a href="https://my.honee.app/">Honee wallet</a> or create a new one;</li>
                                <li>Then, in the "Earnings" section, find this card and follow the instructions.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/twitter/tw-1.avif 1x, /img/articles/twitter/tw-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/twitter/tw-1.webp 1x, /img/articles/twitter/tw-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/twitter/tw-1.png" srcset="/img/articles/twitter/tw-1@2x.png 2x" alt="How to earn cryptocurrency for likes and retweets on Twitter" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <p>You will be redirected to the Telegram bot, which hosts posts for likes and retweets from time to time. Depending on the number of your followers and the popularity of your Twitter account, the reward for likes and retweets may vary. The more popular the account, the higher the reward you can receive in BEE cryptocurrency.</p>
                        <p>It should be mentioned that we do not allow the creation of multi-accounts to receive rewards. If your account is new or has a small number of followers, the system may not allow your Twitter account to receive rewards.</p>
                    </div>
                    <div class="article-picture-box-img buy-bitcoin-2">
                        <picture>
                            <source srcset="/img/articles/twitter/tw-2.avif 1x, /img/articles/twitter/tw-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/twitter/tw-2.webp 1x, /img/articles/twitter/tw-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/twitter/tw-2.png" srcset="/img/articles/twitter/tw-2@2x.png 2x" alt="How to earn cryptocurrency for likes and retweets on Twitter" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1" style="text-align: center;">Let's make Honee a popular crypto wallet together!<br/> Every like matters <span class="emoji">❤️</span></p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
