<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/lending-and-borrowing-crypto',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как занять или одолжить криптовалюту');
        const description = 'Пользователи крипто-кошелька Honee имеют возможность занимать и одалживать криптовалюту.';

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
                        <a href="https://twitter.com/intent/tweet?url=https://honee.app/ru/lending-and-borrowing-crypto&text=Как+занять+или+одолжить+криптовалюту" target="_blank" rel="nofollow"><img src="/img/landing/twitter.svg" alt="Поделиться в Twitter" width="40" height="40"></a>
                        <a href="https://www.facebook.com/share.php?u=https://honee.app/ru/lending-and-borrowing-crypto&quote=Как+занять+или+одолжить+криптовалюту" target="_blank" rel="nofollow"><img src="/img/landing/facebook.svg" alt="Поделиться в Facebook" width="40" height="40"></a>
                        <a href="tg://msg_url?url=https://honee.app/ru/lending-and-borrowing-crypto&text=Как+занять+или+одолжить+криптовалюту" rel="nofollow"><img src="/img/landing/telegram.svg" alt="Поделиться в Telegram" width="40" height="40"></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://honee.app/ru/lending-and-borrowing-crypto" target="_blank" rel="nofollow"><img src="/img/landing/linkedin.svg" alt="Поделиться в Linkedin" width="40" height="40"></a>
                        <!--<a href="" rel="nofollow"><img src="/img/landing/copy-link.svg" alt="Скопировать ссылку" width="40" height="40"></a>-->
                    </div>
                </div>
                <section class="article-header">
                    <h1>Как занять или одолжить криптовалюту</h1>
                </section>
                <section>
                    <h2>Занять</h2>
                    <p>С помощью этого сервиса вы можете быстро получить BNB, оставив в залог свои BEE или другие токены. Вернуть BNB вы можете в течение года; чем больше срок, тем больше процент переплаты. Если заложенные BEE значительно снижаются в цене (на -25%), то кредитор может забрать их себе. В этом случае вам не понадобится возвращать BNB.</p>
                    <h3>Пример</h3>
                    <p>У вас 60000 BEE стоимостью 2 BNB. Оставляя 60000 BEE в виде залога, вы берете займ в размере 1 BNB (в 2 раза меньше их стоимости). Спустя 6 месяцев вы хотите вернуть займ, для этого отправляете 1.06 BNB (1 BNB + 6% за 6 месяцев), а назад получаете 60000 BEE. Если бы стоимость 60000 BEE и начисленных процентов опустилась до 1.545 BNB (-25%), то кредитор оставил бы BEE себе, при этом 1.06 BNB возвращать было бы уже не нужно.</p>
                    <h3>Условия</h3>
                    <ul>
                        <li>Вы получите 50% от стоимости BEE в BNB;</li>
                        <li>Процентная ставка составляет 12% годовых. 1% взимается после получения BNB, а затем продолжает взиматься каждый 30-й день;</li>
                        <li>Вы заплатите проценты в момент погашения долга;</li>
                        <li>Если залог кредита (кредит + начисленные проценты) падает ниже 150%, залоговая сумма BEE может быть передана кредитору;</li>
                        <li>Вы можете вернуть BNB + % за период использования в любое время, чтобы получить свои BEE обратно;</li>
                        <li>Максимальный срок кредита составляет 365 дней. Если к этому времени вы не вернете BNB, то BEE могут быть переданы кредитору;</li>
                        <li>Минимальная сумма кредита составляет 0.001 BNB.</li>
                    </ul>
                </section>
                <section>
                    <h2>Одолжить</h2>
                    <p>С помощью этого сервиса вы можете предоставить свои BNB в кредит, чтобы зарабатывать на этом проценты. Когда заемщик получает ваши BNB, он оставляет в залог свои токены BEE. Если заложенные BEE значительно снижаются в цене (на -25%), то вы можете забрать эти токены себе. В этом случае заемщик не будет возвращать BNB, а вы сможете продать оставленные им BEE.</p>
                    <h3>Пример</h3>
                    <p>У вас 1 BNB, которые вы предоставляете к займу. Заемщик берет ваши 1 BNB, оставляя 60000 BEE стоимостью 2 BNB (в 2 раза больше ваших BNB). Спустя 6 месяцев заемщик хочет вернуть займ, для этого он отправляет вам 1.06 BNB (1 BNB + 6% за 6 месяцев), а назад получает свои 60000 BEE. Если бы стоимость 60000 BEE и начисленных процентов опустилась до 1.545 BNB (-25%), то вы вправе оставить BEE себе, при этом 1.06 BNB остались бы у заемщика.</p>
                    <h3>Условия</h3>
                    <ul>
                        <li>Вы можете отправить BNB и дождаться, пока кто-нибудь возьмет их взаймы;</li>
                        <li>Если в очереди более 1 кредитора, то средства используются по алгоритму FIFO;</li>
                        <li>Неиспользованные BNB можно вывести в любое время;</li>
                        <li>Процентная ставка составляет 12% годовых. 1% взимается, как только заемщик получает BNB, а затем продолжает взиматься каждый 30-й день;</li>
                        <li>Вы получите проценты, когда долг будет погашен;</li>
                        <li>Если залог за использованный BNB падает ниже 150%, то у вас есть возможность забрать залог, чтобы продать его и вернуть свой BNB (10% от суммы BEE идет в фонд);</li>
                        <li>Минимальная сумма составляет 0.001 BNB. Максимум 100 BNB.</li>
                    </ul>
                </section>
                <section class="article-last-block">
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
