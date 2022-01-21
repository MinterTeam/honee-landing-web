<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-shib-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать SHIB 2022');
        const description = 'О том, как заработать SHIB в 2022 году, используя лучшие практики DeFi-рынка и не выходя из простейшего крипто-кошелька, помогающего зарабатывать.';

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
                    <h1>Как заработать SHIB в 2022 году</h1>
                    <p class="subtitle-h1">SHIB — это мемная криптовалюта, которая обрела пик популярности осенью 2021 года. Проект был основан анонимной группой разработчиков под псевдонимом “Риоши”. В этом руководстве мы расскажем, как заработать криптовалюту SHIB в 2022 г. с помощью Honee.</p>
                </section>
                <section>
                    <h2>Как заработать SHIB в 2022 году?</h2>
                    <p>Основных способов можно выделить несколько – фарминг и стейкинг. Блокируя личные SHIB-токены, вы будете получать финансовые вознаграждения (процент от комиссий, которые платят юзеры за переводы в рамках блокчейна). </p>
                    <p>Также, помимо обычного предоставления ликвидности, вы можете принять участие в фарминг-программах. Участвуя в подобных программах, вы сможете рассчитывать на дополнительные ежедневные награды, поставляя ликвидность и удерживая криптовалюту в пуле.</p>
                    <h2>Важные нюансы перед началом фарминга SHIB</h2>
                    <ul>
                        <li>Монеты в пул добавляются в равных пропорциях (50/50);</li>
                        <li>Пулы могут крайне отличаться по годовой процентной доходности (обращайте внимание на <a href="https://explorer.minter.network/pools">APY</a>);</li>
                        <li>Добавить/отозвать свои монеты в/из пула можно когда угодно;</li>
                        <li>Помните, что при стейкинге и фарминге вы не застрахованы от рисков, сопряженных с волатильностью и <a href="https://www.minter.network/ru/earn/impermanent-loss">непостоянными потерями</a>. Токены, которые заморожены в пулах, могут сильно изменяться в ценности по отношению к стейблкоинам (аналогам фиата).</li>
                    </ul>
                    <h3>Подробней про пулы</h3>
                        <p>Пулы можно разделить на условные две группы – менее рисковые, более рисковые. Разница этих двух групп заключается в следующем: если вы участвуете в пуле, где один актив стейблкоин, а второй нет, то на вас ложится лишь один риск — риск волатильности токена (стейблкоины привязаны к курсу фиатного аналога).</p>
                        <p>Если же вы принимаете участие в пулах, где лежат два токена (и они не стейблкоины), то риск возрастает. Ведь цена на размещенные токены может изменяться.</p>
                        <p>Рассмотрим реальный пример на основе пула BIP/SHIB с годовой доходностью ~6%.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h3>Алгоритм</h3>
                        <ol>
                            <li>Выберите соответствующую карточку «<b>Фарминг BIP / SHIB</b>» и нажмите на кнопку «Добавить ликвидность»;</li>
                            <li>Укажите количество криптовалюты (токенов), которое хотите отправить в пул. Указав количество одного токена, система подгрузит автоматически и количество второго;</li>
                            <li>Нажмите “Добавить”;</li>
                            <li>Еще раз внимательно проверьте условия пула и, если все в порядке, нажмите “Подтвердить”;</li>
                            <li>После данной процедуры Honee отобразит ссылку на эксплорер cети Minter.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img earn-1inch-1">
                        <picture>
                            <source srcset="/img/articles/earn-1inch-1-ru.avif 1x, /img/articles/earn-1inch-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-1inch-1-ru.webp 1x, /img/articles/earn-1inch-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-1inch-1-ru.png" srcset="/img/articles/earn-1inch-1-ru@2x.png 2x" alt="как заработать shib 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/earn-shib-1-ru.avif 1x, /img/articles/earn-shib-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-shib-1-ru.webp 1x, /img/articles/earn-shib-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-shib-1-ru.png" srcset="/img/articles/earn-shib-1-ru@2x.png 2x" alt="как заработать shiba inu в 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/earn-shib-2-ru.avif 1x, /img/articles/earn-shib-2-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-shib-2-ru.webp 1x, /img/articles/earn-shib-2-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-shib-2-ru.png" srcset="/img/articles/earn-shib-2-ru@2x.png 2x" alt="где зарабатывать shib inu в 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Поздравляем! Теперь вы знаете, как заработать SHIB в 2022 прямо внутри кошелька Honee. В дальнейшем Honee продолжит улучшать сервис и формировать новые способы заработка.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
