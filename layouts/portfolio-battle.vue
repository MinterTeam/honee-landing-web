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
            class: 'default-layout portfolio-battle-html',
        },
    },
};
</script>

<template>
    <div class="wrapper page-landing portfolio-battle-layout">
        <div class="u-container u-container--wide header__language-container portfolio-battle-lang">
            <div class="header__logo"><a href="/" class="is-active-inner"><img src="/img/logo-honee-w.svg" alt="Honee" width="122" height="24" class="header__image-logo"></a></div>
            <Language/>
        </div>

        <nuxt/>

<!--        <Snackbar/>-->
    </div>
</template>
