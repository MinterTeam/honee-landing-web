<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-matic-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать MATIC в 2022');
        const description = 'Как заработать MATIC в 2022 году с помощью криптокошелька Honee всего за несколько шагов.';

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
                    <p>MATIC — служебный токен сети Polygon, которая была создана для решения проблем пропускаемости сети Ethereum. В 2021 году всего за несколько месяцев MATIC показал взрывной рост более чем на 10,000%, чем привлек внимание большого числа криптоэнтузиастов со всего мира. В этой инструкции мы расскажем, как заработать MATIC в 2022 году.</p>
                    <h1>Как заработать MATIC в 2022 году</h1>
                    <p class="subtitle-h1">Криптокошелек Honee позволяет зарабатывать криптовалюту MATIC, используя фарминг и предоставление ликвидности в пулы. За это вы будете получать комиссию, которую платят другие участники при совершении обменов. У вас нет необходимости разбираться в сложных схемах заработка. Интерфейс кошелька состоит из интуитивно понятных карточек, поэтому вам достаточно сделать всего несколько кликов, чтобы уже сегодня вы смогли начать приумножать криптовалюту MATIC в вашем кошельке.</p>
                    <p>В сети Minter токен MATIC имеет тикер MATICBSC — это зеркалированный актив криптовалюты MATIC из сети Binance Smart Chain. Далее мы расскажем, как заработать MATIC в 2022 году, используя криптокошелек Honee.</p>
                    <p>Помимо комиссий за сделки, поощрительная программа фарминга включает в себя дополнительные выплаты токенов BIP поставщикам MATICBSC в пулы, поэтому ваш заработок с Honee становится еще более выгодным.</p>
                </section>
                <section>
                    <h2>Как заработать MATIC в 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Зарабатывать MATIC с криптокошельком Honee очень просто:</p>
                            <ol>
                                <li>Перейдите в кошелек Honee и опуститесь вниз до пункта «Заработок»; </li>
                                <li>Кликните по карточке «Фарминг MATICBSC/BIP»;</li>
                                <li>Нажмите на кнопку «Добавить ликвидность»;</li>
                                <li>Выберите количество токенов MATICBSC, которое вы готовы заблокировать в пуле, количество токенов BIP рассчитается автоматически;</li>
                                <li>Нажмите на кнопку «Добавить»;</li>
                                <li>Еще раз проверьте указанные данные и нажмите «Подтвердить»;</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/earn-1inch-1-ru.avif 1x, /img/articles/earn-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/earn-1inch-1-ru.webp 1x, /img/articles/earn-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/earn-1inch-1-ru.png" srcset="/img/articles/earn-1inch-1-ru@2x.png 2x" alt="как заработать matic 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/matic/earn-matic-1-ru.avif 1x, /img/articles/matic/earn-matic-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/matic/earn-matic-1-ru.webp 1x, /img/articles/matic/earn-matic-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/matic/earn-matic-1-ru.png" srcset="/img/articles/matic/earn-matic-1-ru@2x.png 2x" alt="как заработать matic Polygon в 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/matic/earn-matic-2-ru.avif 1x, /img/articles/matic/earn-matic-2-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/matic/earn-matic-2-ru.webp 1x, /img/articles/matic/earn-matic-2-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/matic/earn-matic-2-ru.png" srcset="/img/articles/matic/earn-matic-2-ru@2x.png 2x" alt="где зарабатывать matic в 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Еще никогда заработок криптовалюты не был таким простым, как с криптокошельком Honee. Полная децентрализация, низкие комиссии и полностью прозрачный механизм сделок по достоинству смогли оценить уже сотни пользователей кошелька Honee!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
