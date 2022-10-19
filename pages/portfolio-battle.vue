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
                        <h1>{{ $td('Portfolios Battle from DeCenter & Honee', 'battle.hello-title')}}</h1>
                        <p class="subtitle-h1">{{ $td('October 24 – December 5', 'battle.hello-subtitle')}}</p>
                        <p>{{ $td('123', 'battle.hello-description')}}</p>
                        <div class="battle-buttons">
                            <a :href="$td('#', 'battle.join-url')" class="btn btn-1" target="_blank">{{ $td('Join the battle', 'battle.join')}}</a>
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
                            <source srcset="/img/landing/battle/prize-1.avif 1x, /img/landing/battle/prize-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/landing/battle/prize-1.webp 1x, /img/landing/battle/prize-1@2x.webp 2x" type="image/webp">
                            <img src="/img/landing/battle/prize-1.png" srcset="/img/landing/battle/prize-1@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="prize-img prize-img-1" />
                        </picture>
                        <div class="prizes-item-prize">{{ $td('up to', 'battle.prizes-before')}}<span>&nbsp;$200</span></div>
                        <div class="prizes-item-description">
                            <template v-if="$i18n.locale === 'en'">
                                <p>123</p>
                            </template>
                            <template v-if="$i18n.locale === 'ru'">
                                <p>Еженедельный приз <br />для Топ-3 портфелей</p>
                            </template>
                        </div>
                    </div>
                    <div class="prizes-item">
                        <picture>
                            <source srcset="/img/landing/battle/prize-2.avif 1x, /img/landing/battle/prize-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/landing/battle/prize-2.webp 1x, /img/landing/battle/prize-2@2x.webp 2x" type="image/webp">
                            <img src="/img/landing/battle/prize-2.png" srcset="/img/landing/battle/prize-2@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="prize-img prize-img-2" />
                        </picture>
                        <div class="prizes-item-prize"><span>100 <span class="prize-symbol">BEE</span></span></div>
                        <div class="prizes-item-description">
                            <template v-if="$i18n.locale === 'en'">
                                <p>123</p>
                            </template>
                            <template v-if="$i18n.locale === 'ru'">
                                <p>Еженедельный аирдроп <br />для Топ-100 прибыльных портфелей</p>
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
                                <p>123</p>
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
                    <p>123</p>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <h2>О битве портфелей</h2>
                    <p>Участники конкурса регистрируются на платформе Honee и на 100 виртуальных долларов создают свои портфели, выбрав наиболее перспективные на их взгляд. Каждую неделю выбирается Топ-3 лучших портфеля, которые получают фиксированные призы, а также сумму в виде <b>прибыли своего портфеля</b>. Кроме того, Топ-100 получают <b>гарантированный аирдроп</b>. Всего 6 недель, каждая неделя – новый рейтинг. В конце конкурса выбираются Топ-3 лучших портфеля за все время, которые забирают <b>главные призы</b> – полную стоимость своего портфеля.</p>
                    <h2>Как участвовать</h2>
                    <ol>
                        <li>Подпишитесь на Telegram-канал <a href="https://t.me/+bawyvNtF_MgwOTky" target="_blank" class="simple-link">Honee Pro</a>, в котором собираются все управляющие портфелей (условие обязательное)</li>
                        <li>Зарегистрируйтесь на платформе <a href="#" target="_blank" class="simple-link">Honee</a> (децентрализованный крипто-кошелек)</li>
                        <li>Создайте свой виртуальный крипто-портфель</li>
                        <li>При необходимости, в ходе битвы вы можете редактировать свой портфель, но не более 1 раза в сутки</li>
                        <li>Получите свой приз, если смогли показать максимальную прибыль за неделю</li>
                    </ol>
                    <p>Присоединиться к битве портфелей можно в любой момент на протяжении периода конкурса.</p>
                    <h2>Детали и правила</h2>
                    <ul>
                        <li>Присоединиться к битве портфелей можно в любой момент на протяжении периода конкурса</li>
                        <li>Участие бесплатное</li>
                        <li>Один пользователь - один портфель, мультиаккаунты запрещены</li>
                        <li>Редактирование портфеля доступно 1 раз в сутки</li>
                        <li>Портфель может состоять из 2 – 10 монет</li>
                        <li>Битвы проходят каждую неделю с 24 октября по 5 декабря, всего 6 недель (этапов)</li>
                        <li>Результаты замеряются за 7 дней, с 00:00 понедельника по 00:00 понедельника следующей недели</li>
                        <li>Цены криптовалют для портфелей транслируются из <a href="https://coinmarketcap.com/" target="_blank" rel="nofollow" class="simple-link">CoinMarketCap</a></li>
                    </ul>
                    <h2>Призы</h2>
                    <ul>
                        <li>Топ-3 портфеля каждой недели получают фиксированные призы: 3000 BEE, 2000 BEE и 1000 BEE</li>
                        <li>Топ-3 портфеля каждой недели забирают сумму полученной прибыли от виртуального депозита, но не более $100. Виртуальный депозит равен $100. Например, если за неделю портфель участника попал в Топ 3 и принес 20% прибыли, то участник получит $20.</li>
                        <li>Еженедельный айрдроп для Топ-100 участников в размере 100 BEE каждому</li>
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
                <h2>{{ $td('123', 'battle.top-title')}}</h2>
                <picture>
                    <source srcset="/img/landing/battle/top.avif 1x, /img/landing/battle/top@2x.avif 2x" type="image/avif">
                    <source srcset="/img/landing/battle/top.webp 1x, /img/landing/battle/top@2x.webp 2x" type="image/webp">
                    <img src="/img/landing/battle/top.png" srcset="/img/landing/battle/top@2x.png 2x" :alt="$td('Portfolios Battle from DeCenter & Honee', 'battle.alt')" class="top-img" />
                </picture>
                <div class="top-rating">
                    <div class="empty-table">{{ $td('The battle is about to begin...', 'battle.empty-table')}}</div>
                    <a :href="$td('#', 'battle.all-participants-url')" class="btn btn-1 btn-block" target="_blank">{{ $td('View all portfolios', 'battle.all-participants-button')}}</a>
                </div>
            </div>
        </section>
    </div>
</template>
