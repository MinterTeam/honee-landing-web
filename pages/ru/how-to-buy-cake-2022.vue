<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-kupit-cake-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как купить CAKE в 2022');
        const description = 'Лучший способ купить токены CAKE в 2022 году. ';

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
                        <a href="https://twitter.com/intent/tweet?url=https://honee.app/how-to-buy-bitcoin-2022&text=How+to+Buy+Bitcoin+2022" target="_blank" rel="nofollow"><img src="/img/landing/twitter.svg" alt="Поделиться в Twitter" width="40" height="40"></a>
                        <a href="https://www.facebook.com/share.php?u=https://honee.app/how-to-buy-bitcoin-2022&quote=How+to+Buy+Bitcoin+2022" target="_blank" rel="nofollow"><img src="/img/landing/facebook.svg" alt="Поделиться в Facebook" width="40" height="40"></a>
                        <a href="tg://msg_url?url=https://honee.app/how-to-buy-bitcoin-2022&text=How+to+Buy+Bitcoin+2022" rel="nofollow"><img src="/img/landing/telegram.svg" alt="Поделиться в Telegram" width="40" height="40"></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://honee.app/how-to-buy-bitcoin-2022" target="_blank" rel="nofollow"><img src="/img/landing/linkedin.svg" alt="Поделиться в Linkedin" width="40" height="40"></a>
                        <!--<a href="" rel="nofollow"><img src="/img/landing/copy-link.svg" alt="Скопировать ссылку" width="40" height="40"></a>-->
                    </div>
                </div>
                <section class="article-header">
                    <h1>Как купить CAKE в 2022 году</h1>
                    <p class="subtitle-h1">CAKE — токен децентрализованной биржи PancakeSwap, работающей на блокчейне Binance Smart Chain и использующей модель автоматизированного маркет мейкера. Основная функция токенов CAKE — стимулировать предоставление ликвидности платформе PancakeSwap. Эта инструкция поможет вам купить токены CAKE в 2022 году с помощью лучшего кошелька для криптовалюты Honee.</p>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Самый простой способ купить токены CAKE в кошельке Honee — обменять его на другие криптовалюты, которые уже есть на вашем кошельке. Для этого:</p>
                            <ol>
                                <li>Нажимаем на кнопку «Обменять», которая находится в самом верху главной страницы кошелька;</li>
                                <li>Выбираем любой имеющийся токен из списка, а в поле ниже выбираем токен CAKEBSC. Это и есть оригинальный актив CAKE, который был заркалирован оракулами блокчейна Minter из сети Binance;</li>
                                <li>Жмем на кнопку обмена и подтверждаем операцию еще раз.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как и где купить cake 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/cake/buy-cake-1-ru.avif 1x, /img/articles/cake/buy-cake-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/cake/buy-cake-1-ru.webp 1x, /img/articles/cake/buy-cake-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/cake/buy-cake-1-ru.png" srcset="/img/articles/cake/buy-cake-1-ru@2x.png 2x" alt="как купить cake 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/cake/buy-cake-2-ru.avif 1x, /img/articles/cake/buy-cake-2-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/cake/buy-cake-2-ru.webp 1x, /img/articles/cake/buy-cake-2-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/cake/buy-cake-2-ru.png" srcset="/img/articles/cake/buy-cake-2-ru@2x.png 2x" alt="лучший способ купить CAKE PancakeSwap 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Теперь вы знаете, как быстро <b>купить токены CAKE в 2022-м</b> с помощью самого лучшего кошелька криптовалюты Honee. Мы уверены, что с помощью Honee ваш заработок и хранение средств выйдут на новый уровень!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
