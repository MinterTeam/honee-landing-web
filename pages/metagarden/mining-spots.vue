<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'metagarden-spots',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Mining METAGARDEN tokens — Gamified Mining', 'metagarden-spots.title'));
        const description = this.$td('The mining of the Metagarden platform tokens is an exciting process in the form of a game.', 'metagarden-spots.description');

        return {
            title: title,
            meta: [
                { hid: 'og-title', name: 'og:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og-description', name: 'og:description', content: description },
                { hid: 'og-image', name: 'og:image', content: '/img/landing/metagarden/metagarden-share.png' },
            ],
            link: [
                { hid: 'favicon', rel: 'icon', href: '/img/landing/metagarden/metagarden-icon.png' },
            ],
        };
    },
    data() {
        return {

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
    <div class="metagarden-landing metagarden-spots-landing">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo">
                            <img src="/img/landing/metagarden/metagarden-logo.svg" alt="Metagarden" width="32" height="32"/>
                            METAGARDEN
                        </div>
                        <h1>{{ $td('Gamified Mining — sipmle for everyone', 'metagarden-spots.hello-title')}}</h1>
                        <template v-if="$i18n.locale === 'en'">
                            <p class="subtitle-h1">The mining of the Metagarden platform tokens is an exciting process in the form of a game.</p>
                            <p class="subtitle-h1">To become a miner you need to buy a Mining Spot to receive daily rewards with many other bonuses.</p>
                            <p class="subtitle-h1">You do not need any special equipment, knowledge or additional resources. It's simple to get started!</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p class="subtitle-h1">Майнинг токенов платформы Metagarden — это увлекательный процесс в игровой форме.</p>
                            <p class="subtitle-h1">Купите виртуальные участки (майнинг-споты) и получайте ежедневные вознаграждения с множеством других бонусов.</p>
                            <p class="subtitle-h1">Вам не потребуется специальное оборудование, знания или дополнительные ресурсы. Это просто, подключайтесь!</p>
                        </template>
                    </div>
                    <picture>
                        <source srcset="/img/landing/metagarden/mining-spots.avif 1x, /img/landing/metagarden/mining-spots@2x.avif 2x" type="image/avif">
                        <source srcset="/img/landing/metagarden/mining-spots.webp 1x, /img/landing/metagarden/mining-spots@2x.webp 2x" type="image/webp">
                        <img src="/img/landing/metagarden/mining-spots.png" srcset="/img/landing/metagarden/mining-spots@2x.png 2x" alt="metagarden mining spots" class="hello-image" role="presentation"/>
                    </picture>
                </div>
                <div class="buttons-block">
                    <a :href="$td('https://my.honee.app/metagarden/buy-spot', 'metagarden-spots.buy-button-url')" class="btn btn-1" target="_blank">{{ $td('Buy mining spots', 'metagarden-spots.buy-button')}}</a>
                    <a :href="$td('/metagarden', 'metagarden-spots.about-button-url')" class="btn btn-outline" target="_blank">{{ $td('About', 'metagarden-spots.about-button')}}</a>
                    <a :href="$td('/metagarden/token', 'metagarden-spots.tokenomics-button-url')" class="btn btn-outline" target="_blank">{{ $td('Tokenomics', 'metagarden-spots.tokenomics-button')}}</a>
                </div>
            </div>
        </header>
        <section class="spot-offer-section">
            <div class="container">
                <h2>{{ $td('Mining METAGARDEN tokens', 'metagarden-spots.spot-offer-title')}}</h2>
                <p class="subtitle-h2">{{ $td('Buy a Mining Spot. Quantity is limited!', 'metagarden-spots.spot-offer-subtitle')}}</p>
                <div class="spot-offer-block">
                    <div class="spot-offer-img">
                        <picture>
                            <source srcset="/img/landing/metagarden/offer.avif 1x, /img/landing/metagarden/offer@2x.avif 2x" type="image/avif">
                            <source srcset="/img/landing/metagarden/offer.webp 1x, /img/landing/metagarden/offer@2x.webp 2x" type="image/webp">
                            <img src="/img/landing/metagarden/offer.png" srcset="/img/landing/metagarden/offer@2x.png 2x" alt="metagarden mining spots" role="presentation"/>
                        </picture>
                    </div>
                    <div class="spot-offer-content">
                        <template v-if="$i18n.locale === 'en'">
                            <span>Price per token $0.08</span>
                            <h3>Mining Spot</h3>
                            <ul>
                                <li>1000 METAGARDEN tokens</li>
                                <li>Issue period 2000 days, daily 0.5 tokens</li>
                                <li>Auto conversion to USDT</li>
                                <li>All miner privileges</li>
                            </ul>
                            <a href="https://my.honee.app/metagarden/buy-spot" class="btn btn-1" target="_blank">Buy for $80</a>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <span>Цена за токен $0.08 </span>
                            <h3>Майнинг спот</h3>
                            <ul>
                                <li>1000 токенов METAGARDEN</li>
                                <li>Срок выпуска 2000 дней, ежедневно по 0.5 токена</li>
                                <li>Автоконвертация в USDT</li>
                                <li>Все привилегии майнера</li>
                            </ul>
                            <a href="https://my.honee.app/ru/metagarden/buy-spot" class="btn btn-1" target="_blank">Купить за $80</a>
                        </template>
                    </div>
                </div>
            </div>
        </section>
        <section class="simple-content-section">
            <div class="container">
                <h2>{{ $td('Miner privileges', 'metagarden-spots.mining-privilege-title')}}</h2>
                <div class="mining-privilege-items">
                    <template v-if="$i18n.locale === 'en'">
                        <div class="mining-privilege-item">
                            <p>Free tokens of games released on the platform (project airdrops)</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Daily mining of VOTES tokens, which allow you to vote on the platform for new games and receive bonuses from these projects</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Discounts for the purchase of tokens of new games up to 99%</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Daily free game items that can be sold or exchanged</p>
                        </div>
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <div class="mining-privilege-item">
                            <p>Бесплатные токены выходящих на платформе игр (аирдропы проектов)</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Ежедневный майнинг токенов VOTES, которые позволяют голосовать на платформе за новые игры и получать бонусы от этих проектов</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Скидки на покупку токенов новых игр до 99%</p>
                        </div>
                        <div class="mining-privilege-item">
                            <p>Ежедневные бесплатные игровые элементы, которые можно продать или обменять</p>
                        </div>
                    </template>
                </div>
            </div>
        </section>
        <footer>
            <div class="container">
                <div class="metagarden-footer">
                    <div class="metagarden-footer-left">
                        <template v-if="$i18n.locale === 'en'">
                            <a href="https://t.me/HoneeSupportBot" target="_blank">Support</a>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <a href="https://t.me/HoneeSupportBot" target="_blank">Поддержка</a>
                        </template>
                    </div>
                    <div class="metagarden-footer-right">
                        <template v-if="$i18n.locale === 'en'">
                            <a href="https://twitter.com/metagardengames" target="_blank"><img src="/img/landing/metagarden/icon-twitter.svg" alt="twitter eng"></a>
                            <a href="https://t.me/metagarden" target="_blank"><img src="/img/landing/metagarden/icon-telegram.svg" alt="telegram eng"></a>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <a href="https://twitter.com/metagardengames" target="_blank"><img src="/img/landing/metagarden/icon-twitter.svg" alt="twitter ru"></a>
                            <a href="https://t.me/metagardenru" target="_blank"><img src="/img/landing/metagarden/icon-telegram.svg" alt="telegram ru"></a>
                        </template>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
