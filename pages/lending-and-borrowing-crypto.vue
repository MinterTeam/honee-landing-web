<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    nuxtI18n: {
        locales: ['en'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('How to lending and borrowing crypto');
        const description = 'Honee crypto wallet users have the opportunity to lending and borrowing cryptocurrency.';

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
                        <span>Share</span>
                        <a href="https://twitter.com/intent/tweet?url=https://honee.app/lending-and-borrowing-crypto&text=How+to+lending+and+borrowing+crypto" target="_blank" rel="nofollow"><img src="/img/landing/twitter.svg" alt="Share on Twitter" width="40" height="40"></a>
                        <a href="https://www.facebook.com/share.php?u=https://honee.app/lending-and-borrowing-crypto&quote=How+to+lending+and+borrowing+crypto" target="_blank" rel="nofollow"><img src="/img/landing/facebook.svg" alt="Share on Facebook" width="40" height="40"></a>
                        <a href="tg://msg_url?url=https://honee.app/lending-and-borrowing-crypto&text=How+to+lending+and+borrowing+crypto" rel="nofollow"><img src="/img/landing/telegram.svg" alt="Share on Telegram" width="40" height="40"></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://honee.app/lending-and-borrowing-crypto" target="_blank" rel="nofollow"><img src="/img/landing/linkedin.svg" alt="Share on Linkedin" width="40" height="40"></a>
                        <!--<a href="" rel="nofollow"><img src="/img/landing/copy-link.svg" alt="Copy link" width="40" height="40"></a>-->
                    </div>
                </div>
                <section class="article-header">
                    <h1>How to lending and borrowing crypto</h1>
                </section>
                <section>
                    <h2>Borrowing</h2>
                    <p>This service lets you quickly get BNB by putting up your BEE tokens as collateral. You can repay BNB within 365 days; the longer the period, the bigger the interest rate. If the BEE you’ve put up decreases in price by 25% or more, the lender may claim it. In such case, you won’t have to repay BNB.</p>
                    <h3>Example</h3>
                    <p>You have 10 BEE that is worth 200 BNB. By putting up 10 BEE, you borrow 100 BNB (two times less). Say, in 6 months’ time, you want to repay the loan, so you’ll have to send 106 BNB (100 BNB + 6% accrued over that period) in order to get your 10 BEE back. If the total worth of 10 BEEs and the interest generated went down to 154.5 BNB (-25%), the lender would have the right to keep your BEEs, meaning you wouldn’t have to return 106 BNB anymore.</p>
                    <h3>Terms</h3>
                    <ul>
                        <li>You will receive 50% of pledged BEE value in BNB;</li>
                        <li>The interest is 12% per annum. 1% is charged once you receive BNB and then continues to charge every 30th day;</li>
                        <li>You will pay interest at the time of repaying the debt;</li>
                        <li>If the collateral of the loan (loan + accrued interest) falls below 150%, the pledged amount of BEE may be transferred to the lender;</li>
                        <li>You can return BNB + % for the period of usage at any time in order to receive your BEE back;</li>
                        <li>The maximum loan period is 365 days. If by this time, you will not have returned the BNB, then BEE may be transferred to the lender;</li>
                        <li>The minimum loan amount is $1.</li>
                    </ul>
                </section>
                <section>
                    <h2>Lending</h2>
                    <p>This service lets you lend your BNB and earn interest. Before the borrower gets your BNB, they put up their BEE tokens as collateral. If these tokens decrease in price by 25% or more, you may claim them. In such case, the borrower won’t have to repay BNB, while you’ll be able to sell their BEE.</p>
                    <h3>Example</h3>
                    <p>You’re lending 100 BNB to the borrower who puts up 10 BEE worth 200 BNB in return (two times the worth of your BNB). Say, in 6 months’ time, the borrower wants to repay the loan, so they send you 106 BNB (100 BNB + 6% accrued over that period) and get their 10 BEE back. If the total worth of 10 BEEs and the interest generated were to go down to 154.5 BNB (-25%), you’d have the right to keep the borrower’s BEEs, while the borrower wouldn’t have to return 106 BNB anymore.</p>
                    <h3>Terms</h3>
                    <ul>
                        <li>You can send BNB and wait for someone to borrow it;</li>
                        <li>If there is more than 1 lender in the queue, then the funds are used according to the FIFO algorithm;</li>
                        <li>Unused BNB can be withdrawn at any time;</li>
                        <li>The interest is 12% per annum. 1% is charged once the borrower receives BNB and then continues to charge every 30th day;</li>
                        <li>You will receive interest when the debt is repaid;</li>
                        <li>If the collateral for the used BNB drops below 150%, then you have an opportunity to take the collateral in order to sell it and get your BNB back (10% of the BEE amount goes to Fund);</li>
                        <li>The minimum amount is $1. The maximum is $10,000.</li>
                    </ul>
                </section>
                <section class="article-last-block">
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
