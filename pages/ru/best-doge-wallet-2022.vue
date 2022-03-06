<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/luchshij-koshelek-dlya-doge-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Лучший кошелек для DOGE в 2022');
        const description = 'Как безопасно хранить и зарабатывать криптовалюту DOGE в 2022 году.';

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
                    <h1>Лучший кошелек для DOGE в 2022 году</h1>
                    <h2>Что такое DOGECOIN?</h2>
                    <p class="subtitle-h1">На сегодняшний день DOGE является, пожалуй, самой узнаваемой криптовалютой в мире. Названная в честь собаки и придуманная ради шутки, криптовалюта DOGE быстро завоевала популярность и всеобщее внимание со стороны криптосообщества. Из этой инструкции вы узнаете, как создать и настроить лучший кошелек для хранения и наращивания ваших монет DOGE в 2022 году.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/doge/logo-doge.png" srcset="/img/articles/doge/logo-doge@2x.png 2x" alt="лучший doge кошелек 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Название</div>
                                <b>Dogecoin</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Тикер</div>
                                <b>DOGE</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Макс. эмиссия</div>
                                <b>не ограничена</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://dogecoin.com/" target="_blank" rel="nofollow">Сайт</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://bscscan.com/" target="_blank" rel="nofollow">Эксплорер</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://github.com/dogecoin/dogecoin/blob/master/README.md" target="_blank" rel="nofollow">White Paper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/dogecoin//" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Криптокошелек Honee является одним из самых эффективных и надежных инструментов для хранения и заработка криптовалюты DOGE. Токен DOGE в Honee представляет собой зеркалированный актив с тикером DOGEBSC, который полностью обеспечен оригинальным DOGE. Это стало возможно благодаря реализованной функции кросс-чейн перевода DOGE из сети Binance Smart Chain в сеть Minter.</p>
                    <p><b>Смарт-контракт DOGE в BNB Chain:</b><br>
                    <a href="https://bscscan.com/token/0xba2ae424d960c26247dd6c32edc70b295c744c43" target="_blank" rel="nofollow">bscscan.com/token/0xba2ae424d960c26247dd6c32edc70b295c744c43</a>
                    </p>
                    <p><b>Смарт-контракт Minter Hub:</b><br>
                    <a href="https://bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f" target="_blank" rel="nofollow">bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f</a>
                    </p>
                </section>
                <section>
                    <h2>Как создать лучший кошелек для DOGE в 2022</h2>
                    <p>Процесс создания кошелька требует от пользователя минимум усилий и осуществляется в несколько простых шагов:</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Перейдите на страницу с <a href="https://my.honee.app/ru">кошельком</a> и начните процесс регистрации, нажав на кнопку «Зарегистрируйтесь»;</li>
                                <li>Скопируйте вашу фразу из 12 слов для входа в кошелек и сохраните ее в надежном месте;</li>
                                <li>Активируйте ваш кошелек, нажав на соответствующую кнопку «Запустить Honee».</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как создать DOGE Dogecoin кошелек 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Honee — кошелек, который помогает вам автоматизировать заработок криптовалюты DOGE и быть спокойными за ее сохранность. Простые инструменты, интуитивный интерфейс и передовые технологии делают Honee самым лучшим и надежным кошельком в 2022 году для хранения DOGE.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
