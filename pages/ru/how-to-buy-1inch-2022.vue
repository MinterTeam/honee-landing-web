<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-kupit-1inch-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как купить 1INCH в 2022');
        const description = 'Как купить 1INCH в 2022 году — самый быстрый и безопасный способ.';

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
                    <h1>Как купить 1INCH в 2022 году</h1>
                    <p class="subtitle-h1">В этой простой инструкции мы расскажем, как купить 1INCH в 2022 году с помощью самого надежного крипто-кошелька Honee всего за несколько шагов.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <p>Купить 1INCH в криптокошельке Honee можно, обменяв токен на любую ликвидную криптовалюту сети Minter. Второй путь — обменять 1INCH на криптовалюту Ethereum, предварительно отправив его со своего кошелька или биржи.</p>
                    </div>
                    <div class="article-picture-box-img buy-1inch-1">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-3-ru.avif 1x, /img/articles/buy-1inch-3-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-3-ru.webp 1x, /img/articles/buy-1inch-3-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-3-ru.png" srcset="/img/articles/buy-1inch-3-ru@2x.png 2x" alt="как и где купить 1inch 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <p>Для этого:</p>
                        <ol>
                            <li>Нажимаем на кнопку «Пополнить» → «Пополнить через ETH»;</li>
                            <li>Выбираем количество Ethereum, которым хотим пополнить наш кошелек, и любую базовую монету сети Minter, нажимаем «Купить»;</li>
                            <li>Копируем адрес в сети Ethereum и пополняем его любым удобным способом;</li>
                            <li>После этого возвращаемся в Honee, чтобы купить 1INCH;</li>
                            <li>На главной странице выбираем кнопку «Обменять» и выбираем направление обмена;</li>
                            <li>Проверяем условия обмена и подтверждаем операцию;</li>
                            <li>После завершения вы можете увидеть детали обмена в эксплорере, нажав на кнопку «Смотреть транзакцию».</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img buy-1inch-2">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-4-ru.avif 1x, /img/articles/buy-1inch-4-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-4-ru.webp 1x, /img/articles/buy-1inch-4-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-4-ru.png" srcset="/img/articles/buy-1inch-4-ru@2x.png 2x" alt="как купить 1inch 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-img buy-1inch-3">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-5-ru.avif 1x, /img/articles/buy-1inch-5-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-5-ru.webp 1x, /img/articles/buy-1inch-5-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-5-ru.png" srcset="/img/articles/buy-1inch-5-ru@2x.png 2x" alt="лучший способ купить 1inch 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img buy-1inch-4">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-6-ru.avif 1x, /img/articles/buy-1inch-6-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-6-ru.webp 1x, /img/articles/buy-1inch-6-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-6-ru.png" srcset="/img/articles/buy-1inch-6-ru@2x.png 2x" alt="где лучше всего купить 1inch" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Всего несколько шагов отделяют вас от того, чтобы купить 1INCH в 2022 г. при помощи криптокошелька Honee. Надеемся, что после прочтения этой инструкции у вас не осталось вопросов, как купить 1INCH!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
