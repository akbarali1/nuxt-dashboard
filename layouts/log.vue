<template>
    <Login />
</template>

<script>
import Login from '../pages/Login';

export default {
    components: {
        Login
    }
}

</script>

<style>
.login-page {
    background: url("../static/images/loginPage.png") no-repeat center center / cover;
    width: 100vw;
    height: 100vh;
}

.login-page-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 100%;
    width: 95%;
}

.login-page-title {
    font-family: var(--int400);
    font-size: 10px;
    font-weight: 400;
    line-height: 12px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--black);
    margin-left: 15%;
    margin-top: 24%;
}

.login {
    background: rgba(215, 236, 255, 0.5);
    backdrop-filter: blur(12px);
    padding: 16px 24px 32px;
    border-radius: 12px;
    width: 384px;
}

.login__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.login__head-img {
    display: flex;
    align-items: center;
    gap: 14px;
}

.login__head a {
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
    border-bottom: 1px solid white;
}

.login__form {
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    gap: 16px;
}

.login__form input {
    background: rgba(239, 241, 249, 0.6);
    border-radius: 8px;
    border: none;
    padding: 16px;
    outline: none;
    /* color: #abafb1; */
}

.login__form input::placeholder {
    color: #abafb1;
    font-family: var(--int400);
    line-height: 19px;
}

.login__foot {
    margin-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.login__foot-forgot {
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    color: white;
}

.login__foot-btn {
    font-family: var(--int400);
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    background: #e92026;
    padding: 12.5px 16px;
    color: white;
    border-radius: 12px;
    text-transform: uppercase;
}

@media (max-width: 900px) {
    .login-page-content {
        flex-direction: column-reverse;
        justify-content: center;
        gap: 60px;
        width: 100%;
    }

    .login-page-title {
        margin-left: 0;
        margin-top: 0;
    }
}

@media (max-width: 470px) {
    .login {
        width: 310px;
    }
}

@media (max-width: 375px) {
    .login {
        width: 295px;
    }
}
</style>