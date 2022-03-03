<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-kupit-matic-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как купить MATIC в 2022');
        const description = 'Как купить MATIC в 2022 году с помощью надежного кошелька Honee. Быстрый и безопасный способ.';

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
                    <p>MATIC — это криптовалюта защищенной сети автономных сайдчейнов Polygon, которая была создана, чтобы повысить масштабируемость и увеличить скорость транзакций в сети Ethereum. Из нашего руководства вы узнаете, как купить криптовалюту MATIC в 2022 г. в криптокошельке Honee.</p>
                    <h1>Как купить MATIC в 2022 году</h1>
                    <p class="subtitle-h1">В кошельке Honee вы сможете быстро и безопасно купить криптовалюту MATIC. Для этого вам необходимо пополнить ваш кошелек Honee любой поддерживаемой криптовалютой, а затем обменять ее на MATICBSC. Это тикер криптовалюты MATIC в сети Minter, который полностью обеспечен оригинальными токенами из сети Binance Smart Chain.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h3>Необходимые действия для покупки MATIC в кошельке Honee</h3>
                        <ul>
                            <li>Как только ваш кошелек будет пополнен любой криптовалютой сети Minter, перейдите на главную страницу и нажмите кнопку «Обменять»;</li>
                            <li>Укажите имеющуюся на кошельке монету сети Minter, а в строке ниже выберите монету MATICBSC в качестве обмена. Ее количество будет рассчитано автоматически;</li>
                            <li>Нажмите на пиктограмму «Обменять» и завершите обмен, подтвердив операцию в следующем окне.</li>
                        </ul>
                    </div>
                    <div class="article-picture-box-img wallet-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как и где купить matic 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/matic/buy-matic-1-ru.avif 1x, /img/articles/matic/buy-matic-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/matic/buy-matic-1-ru.webp 1x, /img/articles/matic/buy-matic-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/matic/buy-matic-1-ru.png" srcset="/img/articles/matic/buy-matic-1-ru@2x.png 2x" alt="как купить matic 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/matic/buy-matic-2-ru.avif 1x, /img/articles/matic/buy-matic-2-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/matic/buy-matic-2-ru.webp 1x, /img/articles/matic/buy-matic-2-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/matic/buy-matic-2-ru.png" srcset="/img/articles/matic/buy-matic-2-ru@2x.png 2x" alt="лучший способ купить MATIC Polygon 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Благодаря передовым инструментам кошелька Honee, трейдинг криптовалют становится легким и безопасным. Высокая скорость транзакций без необходимости использовать Layer-2 решения делает блокчейн Minter и криптокошелек Honee лучшим решением для торговли и хранения криптоактивов. Теперь вы знаете, как быстро купить MATIC в 2022 году.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
