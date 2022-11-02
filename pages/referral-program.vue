<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'ref',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Multilevel referral program', 'ref.title'));
        const description = this.$td('Invite your friends to Honee and get rewards from their staking amounts.', 'battle.description');

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
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <h1>{{ $td('Multilevel referral program', 'ref.hello-title')}}</h1>
                        <p>{{ $td('Invite your friends to Honee and get rewards from their staking amounts.', 'ref.hello-description')}}</p>
                        <div class="ref-buttons">
                            <a :href="$td('#', 'ref.join-url')" class="btn btn-1" target="_blank">{{ $td('Learn more', 'ref.join')}}</a>
                        </div>
                    </div>
                    <picture>
                        <source srcset="/img/landing/ref/hello.avif 1x, /img/landing/ref/hello@2x.avif 2x" type="image/avif">
                        <source srcset="/img/landing/ref/hello.webp 1x, /img/landing/ref/hello@2x.webp 2x" type="image/webp">
                        <img src="/img/landing/ref/hello.png" srcset="/img/landing/ref/hello@2x.png 2x" alt="" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <section class="levels">
            <div class="container">
                <h2>{{ $td('Referral reward levels:', 'ref.levels-title')}}</h2>
                <div class="levels-block">
                    <div class="levels-item">
                        {{ $td('Level', 'ref.levels-item')}} 1
                        <div>10%</div>
                    </div>
                    <img src="/img/landing/ref/lvl-right.png" alt="">
                    <div class="levels-item">
                        {{ $td('Level', 'ref.levels-item')}} 2
                        <div>10%</div>
                    </div>
                    <img src="/img/landing/ref/lvl-right.png" alt="">
                    <div class="levels-item">
                        {{ $td('Level', 'ref.levels-item')}} 3
                        <div>10%</div>
                    </div>
                    <img src="/img/landing/ref/lvl-right.png" alt="">
                    <div class="levels-item">
                        {{ $td('Level', 'ref.levels-item')}} 4
                        <div>10%</div>
                    </div>
                    <img src="/img/landing/ref/lvl-right.png" alt="">
                    <div class="levels-item">
                        {{ $td('Level', 'ref.levels-item')}} 5
                        <div>10%</div>
                    </div>
                </div>
            </div>
        </section>
        <section class="details">
            <div class="container">
                <template v-if="$i18n.locale === 'en'">
                    <p><b>Payouts are instant</b>. The program is valid for staking: <b>HUB</b>, <b>BEE</b> and <b>MUSD</b> tokens.</p>
                    <p>Required time duration for staking tokens by your referrals:</p>
                    <p class="details-coins">
                        <span><img src="/img/landing/ref/bee.svg" alt="BEE" style="width:24px;height:24px"><b>BEE</b> – 3 years</span>
                        <span><img src="/img/landing/ref/hub.svg" alt="HUB" style="width:24px;height:24px"><b>HUB</b> – 5 years</span>
                        <span><img src="/img/landing/ref/musd.svg" alt="MUSD" style="width:24px;height:24px"><b>MUSD</b> – 3 years</span>
                    </p>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <p>Выплаты <b>мгновенные</b>. Программа действует для стейкинга токенов: <b>HUB</b>, <b>BEE</b> и <b>MUSD</b>.</p>
                    <p>Необходимые сроки стейкинга токенов вашими рефератами для выплат наград:</p>
                    <p class="details-coins">
                        <span><img src="/img/landing/ref/bee.svg" alt="BEE" style="width:24px;height:24px"><b>BEE</b> – 3 года</span>
                        <span><img src="/img/landing/ref/hub.svg" alt="HUB" style="width:24px;height:24px"><b>HUB</b> – 5 лет</span>
                        <span><img src="/img/landing/ref/musd.svg" alt="MUSD" style="width:24px;height:24px"><b>MUSD</b> – 3 года</span>
                    </p>
                </template>
            </div>
        </section>
    </div>
</template>
