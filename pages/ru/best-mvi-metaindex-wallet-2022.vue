<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/luchshiy-koshelek-dlya-mvi-metaindex-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Лучший кошелек для MVI (Metaverse Index) в 2022');
        const description = 'Кошелек Honee — лучший кошелек для хранения криптовалюты MVI (Metaverse Index) в 2022 году.';

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
                    <h1>Лучший кошелек для MVI (Metaverse Index) в 2022 году: Преимущества использования Honee</h1>
                    <p>В наши дни наблюдается повышенное внимание к метавселенным со стороны всего крипто-сообщества. Каждый день появляются криптовалюты из мира метавселенных, которые призваны всячески стимулировать игровой процесс и наделяют своих пользователей особыми преимуществами.</p>
                    <h2>Что такое MVI?</h2>
                    <p class="subtitle-h1">Metaverse Index, созданный Index Coop, представляет собой корзину из наиболее популярных токенов различных метавселенных. Honee стремится завоевать звание лучший кошелек для MVI в 2022 году, позволяя своим пользователям хранить и зарабатывать Metaverse Index.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/asset-mvi.svg" alt="best mvi metaverse index wallet 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Название</div>
                                <b>Metaverse Index</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Тикер</div>
                                <b>MVI</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Макс. эмиссия</div>
                                <b>39,602</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://www.indexcoop.com/metaverse-index-mvi.html" target="_blank" rel="nofollow">Сайт</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://etherscan.io/" target="_blank" rel="nofollow">Эксплорер</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://www.tokensets.com/v2/set/0x72e364F2ABdC788b7E918bc238B21f109Cd634D7" target="_blank" rel="nofollow">Токен</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/metaverse-index/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Благодаря своему удобству и простому интерфейсу, Honee завоевал популярность у многих пользователей. Используя Honee, вы можете покупать и обменивать Metaverse Index на любые другие активы с минимальными комиссиями и делать это всего в несколько щелчков мыши.</p>
                    <p>В крипто-кошельке Honee токен Metaverse Index представлен в виде тикера METAINDEX. Это зеркалированный актив, который полностью обеспечен оригинальным токеном MVI из сети Ethereum.</p>
                    <p><b>Смарт-контракт MVI:</b><br>
                    <a href="https://etherscan.io/address/0x72e364f2abdc788b7e918bc238b21f109cd634d7" target="_blank" rel="nofollow">etherscan.io/address/0x72e364f2abdc788b7e918bc238b21f109cd634d7</a>
                    </p>
                    <p><b>Смарт-контракт Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2" target="_blank" rel="nofollow">etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2</a>
                    </p>
                </section>
                <section>
                    <h2>Как создать лучший кошелек для MVI (Metaverse Index) в 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Откройте кошелек <a href="https://my.honee.app/ru">Honee</a>;</li>
                                <li>Нажмите «Зарегистрируйтесь»;</li>
                                <li>Перепишите или скопируйте предложенную seed-фразу и сохраните ее.   Seed-фраза является единственным ключом к вашему кошельку, поэтому в случае ее потери вы не сможете получить доступ к своим криптоактивам;</li>
                                <li>Нажмите на пиктограмму «Запустить Honee».</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как создать mvi metaverse index кошелек 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">При создании криптокошелтка Honee мы постарались, чтобы вам было максимально легко управлять своими активами, а также чтобы вы могли зарабатывать и приумножать свои средства прямо внутри кошелька. Команда Honee, без сомнения, имеет все шансы сделать лучший кошелек для MVI (Metaverse Index) в 2022 году.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
