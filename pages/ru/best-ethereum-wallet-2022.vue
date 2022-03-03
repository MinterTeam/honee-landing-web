<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/luchshiy-koshelek-dlya-efiriuma-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Лучший кошелек для эфириума 2022');
        const description = 'Помимо безопасности, лучший кошелек для эфириума в 2022 году должен обеспечивать мобильность своих пользователей. Приложение Honee нацелено на пользовательский опыт, и одна из его основных целей — позволить холдерам свободно перемещать монеты и токены между сетями.';

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
                    <h1>Лучший кошелек для эфириума в 2022</h1>
                    <h2>Что такое Эфириум?</h2>
                    <p class="subtitle-h1">Эфириум — вторая по капитализации криптовалюта, которая вышла в 2015 году. Блокчейн Ethereum позволяет создавать децентрализованные приложения и сервисы благодаря так называемым смарт-контрактам. Эфир обрел популярность благодаря возможности создания собственных токенов, которые поддерживает большинство криптокошельков. Так каким же должен быть лучший кошелек для эфириума 2022-го?</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/asset-ethereum.png" alt="лучший кошелек для эфириума 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Название</div>
                                <b>Ethereum</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Символ</div>
                                <b>ETH</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Максимальная эмиссия</div>
                                <b>не ограничена</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://ethereum.org/" target="_blank" rel="nofollow">Сайт</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://etherscan.io/" target="_blank" rel="nofollow">Эксплорер</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://github.com/ethereum/wiki/wiki/White-Paper" target="_blank" rel="nofollow">Белая бумага</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/ru/currencies/ethereum/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Лучший кошелек для эфириума 2022: Honee</h2>
                    <p>В крипто-кошельке Honee представлено множество различных токенов, одним из которых является Эфир с тикером ETH. Это зеркалированный актив, доступный для кросс-чейн переводов между блокчейнами Minter и Ethereum. В кошельке Honee можно хранить как оригинальный ETH, так и его обернутые и зеркалированные версии.</p>
                    <p>Ценность Эфира остается неизменной в разных сетях благодаря мосту Minter Hub, который переносит ровно то количество ETH, которое было отправлено. При совершении кросс-чейн перевода, токены замораживаются на смарт-контракте в одной сети и эмитируются (или размораживаются, в зависимости от направления) в другой. Таким образом, Эфириум сохраняет свою ценность вне зависимости от того, в каком кошельке и в какой сети его хранить.</p>
                    <p>Honee — лучший кошелек для эфириума 2022 года из-за своего продуманного пользовательского интерфейса, многофункциональности и удобства хранения ETH.</p>
                    <p><b>Смарт-контракт WETH в Ethereum:</b><br>
                    <a href="https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" target="_blank" rel="nofollow">etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</a>
                    </p>
                    <p><b>Смарт-контракт Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2" target="_blank" rel="nofollow">etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2</a>
                    </p>
                </section>
                <section>
                    <h2>Как создать эфириум-кошелек в 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Зайдите в кошелек Honee</li>
                                <li>Выберите кнопку <b>Зарегистрироваться</b></li>
                                <li>Надежно сохраните полученную seed-фразу (этой фразой вы будете входить в свой кошелек)</li>
                                <li>Нажмите <b>Запуск</b></li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-bitcoin-1.avif 1x, /img/articles/buy-bitcoin-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-bitcoin-1.webp 1x, /img/articles/buy-bitcoin-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-bitcoin-1.png" srcset="/img/articles/buy-bitcoin-1@2x.png 2x" alt="как создать эфириум-кошелек 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Мы надеемся, что это небольшое руководство помогло вам во всем разобраться и понять, что у нас лучший кошелек для эфириума. На 2022 год запланирован релиз Honee, мы сделаем все возможное, чтобы хранить ETH вам было максимально удобно.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
