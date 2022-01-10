<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-1inch-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать 1INCH в 2022');
        const description = 'Лучший способ заработать криптовалюту 1INCH в 2022 году — пулы ликвидности и доходное фермерство в вашем кошельке.';

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
                    <h1>Как заработать 1INCH в 2022 году</h1>
                    <p class="subtitle-h1">1INCH — токен одноименного агрегатора децентрализованных бирж (DEX), который призван предоставить пользователям наиболее выгодные условия для обмена криптовалют. Криптовалюта 1INCH является токеном управления данной площадки, это означает, что его держатели могут путем голосования участвовать в развитии сети и изменять параметры пулов ликвидности, а также некоторые настройки платформы, например, размер комиссии. Это руководство расскажет, как заработать 1INCH в 2022 г.</p>
                </section>
                <section>
                    <p>С кошельком Honee вы сможете зарабатывать 1INCH с помощью предоставления ликвидности в пулы. Поставляя ликвидность, вы будете получать комиссии с торгов, которые взимаются с других участников при обменах. В отличие от бирж, в пулах ликвидности нет необходимости размещать ордера и ожидать их исполнения. Цена токенов в пуле ликвидности уравновешивается автоматическим маркет-мейкером.</p>
                    <h3>Особенности предоставления ликвидности в пулы</h3>
                    <ul>
                        <li>Для стейкинга необходимо добавить обе монеты из пары в равных долях. Их доля от общей ликвидности фиксируется выдачей LP-токена</li>
                        <li>Доходность пулов может существенно отличаться, поэтому перед предоставлением ликвидности обратите внимание на графу <a href="https://explorer.minter.network/pools">APY</a></li>
                        <li>Вы можете отозвать свои монеты в любой момент</li>
                        <li>Предоставляя ликвидность в пулы, помните о риске <a href="https://www.minter.network/ru/earn/impermanent-loss">непостоянных потерь</a> (Impermanent Loss)</li>
                    </ul>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2>Как заработать 1INCH в 2022</h2>
                        <p>Чтобы начать зарабатывать 1INCH в криптокошельке Honee:</p>
                        <ol>
                            <li>Находясь в интерфейсе кошелька, прокрутите страницу вниз и выберите карточку «Предоставление ликвидности»;</li>
                            <li>Нажмите на кнопку «Предоставить ликвидность»;</li>
                            <li>В качестве первой монеты выберите 1INCH и укажите ее количество;</li>
                            <li>Выберите вторую монету. Ее объем рассчитывается автоматически и зависит от курса в пуле на момент транзакции;</li>
                            <li>Нажмите «Добавить»;</li>
                            <li>Если все данные верны, нажмите «Подтвердить»;</li>
                            <li>После подтверждения транзакции вы получите LP-токены пула. Это ваша квитанция, которая позволяет забрать средства из пула в любой момент. Информацию об успешной операции вы можете увидеть в эксплорере сети Minter.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img earn-1inch-1">
                        <picture>
                            <source srcset="/img/articles/earn-1inch-1-ru.avif 1x, /img/articles/earn-1inch-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-1inch-1-ru.webp 1x, /img/articles/earn-1inch-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-1inch-1-ru.png" srcset="/img/articles/earn-1inch-1-ru@2x.png 2x" alt="как заработать 1inch 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-1inch-2">
                        <picture>
                            <source srcset="/img/articles/earn-1inch-2-ru.avif 1x, /img/articles/earn-1inch-2-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-1inch-2-ru.webp 1x, /img/articles/earn-1inch-2-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-1inch-2-ru.png" srcset="/img/articles/earn-1inch-2-ru@2x.png 2x" alt="как заработать 1inch в 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-1inch-3">
                        <picture>
                            <source srcset="/img/articles/earn-1inch-3-ru.avif 1x, /img/articles/earn-1inch-3-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-1inch-3-ru.webp 1x, /img/articles/earn-1inch-3-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-1inch-3-ru.png" srcset="/img/articles/earn-1inch-3-ru@2x.png 2x" alt="как зарабатывать 1inch в 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">С кошельком Honee вы сможете легко разобраться в том, как заработать 1INCH в 2022 году. Размещая криптовалюту в пулы ликвидности, вы сможете зарабатывать 1INCH даже во сне. Достаточно нажать пару кнопок — и криптокошелек Honee сделает за вас все остальное.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
