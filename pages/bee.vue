<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'bee',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('BEE — Token of Honee Wallet', 'bee.title'));
        const description = this.$td('BEE is a simple BEP-20 utility token that provides a range of benefits and incentives to Honee wallet users.', 'bee.description');

        return {
            title: title,
            meta: [
                { hid: 'og-title', name: 'og:title', content: title },
                { hid: 'description', name: 'description', content: description },
                { hid: 'og-description', name: 'og:description', content: description },
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
    <div class="bee-landing">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <div class="logo"><img src="/img/logo-honee.svg" alt="" width="122" height="24"/></div>
                        <h1>{{ $td('BEE — Token of Honee Wallet', 'bee.hello-title')}}</h1>
                        <p class="subtitle-h1">{{ $td('BEE is a simple BEP-20 utility token that provides a range of benefits and incentives to Honee wallet users.', 'bee.hello-description')}}</p>
                        <div class="bee-buttons">
                            <a href="https://pancakeswap.finance/swap?outputCurrency=0x84b748b6a51548f3c1a59daf4f36df47ca7fb4b5" class="btn btn-1" target="_blank" rel="nofollow"><img src="/img/landing/bee-pancake.svg" alt="Buy on PancakeSwap"> {{ $td('Buy on PancakeSwap', 'bee.bee-pancake')}}</a>
                            <a :href="$td('https://my.honee.app/buy/BEE', 'bee.bee-honee-url')" class="btn btn-5" target="_blank"><img src="/img/honee.svg" alt="Buy in Honee"> {{ $td('Buy in Honee', 'bee.bee-honee')}}</a>
                        </div>
                    </div>
                    <picture>
                        <source srcset="/img/landing/bee/h1.avif 1x, /img/landing/bee/h1@2x.avif 2x" type="image/avif">
                        <source srcset="/img/landing/bee/h1.webp 1x, /img/landing/bee/h1@2x.webp 2x" type="image/webp">
                        <img src="/img/landing/bee/h1.png" srcset="/img/landing/bee/h1@2x.png 2x" alt="" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <section class="features">
            <div class="container">
                <h2>{{ $td('BEE Utility', 'bee.utility-title')}}</h2>
                <template v-if="$i18n.locale === 'en'">
                    <p><b>Premium accounts</b> – Honee crypto wallet’s extended account that allows users to get extra benefits:</p>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <p><b>Премиум аккаунты</b> – расширенные аккаунты крипто-кошелька Honee, позволяющие пользователям получать дополнительные преимущества:</p>
                </template>
                <div class="features-items">
                    <div class="features-item">
                        <img src="/img/landing/bee/u1.svg" alt="" width="64" height="64">
                        <template v-if="$i18n.locale === 'en'">
                            <p>Gain <b>boosted yield</b> percentage compared to basic accounts.</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p><b>Повышенный процент</b> доходности по сравнению с базовыми аккаунтами. </p>
                        </template>
                    </div>
                    <div class="features-item">
                        <img src="/img/landing/bee/u2.svg" alt="" width="64" height="64">
                        <template v-if="$i18n.locale === 'en'">
                            <p>Access to <b>advanced stats</b> of portfolios managed by the best experts making 10–30% weekly.</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p>Доступ к <b>расширенной статистике</b> портфелей, управляемых лучшими экспертами, которые зарабатывают 10-30% еженедельно.</p>
                        </template>
                    </div>
                    <div class="features-item">
                        <img src="/img/landing/bee/u3.svg" alt="" width="64" height="64">
                        <template v-if="$i18n.locale === 'en'">
                            <p><b>Vote-to-Earn</b>. Premium users will make money voting for crypto portfolios they consider most promising.</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p><b>Vote-to-Earn</b>. Премиум-пользователи будут зарабатывать деньги, голосуя за крипто-портфели, которые они считают наиболее перспективными.</p>
                        </template>
                    </div>
                    <div class="features-item">
                        <img src="/img/landing/bee/u4.svg" alt="" width="64" height="64">
                        <template v-if="$i18n.locale === 'en'">
                            <p><b>Rewards for actions</b>. Referral and other rewards for user actions that bring new users to the wallet or expand new audience reach.</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p><b>Награды за действия</b>. Реферальные и другие вознаграждения за действия пользователей, которые приводят новых пользователей в кошелек или расширяют охват новой аудитории.</p>
                        </template>
                    </div>
                    <div class="features-item features-item-2x">
                        <img src="/img/landing/bee/u5.svg" alt="" width="64" height="64">
                        <template v-if="$i18n.locale === 'en'">
                            <p><b>Success Award</b>. If the Honee user copy trades with a successful portfolio, part of their earnings will be sent to a special fund as a fee. The accumulated amount will be then distributed to Lvl 3 Premium users.</p>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p><b>Премии за успех</b>. Если пользователь Honee торгует успешным портфелем, часть его заработка будет отправлена в специальный фонд в качестве вознаграждения. Накопленная сумма будет распределена между пользователями Премиум уровня 3.</p>
                        </template>
                    </div>
                </div>
                <template v-if="$i18n.locale === 'en'">
                    <p>There are <b>three levels of premium accounts</b>. The bigger the amount of BEE locked, the higher the level, the more the features:</p>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <p>Существует <b>три уровня премиум-аккаунтов</b>. Чем больше BEE заблокировано, чем выше уровень, тем больше возможностей:</p>
                </template>
                <div class="features-items">
                    <div class="features-item">
                        <img src="/img/landing/bee/p1.svg" alt="" width="64" height="64">
                        <template v-if="$i18n.locale === 'en'">
                            <h3>Premium Lvl 1</h3>
                            <ul>
                                <li>Extended portfolio statistics</li>
                                <li>Level of portfolio’s trust from other Premium users</li>
                                <li>Boosted yield</li>
                                <li>Rewards for actions</li>
                            </ul>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h3>Премиум уровень 1</h3>
                            <ul>
                                <li>Расширенная статистика портфеля</li>
                                <li>Уровень доверия к портфолио со стороны других премиум-пользователей</li>
                                <li>Увеличенный доход</li>
                                <li>Награды за действия</li>
                            </ul>
                        </template>
                    </div>
                    <div class="features-item">
                        <img src="/img/landing/bee/p2.svg" alt="" width="64" height="64">
                        <template v-if="$i18n.locale === 'en'">
                            <h3>Premium Lvl 2</h3>
                            <ul>
                                <li>Vote-to-Earn feature</li>
                                <li>Advanced portfolio statistics</li>
                                <li>Profitability insights</li>
                                <li>Improved boosted yield</li>
                            </ul>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h3>Премиум уровень 2</h3>
                            <ul>
                                <li>Функция Vote-to-Earn</li>
                                <li>Еще больше статистики портфелей</li>
                                <li>Анализ прибыльности</li>
                                <li>Улучшенная повышенная доходность</li>
                            </ul>
                        </template>
                    </div>
                    <div class="features-item">
                        <img src="/img/landing/bee/p3.svg" alt="" width="64" height="64">
                        <template v-if="$i18n.locale === 'en'">
                            <h3>Premium Lvl 3</h3>
                            <ul>
                                <li>Success award</li>
                                <li>Vote-to-Earn feature</li>
                                <li>Profitability insights</li>
                                <li>Improved boosted yield</li>
                            </ul>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <h3>Премиум уровень 3</h3>
                            <ul>
                                <li>Премия за успех</li>
                                <li>Функция Vote-to-Earn</li>
                                <li>Анализ прибыльности</li>
                                <li>Улучшенная повышенная доходность</li>
                            </ul>
                        </template>
                    </div>
                </div>
            </div>
        </section>
        <section class="circulation">
            <div class="container">
                <div class="circulation-block">
                    <div class="circulation-block-content">
                        <h2>{{ $td('BEE Circulation & Price', 'bee.circulation-title')}}</h2>
                        <template v-if="$i18n.locale === 'en'">
                            <p>The total BEE token supply is</p>
                            <div class="bee-units">100,000,000 <span>units</span></div>
                            <p>On <a href="https://bscscan.com/token/0x84b748b6a51548f3c1a59daf4f36df47ca7fb4b5" target="_blank" rel="nofollow">BNB Smart Chain</a>, the BEE token contract was deployed at the maximum issuance of <b>1,000,000,000,000,000 BEE</b>.</p>
                            <p><b>99.99999%</b> of the initial supply was burned by being sent to the dead address.</p>
                            <p>There are around <b>24,000,000</b> tokens currently on the market.</p>
                            <p>The BEE token’s starting price was <b>$0.01</b>, and it first appeared in a decentralized liquidity pool on Minter DEX. The price recorded its low at <b>$0.0035</b> and then skyrocketed to <b>$0.06</b> in recent months, showing a 15x growth.</p>
                            <a href="https://www.dextools.io/app/bsc/pair-explorer/0xfba050305315d34ac7b0ccedf3c624766ce3f10c" class="btn btn-5" target="_blank">Follow BEE trading on PancakeSwap</a>
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <p>Общее количество токенов BEE составляет</p>
                            <div class="bee-units">100,000,000 <span>единиц</span></div>
                            <p>В <a href="https://bscscan.com/token/0x84b748b6a51548f3c1a59daf4f36df47ca7fb4b5" target="_blank" rel="nofollow">BNB Smart Chain</a> был развернут контракт токена BEE с максимальной эмиссией в <b>1,000,000,000,000,000 BEE</b>.</p>
                            <p><b>99.99999%</b> первоначального предложения было сожжено через оправку на нулевой адрес.</p>
                            <p>В настоящее время на рынке насчитывается около <b>24,000,000</b> токенов.</p>
                            <p>Стартовая цена токена BEE составляла <b>$0.01</b>, и впервые он появился в децентрализованном пуле ликвидности на Minter DEX. Цена зафиксировала свой минимум на уровне <b>$0.0035</b>, а затем взлетела до <b>$0.06</b> в последние месяцы, показав 15-кратный рост.</p>
                            <a href="https://www.dextools.io/app/bsc/pair-explorer/0xfba050305315d34ac7b0ccedf3c624766ce3f10c" class="btn btn-5" target="_blank">Следите за торгами BEE на PancakeSwap</a>
                        </template>
                    </div>
                    <div class="circulation-block-pie">
                        <template v-if="$i18n.locale === 'en'">
                            <img src="/img/landing/bee/pie-text.svg" alt="BEE pie">
                        </template>
                        <template v-if="$i18n.locale === 'ru'">
                            <img src="/img/landing/bee/pie-text-ru.svg" alt="BEE распределение">
                        </template>
                    </div>
                </div>
            </div>
        </section>
        <section class="bee">
            <div class="container">
                <div class="bee-block">
                    <div class="bee-logo">
                        <img src="/img/landing/bee/earn.svg" alt="BEE earning">
                    </div>
                    <div class="bee-content">
                        <h2>{{ $td('BEE Earning Options', 'bee.bee-title')}}</h2>
                        <p>{{ $td('Honee wallet has great earning opportunities for BEE token holders and liquidity providers. Check them out below and pick the one that you like most.', 'bee.bee-p1')}}</p>
                        <div class="bee-buttons">
                            <a :href="$td('https://medium.com/@honeeapp/bee-staking-2-yield-up-to-20-in-apr-40a967eee243', 'bee.bee-saking-url')" class="btn btn-1" target="_blank" rel="nofollow">{{ $td('Staking', 'bee.bee-saking')}}</a>
                            <a :href="$td('https://honee.app/farming-pancakeswap-bnb-bee', 'bee.bee-farming-url')" class="btn btn-1" target="_blank">{{ $td('Farming', 'bee.bee-farming')}}</a>
                            <a class="btn btn-6" target="_blank" rel="nofollow">{{ $td('Vote-to-Earn', 'bee.bee-vote')}}</a>
                            <div class="bee-buttons-links">
                                {{ $td('Coming soon!', 'bee.bee-coming')}}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="referral">
                    <h2>{{ $td('Referral Program', 'bee.referral-title')}}</h2>
                    <template v-if="$i18n.locale === 'en'">
                        <p>Invite friends to Honee and get <b>10%</b> of their BEE staking rewards. Soon, we will launch more referral programs in Honee that will help you earn by sharing options offered by Honee with your friends.</p>
                    </template>
                    <template v-if="$i18n.locale === 'ru'">
                        <p>Приглашайте друзей в Honee и получайте <b>10%</b> от их вознаграждений за стейкинг BEE. Вскоре мы запустим в Honee еще больше реферальных программ, которые помогут вам зарабатывать, делясь с друзьями опциями, предлагаемыми Honee.</p>
                    </template>
                </div>
            </div>
        </section>
        <section class="where-buy">
            <div class="container">
                <h2>{{ $td('Where to buy?', 'bee.where-buy-title')}}</h2>
                <div class="bee-buttons">
                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x84b748b6a51548f3c1a59daf4f36df47ca7fb4b5" class="btn btn-1" target="_blank" rel="nofollow"><img src="/img/landing/bee-pancake.svg" alt="Buy on PancakeSwap"> {{ $td('Buy on PancakeSwap', 'bee.bee-pancake')}}</a>
                    <a :href="$td('https://my.honee.app/buy/BEE', 'bee.bee-honee-url')" class="btn btn-5" target="_blank"><img src="/img/honee.svg" alt="Buy in Honee"> {{ $td('Buy in Honee', 'bee.bee-honee')}}</a>
                </div>
            </div>
        </section>
    </div>
</template>
