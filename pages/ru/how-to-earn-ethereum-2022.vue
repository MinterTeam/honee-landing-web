<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        paths: {
            ru: '/kak-zarabotat-efirium-2022',
        },
        locales: ['ru'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('Как заработать Эфириум 2022');
        const description = 'Когда дело дойдет до того, как заработать Эфириум в 2022 году, у Honee будет широкий спектр DeFi-инструментов, таких как майнинг ликвидностью и доходное фермерство. Это не говоря уже о более традиционных способах, например, старом добром трейдинге или лотереях.';

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
                    <h1>Как заработать Эфириум в 2022</h1>
                    <p class="subtitle-h1">Ethereum (ETH) — одна из самых крупных по капитализации криптовалют, о которой знает каждый крипто-инвестор. Ни один портфель не обходится без этой монеты, а значит, каждый хотел бы знать, как заработать Эфириум или получать доход с помощью него. Honee — современный крипто-кошелек, который позволяет не только покупать и хранить Эфир, но и зарабатывать с помощью различных программ. Honee будет собирать разные программы для получения дохода, пользователю нужно лишь подключиться к наиболее понравившимся.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2>Как заработать Эфириум 2022</h2>
                        <h3>Торговля ETH</h3>
                        <p>Наиболее популярная стратегия заработка Эфира — торговля. Покупая ETH дешевле и продавая дороже, вы сможете увеличить свой депозит. Honee обладает удобными инструментами обмена любых токенов, что делает трейдинг быстрым и простым.</p>
                        <p>Зайдя в интерфейс, нужно выбрать имеющиеся токены для продажи (в Honee доступны все популярные стейблкоины), указать сумму — и кошелек отобразит количество получаемого Эфира и, конечно, цену покупки.</p>
                    </div>
                    <div class="article-picture-box-img earn-bitcoin-1">
                        <picture>
                            <source srcset="/img/articles/earn-ethereum-1.avif 1x, /img/articles/earn-ethereum-1@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-ethereum-1.webp 1x, /img/articles/earn-ethereum-1@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-ethereum-1.png" srcset="/img/articles/earn-ethereum-1@2x.png 2x" alt="как заработать эфириум 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-picture-box box-reverse">
                    <div class="article-picture-box-content">
                        <h3>Майнинг ликвидностью Эфира</h3>
                        <p>Пожалуй, вторым по популярности вариантом заработка является получение комиссии в пулах ликвидности, занявшее свое коронное место в DeFi-сегменте. Поставщики ликвидности ETH зарабатывают комиссионные сборы, которые трейдеры оплачивают, совершая транзакции обменов в пулах. Приведем пример: вы являетесь участником пула ETH-USDT, обладая некоторой долей ликвидности. Трейдер, совершая обмен в этом пуле, оплачивает комиссионные сборы в токене Эфириума, тем самым увеличивая пул и делая его богаче. Вы, как поставщик ликвидности, имеете право на получение доли от этой комиссии, равной вашей доли от суммарной ликвидности всех поставщиков. Для получения заработанной комиссии остается только забрать ее из пула, совершив соответствующую операцию отзыва ликвидности.</p>
                        <p>Для того, чтобы стать участником пула с Эфириумом, необходимо выбрать нужную карточку в кошельке Honee и добавить ликвидность в соответствующих токенах. Важным параметром оценки пула является показатель APY — годовая доходность, с помощью которой можно понять, сколько комиссий поступает в пул в текущий момент.</p>
                    </div>
                    <div class="article-picture-box-img earn-bitcoin-2">
                        <picture>
                            <source srcset="/img/articles/earn-ethereum-2.avif 1x, /img/articles/earn-ethereum-2@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-ethereum-2.webp 1x, /img/articles/earn-ethereum-2@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-ethereum-2.png" srcset="/img/articles/earn-ethereum-2@2x.png 2x" alt="как заработать эфир 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section>
                    <h3>Доходное фермерство Эфира</h3>
                    <p>Фарминг представляет собой дополнительную программу заработка для поставщиков ликвидности Эфириума. Фарминг-программы являются временными и в большинстве случаев имеют дату окончания. Во время фарминга участники пулов будут каждый день получать доход как поощрение за предоставление ликвидности.</p>
                    <p>Важнейшим показателем доходности является APR — годовой процент доходности. К примеру, если <b>APR = 36.6%</b>, то каждый провайдер будет ежедневно получать <b>0.1%</b> от предоставленной ликвидности в пулах с Эфиром. Если ликвидность поставщика равна <b>$1 000</b>, то заработок составит $1 каждый день.</p>
                </section>
                <section class="article-picture-box">
                    <div class="article-picture-box-content">
                        <h2>Как заработать Эфириум без вложений 2022</h2>
                        <p>Способ заработать Эфириум без вложений — это лотереи для провайдеров ликвидности. Ежедневно разыгрывается фиксированный или процентный приз, который получает один рандомный участник пула с Эфиром. Количество ETH в пуле прямо влияет на шансы в розыгрыше, поэтому крупные провайдеры имеют больше шансов на победу.</p>
                    </div>
                    <div class="article-picture-box-img earn-bitcoin-3">
                        <picture>
                            <source srcset="/img/articles/earn-ethereum-3.avif 1x, /img/articles/earn-ethereum-3@2x.avif 2x" type="image/avif">
                            <source srcset="/img/articles/earn-ethereum-3.webp 1x, /img/articles/earn-ethereum-3@2x.webp 2x" type="image/webp">
                            <img src="/img/articles/earn-ethereum-3.png" srcset="/img/articles/earn-ethereum-3@2x.png 2x" alt="Эфириум без вложений 2022" role="presentation"/>
                        </picture>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">Мы разобрали основные способы того, как заработать Эфириум. В 2022 году приложение Honee выйдет в релизной версии, поэтому следите за появлением новых карточек, помогающих зарабатывать!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
