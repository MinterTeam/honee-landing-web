<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/kak-kupit-shib-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как купить SHIB 2022');
        const description = 'О том, как купить SHIB в 2022 году — самый популярный и доходный мем-токен предыдущего года — внутри кошелька Honee.';

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
                    <h1>Как купить SHIB в 2022 году</h1>
                    <p class="subtitle-h1">SHIB — мем-токен, выпущенный в рамках стандарта ERC-20 на блокчейне Ethereum. Проект был основан в августе 2020 года анонимной командой разработчиков под псевдонимом “Риоши”. В этом руководстве мы расскажем о том, как купить SHIB в 2022 г.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <ol>
                            <li>Переходим в кошелек “Honee” и жмем на кнопку “Зарегистрируйтесь”;</li>
                            <li>Копируем полученную seed-фразу и сохраняем в надежном месте, подтверждаем действие;</li>
                            <li>Жмем кнопку “Запустить Honee”.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img wallet-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как и где купить shib 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <p>Отлично! Кошелек создан. Теперь осталось всего пару шагов. Сперва ищем в панели кнопку “Пополнить”. Следом копируем адрес и пополняем личный кошелек любым удобным способом.</p>
                    <p>После того как ваш кошелек будет пополнен токенами, можно приступить к покупке SHIB. Для этого нажимаем “Обменять” и в открывшемся окне выбираем торговую пару. В первом поле указываем монету, которую хотим отдать взамен на SHIB (к примеру, возьмем USDTE, аналог USDT в сети Minter). Во втором поле прописываем тикер SHIB и из выпадающего списка выбираем криптовалюту Shiba Inu. Далее нажимаем кнопку “Обменять”.</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-img buy-1inch-3">
                            <picture>
                                <source srcset="/img/articles/buy-shib-1-ru.avif 1x, /img/articles/buy-shib-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-shib-1-ru.webp 1x, /img/articles/buy-shib-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-shib-1-ru.png" srcset="/img/articles/buy-shib-1-ru@2x.png 2x" alt="как купить shib 2022" role="presentation"/>
                            </picture>
                        </div>
                        <div class="article-picture-box-img buy-1inch-4">
                            <picture>
                                <source srcset="/img/articles/buy-shib-2.avif 1x, /img/articles/buy-shib-2@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-shib-2.webp 1x, /img/articles/buy-shib-2@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-shib-2.png" srcset="/img/articles/buy-shib-2@2x.png 2x" alt="лучший способ купить shiba inu 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Надеемся, что с помощью нашей простой инструкции вам удастся разобраться, как купить SHIB в 2022 и пополнить свой кошелек, чтобы использовать все преимущества сети Minter для операций с криптовалютами.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
