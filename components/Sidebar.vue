<template>
    <nav class="header__nav">
        <div class="header__nav-logo">
            <img src="../static/images/logo-icon.png" alt="" />
            <img src="../static/images/logo-text.png" alt="" />
        </div>
        <div class="header__nav-list">
            <nuxt-link v-for="link in links" @click.prevent="close(link)" :key="link.id" :to="localePath(`${link.to}`)"
                class="header__nav-blocks" active-class="active" exact-path>
                <div class="header__nav-blocks-item">
                    <i :class=link.icons></i>
                    <p>{{ link.title }}</p>
                </div>
            </nuxt-link>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            links: [
                {
                    title: 'Dashboard',
                    to: '/',
                    icons: 'bi bi-grid-fill'
                },
                {
                    title: 'Undergraduate Programs',
                    to: '/programs',
                    icons: 'bi bi-grid'
                },
                {
                    title: 'Users',
                    to: '/users',
                    icons: 'bi bi-people',
                },
                {
                    title: 'Students Registration',
                    to: '/students',
                    icons: 'bi bi-person-fill-add',
                },
                {
                    title: 'Notice Board',
                    to: '/notice',
                    icons: 'bi bi-chat-dots',
                },
                {
                    title: 'Data Export',
                    to: '/data',
                    icons: 'bi bi-download'
                },
                {
                    title: 'Scholarship and Ranking',
                    to: '/scholarship',
                    icons: 'bi bi-award'
                },
                {
                    title: 'Academic Years',
                    to: '/academic',
                    icons: 'bi bi-calendar'
                },
                {
                    title: 'Course Managements',
                    to: '/course',
                    icons: 'bi bi-bookmark-fill',
                },
                {
                    title: 'Transfer Credits',
                    to: '/transfer',
                    icons: 'bi bi-arrow-down-up',
                },
                {
                    title: 'Finances',
                    to: '/finances',
                    icons: 'bi bi-credit-card-fill',
                },
            ]
        }
    },
}

</script>



<style>
@font-face {
    font-family: 'Inter Regular';
    src: url(../static/fonts/Inter-Regular.ttf);
}

@font-face {
    font-family: 'Inter Medium';
    src: url(../static/fonts/Inter-Medium.ttf);
}

@font-face {
    font-family: 'Poppins Medium';
    src: url(../static/fonts/Poppins-Medium.ttf);
}

body {
    background: #f4f5fa !important;
}

* {
    margin: 0;
    padding: 0;
    text-decoration: none !important;
    list-style: none;
    scroll-behavior: smooth;
}

:root {
    --black: #45464e;
    --orange: #e92026;
    --red: #cc5f5f;
    --int400: "Inter Regular";
    --int500: "Inter Medium";
    --pop500: "Poppins Medium";
}

p {
    margin-bottom: 0 !important;
}

ul {
    padding-left: 0 !important;
}

section {
    width: 100%;
}

.header {
    display: flex;
}

.header__nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    min-height: 100vh;
    background: white;
}

.header__nav-logo {
    margin-top: 15px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 7px;
}

.header__nav-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 40px;
}

.header__nav-blocks {
    display: flex;
    gap: 20px;
    padding: 19px 5px 19px 20px;
    align-items: center;
    cursor: pointer;
}


.header__nav-blocks:nth-of-type(3) {
    flex-direction: column;
    align-items: flex-start;
}

.header__nav-blocks p {
    font-family: var(--int400);
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: var(--black);
    /* display: none; */
}

.header__nav-blocks-item {
    display: flex;
    align-items: center;
    gap: 17px;
}

.header__nav-blocks-item i {
    font-size: 22px;
    color: #45464e;
}

.header__nav-blocks.active {
    background: var(--orange);
    border-radius: 12px;
    color: white;
}

.header__nav-blocks.active p {
    color: white;
}

.header__nav-blocks.active .header__nav-blocks-item i {
    color: white !important;
}
</style>
