<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'copytrading',
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle(this.$td('Earn by copying expert trades', 'copytrading.title'));
        const description = this.$td('Honee wallet users earn up to 10% weekly by copying expert crypto portfolios.', 'copytrading.description');

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
    <div class="copytrading-landing">
        <header>
            <div class="container">
                <div class="hello">
                    <div class="hello-content">
                        <h1>{{ $td('Earn by copying expert trades', 'copytrading.hello-title')}}</h1>
                        <p>{{ $td('Honee wallet users earn up to 10% weekly by copying expert crypto portfolios.', 'copytrading.hello-description')}}</p>
                        <div class="buttons-block">
                            <a :href="$td('https://my.honee.app/', 'copytrading.join-url')" class="btn btn-1" target="_blank">{{ $td('Launch Honee', 'copytrading.join')}}</a>
                        </div>
                    </div>
                    <picture>
                        <source srcset="/img/landing/copytrading/hello.avif 1x, /img/landing/copytrading/hello@2x.avif 2x" type="image/avif">
                        <source srcset="/img/landing/copytrading/hello.webp 1x, /img/landing/copytrading/hello@2x.webp 2x" type="image/webp">
                        <img src="/img/landing/copytrading/hello.png" srcset="/img/landing/copytrading/hello@2x.png 2x" alt="" class="hello-image" role="presentation"/>
                    </picture>
                </div>
            </div>
        </header>
        <section class="how">
            <div class="container">
                <h2>{{ $td('How it Works', 'copytrading.how-title')}}</h2>
                <template v-if="$i18n.locale === 'en'">
                    <div class="how-block">
                        <div class="how-item">
                            <div class="how-item-img">
                                <img src="/img/landing/copytrading/how-1-bg.svg" alt="" class="how-item-bg how-item-1">
                                <picture>
                                    <source srcset="/img/landing/copytrading/how-1.avif 1x, /img/landing/copytrading/how-1@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/landing/copytrading/how-1.webp 1x, /img/landing/copytrading/how-1@2x.webp 2x" type="image/webp">
                                    <img src="/img/landing/copytrading/how-1.png" srcset="/img/landing/copytrading/how-1@2x.png 2x" alt="" role="presentation"/>
                                </picture>
                            </div>
                            <div>Create and top up <br>a wallet in Honee</div>
                        </div>
                        <div class="how-item how-item-center">
                            <div class="how-item-img">
                                <img src="/img/landing/copytrading/how-2-bg.svg" alt="" class="how-item-bg how-item-2">
                                <picture>
                                    <source srcset="/img/landing/copytrading/how-2.avif 1x, /img/landing/copytrading/how-2@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/landing/copytrading/how-2.webp 1x, /img/landing/copytrading/how-2@2x.webp 2x" type="image/webp">
                                    <img src="/img/landing/copytrading/how-2.png" srcset="/img/landing/copytrading/how-2@2x.png 2x" alt="" role="presentation"/>
                                </picture>
                            </div>
                            <div>Buy a crypto portfolio <br>managed by experts *</div>
                        </div>
                        <div class="how-item">
                            <div class="how-item-img">
                                <img src="/img/landing/copytrading/how-3-bg.svg" alt="" class="how-item-bg how-item-3">
                                <picture>
                                    <source srcset="/img/landing/copytrading/how-3.avif 1x, /img/landing/copytrading/how-3@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/landing/copytrading/how-3.webp 1x, /img/landing/copytrading/how-3@2x.webp 2x" type="image/webp">
                                    <img src="/img/landing/copytrading/how-3.png" srcset="/img/landing/copytrading/how-3@2x.png 2x" alt="" role="presentation"/>
                                </picture>
                            </div>
                            <div>Subscribe to never miss <br>out on portfolio edits</div>
                        </div>
                        <div class="how-item how-item-center">
                            <div class="how-item-img">
                                <img src="/img/landing/copytrading/how-4-bg.svg" alt="" class="how-item-bg how-item-4">
                                <picture>
                                    <source srcset="/img/landing/copytrading/how-4.avif 1x, /img/landing/copytrading/how-4@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/landing/copytrading/how-4.webp 1x, /img/landing/copytrading/how-4@2x.webp 2x" type="image/webp">
                                    <img src="/img/landing/copytrading/how-4.png" srcset="/img/landing/copytrading/how-4@2x.png 2x" alt="" role="presentation"/>
                                </picture>
                            </div>
                            <div>Update your portfolios to <br>maximise profit or avoid losses</div>
                        </div>
                        <div class="how-item">
                            <div class="how-item-img">
                                <img src="/img/landing/copytrading/how-5-bg.svg" alt="" class="how-item-bg how-item-5">
                                <picture>
                                    <source srcset="/img/landing/copytrading/how-5.avif 1x, /img/landing/copytrading/how-5@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/landing/copytrading/how-5.webp 1x, /img/landing/copytrading/how-5@2x.webp 2x" type="image/webp">
                                    <img src="/img/landing/copytrading/how-5.png" srcset="/img/landing/copytrading/how-5@2x.png 2x" alt="" role="presentation"/>
                                </picture>
                            </div>
                            <div>Sell portfolio for a profit <br>when the price seems right</div>
                        </div>
                    </div>
                    <p>* Please read the disclaimer at the bottom before you start any investments in cryptocurrencies.</p>
                </template>
                <template v-if="$i18n.locale === 'ru'">
                    <div class="how-block">
                        <div class="how-item">
                            <div class="how-item-img">
                                <img src="/img/landing/copytrading/how-1-bg.svg" alt="" class="how-item-bg how-item-1">
                                <picture>
                                    <source srcset="/img/landing/copytrading/how-1-ru.avif 1x, /img/landing/copytrading/how-1-ru@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/landing/copytrading/how-1-ru.webp 1x, /img/landing/copytrading/how-1-ru@2x.webp 2x" type="image/webp">
                                    <img src="/img/landing/copytrading/how-1-ru.png" srcset="/img/landing/copytrading/how-1-ru@2x.png 2x" alt="" role="presentation"/>
                                </picture>
                            </div>
                            <div>Создайте и пополните <br>кошелек в Honee</div>
                        </div>
                        <div class="how-item how-item-center">
                            <div class="how-item-img">
                                <img src="/img/landing/copytrading/how-2-bg.svg" alt="" class="how-item-bg how-item-2">
                                <picture>
                                    <source srcset="/img/landing/copytrading/how-2-ru.avif 1x, /img/landing/copytrading/how-2-ru@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/landing/copytrading/how-2-ru.webp 1x, /img/landing/copytrading/how-2-ru@2x.webp 2x" type="image/webp">
                                    <img src="/img/landing/copytrading/how-2-ru.png" srcset="/img/landing/copytrading/how-2-ru@2x.png 2x" alt="" role="presentation"/>
                                </picture>
                            </div>
                            <div>Купите крипто-портфель, <br>управляемый экспертом *</div>
                        </div>
                        <div class="how-item">
                            <div class="how-item-img">
                                <img src="/img/landing/copytrading/how-3-bg.svg" alt="" class="how-item-bg how-item-3">
                                <picture>
                                    <source srcset="/img/landing/copytrading/how-3.avif 1x, /img/landing/copytrading/how-3@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/landing/copytrading/how-3.webp 1x, /img/landing/copytrading/how-3@2x.webp 2x" type="image/webp">
                                    <img src="/img/landing/copytrading/how-3.png" srcset="/img/landing/copytrading/how-3@2x.png 2x" alt="" role="presentation"/>
                                </picture>
                            </div>
                            <div>Подпишитесь на уведомления, <br>чтобы не пропустить изменения портфеля</div>
                        </div>
                        <div class="how-item how-item-center">
                            <div class="how-item-img">
                                <img src="/img/landing/copytrading/how-4-bg.svg" alt="" class="how-item-bg how-item-4">
                                <picture>
                                    <source srcset="/img/landing/copytrading/how-4-ru.avif 1x, /img/landing/copytrading/how-4-ru@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/landing/copytrading/how-4-ru.webp 1x, /img/landing/copytrading/how-4-ru@2x.webp 2x" type="image/webp">
                                    <img src="/img/landing/copytrading/how-4-ru.png" srcset="/img/landing/copytrading/how-4-ru@2x.png 2x" alt="" role="presentation"/>
                                </picture>
                            </div>
                            <div>Обновляйте свои портфели, чтобы <br>максимизировать прибыль <br>или избежать убытков</div>
                        </div>
                        <div class="how-item">
                            <div class="how-item-img">
                                <img src="/img/landing/copytrading/how-5-bg.svg" alt="" class="how-item-bg how-item-5">
                                <picture>
                                    <source srcset="/img/landing/copytrading/how-5-ru.avif 1x, /img/landing/copytrading/how-5-ru@2x.avif 2x" type="image/avif">
                                    <source srcset="/img/landing/copytrading/how-5-ru.webp 1x, /img/landing/copytrading/how-5-ru@2x.webp 2x" type="image/webp">
                                    <img src="/img/landing/copytrading/how-5-ru.png" srcset="/img/landing/copytrading/how-5-ru@2x.png 2x" alt="" role="presentation"/>
                                </picture>
                            </div>
                            <div>Продайте портфель с прибылью, <br>когда его стоимость увеличилась</div>
                        </div>
                    </div>
                    <p>* Пожалуйста, прочитайте заявление об отказе от ответственности внизу, прежде чем начинать какие-либо инвестиции в криптовалюты.</p>
                </template>
            </div>
        </section>
        <section class="top-portfilios">
            <div class="container">
                <!--<h2>{{ $td('Top Performing Portfolios', 'copytrading.top-portfilios-title')}}</h2>
                <div class="portfilios-grid">
                    
                </div>-->
                <a :href="$td('https://my.honee.app/portfolio', 'copytrading.portfolios-url')" class="btn btn-1" target="_blank">{{ $td('Explore expert portfolios', 'copytrading.portfolios')}}</a>
            </div>
        </section>
    </div>
</template>
