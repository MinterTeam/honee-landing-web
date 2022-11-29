<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-doge-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать DOGE в 2022');
        const description = 'Как заработать криптовалюту DOGE в 2022 году с помощью доходного фарминга.';

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
                    <p>DOGE — форк криптовалюты Litecoin c неограниченной эмиссией, которая зарекомендовала себя как один из самых удобных и быстрых средств для перевода  активов между биржами. Из этой инструкции вы узнаете, как заработать криптовалюту DOGE в 2022 году с помощью самого надежного криптокошелька Honee.</p>
                    <h1>Как заработать DOGE в 2022 году</h1>
                    <p class="subtitle-h1">В криптокошельке Honee реализован механизм доходного фарминга, благодаря которому каждый желающий может не только приумножить свои токены DOGE, но и получать дополнительные награды в виде базовой криптовалюты BIP сети Minter. Предоставляя ликвидность в пулы, вы будете получать вознаграждение из комиссий, которые платят другие участники сделок с криптоактивами.</p>
                </section>
                <section>
                    <h2>Как заработать DOGE в 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Чтобы начать зарабатывать криптовалюту DOGE в кошельке Honee:</p>
                            <ol>
                                <li>Авторизуйтесь в кошельке Honee c помощью вашей Seed-фразы;</li>
                                <li>Пролистайте страницу вниз до пункта «Заработок»;</li>
                                <li>Найдите карточку «Фарминг DOGEBSC / BIP» и кликните кнопку «Добавить ликвидность»;</li>
                                <li>Выберите количество токенов DOGEBSC. Объем второго актива рассчитывается автоматически;</li>
                                <li>Нажмите «Добавить»;</li>
                                <li>На последнем этапе необходимо еще раз проверить всю информацию и нажать кнопку «Подтвердить»;</li>
                                <li>После того, как вы заблокировали свои средства в пуле, в качестве подтверждения вы получите LP-токены (LP-1208), которые являются вашей квитанцией о предоставлении ликвидности. После этого вы начнете получать свои вознаграждения.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/earn-1inch-1-ru.avif 1x, /img/articles/earn-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/earn-1inch-1-ru.webp 1x, /img/articles/earn-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/earn-1inch-1-ru.png" srcset="/img/articles/earn-1inch-1-ru@2x.png 2x" alt="как заработать doge 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/doge/earn-doge-1-ru.avif 1x, /img/articles/doge/earn-doge-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/doge/earn-doge-1-ru.webp 1x, /img/articles/doge/earn-doge-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/doge/earn-doge-1-ru.png" srcset="/img/articles/doge/earn-doge-1-ru@2x.png 2x" alt="как заработать doge Dogecoin в 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/doge/earn-doge-2-ru.avif 1x, /img/articles/doge/earn-doge-2-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/doge/earn-doge-2-ru.webp 1x, /img/articles/doge/earn-doge-2-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/doge/earn-doge-2-ru.png" srcset="/img/articles/doge/earn-doge-2-ru@2x.png 2x" alt="где зарабатывать doge в 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Теперь вы знаете, как заработать криптовалюту DOGE в 2022 году. Прибыльный фарминг еще никогда не был таким простым.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
