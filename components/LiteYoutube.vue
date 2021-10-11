<script>
import Vue from 'vue';
// import 'lite-youtube-embed';

Vue.config.ignoredElements = Vue.config.ignoredElements || [];
Vue.config.ignoredElements.push('lite-youtube');

export default {
    props: {
        videoId: {
            type: String,
            required: true,
        },
    },
    mounted() {
        import('lite-youtube-embed');
    },
};
</script>

<template>
    <lite-youtube
        :videoid="videoId"
        params="rel=0"
        :style="`background-image: url(https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg);`"
    ></lite-youtube>
</template>
