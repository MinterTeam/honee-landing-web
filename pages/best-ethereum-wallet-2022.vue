<script>
import getTitle from '~/assets/get-title.js';
import trackClick from '~/assets/v-track-click.js';

export default {
    layout: 'default-seo',
    nuxtI18n: {
        locales: ['en'],
    },
    directives: {
        trackClick,
    },
    head() {
        const title = getTitle('The Best Ethereum Wallet 2022');
        const description = 'Security aside, the best Ethereum wallet of 2022 should be capable of providing its users with mobility. Honee app is developed with user experience in mind, and one of its main goals is to allow holders to move coins and tokens freely across the networks.';

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
                        <a href="https://twitter.com/intent/tweet?url=https://honee.app/how-to-buy-bitcoin-2022&text=How+to+Buy+Bitcoin+2022" target="_blank" rel="nofollow"><img src="/img/landing/twitter.svg" alt="Share on Twitter" width="40" height="40"></a>
                        <a href="https://www.facebook.com/share.php?u=https://honee.app/how-to-buy-bitcoin-2022&quote=How+to+Buy+Bitcoin+2022" target="_blank" rel="nofollow"><img src="/img/landing/facebook.svg" alt="Share on Facebook" width="40" height="40"></a>
                        <a href="tg://msg_url?url=https://honee.app/how-to-buy-bitcoin-2022&text=How+to+Buy+Bitcoin+2022" rel="nofollow"><img src="/img/landing/telegram.svg" alt="Share on Telegram" width="40" height="40"></a>
                        <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://honee.app/how-to-buy-bitcoin-2022" target="_blank" rel="nofollow"><img src="/img/landing/linkedin.svg" alt="Share on Linkedin" width="40" height="40"></a>
                        <!--<a href="" rel="nofollow"><img src="/img/landing/copy-link.svg" alt="Copy link" width="40" height="40"></a>-->
                    </div>
                </div>
                <section class="article-header">
                    <h1>The Best Ethereum (ETH) Wallet in 2022</h1>
                    <h2>What’s Ethereum?</h2>
                    <p class="subtitle-h1">Ethereum (also known as Ether, or ETH) is the second-largest cryptocurrency. It was created back in 2015 and has since brought into the world the smart contracts and decentralized finance (DeFi). So what should the best Ethereum wallet of 2022 be like?</p>
                </section>
                <section class="asset-block">
                    <img src="/img/articles/asset-ethereum.png" alt="best ethereum (eth) wallet 2022">
                    <div class="asset-info">
                        <div class="asset-info-data">
                            <div class="asset-info-item">
                                <div class="item-label">Name</div>
                                <b>Ethereum, Ether</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Symbol</div>
                                <b>ETH</b>
                            </div>
                            <div class="asset-info-item">
                                <div class="item-label">Max. supply</div>
                                <b>infinite</b>
                            </div>
                        </div>
                        <div class="asset-info-links">
                            <div class="asset-info-item">
                                <a href="https://ethereum.org/" target="_blank" rel="nofollow">Site</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://etherscan.io/" target="_blank" rel="nofollow">Explorer</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://github.com/ethereum/wiki/wiki/White-Paper" target="_blank" rel="nofollow">Whitepaper</a>
                            </div>
                            <div class="asset-info-item">
                                <a href="https://coinmarketcap.com/currencies/ethereum/" target="_blank" rel="nofollow">CMC</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h2>The Best Ethereum Wallet 2022: Honee</h2>
                    <p>There are many different tokens in the Honee crypto wallet, one of which is Ethereum (ticker: ETH). It is a mirrored asset available for cross-chain transfers between the Minter and Ethereum blockchains. The Honee wallet can store both the original ETH and its wrapped and mirrored versions.</p>
                    <p>The value of Ether remains the same across different networks thanks to the Minter Hub bridge, which transfers exactly the amount of ETH that has been sent. When making a cross-chain transfer, tokens are frozen in a smart contract on the one network and issued (or unfrozen, depending on the direction) on the other. Thus, Ethereum retains its value regardless of which wallet or network it is stored in.</p>
                    <p>What makes Honee the best Ethereum wallet of 2022 is that it’s not only user-oriented, but also ever-growing in features and completely transparent.</p>
                    <p><b>The smart contract of WETH:</b><br>
                    <a href="https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" target="_blank" rel="nofollow">etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2</a>
                    </p>
                    <p><b>The smart contract of Minter Hub:</b><br>
                    <a href="https://etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2" target="_blank" rel="nofollow">etherscan.io/address/0x897c27Fa372AA730D4C75B1243E7EA38879194E2</a>
                    </p>
                </section>
                <section>
                    <h2>How to Set Up and Create an Ethereum Wallet in 2022</h2>
                    <div class="article-picture-box">
                        <div class="article-picture-box-content">
                            <ol>
                                <li>Open the web app of <b>Honee</b></li>
                                <li>Click <b>Sign Up</b></li>
                                <li>Save the seed phrase you got someplace safe (in future, you’ll need it to sign in to your freshly created wallet)</li>
                                <li>Press <b>Launch</b></li>
                            </ol>
                        </div>
                        <div class="article-picture-box-img wallet-bitcoin-1">
                            <picture>
                                <source srcset="/img/articles/buy-bitcoin-1.avif 1x, /img/articles/buy-bitcoin-1@2x.avif 2x" type="image/avif">
                                <source srcset="/img/articles/buy-bitcoin-1.webp 1x, /img/articles/buy-bitcoin-1@2x.webp 2x" type="image/webp">
                                <img src="/img/articles/buy-bitcoin-1.png" srcset="/img/articles/buy-bitcoin-1@2x.png 2x" alt="how to create and set up an ethereum wallet in 2022" role="presentation"/>
                            </picture>
                        </div>
                    </div>
                </section>
                <section class="article-last-block">
                    <p class="subtitle-h1">We hope that after reading this article, you have an answer to the question, <i>What is the best Ethereum wallet in 2022?</i> and will use Honee!</p>
                    <div class="cta-center">
                        <a class="btn btn-2" :href="appUrl" v-track-click="'all-buttons'">{{ $td('Launch Honee', 'index.steps-button')}}</a>
                    </div>
                </section>
            </div>
        </article>
    </div>
</template>
