<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/referalnaya-programma-crypto',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Многоуровневая реферальная программа');
        const description = 'Как зарабатывать на реферальной программе крипто-кошелька Honee.';

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
                        <span>Поделиться</span>
                        <a href="https://twitter.com/intent/tweet?url=https://honee.app/ru/referalnaya-programma-crypto&text=Как+зарабатывать+на+реферальной+программе+криптокошелька+Honee" target="_blank" rel="nofollow"><img src="/img/landing/twitter.svg" alt="Поделиться в Twitter" width="40" height="40"></a>
                        <a href="https://www.facebook.com/share.php?u=https://honee.app/ru/referalnaya-programma-crypto&quote=Как+зарабатывать+на+реферальной+программе+криптокошелька+Honee" target="_blank" rel="nofollow"><img src="/img/landing/facebook.svg" alt="Поделиться в Facebook" width="40" height="40"></a>
                        <a href="tg://msg_url?url=https://honee.app/ru/referalnaya-programma-crypto&text=Как+зарабатывать+на+реферальной+программе+криптокошелька+Honee" rel="nofollow"><img src="/img/landing/telegram.svg" alt="Поделиться в Telegram" width="40" height="40"></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://honee.app/ru/referalnaya-programma-crypto" target="_blank" rel="nofollow"><img src="/img/landing/linkedin.svg" alt="Поделиться в Linkedin" width="40" height="40"></a>
                        <!--<a href="" rel="nofollow"><img src="/img/landing/copy-link.svg" alt="Скопировать ссылку" width="40" height="40"></a>-->
                    </div>
                </div>
                <section class="article-header">
                    <h1>Многоуровневая реферальная программа</h1>
                    <p class="subtitle-h1">Реферальная программа крипто-кошелька Honee позволяет пользователям зарабатывать на привлечении друзей в программы стейкинга.</p>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Как пользоваться:</p>
                            <ol>
                                <li>Зарегистрируйтесь в <a href="https://my.honee.app/ru">Honee</a>;</li>
                                <li>Активируйте реферальную ссылку;</li>
                                <li>Скопируйте реферальную ссылку;</li>
                                <li>Распространяйте свою реферальную ссылку для привлечения новых пользователей.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/ref/ref-1.avif 1x, /img/articles/ref/ref-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/ref/ref-1.webp 1x, /img/articles/ref/ref-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/ref/ref-1.png" srcset="/img/articles/ref/ref-1@2x.png 2x" alt="Многоуровневая реферальная программа Honee" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <p>Привлекать друзей можно на любую страницу кошелька, например на конкретные программы стейкинга, за которые вам будут приходить выплаты от стейков друзей. Для этого откройте карточку с программой и скопируйте вашу реферальную ссылку из адресной строки браузера.</p>
                        <p>Уровни наград:</p>
                        <ol>
                            <li>уровень = 10% от стейка реферала</li>
                            <li>уровень = 7% от стейка реферала</li>
                            <li>уровень = 4% от стейка реферала</li>
                            <li>уровень = 2% от стейка реферала</li>
                            <li>уровень = 1% от стейка реферала</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img buy-bitcoin-2">
                        <picture>
                            <source srcset="/img/articles/ref/ref-2.avif 1x, /img/articles/ref/ref-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/ref/ref-2.webp 1x, /img/articles/ref/ref-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/ref/ref-2.png" srcset="/img/articles/ref/ref-2@2x.png 2x" alt="Многоуровневая реферальная программа Honee" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <p>Список программ, по которым будут происходить реферальные отчисления ниже:</p>
                    <ul>
                        <li><a href="https://my.honee.app/ru/stake/19" target="_blank">Стейкинг BEE</a> (срок 3 года)</li>
                        <li><a href="https://my.honee.app/ru/stake/19" target="_blank">Стейкинг HUBSTAKE</a> (срок 5 лет)</li>
                        <li><a href="https://my.honee.app/ru/stake/19" target="_blank">Стейкинг MUSD</a> (срок 3 года)</li>
                    </ul>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Обратите внимание, что для выплат необходимо, чтобы ваш реферал воспользовался максимальным сроком стейкинга!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
