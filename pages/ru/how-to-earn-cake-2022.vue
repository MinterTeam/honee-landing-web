<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-cake-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать CAKE в 2022');
        const description = 'Простой заработок криптовалюты CAKE в 2022 году с помощью доходного фермерства в кошельке Honee.';

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
                    <p>CAKE — нативный токен DEX-площадки PancakeSwap, которая является одним из самых стремительно развивающихся проектов в сфере DeFi. С помощью токена CAKE пользователи этой платформы могут участвовать в голосовании по развитию протокола, стейкинге и покупке лотерейных билетов на бирже PancakeSwap. Сегодня мы расскажем, как заработать токен CAKE в 2022 г. с помощью лучшего кошелька для заработка криптовалюты — Honee.</p>
                    <h1>Как заработать CAKE в 2022 году</h1>
                    <p class="subtitle-h1">В кошельке Honee реализован механизм надежного заработка с помощью пулов ликвидности и дополнительных программ вознаграждения — доходного фермерства. Добавляйте ликвидность в пулы в виде токенов CAKE и BIP в равных пропорциях и зарабатывайте на комиссиях, которые платят другие участники торгов.</p>
                </section>
                <section>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Для того, чтобы участвовать в фарминге CAKE, вам необходимо::</p>
                            <ol>
                                <li>Авторизоваться в своем <a href="https://my.honee.app/ru">кошельке Honee</a> с помощью вашей Seed-фразы и выбрать карточку «Фарминг CAKEBSC / BIP»;</li>
                                <li>Нажать на кнопку «Добавить ликвидность»;</li>
                                <li>Выбрать количество токенов CAKEBSC. Объем токена BIP будет рассчитан автоматически;</li>
                                <li>Нажать кнопку «Добавить»;</li>
                                <li>На последнем этапе необходимо подтвердить операцию.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/earn-1inch-1-ru.avif 1x, /img/articles/earn-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/earn-1inch-1-ru.webp 1x, /img/articles/earn-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/earn-1inch-1-ru.png" srcset="/img/articles/earn-1inch-1-ru@2x.png 2x" alt="как заработать cake 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Взамен вы получите LP-токены пула CAKEBSC / BIP (LP-1209), которые являются вашей гарантией того, что вы сможете забрать свои средства из пула в любой момент. Другие фарминг-программы вы можете посмотреть на <a href="https://explorer.minter.network/farming">странице фарминга</a> в эксплорере сети Minter.</p>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/cake/earn-cake-1-ru.avif 1x, /img/articles/cake/earn-cake-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/cake/earn-cake-1-ru.webp 1x, /img/articles/cake/earn-cake-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/cake/earn-cake-1-ru.png" srcset="/img/articles/cake/earn-cake-1-ru@2x.png 2x" alt="как заработать cake PancakeSwap в 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/cake/earn-cake-2-ru.avif 1x, /img/articles/cake/earn-cake-2-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/cake/earn-cake-2-ru.webp 1x, /img/articles/cake/earn-cake-2-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/cake/earn-cake-2-ru.png" srcset="/img/articles/cake/earn-cake-2-ru@2x.png 2x" alt="где зарабатывать CAKE в 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Вот и все! Теперь вы будете зарабатывать CAKE, исходя из годовой процентной ставки, указанной в карточке фарминга. Никогда еще заработок криптовалюты CAKE не был таким легким и надежным, как с криптокошельком Honee!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
