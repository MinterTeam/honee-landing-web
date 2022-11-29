<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/kak-kupit-efirium-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как купить Эфириум 2022');
        const description = 'Если вы хотите узнать, как купить Эфириум в 2022 году, потратив при этом как можно меньше времени и денег, — также отслеживая изменения в его цене, — то это руководство по кошельку Honee как раз призвано помочь вам в этом.';

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
                    <h1>Как купить Эфириум (ETH) в 2022</h1>
                    <p class="subtitle-h1">Это руководство поможет вам понять, как купить Эфириум в 2022 году быстро и просто за любую валюту в криптокошельке Honee.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2><span class="h2-badge">1</span>Депозит</h2>
                        <p>Для покупки ETH в необходимо зайти в свой кошелек Honee. Для этого нужно создать новый кошелек или войти в ранее созданный.</p>
                    </div>
                    <div class="article-picture-box-img buy-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/buy-bitcoin-1.avif 1x, /img/articles/buy-bitcoin-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-bitcoin-1.webp 1x, /img/articles/buy-bitcoin-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-bitcoin-1.png" srcset="/img/articles/buy-bitcoin-1@2x.png 2x" alt="как купить эфириум 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <p>Зарегистрировавшись или введя ранее созданную seed-фразу, вы попадете в дашборд своего личного кошелька. Далее нужно произвести депозит любой ликвидной криптовалютой, которая на следующем шаге будет обменена на Эфир.</p>
                        <ol>
                            <li>Найдите и нажмите кнопку <b>Депозит</b></li>
                            <li>В модальном окне вам предоставится ваш <b>адрес</b> для депозита</li>
                            <li>Сделайте перевод криптовалюты на этот адрес</li>
                        </ol>
                        <p>Остается дождаться подтверждения транзакции, после этого баланс обновится и сумма пополнения будет доступна на вашем кошельке.</p>
                    </div>
                    <div class="article-picture-box-img buy-bitcoin-2">
                        <picture>
                            <source srcset="/img/articles/buy-bitcoin-2.avif 1x, /img/articles/buy-bitcoin-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/buy-bitcoin-2.webp 1x, /img/articles/buy-bitcoin-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/buy-bitcoin-2.png" srcset="/img/articles/buy-bitcoin-2@2x.png 2x" alt="лучший способ купить эфириум 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <h2><span class="h2-badge">2</span>Как купить Эфириум 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Теперь, когда адрес пополнен монетами, можно производить их обмен на Эфириум (ETH). Сделать это можно через меню “Обмен” или открыв карточку “Купить Ethereum”.</p>
                            <p>В появившемся меню:</p>
                            <ol>
                                <li>Укажите монеты для обмена</li>
                                <li>Укажите их количество</li>
                                <li>Укажите токен с символом <b>ETH</b> (в карточке <b>Купить Эфириум</b> он будет указан автоматически)</li>
                                <li>Убедитесь, что получаемая сумма ETH и курс обмена верны</li>
                                <li>Завершите обмен кнопкой <b>Подтвердить</b></li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img buy-bitcoin-3">
                            <picture>
                                <source srcset="/img/articles/buy-ethereum-3.avif 1x, /img/articles/buy-ethereum-3@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-ethereum-3.webp 1x, /img/articles/buy-ethereum-3@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-ethereum-3.png" srcset="/img/articles/buy-ethereum-3@2x.png 2x" alt="как купить эфир 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                    <p>Подтвердив транзакцию, выбранные вами токены обменяются на ETH и Эфир будет доступен на вашем адресе.</p>
                </section>
                <section class="article-last-block">
                    <h2>Цена Эфириум</h2>
                    <p>Покупая Ethereum, всегда нужно понимать, сколько он стоит. Для проверки цены есть несколько вариантов:</p>
                    <ol>
                        <li>На карточке <b>Купить Ethereum</b> (а также в меню <b>Обмен</b>)</li>
                        <li>На главной странице вашего адреса нажмите на символ ETH, чтобы перейти в ценовой график Эфириума</li>
                    </ol>
                    <p class="subtitle-h1">Отлично! В приложении Honee потребовалось всего несколько шагов, чтобы купить Ethereum (ETH). В 2022 году Honee выйдет в релиз, появится больше карточек и способов покупки Эфира.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
