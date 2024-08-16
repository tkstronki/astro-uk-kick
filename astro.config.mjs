import { defineConfig } from 'astro/config';

// set if you have trouble loading images
// import { defineConfig, squooshImageService } from 'astro/config';

// https://astro.build/config
export default defineConfig({

    // https://docs.astro.build/pl/guides/images/#default-image-service
    // https://docs.astro.build/pl/guides/images/#configure-squoosh
    // set if you have trouble loading images
    // image: {
    //     service: squooshImageService(),
    // },

    compressHTML: false,
    // build: {
    //     assetsPrefix: 'https://page-url'
    //   },
    // site: 'https://username.github.io',
    // base: '/uk-kick',
});
