# nuxt-ds

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
## Dynamic store demo
1. 在 `nuxtServerInit` & layout `beforeCreate` 都會 register modules，目的是讓 store 在 SSR & CSR 都可以被註冊。
2. `plugins/register-store.js` 會去判斷當 store 已在 SSR 被註冊時， state 會被保留，讓 CSR 時使用。
3. DEMO 的情境是 當 USER Login 後才會動態載入 `store-modules/faker2`

