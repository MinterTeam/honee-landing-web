<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-mvi-metaverse-index-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать MVI (Metaverse Index) в 2022');
        const description = 'Как заработать MVI (Metaverse Index) в 2022 году с помощью криптокошелька Honee всего в три клика.';

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
                    <p>Одним из трендов мира криптовалют в 2021 году стали метавселенные. Metaverse Index представляет собой корзину из токенов виртуальных миров и объединяет в себе наиболее популярные из них.  </p>
                    <p>В сети Minter токен Metaverse Index имеет тикер METAINDEX — это зеркалированный актив токена MVI из сети Ethereum. Зеркалированные токены можно использовать в сети Minter или переносить их в сеть Ethereum. Далее мы расскажем, как заработать MVI (Metaverse Index) в 2022 году, используя криптокошелек Honee.</p>
                    <h1>Как заработать MVI (Metaverse Index) в 2022 году</h1>
                    <p class="subtitle-h1">Токен Metaverse Index можно зарабатывать с помощью кошелька Honee. Доходное фермерство и пулы ликвидности позволяют каждому приумножать свои токены METAINDEX всего в несколько кликов.</p>
                    <p class="subtitle-h1">За предоставление ликвидности в токенах METAINDEX в пулы ликвидности вы будете получать процент комиссии с каждой транзакции обмена, а для большего заработка METAINDEX в кошельке Honee предусмотрены программы фарминга, в которых помимо комиссий поставщики ликвидности ежедневно получают выплаты в виде базовых токенов сети Minter, в зависимости от программы фарминга.</p>
                </section>
                <section>
                    <h2>Как заработать MVI (Metaverse Index) в 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Начать зарабатывать METAINDEX в кошельке Honee можно за несколько простых шагов:</p>
                            <ol>
                                <li>Находясь в кошельке Honee, пролистайте страницу до пункта «Заработок» и найдите карточку «Фарминг METAINDEX/BIP», нажмите на кнопку «Добавить ликвидность»;</li>
                                <li>Укажите количество монет, которое вы готовы предоставить в пул, количество второй монеты будет рассчитано автоматически;</li>
                                <li>Нажмите на кнопку «Добавить»;</li>
                                <li>Убедитесь в правильности указанных данных и нажмите «Подтвердить»;</li>
                                <li>После завершения вы можете посмотреть детали операции на странице эксплорера сети Minter.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/earn-1inch-1-ru.avif 1x, /img/articles/earn-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/earn-1inch-1-ru.webp 1x, /img/articles/earn-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/earn-1inch-1-ru.png" srcset="/img/articles/earn-1inch-1-ru@2x.png 2x" alt="как заработать mvi metaverse index в 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-img earn-mvi-2">
                        <picture>
                            <source srcset="/img/articles/earn-mvi-1-ru.avif 1x, /img/articles/earn-mvi-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-mvi-1-ru.webp 1x, /img/articles/earn-mvi-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-mvi-1-ru.png" srcset="/img/articles/earn-mvi-1-ru@2x.png 2x" alt="как зарабатывать mvi metaverse index 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-mvi-3">
                        <picture>
                            <source srcset="/img/articles/earn-mvi-2-ru.avif 1x, /img/articles/earn-mvi-2-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-mvi-2-ru.webp 1x, /img/articles/earn-mvi-2-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-mvi-2-ru.png" srcset="/img/articles/earn-mvi-2-ru@2x.png 2x" alt="как заработать mvi metaverse index 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Теперь вы знаете, как заработать MVI (METAINDEX) в 2022 году с помощью кошелька Honee. Для этого вам не нужно становиться профессиональным трейдером. С кошельком Honee зарабатывать криптовалюту сможет каждый!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
