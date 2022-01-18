<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/luchshij-koshelek-dlya-toncoin-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Лучший кошелек для Toncoin в 2022');
        const description = 'Лучший кошелек для Toncoin в 2022 году, по нашему мнению, должен соответствовать всем современным требованиям в плане безопасности и ориентированности на безупречный пользовательский опыт.';

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
                    <h1>Лучший кошелек для Toncoin в 2022 году</h1>
                    <h2>Что такое TON?</h2>
                    <p class="subtitle-h1">TON — это новый, быстро набирающий популярность блокчейн-проект. Иметь в своем инвестиционном портфеле подобный крипто-актив крайне полезно. Основным залогом успеха The Open Network является сильная команда разработчиков (победители различных конкурсов по блокчейн-кодингу), масштабируемость блокчейна, высокая скорость платежей и простота в использовании. Также козырем в рукаве можно назвать причастность Павла и Николая Дуровых к начальному этапу развития данного крипто-проекта. Какими же качествами должен обладать лучший кошелек для Toncoin в 2022 году?</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/asset-toncoin.svg" alt="лучший toncoin кошелек 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Название</div>
                                <b>Toncoin</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Тикер</div>
                                <b>TONCOIN</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Макс. эмиссия</div>
                                <b>5,000,000,000</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://ton.org/" target="_blank" rel="nofollow">Сайт</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://ton.sh/" target="_blank" rel="nofollow">Эксплорер</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://ton.org/whitepaper.pdf" target="_blank" rel="nofollow">White Paper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/toncoin/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Лучший кошелек для Toncoin в 2022: Какие преимущества Honee?</h2>
                    <p>Выбор кошелька для хранения перспективных токенов — очень важный аспект. Нельзя ни в коем случае пренебрегать безопасностью и юзабилити. Однако решение уже найдено — Honee. Данный кошелек полностью децентрализован (доступ к криптовалюте остается только у вас) так как он некастодиальный. К тому же, можно отметить низкие комиссии на переводы и удобный интерфейс.</p>
                    <p>В кошельке Honee проект The Open Network представлен как токен под тикером Toncoin.</p>
                    <p><b>Смарт-контракт TONCOIN:</b><br>
                    <a href="https://etherscan.io/address/0x582d872a1b094fc48f5de31d3b73f2d9be47def1" target="_blank" rel="nofollow">etherscan.io/address/0x582d872a1b094fc48f5de31d3b73f2d9be47def1</a>
                    </p>
                    <p><b>Смарт-контракт Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0xc735478ef7562ecc37662fc7c5e521eb835f9dab" target="_blank" rel="nofollow">etherscan.io/address/0xc735478ef7562ecc37662fc7c5e521eb835f9dab</a>
                    </p>
                </section>
                <section>
                    <h2>Как создать лучший кошелек для Toncoin в 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Переходим на <a href="https://my.honee.app/">Honee</a> и жмем <b>Зарегистрируйтесь</b>;</li>
                                <li>Копируем полученную seed-фразу и сохраняем ее в проверенном месте, отмечая галочку впоследствии;</li>
                                <li>Жмем <b>Запустить Honee</b>.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как создать toncoin кошелек 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Наша команда постаралась создать поистине лучший кошелек для Toncoin 2022 года — удобный, безопасный и предельно простой в использовании.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
