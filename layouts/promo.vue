<script>
import Language from '~/components/base/Language.vue';
// import Snackbar from '~/components/base/Snackbar.vue';

export default {
    components: {
        Language,
        // Snackbar,
    },
    head: {
        htmlAttrs: {
            class: 'promo-layout',
        },
    },
};
</script>

<template>
    <div class="wrapper page-landing">
        <div class="u-container u-container--wide header__language-container promo-lang">
            <div class="header__logo"><a :href="$i18nGetPreferredPath('/')" class="is-active-inner"><img src="/img/logo-honee.svg" alt="Honee" width="122" height="24" class="header__image-logo"></a></div>
            <Language/>
        </div>

        <nuxt/>

    </div>
</template>
