<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/kak-kupit-doge-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как купить DOGE в 2022');
        const description = 'Как купить DOGE в 2022 году с помощью самого простого и надежного криптокошелька Honee.';

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
                    <p>Названная в честь интернет-мема, криптовалюта DOGE быстро обрела неимоверную популярность среди широкой массы криптоинвесторов. Сегодня каждый может добавить в свой портфель криптовалюту DOGE благодаря криптокошельку Honee.  </p>
                    <h1>Как купить DOGE в 2022 году</h1>
                    <p class="subtitle-h1">Механизм приобретения криптовалюты DOGE очень прост. В кошельке Honee DOGE представлен в виде зеркалированного токена DOGEBSC из сети Binance Smart Chain. DOGEBSC полностью обеспечен оригинальным активом, что стало возможно благодаря реализованному механизму кросс-чейн переводов из сети Binance Smart Chain в сеть Minter.</p>
                    <p>Покупка осуществляется в два этапа. Сначала вы пополняете свой кошелек Honee ликвидной криптовалютой сети Minter или приобретаете ее за Ethereum, а затем совершаете обмен на токен DOGEBSC.</p>
                </section>
                <section>
                    <h3>Как пополнить кошелек Honee</h3>
                    <p>Пополнить кошелек Honee вы можете любыми ликвидными токенами сети Minter, либо криптовалютой Ether.</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Для того, чтобы пополнить кошелек Honee через сеть Ethereum:</p>
                            <ol>
                                <li>Находясь на главной странице кошелька, нажмите кнопку «Пополнить» → «Пополнить через ETH»;</li>
                                <li>Укажите количество Ethereum и выберите любую из представленных монет сети Minter для обмена, например, BIP. Ее количество рассчитается автоматически;</li>
                                <li>Нажмите кнопку «Купить» и скопируйте адрес для пополнения в сети Ethereum;</li>
                                <li>Пополните скопированный адрес любым удобным вам способом и дождитесь поступления средств в кошелек.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как и где купить doge 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Как купить DOGE в 2022 году</h2>
                    <p>Купить криптовалюту DOGE в кошельке Honee можно, совершив обмен любых токенов сети Minter. Для этого:
                        <ul>
                            <li>На главной панели управления нажмите на кнопку «Обменять»;</li>
                            <li>Укажите количество монет сети Minter и выберите в качестве обмена монету DOGEBSC. Ее количество будет рассчитано автоматически;</li>
                            <li>Нажмите кнопку «Обменять» и еще раз подтвердите вашу операцию в следующем окне.</li>
                        </ul>
                    </p>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/doge/buy-doge-1-ru.avif 1x, /img/articles/doge/buy-doge-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/doge/buy-doge-1-ru.webp 1x, /img/articles/doge/buy-doge-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/doge/buy-doge-1-ru.png" srcset="/img/articles/doge/buy-doge-1-ru@2x.png 2x" alt="как купить doge 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/doge/buy-doge-2-ru.avif 1x, /img/articles/doge/buy-doge-2-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/doge/buy-doge-2-ru.webp 1x, /img/articles/doge/buy-doge-2-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/doge/buy-doge-2-ru.png" srcset="/img/articles/doge/buy-doge-2-ru@2x.png 2x" alt="лучший способ купить DOGE Dogecoin 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Кошелек Honee позволяет вести полностью децентрализованные торги с ведущими криптовалютами мира. А благодаря блокчейну Minter, сделки в кошельке Honee происходят с минимальными комиссиями со временем исполнения меньше 5 секунд, поэтому купить Doge в Honee всегда выгодно.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
