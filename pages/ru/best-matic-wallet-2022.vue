<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/luchshij-koshelek-dlya-matic-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Лучший кошелек для MATIC в 2022');
        const description = 'Кошелек Honee — ваш надежный помощник для хранения и заработка криптовалюты MATIC в 2022 году.';

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
                    <h1>Лучший кошелек для MATIC в 2022 году</h1>
                    <h2>Что такое MATIC?</h2>
                    <p class="subtitle-h1">MATIC (POLYGON) — токен управления сети Polygon, которая представляет собой платформу для взаимодействия и масштабирования сети Ethereum. C Honee вы сможете зарабатывать MATIC легко и непринужденно. Интуитивно понятный интерфейс, низкие комиссии, простые и быстрые операции с криптовалютами — все это делает Honee лучшим кошельком для MATIC в 2022 г.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/matic/logo-matic.png" srcset="/img/articles/matic/logo-matic@2x.png 2x" alt="лучший matic кошелек 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Название</div>
                                <b>Polygon</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Символ</div>
                                <b>MATIC</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Макс. эмиссия</div>
                                <b>10,000,000,000</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://polygon.technology/" target="_blank" rel="nofollow">Сайт</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://bscscan.com/" target="_blank" rel="nofollow">Экслорер</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://github.com/maticnetwork/whitepaper" target="_blank" rel="nofollow">White Paper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/polygon/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>На сегодняшний день уже сотни пользователей по достоинству оценили удобство криптокошелька Honee. С помощью него вы можете хранить, обменивать и зарабатывать криптовалюту MATIC с минимальными комиссиями, а благодаря дружественному интерфейсу, любые операции с кошельком становятся понятными и простыми.</p>
                    <p>В криптокошельке Honee токен MATIC имеет тикер MATICBSC. Это полностью обеспеченный актив, который был зеркалирован из сети Binance Smart Chain оракулами Minter. </p>
                    <p><b>Смарт-контракт MATIC в BNB Chain:</b><br>
                    <a href="https://bscscan.com/token/0xcc42724c6683b7e57334c4e856f4c9965ed682bd" target="_blank" rel="nofollow">bscscan.com/token/0xcc42724c6683b7e57334c4e856f4c9965ed682bd</a>
                    </p>
                    <p><b>Смарт-контракт Minter Hub:</b><br>
                    <a href="https://bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f" target="_blank" rel="nofollow">bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f</a>
                    </p>
                </section>
                <section>
                    <h2>HКак создать лучший кошелек для MATIC в 2022</h2>
                    <p>Создать лучший кошелек для хранения MATIC в 2022 году очень просто. Для этого:</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Перейдите на страницу с кошельком <a href="https://my.honee.app/">Honee</a>;</li>
                                <li>Нажмите на кнопку регистрации и сохраните предложенную фразу из 12 слов в надежном месте на своем компьютере или бумажном носителе;</li>
                                <li>Помните, что в случае утери Seed-фразы восстановить кошелек будет уже невозможно;</li>
                                <li>Активируйте ваш кошелек, нажав на соответствующую кнопку «Запустить Honee».</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как создать MATIC Polygon кошелек 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Еще никогда управление собственными активами не было таким простым и безопасным. Создавая криптокошелек Honee, наша команда постарались учесть все возможные недочеты. Именно поэтому сегодня мы называем Honee лучшим кошельком для MATIC в 2022 году.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
