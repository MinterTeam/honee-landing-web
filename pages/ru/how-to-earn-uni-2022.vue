<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-uni-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать UNI в 2022');
        const description = 'Как заработать криптовалюту UNI в 2022 году — пулы ликвидности и доходное фермерство в несколько кликов.';

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
                    <p>UNI — токен криптовалютной биржи Uniswap, созданной по протоколу АММ (автоматический маркет мейкер) на основе блокчейна Ethereum. Основная функция криптовалюты UNI — предоставление права голоса ее держателям в вопросах, связанных с изменением протокола биржи. Чем больше у участника токенов UNI, тем сильнее его право голоса. В этом руководстве мы расскажем про лучший способ заработать UNI в 2022 году.</p>
                    <h1>Как заработать UNI в 2022 году</h1>
                    <p class="subtitle-h1">Заработать криптовалюту UNI в 2022 году с помощью доходного фермерства вам поможет криптовалютный кошелек Honee. Предоставляйте UNI в пулы ликвидности и зарабатывайте, получая комиссии, которые взимаются при обменах с других участников. Цена токенов в пулах ликвидности выравнивается автоматически, поэтому в отличие от централизованных бирж, у вас нет необходимости размещать ордера и ждать их исполнения.</p>
                </section>
                <section>
                    <h3>Общие особенности пулов ликвидности</h3>
                    <ul>
                        <li>Для добавления в пул ликвидности монеты должны быть предоставлены в равных по стоимости долях;</li>
                        <li>После добавления криптовалюты в пул взамен участнику выдается квитанция в виде LP-токена, дающая право вывести ликвидность из пула в любой момент;</li>
                        <li>Доходность пулов может иметь разную доходность. Информацию о доходности вы можете посмотреть в графе APY на странице в <a href="https://explorer.minter.network/pools">эксплорере</a> сети Minter;</li>
                        <li>Каждый участник пула должен помнить о рисках, связанных с <a href="https://www.minter.network/earn/impermanent-loss">непостоянными потерями</a> (Impermanent Loss).</li>
                    </ul>
                </section>
                <section>
                    <h2>Как заработать UNI в 2022</h2>
                    <p>В сети Minter токен UNI представлен в виде тикера UNIBSC. Это зеркалированный актив из сети Binance Smart Chain, который полностью обеспечен оригинальными токенами UNI. Этот механизм стал возможен благодаря <a href="https://www.minter.network/ru/earn/hub-staking">оракулам</a> сети Minter, которые блокируют токены в одной сети и выпускают зеркалированные версии в другой.</p>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <p>Всего несколько шагов отделяют вас от того, чтобы начать зарабатывать UNI в 2022 в криптокошельке Honee:</p>
                            <ol>
                                <li>Находясь на главной странице кошелька, прокрутите страницу вниз до вкладки «Заработок» и выберите карточку «Фарминг UNIBSC / BIP»;</li>
                                <li>Нажмите на кнопку «Добавить ликвидность»;</li>
                                <li>Выберите количество токенов UNIBSC. Объем второго актива рассчитывается автоматически;</li>
                                <li>Нажмите «Добавить»;</li>
                                <li>Проверьте все данные и нажмите «Подтвердить»;</li>
                                <li>После подтверждения транзакции вы получите LP-токены пула (LP-1210), которые дают вам право забрать свои средства из пула в любой момент. Информацию об успешной операции вы можете увидеть в эксплорере сети Minter. </li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img earn-1inch-1">
                            <picture>
                                <source srcset="/img/articles/earn-1inch-1-ru.avif 1x, /img/articles/earn-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/earn-1inch-1-ru.webp 1x, /img/articles/earn-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/earn-1inch-1-ru.png" srcset="/img/articles/earn-1inch-1-ru@2x.png 2x" alt="как заработать uni 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-ton-1">
                        <picture>
                            <source srcset="/img/articles/uni/earn-uni-1-ru.avif 1x, /img/articles/uni/earn-uni-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/uni/earn-uni-1-ru.webp 1x, /img/articles/uni/earn-uni-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/uni/earn-uni-1-ru.png" srcset="/img/articles/uni/earn-uni-1-ru@2x.png 2x" alt="как заработать uni Uniswap в 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-ton-2">
                        <picture>
                            <source srcset="/img/articles/uni/earn-uni-2-ru.avif 1x, /img/articles/uni/earn-uni-2-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/uni/earn-uni-2-ru.webp 1x, /img/articles/uni/earn-uni-2-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/uni/earn-uni-2-ru.png" srcset="/img/articles/uni/earn-uni-2-ru@2x.png 2x" alt="где зарабатывать UNI в 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Вот так, всего в несколько кликов, можно начать зарабатывать криптовалюту UNI в 2022 году. Занимайтесь своими делами, а заработок криптовалюты предоставьте лучшему криптокошельку Honee.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
