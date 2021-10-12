<script>
export default {
    layout: 'clean',
    fetchOnServer: false,
    fetch() {
        const location = window.location.toString();
        if (location.includes('://honee.app') && location.includes('/dashboard')) {
            window.location = location.replace('://honee.app', '://my.honee.app').replace('/dashboard', '');
        } else {
            return this.$router.replace(this.$i18nGetPreferredPath('/'));
        }
    },
};
</script>

<template>
    <div class="u-section">
        <h3>Redirecting…</h3>
    </div>
</template>
