<template>
    <div>
        <div class="main__head">
            <i class="bi bi-list burger-menu" @click="sidebarActions(store)"></i>
            <div class="main__head-title">{{ text }}</div>
            <div class="main__head-block">
                <nuxt-link :to="switchLocalePath($t('code'))" style="text-transform: uppercase;">{{
                    $t('code')
                }}</nuxt-link>

                <select class="form-select" aria-label="Default select example">
                    <option selected>Administrator</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <a href="#!">
                    <i class="bi bi-bell-fill" style="color:#E92026;"></i>
                </a>
                <a href="#!">
                    <img src="../static/images/main__head-avatar.png" alt="" />
                </a>
            </div>
        </div>

        <div class="main__block-name">
            <i class="bi bi-house-fill" style="color:#E92026"></i>
            <p class="main__block-title">{{ subtitle }}</p>
        </div>

    </div>

</template>

<script>

import { mapMutations } from 'vuex'

export default {
    props: ['text', 'subtitle'],
    data() {
        return {
            store: this.$store.state
        }
    },
    methods: {
        ...mapMutations(['sidebarActions']),
    }
}

</script>

<style>
hr {
    margin-top: -7px;
    opacity: 0.1;
}

.main__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* max-width: 1540px; */
    padding: 14px 21px;
    background: white;
}

.main__head-title {
    font-family: var(--pop500);
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--black);
}

.main__head-block {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
}

.main__head-select {
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    border: none;
    background: #fef5ea;
    padding: 8px 0px 8px 12px;
    border-radius: 8px;
    outline: none;
    display: flex;
    gap: 20px;
    align-items: center;
}

.main__head-select select {
    border: none;
    background: transparent;
    outline: none;
}

.main__head-btn span {
    margin-right: 25px;
}

.main__block-name {
    background: white;
    padding: 4px 20px;
    border-top: 1px solid #f1f3f9;
    display: flex;
    align-items: center;
    gap: 11px;
}

.main__block-title,
.main__block-span {
    font-family: var(--int400);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    color: #8b8d97;
}

.burger-menu {
    font-size: 20px;
    background: rgb(192, 192, 192);
    border-radius: 3px;
    padding-left: 5px;
    padding-right: 5px;
    cursor: pointer;
}
</style>