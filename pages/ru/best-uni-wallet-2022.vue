<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/luchshij-koshelek-dlya-uni-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Лучший кошелек для UNI в 2022');
        const description = 'Honee — лучший кошелек для хранения и заработка UNI в 2022 году. Хранение ваших активов еще никогда не было таким выгодным и безопасным.';

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
                    <h1>Лучший кошелек для UNI в 2022 году</h1>
                    <h2>Что такое UNI?</h2>
                    <p class="subtitle-h1">Uniswap — децентрализованный протокол, формирующий пулы ликвидности. Благодаря механизму автоматизированного вычисления цены в пуле, у трейдеров нет необходимости ждать встречного предложения на рынке, а используя токен UNI, участники рынка могут сами участвовать в управлении проектом. Быстро купить и приумножить криптовалюту позволит Honee — лучший кошелек для UNI в 2022 году.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/uni/logo-uni.png" srcset="/img/articles/uni/logo-uni@2x.png 2x" alt="лучший uni кошелек 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Название</div>
                                <b>Uniswap</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Тикер</div>
                                <b>UNI</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Макс. эмиссия</div>
                                <b>1,000,000,000</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://uniswap.org/" target="_blank" rel="nofollow">Сайт</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://etherscan.io/" target="_blank" rel="nofollow">Эксплорер</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://uniswap.org/whitepaper-v3.pdf" target="_blank" rel="nofollow">White Paper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/uniswap/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Криптокошелек Honee был создан для того, чтобы сделать ваш заработок максимально легким и безопасным. При его создании мы постарались сделать так, чтобы любые операции с активами были интуитивно понятными. Все это делает Honee лучшим кошельком для хранения UNI в 2022 году.</p>
                    <p>В криптокошельке Honee токен UNI представляет собой зеркалированный актив из сети Binance Smart Chain с тикером UNIBSC и полностью обеспечен оригинальным токеном.</p>
                    <p><b>Смарт-контракт UNI в Ethereum:</b><br>
                    <a href="https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984" target="_blank" rel="nofollow">etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce</a>
                    </p>
                    <p><b>Смарт-контракт Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2" target="_blank" rel="nofollow">etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2</a>
                    </p>
                </section>
                <section>
                    <h2>Как создать лучший кошелек для UNI в 2022</h2>
                    <p>Еще никогда процесс создания кошелька не был таким простым. Для этого вам потребуется всего 4 простых шага:</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Перейдите на страницу с кошельком <a href="https://my.honee.app/ru">Honee</a> и нажмите на кнопку регистрации;</li>
                                <li>Запишите или скопируйте предложенную пароль-фразу и храните ее в надежном месте. Это ваш единственный ключ от кошелька;</li>
                                <li>Отметьте чекбокс «Я сохранил фразу»;</li>
                                <li>Нажмите на кнопку «Запустить Honee», чтобы начать пользоваться лучшим кошельком для ваших криптоактивов.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как создать uni Uniswap кошелек 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">С криптокошельком Honee вы можете быстро покупать, хранить и обменивать UNI на любые активы. Простые инструменты для заработка помогут приумножить ваши токены UNI в несколько кликов и делают Honee лучшим кошельком UNI в 2022 году. </p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
