<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-usdt-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать USDT в 2022');
        const description = 'Как заработать USDT в 2022 — предоставление ликвидности в пулы, доходное фермерство, стейкинг.';

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
                    <h1>Как заработать USDT в 2022 году</h1>
                    <p class="subtitle-h1">USDT — криптовалюта, которая имитирует свойства, присущие доллару. Этот актив обеспечивается резервами фиатной валюты эмитента Tether Limited, а одним из главных его преимуществ является очень низкая волатильность. В этом руководстве расскажем, как заработать USDT в 2022 году, используя крипто-кошелек Honee.</p>
                </section>
                <section>
                    <p>Криптовалютный кошелек Honee позволяет зарабатывать USDT с помощью фарминга и стейкинга в пулах ликвидности. Блокируя свои USDT в пулах, вы будете получать часть комиссий, которые платят другие участники при совершении обменов.</p>
                    <p>Помимо стандартного предоставления ликвидности, в Honee существует возможность доходного фермерства. Фарминг — это дополнительные программы вознаграждений поставщикам ликвидности. Кроме стандартных комиссий, здесь начисляются дополнительные ежедневные выплаты.</p>
                    <h3>Важные моменты перед началом фарминга в пулах</h3>
                    <ul>
                        <li>Любые монеты в пул добавляются в равных долях</li>
                        <li>Пулы могут значительно отличаться по годовой процентной доходности (перед добавлением ликвидности смотрите колонку APY на странице с <a href="https://explorer.minter.network/pools">пулами</a>)</li>
                        <li>Добавлять и отзывать свои монеты из пула можно в любое время</li>
                        <li>Помните, что при стейкинге и фарминге высоковолатильных крипто-активов вы не застрахованы от <a href="https://www.minter.network/ru/earn/impermanent-loss">непостоянных потерь</a> (Impermanent Loss)</li>
                    </ul>
                </section>
                <section>
                    <h3>Фарминг без риска</h3>
                    <p>Для тех, кто хочет зарабатывать на USDT без риска, лучшим выбором станет фарминг на стейблкоинах. В крипто-кошельке Honee вы можете выбрать специальную программу для фарминга в паре USDTE/USDCE и помимо сбора комиссий, дополнительно зарабатывать 0.1% от внесенной суммы в токенах BIP сети Minter.</p>
                    <blockquote>USDTE и USDCE в Honee — это токены USDT и USDC, обернутые из сети Ethereum, которые имеют полное обеспечение.<br><br>
                    Разница между USDT и USDC состоит лишь в том, что они выпускаются разными эмитентами. USDC — компаниями Circle и Coinbase, а USDT принадлежит Tether Limited.
                    </blockquote>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2>Как заработать USDT в 2022</h2>
                        <p>Для того чтобы начать получать заработок на обменах и добавить ликвидность USDTE в пул в крипто-кошельке Honee:</p>
                        <ol>
                            <li>Выберите соответствующую карточку «Фарминг USDTE / USDCE» и нажмите на кнопку «Добавить ликвидность»;</li>
                            <li>Укажите количество любой из двух добавляемых вами в пул монет, сумма второй монеты будет рассчитана автоматически;</li>
                            <li>Нажмите «Добавить»;</li>
                            <li>Еще раз проверьте информацию о предоставлении ликвидности и нажмите «Подтвердить»;</li>
                            <li>После успешного завершения операции информация о транзакции будет доступна для просмотра на странице эксплорера cети Minter.</li>
                        </ol>
                    </div>
                    <div class="article-picture-box-img earn-usdt-1">
                        <picture>
                            <source srcset="/img/articles/earn-usdt-1-ru.avif 1x, /img/articles/earn-usdt-1-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-usdt-1-ru.webp 1x, /img/articles/earn-usdt-1-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-usdt-1-ru.png" srcset="/img/articles/earn-usdt-1-ru@2x.png 2x" alt="как заработать usdt 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-img earn-usdt-2">
                        <picture>
                            <source srcset="/img/articles/earn-usdt-2-ru.avif 1x, /img/articles/earn-usdt-2-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-usdt-2-ru.webp 1x, /img/articles/earn-usdt-2-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-usdt-2-ru.png" srcset="/img/articles/earn-usdt-2-ru@2x.png 2x" alt="как заработать tether 2022" role="presentation"/>
                        </picture>
                    </div>
                    <div class="article-picture-box-img earn-usdt-3">
                        <picture>
                            <source srcset="/img/articles/earn-usdt-3-ru.avif 1x, /img/articles/earn-usdt-3-ru@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-usdt-3-ru.webp 1x, /img/articles/earn-usdt-3-ru@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-usdt-3-ru.png" srcset="/img/articles/earn-usdt-3-ru@2x.png 2x" alt="как заработать доллары в 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Теперь вы знаете, как заработать USDT в 2022 году с помощью кошелька Honee. Надеемся, что наша простая инструкция поможет вам приумножить ваш капитал, а заработок на криптовалюте станет для вас простым и безопасным.</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
