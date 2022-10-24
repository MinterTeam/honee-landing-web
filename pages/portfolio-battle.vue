<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'portfolio-battle',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Portfolios Battle from DeCenter & Honee', 'battle.title'));
        const description = this.$td('Porfolio battle', 'battle.description');

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
    <div class="battle-landing">
        <header>
            <picture>
                <source srcset="/img/landing/battle/p1.avif 1x, /img/landing/battle/p1@2x.avif 2x" type="image/avif">
                <source srcset="/img/landing/battle/p1.webp 1x, /img/landing/battle/p1@2x.webp 2x" type="image/webp">
                <img src="/img/landing/battle/p1.png" srcset="/img/landing/battle/p1@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="hello-image-1" role="presentation"/>
            </picture>
            <picture>
                <source srcset="/img/landing/battle/p2.avif 1x, /img/landing/battle/p2@2x.avif 2x" type="image/avif">
                <source srcset="/img/landing/battle/p2.webp 1x, /img/landing/battle/p2@2x.webp 2x" type="image/webp">
                <img src="/img/landing/battle/p2.png" srcset="/img/landing/battle/p2@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="hello-image-2" role="presentation"/>
            </picture>
            <picture>
                <source srcset="/img/landing/battle/p3.avif 1x, /img/landing/battle/p3@2x.avif 2x" type="image/avif">
                <source srcset="/img/landing/battle/p3.webp 1x, /img/landing/battle/p3@2x.webp 2x" type="image/webp">
                <img src="/img/landing/battle/p3.png" srcset="/img/landing/battle/p3@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="hello-image-3" role="presentation"/>
            </picture>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <h1>{{ $td('Porfolio Battle', 'battle.hello-title')}}</h1>
                        <p class="subtitle-h1">{{ $td('October 24 — December 5', 'battle.hello-subtitle')}}</p>
                        <p>{{ $td('Prizes and airdrops every week. You can take part at any time. The prize pool is over $8500!', 'battle.hello-description')}}</p>
                        <div class="battle-buttons">
                            <a :href="$td('https://my.honee.app/auth/battle', 'battle.join-url')" class="btn btn-1" target="_blank">{{ $td('Join the Battle', 'battle.join')}}</a>
                            <div class="battle-buttons-links">
                                <a :href="$td('https://t.me/+bawyvNtF_MgwOTky', 'battle.tg-url')" target="_blank"><img src="/img/landing/battle/share-telegram.svg" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')">{{ $td('Subscribe to the channel', 'battle.channel')}}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section class="prizes">
            <div class="container">
                <div class="prizes-items">
                    <div class="prizes-item">
                        <picture>
                            <source srcset="/img/landing/battle/prize-2.avif 1x, /img/landing/battle/prize-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/landing/battle/prize-2.webp 1x, /img/landing/battle/prize-2@2x.webp 2x" type="image/webp">
                            <img src="/img/landing/battle/prize-2.png" srcset="/img/landing/battle/prize-2@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="prize-img prize-img-2" />
                        </picture>
                        <div class="prizes-item-prize"><span>100 <span class="prize-symbol">BEE</span></span></div>
                        <div class="prizes-item-description">
                            <template v-if="$i18n.locale === 'en'">
                                <p>Weekly Airdrop <br />for Top 100 Profitable Portfolios</p>
                            </template>
                            <template v-if="$i18n.locale === 'ru'">
                                <p>Еженедельный аирдроп <br />для Топ-100 прибыльных портфелей</p>
                            </template>
                        </div>
                    </div>
                    <div class="prizes-item">
                        <picture>
                            <source srcset="/img/landing/battle/prize-1.avif 1x, /img/landing/battle/prize-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/landing/battle/prize-1.webp 1x, /img/landing/battle/prize-1@2x.webp 2x" type="image/webp">
                            <img src="/img/landing/battle/prize-1.png" srcset="/img/landing/battle/prize-1@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="prize-img prize-img-1" />
                        </picture>
                        <div class="prizes-item-prize">{{ $td('up to', 'battle.prizes-before')}}<span>&nbsp;$200</span></div>
                        <div class="prizes-item-description">
                            <template v-if="$i18n.locale === 'en'">
                                <p>Weekly Prize <br />for Top 3 Portfolios</p>
                            </template>
                            <template v-if="$i18n.locale === 'ru'">
                                <p>Еженедельный приз <br />для Топ-3 портфелей</p>
                            </template>
                        </div>
                    </div>
                    <div class="prizes-item">
                        <picture>
                            <source srcset="/img/landing/battle/prize-3.avif 1x, /img/landing/battle/prize-3@2x.avif 2x" type="image/avif">
                            <source srcset="/img/landing/battle/prize-3.webp 1x, /img/landing/battle/prize-3@2x.webp 2x" type="image/webp">
                            <img src="/img/landing/battle/prize-3.png" srcset="/img/landing/battle/prize-3@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="prize-img prize-img-3" />
                        </picture>
                        <div class="prizes-item-prize">{{ $td('up to', 'battle.prizes-before')}}<span>&nbsp;$1000</span></div>
                        <div class="prizes-item-description">
                            <template v-if="$i18n.locale === 'en'">
                                <p>Grand Prize <br />for Top 3 Portfolios</p>
                            </template>
                            <template v-if="$i18n.locale === 'ru'">
                                <p>Главный приз <br />для Топ-3 портфелей</p>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="rules">
            <div class="container">
                <template v-if="$i18n.locale === 'en'">
                    <h2>About the portfolio battle</h2>
                    <p>Contest participants register on the Honee platform and create their portfolios with 100 virtual dollars, choosing the coins they think are the most promising. Every week, the top 3 best portfolios are selected, who receive fixed prizes, as well as an amount in the form <b>of their portfolio's profit</b>. In addition, the Top 100 receive a <b>guaranteed airdrop</b>. The tournament goes for 6 weeks, every week is a new rating. At the end of the competition, the top 3 best portfolios of all time are going to be selected, they will take <b>the main prizes</b> — the full value of their portfolios.</p>
                    <h2>Participation is very easy</h2>
                    <ol>
                        <li>Subscribe to the <a href="https://t.me/+bawyvNtF_MgwOTky" target="_blank" class="simple-link">Honee Pro</a> Telegram channel, which gathers all portfolio managers;</li>
                        <li>Register on the <a href="#" target="_blank" class="simple-link">Honee.app</a> platform (decentralized crypto wallet) and create your virtual crypto portfolio;</li>
                        <li>If necessary, during the battle you can edit your portfolio, but no more than 1 time per day;</li>
                        <li>Get your prize if you were able to show the maximum profit for the week.</li>
                    </ol>
                    <h2>Details and rules</h2>
                    <ul>
                        <li>You can join the portfolio battle at any time during the competition period;</li>
                        <li>Participation is free;</li>
                        <li>One user — one portfolio, multi-accounts are prohibited. If a violation of the rules is suspected, prize payments may be denied. We are for fair play!;</li>
                        <li>Portfolio editing is available once a day;</li>
                        <li>The portfolio can consist of 2-10 coins;</li>
                        <li>Battles take place every week from October 24 to December 5, in total 6 weeks (stages);</li>
                        <li>The results are measured for 7 days, from 00:00 Monday to 00:00 Monday of the following week;</li>
                        <li>Cryptocurrency prices for portfolios are streamed from <a href="https://coinmarketcap.com/" target="_blank" rel="nofollow" class="simple-link">CoinMarketCap</a>.</li>
                    </ul>
                    <h2>Prizes</h2>
                    <ul>
                        <li>Top 3 portfolios each week receive fixed prizes: 3000 BEE, 2000 BEE and 1000 BEE;</li>
                        <li>The Top 3 portfolios of each week take the amount of profit received from the virtual deposit, but not more than $100. The virtual deposit is $100. For example, if a participant's portfolio got into the Top 3 in a week and brought 20% profit, then the participant will receive $20;</li>
                        <li>Top 100 profitable portfolios weekly receive the airdrop of 100 BEE each;</li>
                        <li>Grand Prizes: The top 3 portfolios of all time turn their virtual portfolio into real money! For example, if the winner made $1000 with virtual $100, then they will receive the entire amount (deposit + profit) in the amount of $1000. The main prize is capped at $1,000 per winner. Top 3 is formed from the best results for all tournament weeks.</li>
                    </ul>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <h2>О битве портфелей</h2>
                    <p>Участники конкурса регистрируются на платформе Honee и на 100 виртуальных долларов создают свои портфели, выбрав наиболее перспективные на их взгляд монеты. Каждую неделю выбирается Топ-3 лучших портфеля, которые получают фиксированные призы, а также сумму в виде <b>прибыли своего портфеля</b>. Кроме того, Топ-100 получают <b>гарантированный аирдроп</b>. Всего 6 недель, каждая неделя – новый рейтинг. В конце конкурса выбираются Топ-3 лучших портфеля за все время, которые забирают <b>главные призы</b> – полную стоимость своего портфеля.</p>
                    <h2>Участвовать максимально просто</h2>
                    <ol>
                        <li>Подпишитесь на Telegram-канал <a href="https://t.me/+bawyvNtF_MgwOTky" target="_blank" class="simple-link">Honee Pro</a>, в котором собираются все управляющие портфелей;</li>
                        <li>Зарегистрируйтесь на платформе <a href="#" target="_blank" class="simple-link">Honee.app</a> (децентрализованный крипто-кошелек) и создайте свой виртуальный крипто-портфель;</li>
                        <li>При необходимости, в ходе битвы вы можете редактировать свой портфель, но не более 1 раза в сутки;</li>
                        <li>Получите свой приз, если смогли показать максимальную прибыль за неделю.</li>
                    </ol>
                    <h2>Детали и правила</h2>
                    <ul>
                        <li>Присоединиться к битве портфелей можно в любой момент на протяжении периода конкурса;</li>
                        <li>Участие бесплатное;</li>
                        <li>Один пользователь - один портфель, мультиаккаунты запрещены. При подозрении в нарушении правил, в призовых выплатах может быть отказано. Мы за честную игру!;</li>
                        <li>Редактирование портфеля доступно 1 раз в сутки;</li>
                        <li>Портфель может состоять из 2 – 10 монет;</li>
                        <li>Битвы проходят каждую неделю с 24 октября по 5 декабря, всего 6 недель (этапов);</li>
                        <li>Результаты замеряются за 7 дней, с 00:00 понедельника по 00:00 понедельника следующей недели;</li>
                        <li>Цены криптовалют для портфелей транслируются из <a href="https://coinmarketcap.com/" target="_blank" rel="nofollow" class="simple-link">CoinMarketCap</a>.</li>
                    </ul>
                    <h2>Призы</h2>
                    <ul>
                        <li>Топ-3 портфеля каждой недели получают фиксированные призы: 3000 BEE, 2000 BEE и 1000 BEE;</li>
                        <li>Топ-3 портфеля каждой недели забирают сумму полученной прибыли от виртуального депозита, но не более $100. Виртуальный депозит равен $100. Например, если за неделю портфель участника попал в Топ 3 и принес 20% прибыли, то участник получит $20;</li>
                        <li>Еженедельный айрдроп для Топ-100 участников в размере 100 BEE каждому;</li>
                        <li>Главные призы: Топ-3 лучших портфеля за все время превращают свой виртуальный портфель в реальные деньги! Например, если победитель с виртуальных $100 сделал $1000, то он получит всю сумму (депозит + прибыль) в размере $1000. Главный приз оганичен $1000 на одного победителя. Топ-3 формируется из лучших результатов за неделю всех участников.</li>
                    </ul>
                </template>
            </div>
        </section>
        <section class="top">
            <picture>
                <source srcset="/img/landing/battle/top-2.avif 1x, /img/landing/battle/top-2@2x.avif 2x" type="image/avif">
                <source srcset="/img/landing/battle/top-2.webp 1x, /img/landing/battle/top-2@2x.webp 2x" type="image/webp">
                <img src="/img/landing/battle/top-2.png" srcset="/img/landing/battle/top-2@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="top-img-2" />
            </picture>
            <picture>
                <source srcset="/img/landing/battle/top-3.avif 1x, /img/landing/battle/top-3@2x.avif 2x" type="image/avif">
                <source srcset="/img/landing/battle/top-3.webp 1x, /img/landing/battle/top-3@2x.webp 2x" type="image/webp">
                <img src="/img/landing/battle/top-3.png" srcset="/img/landing/battle/top-3@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="top-img-3" />
            </picture>
            <div class="container">
                <h2>{{ $td('Top 10 portfolios', 'battle.top-title')}}</h2>
                <picture>
                    <source srcset="/img/landing/battle/top.avif 1x, /img/landing/battle/top@2x.avif 2x" type="image/avif">
                    <source srcset="/img/landing/battle/top.webp 1x, /img/landing/battle/top@2x.webp 2x" type="image/webp">
                    <img src="/img/landing/battle/top.png" srcset="/img/landing/battle/top@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="top-img" />
                </picture>
                <div class="top-rating">
                    <div class="empty-table">{{ $td('The battle is about to begin...', 'battle.empty-table')}}</div>
                    <a :href="$td('https://my.honee.app/auth/battle', 'battle.join-url')" class="btn btn-1 btn-block" target="_blank">{{ $td('Join the Battle', 'battle.join')}}</a>
                </div>
            </div>
        </section>
    </div>
</template>
