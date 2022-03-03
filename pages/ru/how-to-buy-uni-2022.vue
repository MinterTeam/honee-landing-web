<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-kupit-uni-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как купить UNI в 2022');
        const description = 'Кошелек Honee — лучший способ купить и приумножить криптовалюту UNI в 2022 году.';

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
                    <p>Это простое руководство поможет вам быстро и безопасно купить UNI в 2022 году с помощью лучшего кошелька Honee.</p>
                    <h1>Как купить UNI в 2022 году</h1>
                    <p class="subtitle-h1">Купить UNI в криптокошельке Honee можно двумя путями. Первый способ предусматривает прямой обмен любой ликвидной криптовалюты сети Minter в вашем кошельке на UNIBSC. Тикер UNIBSC в сети Minter используется, чтобы показать, что это зеркалированный актив, который полностью обеспечен оригинальным токеном UNI. Такую возможность кошелек Honee получил благодаря механизму <a href="https://www.minter.network/ru/earn/cross-chain">кросс-чейн</a> переводов, который осуществляется через мост Minter HUB.</p>
                    <p>Если в вашем кошельке еще нет криптовалюты, сначала его необходимо пополнить любыми ликвидными токенами сети Minter или криптовалютой Ether. При пополнении через сеть Ethereum, он автоматически конвертируется в выбранный вами токен сети Minter, а затем обменивается на UNIBSC.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <p>Для этого:</p>
                        <ol>
                            <li>Нажимаем на кнопку «Пополнить» → «Пополнить через ETH»;</li>
                            <li>Выбираем количество Ether, на которое хотим пополнить наш кошелек, и любую базовую монету сети Minter, а затем нажимаем «Купить»;</li>
                            <li>Копируем адрес в сети Ethereum и пополняем его любым удобным способом;</li>
                            <li>После этого возвращаемся в Honee, чтобы купить UNIBSC;</li>
                            <li>На главной странице выбираем кнопку «Обменять» и выбираем направление обмена;</li>
                            <li>Проверяем условия обмена и подтверждаем операцию;</li>
                            <li>После завершения вы можете увидеть детали обмена в эксплорере, нажав на кнопку «Смотреть транзакцию».</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img wallet-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как и где купить uni 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/uni/buy-uni-1-ru.avif 1x, /img/articles/uni/buy-uni-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/uni/buy-uni-1-ru.webp 1x, /img/articles/uni/buy-uni-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/uni/buy-uni-1-ru.png" srcset="/img/articles/uni/buy-uni-1-ru@2x.png 2x" alt="как купить uni 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/uni/buy-uni-2-ru.avif 1x, /img/articles/uni/buy-uni-2-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/uni/buy-uni-2-ru.webp 1x, /img/articles/uni/buy-uni-2-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/uni/buy-uni-2-ru.png" srcset="/img/articles/uni/buy-uni-2-ru@2x.png 2x" alt="лучший способ купить UNI Uniswap 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Всего несколько шагов отделяют вас от того, чтобы купить UNI в 2022 году при помощи криптокошелька Honee. Надеемся, что вы уже успели по достоинству оценить удобство Honee и у вас не осталось вопросов как купить UNI в 2022 году.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
