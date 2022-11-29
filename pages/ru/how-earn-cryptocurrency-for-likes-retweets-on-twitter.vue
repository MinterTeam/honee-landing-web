<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabatyvat-kriptovalyutu-za-lajki-v-twitter',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как зарабатывать криптовалюту за лайки и ретвиты в Twitter');
        const description = 'Пользователи крипто-кошелька Honee имеют возможность получать криптовалюту за поддержку постов сообщества в Твиттере.';

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
                        <a href="https://twitter.com/intent/tweet?url=https://honee.app/ru/kak-zarabatyvat-kriptovalyutu-za-lajki-v-twitter&text=Как+зарабатывать+криптовалюту+за+лайки+и+ретвиты+в+Twitter" target="_blank" rel="nofollow"><img src="/img/landing/twitter.svg" alt="Поделиться в Twitter" width="40" height="40"></a>
                        <a href="https://www.facebook.com/share.php?u=https://honee.app/ru/kak-zarabatyvat-kriptovalyutu-za-lajki-v-twitter&quote=Как+зарабатывать+криптовалюту+за+лайки+и+ретвиты+в+Twitter" target="_blank" rel="nofollow"><img src="/img/landing/facebook.svg" alt="Поделиться в Facebook" width="40" height="40"></a>
                        <a href="tg://msg_url?url=https://honee.app/ru/kak-zarabatyvat-kriptovalyutu-za-lajki-v-twitter&text=Как+зарабатывать+криптовалюту+за+лайки+и+ретвиты+в+Twitter" rel="nofollow"><img src="/img/landing/telegram.svg" alt="Поделиться в Telegram" width="40" height="40"></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://honee.app/ru/kak-zarabatyvat-kriptovalyutu-za-lajki-v-twitter" target="_blank" rel="nofollow"><img src="/img/landing/linkedin.svg" alt="Поделиться в Linkedin" width="40" height="40"></a>
                        <!--<a href="" rel="nofollow"><img src="/img/landing/copy-link.svg" alt="Скопировать ссылку" width="40" height="40"></a>-->
                    </div>
                </div>
                <section class="article-header">
                    <h1>Как зарабатывать криптовалюту за лайки и ретвиты в Twitter</h1>
                    <p class="subtitle-h1">Пользователи крипто-кошелька Honee имеют возможность получать криптовалюту за поддержку постов сообщества в Твиттере.</p>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Для этого:</p>
                            <ol>
                                <li>Войдите в свой <a href="https://my.honee.app/ru">кошелек Honee</a> или создайте новый;</li>
                                <li>Затем в разделе "Заработок" найдите данную карточку и следуйте инструкциям.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/twitter/tw-1-ru.avif 1x, /img/articles/twitter/tw-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/twitter/tw-1-ru.webp 1x, /img/articles/twitter/tw-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/twitter/tw-1-ru.png" srcset="/img/articles/twitter/tw-1-ru@2x.png 2x" alt="Как зарабатывать криптовалюту за лайки и ретвиты в Twitter" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <p>Вы будете переправлены на Телегам-бот, в котором время от времени размещаются посты для лайков и ретвитов. В зависимости от количества ваших подписчиков и популярности вашего аккаунта в Twitter, награда за лайки и ретвиты может отличаться. Чем популярнее аккаунт, тем более высокую награду вы можете получать в криптовалюте BEE.</p>
                        <p>Следует упомянуть, что мы не допускаем создание мульти-аккаунтов для получения наград. Если ваш аккаунт создан недавно или имеет небольшое количество подписчиков, то система может не допускать ваш Твиттер-аккаунт к получению наград.</p>
                    </div>
                    <div class="article-picture-box-img buy-bitcoin-2">
                        <picture>
                            <source srcset="/img/articles/twitter/tw-2-ru.avif 1x, /img/articles/twitter/tw-2-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/twitter/tw-2-ru.webp 1x, /img/articles/twitter/tw-2-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/twitter/tw-2-ru.png" srcset="/img/articles/twitter/tw-2-ru@2x.png 2x" alt="Как зарабатывать криптовалюту за лайки и ретвиты в Twitter" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1" style="text-align: center;">Вместе сделаем Honee популярным крипто-кошельком!<br/> Важен каждый <span class="emoji">❤️</span></p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
