<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-toncoin-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать Toncoin в 2022');
        const description = 'О том, как заработать Toncoin в 2022 году даже без наличия глубоких познаний в области цифровых активов и технологии распределенных реестров.';

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
                    <h1>Как заработать Toncoin в 2022 году</h1>
                    <p class="subtitle-h1">The Open Network — проект, который решил проблемы с высокими комиссиями при интернет-платежах, а также сформировал высоко масштабируемый блокчейн для различных финансовых и не только решений на своей основе.</p>
                </section>
                <section>
                    <p>Крипто-кошелек Honee отвечает на вопрос <i>Как заработать Toncoin в 2022?</i> несколькими способами. Из основных можно выделить фарминг и стейкинг. Блокируя часть своих токенов Toncoin, вы будете получать вознаграждения (долю от комиссий, которые пользователи платят при переводах в рамках блокчейна). </p>
                    <p>Помимо классического предоставления ликвидности вы можете поучаствовать в различных фарминг-программах. Доходное фермерство — это дополнительные программы вознаграждений для тех, кто поставляет ликвидность. Основное отличие заключается в том, что поставщик получает дополнительное ежедневное финансовое вознаграждение за удерживание криптовалюте в пуле.</p>
                    <h2>Как заработать Toncoin в 2022: Важные нюансы перед началом фарминга</h2>
                    <ul>
                        <li>Монеты в пул добавляются в равных пропорциях (50/50);</li>
                        <li>Пулы могут крайне отличаться по годовой процентной доходности (обращайте внимание на <a href="https://explorer.minter.network/ru/pools">APY</a>);</li>
                        <li>Добавить/отозвать свои монеты в/из пула можно когда угодно;</li>
                        <li>Помните, что при стейкинге и фарминге вы не застрахованы от рисков, сопряженных с волатильностью и <a href="https://www.minter.network/ru/earn/impermanent-loss">непостоянными потерями</a>. Токены, которые заморожены в пулах, могут сильно изменяться в ценности по отношению к стейблкоинам (аналогам фиата).</li>
                    </ul>
                    <h3>Пулы без рисков</h3>
                        <p>Для консервативных участников крипто-экосистемы подойдет пул, в котором один актив из пары является стейблкоином. Это позволит снизить риски, связанные с изменение курса на криптовалюты. Для более венчурных — пул, в котором размещаются две криптовалюты (не стейблкоины).</p>
                        <p>Honee предлагает пользователям 124% годовых в паре TON/BIP. Рассмотрим пример подробней.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h3>Алгоритм</h3>
                        <ol>
                            <li>Выберите соответствующую карточку «Фарминг TON / BIP» и нажмите на кнопку «Добавить ликвидность»;</li>
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
                            <img src="/img/articles/earn-1inch-1-ru.png" srcset="/img/articles/earn-1inch-1-ru@2x.png 2x" alt="как заработать toncoin 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/earn-ton-1-ru.avif 1x, /img/articles/earn-ton-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-ton-1-ru.webp 1x, /img/articles/earn-ton-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-ton-1-ru.png" srcset="/img/articles/earn-ton-1-ru@2x.png 2x" alt="как заработать ton в 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/earn-ton-2-ru.avif 1x, /img/articles/earn-ton-2-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-ton-2-ru.webp 1x, /img/articles/earn-ton-2-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-ton-2-ru.png" srcset="/img/articles/earn-ton-2-ru@2x.png 2x" alt="как зарабатывать ton coin в 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Теперь вы знаете, как заработать Toncoin в 2022 г. без активного трейдинга, а главное, без глубоких познаний в мире цифровых активов. В дальнейшем Honee продолжить улучшать сервис и формировать новые способы заработка.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
