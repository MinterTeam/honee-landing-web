<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'promo',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Earn 36.5% APR on farming in WBNB-BEE pool on PancakeSwap!', 'farming.title'));
        const description = this.$td('To join our yearly farming program just add your liquidity to the pool and receive BEE token rewards.', 'farming.description');

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
    <div class="bee-farming">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="pool-pair">
                            <img src="/img/bsc-icon.svg" class="pool-pair-icon" alt="" width="48" height="48"/>
                            <img src="/img/honee.svg" class="pool-pair-icon pool-pair-icon2" alt="" width="48" height="48"/>
                        </div>
                            <i18n tag="h1" path="farming.h1">
                                <span>{{ $td('36.5% APR', 'farming.apr')}}</span>
                            </i18n>
                        <p class="subtitle-h1">{{ $td('To join our yearly farming program just add your liquidity to the pool and receive BEE token rewards.', 'index.hello-description')}}</p>
                        <a class="btn" href="https://pancakeswap.finance/info/pool/0xfba050305315d34ac7b0ccedf3c624766ce3f10c" v-track-click="'all-buttons'">{{ $td('Add Liquidity', 'farming.add-liquidity')}}</a>
                    </div>
                    <img src="/img/landing/bee-farming.svg" alt="" class="farming-image" role="presentation"/>
                </div>
            </div>
        </header>
        <section class="promo-bar">
            <div class="container">
                <div class="promo-bar-div">
                    <img src="/img/landing/lottery-img-1.svg" alt="" class="lottery-img-1">
                    <img src="/img/landing/lottery-img-2.svg" alt="" class="lottery-img-2">
                    <template v-if="$i18n.locale === 'en'">
                        <div class="promo-bar-text">All liquidity providers are automatically entered into the <span>$10,000 lottery</span>. Read the details <a href="https://t.me/HoneeApp" target="_blank">here</a>.</div>
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <div class="promo-bar-text">Все провайдеры ликвидности автоматически становятся участниками лотереи с призовым фондом <span>$10,000</span>. Читайте подробности <a href="https://t.me/HoneeRu" target="_blank">здесь</a>.</div>
                    </template>
                </div>
            </div>
        </section>
        <section class="bee-text-block">
            <div class="container">
                <template v-if="$i18n.locale === 'en'">
                    <h2>Farming Program Details:</h2>
                    <ul>
                        <li>The program is valid until <b>November 1</b> with possibility of an extension</li>
                        <li>Rewards are <b>0.1%</b> of your liquidity, paid in <b>BEE</b> token</li>
                        <li>Rewards must be claimed on your own</li>
                        <li>Cryptocurrencies are <b>prone to volatility</b>, so you must understand associated risks</li>
                        <li>Liquidity pools are subject to <a href="https://www.minter.network/earn/impermanent-loss" target="_blank">Impermanent Loss</a></li>
                    </ul>
                    <p><a href="https://t.me/HoneeApp" target="_blank">Learn More</a></p>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <h2>Детали программы фарминга:</h2>
                    <ul>
                        <li>Программа действует до <b>1 ноября</b> с возможностью продления</li>
                        <li>Вознаграждения составляют <b>0.1%</b> от вашей ликвидности, выплачиваются в токене <b>BEE</b></li>
                        <li>Вознаграждения необходимо клеймить самостоятельно</li>
                        <li>Криптовалюты подвержены <b>волатильности</b>, поэтому вы должны понимать связанные с ними риски</li>
                        <li>Пулы ликвидности подвержены <a href="https://www.minter.network/ru/earn/impermanent-loss" target="_blank">Непостоянным потерям</a></li>
                    </ul>
                    <p><a href="https://t.me/HoneeRu" target="_blank">Подробнее</a></p>
                </template>
            </div>
        </section>
    </div>
</template>
