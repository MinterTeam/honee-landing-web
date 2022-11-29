<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/luchshij-koshelek-dlya-shib-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Лучший кошелек для SHIB 2022');
        const description = 'Лучший кошелек для SHIB в 2022 году: мем-токен, выросший в полноценный проект, нуждается в первую очередь в безопасности — и столь же сильно в удобстве.';

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
                    <h1>Лучший кошелек для SHIB в 2022 году</h1>
                    <h2>Что такое SHIB?</h2>
                    <p class="subtitle-h1">SHIB — мемная криптовалюта, названная в честь японской породы собак. Проект изначально не акцентировал внимание на технологиях, однако после популярности основатели SHIB пообещали создать DEX-биржу (с внедрением NFT-маркетплейса).</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/asset-shib.svg" alt="лучший shib кошелек 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Название</div>
                                <b>Shiba Inu</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Символ</div>
                                <b>SHIB</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Макс. эмиссия</div>
                                <b>не огранична</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://shibatoken.com/" target="_blank" rel="nofollow">Сайт</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://etherscan.io/" target="_blank" rel="nofollow">Эксплорер</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://github.com/shytoshikusama/woofwoofpaper/raw/main/SHIBA_INU_WOOF_WOOF.pdf" target="_blank" rel="nofollow">White Paper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/shiba-inu/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>Лучший кошелек для SHIB в 2022</h2>
                    <p>Инвестируя в криптовалюту, важно подходить к решению задачи осознанно. Так каким же должен быть лучший кошелек для SHIB в 2022-м? Кошелек, который будет хранить ваши токены, должен быть некастодиальным и безопасным. Именно потому лучшим решение будет Honee.</p>
                    <p>Honee — проверенный кошелек, который работает полностью децентрализовано, а это означает, что юзер может смело хранить свои монеты, не переживая за их сохранность. Помимо технических аспектов, стоит упомянуть и интерфейс, который позволяет разобраться в юзабилити Honee даже начинающим крипто-энтузиастам.</p>
                    <p>В кошельке Honee проект Shiba Inu представлен как токен под тикером SHIB.</p>
                    <p><b>Смарт-контракт SHIB в Ethereum:</b><br>
                    <a href="https://etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce" target="_blank" rel="nofollow">etherscan.io/address/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce</a>
                    </p>
                    <p><b>Смарт-контракт Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2" target="_blank" rel="nofollow">etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2</a>
                    </p>
                </section>
                <section>
                    <h2>Как создать лучший кошелек для SHIB в 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Переходим на <a href="https://my.honee.app/">Honee</a> и жмем <b>Зарегистрируйтесь</b>;</li>
                                <li>Копируем полученную seed-фразу и сохраняем ее в проверенном месте, отмечая галочку впоследствии;</li>
                                <li>Check the corresponding box;</li>
                                <li>Жмем “Запустить Honee”.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как создать shib inu кошелек 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Отныне вы знаете про, вероятно, лучший кошелек для SHIB 2022-го года — быстрый, безопасный и удобный Honee!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
