<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-bitkoin-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать биткоин 2022');
        const description = 'Узнайте, как заработать биткоин в 2022 и сделать это множественными способами — или даже получить его совершенно бесплатно!';

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
                    <h1>Как заработать Биткоин 2022</h1>
                    <p class="subtitle-h1">Bitcoin (BTC) — без сомнений самая популярная и востребованная криптовалюта, которую каждый хотел бы иметь в своем портфеле. Крипто-кошелек Honee создан для того, чтобы помогать вам зарабатывать Биткоин самыми разными способами. В Honee будут появляться карточки программ для заработка, вам остается только выбрать те, которые вам больше всего нравятся.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2>Как заработать Биткоин в 2022</h2>
                        <h3>Торговля BTC</h3>
                        <p>Что может быть лучше, чем купить Биткоин дешевле, а продать дороже? Приложение Honee позволяет торговать быстро и удобно. Совершить обмен можно всего парой кликов.</p>
                        <p>Просто выберите токены, которые хотите обменять (например, USDT) и введите количество. Кошелек сразу покажет сумму в BTC, которую вы получите, а также цену, по которой вы совершаете покупку.</p>
                    </div>
                    <div class="article-picture-box-img earn-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/earn-bitcoin-1.avif 1x, /img/articles/earn-bitcoin-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-bitcoin-1.webp 1x, /img/articles/earn-bitcoin-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-bitcoin-1.png" srcset="/img/articles/earn-bitcoin-1@2x.png 2x" alt="как заработать биткоин 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <h3>Майнинг ликвидностью Bitcoin</h3>
                        <p>Еще одним способом заработка является майнинг ликвидностью, который является одним из элементов DeFi. Предоставляя ликвидность в пулах с BTC, вы будете получать комиссии, которые взимаются при обменах в этих пулах. Например, вы являетесь провайдером ликвидности в пуле BTC-USDT, в котором кто-то совершил транзакцию обмена, при этом заплатив комиссию в BTC. Эта комиссия распределяется между всеми участниками пула пропорционально доле ликвидности, расширяя пул и делая его “богаче”. Для того, чтобы получить заработанную комиссию, необходимо вывести ликвидность из пула в том количестве, которое вам необходимо.</p>
                        <p>Для того, чтобы предоставить ликвидность в пул с Биткоином, выберите соответствующую карточку, а Honee сделает остальную работу за вас. При выборе карточки обращайте внимание на параметр APY — это метрика, отражающая годовую доходность пула.</p>
                    </div>
                    <div class="article-picture-box-img earn-bitcoin-2">
                        <picture>
                            <source srcset="/img/articles/earn-bitcoin-2.avif 1x, /img/articles/earn-bitcoin-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-bitcoin-2.webp 1x, /img/articles/earn-bitcoin-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-bitcoin-2.png" srcset="/img/articles/earn-bitcoin-2@2x.png 2x" alt="как заработать биткойн 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <h3>Доходное фермерство Биткоин</h3>
                    <p>Фарминг — это дополнительные вознаграждения провайдерам ликвидности. Программы фарминга работают определенный период, рассылая каждый день награды за участие в пулах.</p>
                    <p>Например, процентная ставка <b>APR=36.6%</b> означает, что каждый день на протяжении всего периода провайдеры ликвидности будут зарабатывать <b>0.1%</b> от собственной ликвидности. Если ликвидность составляет <b>$1 000</b> в долларовом эквиваленте, то ежедневный заработок = $1.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2>Как получить Биткоин бесплатно 2022</h2>
                        <p>Третий вид заработка для поставщиков ликвидности BTC — это ежедневные розыгрыши. Каждый день случайный участник пула будет выигрывать приз в размере, указанном на карточке Honee. Чем больше биткоинов в пуле, тем выше шансы на победу.</p>
                    </div>
                    <div class="article-picture-box-img earn-bitcoin-3">
                        <picture>
                            <source srcset="/img/articles/earn-bitcoin-3.avif 1x, /img/articles/earn-bitcoin-3@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-bitcoin-3.webp 1x, /img/articles/earn-bitcoin-3@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-bitcoin-3.png" srcset="/img/articles/earn-bitcoin-3@2x.png 2x" alt="как получить биткоин бесплатно 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Мы надеемся, что после прочтения этой статьи у вас есть практическое понимание того, как заработать биткоин. В 2022 году на рынок выйдет релизная версия Honee, а значит, этот процесс станет более удобным для пользователя!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
