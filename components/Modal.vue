<template>
    <div>
        <div class="modals-body-bg"></div>
        <div class="modal-programs">
            <div class="modal-programs-head">
                <h2 class="modal-programs-title">{{ modalTitle }}</h2>
            </div>

            <form class="modal-programs-form">

                <slot></slot>

               
            </form>
        </div>
    </div>


</template>

<script>
export default {
    props: ['modalTitle'],
}

</script>

<style>
.modals-body-bg {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(163, 163, 163, 0.2);
    backdrop-filter: blur(4px);
}

.modal-programs {
    padding: 28px 24px;
    background: white;
    position: fixed;
    left: 50%;
    top: 12vw;
    transform: translate(-50%);
    width: 448px;
}

.modal-programs-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-programs-title {
    font-family: var(--pop500);
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: center;
}

.modal-programs-close {
    font-size: 24px;
    cursor: pointer;
}

.modal-programs-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 29px;
}

.modal-programs-form input {
    width: 96%;
    background: rgba(239, 241, 249, 0.6);
    border-radius: 8px;
    border: none;
    outline: none;
    padding-top: 17px;
    padding-bottom: 17px;
    padding-left: 16px;
    font-family: var(--int400);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #abafb1;
}

.modal-programs-form input::placeholder {
    font-family: var(--int400);
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #abafb1;
}

.modal-programs-form div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.modal-programs-form div button {
    padding: 17px 40px;
    cursor: pointer;
}

.modal-programs-closeBtn {
    color: #5570f1;
    background: white;
    border: 2px solid #5570f1;
    border-radius: 12px;
    outline: none;
}

.modal-programs-createBtn {
    background: #5570f1;
    border-radius: 12px;
    color: white;
    border: none;
    border: 2px solid transparent;
}
</style>