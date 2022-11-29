<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/kak-kupit-toncoin-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как купить Toncoin в 2022');
        const description = 'Как купить Toncoin в 2022 году наиболее удобным способом и тут же начать приумножать свои активы? Ответ прост: использовать Honee — крипто-кошелек, помогающий зарабатывать!';

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
                    <h1>Как купить Toncoin в 2022 году</h1>
                    <p class="subtitle-h1">The Open Network — это уникальный блокчейн-проект, который был основан братьями Дуровыми в 2017 году, однако со временем, из-за проблем с SEC, TON перешел в руки сообщества мессенджера Telegram. В этом руководстве мы расскажем о том, как купить Toncoin в 2022 г.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <ol>
                            <li>Переходим на кошелек “Honee” и жмем на кнопку “Зарегистрируйтесь”;</li>
                            <li>Копируем полученную seed-фразу и сохраняем в надежном месте, подтверждаем действие;</li>
                            <li>Жмем кнопку “Запустить Honee”.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img wallet-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-1.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-1.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-1.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как и где купить toncoin 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <p>Теперь, чтобы купить криптовалюту Toncoin, нам нужно в панели управления нажать на кнопку “Пополнить”. Следом скопировать адрес и пополнить кошелек любым удобным способом.</p>
                    <p>Как только ваш кошелек будет пополнен, можем приступить к следующему шагу. Для этого ищем в панели управления кнопку “Обменять”. При нажатии у нас отобразится окно, где нужно указать пару. В первом поле выбираем актив, который хотим отдать взамен на Toncoin. К примеру, возьмем USDTE (аналог USDT, только в сети Minter). Во втором поле прописываем тикер TON и из выпадающего списка выбираем криптовалюту The Open Network.</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/buy-ton-1-ru.avif 1x, /img/articles/buy-ton-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-ton-1-ru.webp 1x, /img/articles/buy-ton-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-ton-1-ru.png" srcset="/img/articles/buy-ton-1-ru@2x.png 2x" alt="как купить toncoin 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/buy-ton-2-ru.avif 1x, /img/articles/buy-ton-2-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-ton-2-ru.webp 1x, /img/articles/buy-ton-2-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-ton-2-ru.png" srcset="/img/articles/buy-ton-2-ru@2x.png 2x" alt="лучший способ купить toncoin 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Вот и все! В приложении Honee нам понадобилось всего пару минут, чтобы приобрести криптовалюту TON. Надеемся, что с помощью нашей простой инструкции вам удастся разобраться, как купить Toncoin в 2022 и пополнить свой кошелек, чтобы использовать все преимущества сети Minter для операций с криптовалютами.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
