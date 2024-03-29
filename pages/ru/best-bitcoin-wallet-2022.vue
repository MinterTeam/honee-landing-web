<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/luchshiy-bitkoin-koshelek-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Лучший биткоин-кошелек 2022');
        const description = 'Один из способов, как купить биткоин в 2022 году — это используя карточки заработка в Honee.';

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
                    <h1>Лучший биткоин-кошелек 2022</h1>
                    <h2>Что такое Биткоин?</h2>
                    <p class="subtitle-h1">Биткоин (название: Bitcoin, тикер: BTC) – первая криптовалюта, появившаяся в 2009 году и положившая начало децентрализованным системам (блокчейнам) и всей крипто-индустрии в целом.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/asset-bitcoin.png" alt="лучший биткоин-кошелек 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Название</div>
                                <b>Bitcoin</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Тикер</div>
                                <b>BTC</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Максимальная эмиссия</div>
                                <b>21 000 000 BTC</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://bitcoin.org" target="_blank" rel="nofollow">Сайт</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://www.blockchain.com/explorer" target="_blank" rel="nofollow">Эксплорер</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="nofollow">Белая бумага</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/bitcoin/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Лучший биткоин-кошелек 2022: Honee</h2>
                    <p>BTC в крипто-кошельке Honee представляет собой зеркалированный токен, который перенесен из основной сети Bitcoin в Ethereum. В зависимости от баланса вашего адреса в разных сетях, в кошельке Honee можно хранить как WBTC (Wrapped BTC) в Ethereum, так и BTC в Minter.</p>
                    <p>Обернутый и зеркалированный Bitcoin в других сетях обладает такой же ценностью, как и в основной. Происходит это потому, что при зеркалировании оригинального BTC он блокируется на смарт-контракте и выпускается в таком же количестве в другой сети. При переносе между сетями Биткоин блокируется и выпускается в том же количестве.</p>
                    <p>Honee — лучший биткоин-кошелек 2022 года не только благодаря изящному и интуитивно понятному интерфейсу, но и прозрачности.</p>
                    <p><b>Смарт-контракт WBTC в Ethereum:</b><br>
                    <a href="https://etherscan.io/address/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599" target="_blank" rel="nofollow">etherscan.io/address/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599</a>
                    </p>
                    <p><b>Смарт-контракт Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2" target="_blank" rel="nofollow">etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2</a>
                    </p>
                    <p><b>Холодный кошелек BTC в Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0x58BD8047F441B9D511aEE9c581aEb1caB4FE0b6d" target="_blank" rel="nofollow">etherscan.io/address/0x58BD8047F441B9D511aEE9c581aEb1caB4FE0b6d</a>
                    </p>
                </section>
                <section>
                    <h2>Как создать биткойн-кошелек в 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Откройте веб-приложение Honee</li>
                                <li>Нажмите <b>Зарегистрироваться</b></li>
                                <li>Сохраните сгенерированную seed-фразу в надежное место (с помощью этой фразы вы будете авторизовываться в кошельке)</li>
                                <li>Нажмите <b>Запуск</b>, убедившись, что ваша seed-фраза сохранена в надежном месте и доступ к ней имеете только вы.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-bitcoin-1.avif 1x, /img/articles/buy-bitcoin-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-bitcoin-1.webp 1x, /img/articles/buy-bitcoin-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-bitcoin-1.png" srcset="/img/articles/buy-bitcoin-1@2x.png 2x" alt="как создать биткойн-кошелек в 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Мы надеемся, что после прочтения этой статьи у вас появилось практическое представление о том, какой же он — лучший биткоин-кошелек. В 2022 году на рынок выйдет релизная версия Honee, а значит, хранение BTC станет намного удобнее!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
