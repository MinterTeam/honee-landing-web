<script>
import TheFooter from '~/layouts/_footer.vue';
import Language from '~/components/base/Language.vue';
// import Snackbar from '~/components/base/Snackbar.vue';

export default {
    components: {
        TheFooter,
        Language,
        // Snackbar,
    },
    head: {
        htmlAttrs: {
            class: 'default-layout',
        },
    },
};
</script>

<template>
    <div class="wrapper page-landing">
        <div class="u-container u-container--wide header__language-container">
            <Language/>
        </div>
            <div class="container">
                <div class="article-promo">
                    <div class="article-promo-item article-promo-item-big">
                        <a href="https://t.me/MetagardenBot?start=start" target="_blank">
                            <picture>
                                <source srcset="/img/articles/promo/art-banner-4.avif 1x, /img/articles/promo/art-banner-4@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/promo/art-banner-4.webp 1x, /img/articles/promo/art-banner-4@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/promo/art-banner-4.png" srcset="/img/articles/promo/art-banner-4@2x.png 2x" alt="Получи $10 после регистрации на платформе крипто-игр для Telegram" width="100%" wrole="presentation"/>
                            </picture>
                            <div class="article-promo-item-title">Получи $10 после регистрации на платформе крипто-игр для Telegram</div>
                        </a>
                    </div>
                </div>
            </div>
        <nuxt/>

        <TheFooter/>
<!--        <Snackbar/>-->
    </div>
</template>
