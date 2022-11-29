<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        paths: {
            ru: '/luchshij-koshelek-dlya-cake-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Лучший кошелек для CAKE в 2022');
        const description = 'Выгодно хранить и приумножить токены CAKE вам поможет Honee — лучший кошелек, который зарабатывает CAKE в 2022 году без вашего участия.';

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
                    <h1>Лучший кошелек для CAKE в 2022 году</h1>
                    <h2>Что такое CAKE?</h2>
                    <p class="subtitle-h1">CAKE — токен DeFi-платформы PancakeSwap, который был создан, чтобы помогать своим пользователям участвовать в управлении площадкой посредством голосования. В этом руководстве мы расскажем, как запустить и настроить лучший кошелек для хранения CAKE в 2022 году.</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/cake/logo-cake.png" srcset="/img/articles/cake/logo-cake@2x.png 2x" alt="лучший cake кошелек 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Название</div>
                                <b>PancakeSwap</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Символ</div>
                                <b>CAKE</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Макс. эмиссия</div>
                                <b>не ограничена</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://pancakeswap.finance/" target="_blank" rel="nofollow">Сайт</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://bscscan.com/" target="_blank" rel="nofollow">Просмотрщик</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://docs.pancakeswap.finance/tokenomics/cake" target="_blank" rel="nofollow">О токене</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/pancakeswap/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <p>Всего несколько кликов отделяют вас от создания верного помощника в заработке и надежном хранении ваших криптоактивов. Чтобы начать пользоваться всеми преимуществами, перейдите на <a href="/">страницу</a> с кошельком Honee и пройдите простой процесс регистрации.</p>
                    <p><b>Смарт-контракт CAKE в BNB Chain:</b><br>
                    <a href="https://bscscan.com/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" target="_blank" rel="nofollow">bscscan.com/token/0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82</a>
                    </p>
                    <p><b>Смарт-контракт Minter Hub:</b><br>
                    <a href="https://bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f" target="_blank" rel="nofollow">bscscan.com/address/0xf5b0ed82a0b3e11567081694cc66c3df133f7c8f</a>
                    </p>
                </section>
                <section>
                    <h2>Как создать лучший кошелек для CAKE в 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Находясь на главной странице, нажмите на кнопку «Зарегистрируйтесь»;</li>
                                <li>Надежно сохраните вашу seed-фразу и сделайте ее резервную копию. Помните, что она является единственным ключом к вашим активам;</li>
                                <li>Поставьте галочку рядом с пунктом «Я сохранил фразу»;</li>
                                <li>Запустите ваш первый кошелек.</li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-1inch-1-ru.avif 1x, /img/articles/buy-1inch-1-ru@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-1inch-1-ru.webp 1x, /img/articles/buy-1inch-1-ru@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-1inch-1-ru.png" srcset="/img/articles/buy-1inch-1-ru@2x.png 2x" alt="как создать CAKE PancakeSwap кошелек 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Криптокошелек Honee был создан для того, чтобы ваш заработок был простым, а хранение криптовалют — максимально безопасным. Создайте ваш лучший кошелек для CAKE уже сейчас и забудьте про запутанные схемы при хранении ваших средств!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
