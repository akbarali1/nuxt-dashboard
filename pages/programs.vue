<template>
    <section class="programs__page">

        <Head text="Undergraduate programs" subtitle="/ Undergraduate programs list" />
        <div class="main__programs-content">
            <div class="main__programs-content-head">
                <button class="main__programs-content-btn modalBtn" @click="showModal = !showModal">
                    <i class="bi bi-plus-lg"></i>
                    Create a New Program
                </button>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">
                        Undergraduate programs list
                    </h3>
                    <div class="main__block-head-item">
                        <div class="main__block-head-input">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div style="display: flex; gap: 12px">
                            <button>
                                <img src="images/filter.svg" alt="" />
                                Filter
                            </button>
                            <button>
                                <img src="images/data.svg" alt="" />
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
                <div class="table-responsive-md">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Course Title</label>
                                        <img src="images/sort.svg" alt="" />
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Program</label>
                                        <img src="images/sort.svg" alt="" />
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Degree</label>
                                        <img src="images/sort.svg" alt="" />
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Min Credits</label>
                                        <img src="images/sort.svg" alt="" />
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Action</label>
                                        <img src="images/sort.svg" alt="" />
                                    </li>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="list in lists" :key="list.credits">
                                <td>{{ list.title }}</td>
                                <td>{{ list.program }}</td>
                                <td>{{ list.degree }}</td>
                                <td>{{ list.credits }}</td>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>{{ list.select }}</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="main__programs-sub">
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">10</option>
                        </select>
                        <h3>Items per page</h3>
                        <p>1-2 of 2 items</p>
                    </div>
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">1</option>
                        </select>
                        <p>of 1 pages</p>

                        <div class="main__programs-sub-chevrons">
                            <i class="fa-solid fa-chevron-left"></i>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalVue v-if="showModal" :modalTitle="createTitle">
            <input type="text" :placeholder="modalTitle" v-if="modalTitle" v-model="input1" />
            <input type="text" :placeholder="minCredits" v-if="minCredits" v-model="input2" />
            <input type="text" :placeholder="program" v-if="program" v-model="input3" />
            <input type="text" :placeholder="degree" v-if="degree" v-model="input4" />
            <div>
                <button @click="showModal = !showModal" class="modal-programs-closeBtn">Cancel</button>
                <button @click.prevent="addNote" class="modal-programs-createBtn">Create</button>
            </div>
        </ModalVue>
    </section>
</template>

<script>
import ModalVue from '../components/Modal.vue'

export default {
    data() {
        return {
            input1: '',
            input2: '',
            input3: '',
            input4: '',
            showModal: false,
            createTitle: 'Create new Program',
            modalTitle: "Course Title",
            minCredits: "Min Credits",
            program: "Program",
            degree: "Degree"
        }
    },
    asyncData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    lists: [
                        {
                            title: 'Medical School',
                            program: 'Bachelor of Medicine',
                            degree: 'Doctor of Medicine',
                            credits: '88',
                            select: 'Select'
                        },
                        {
                            title: 'Accounting and Finance Department',
                            program: 'BSc in Accounting and Finance',
                            degree: 'BSc',
                            credits: '145',
                            select: 'Select'

                        }
                    ]
                })
            }, 0)
        })

    },
    components: {
        ModalVue
    },
    methods: {
        addNote() {
            this.showModal = !this.showModal
            this.lists.push({
                title: this.input1,
                program: this.input2,
                degree: this.input3,
                credits: this.input4,
                select: 'Select'
            })
            this.input1 = ''
            this.input2 = ''
            this.input3 = ''
            this.input4 = ''
        }
    }


}

</script>

<style>
.main__programs-content-head {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 32px;
    margin-right: 24px;
    margin-top: 24px;
}

.main__programs-content-btn {
    padding: 9.5px 20px 9.5px 22px;
    background: #5570f1;
    border-radius: 12px;
    border: none;
    color: white;
    font-family: var(--int400);
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-right: -19px;
    display: flex;
    align-items: center;
    gap: 3px;
    cursor: pointer;
    margin-right: 0.5vw;
}

.main__programs-content-dots {
    cursor: pointer;
}

.main__programs-content-block {
    background: #ffffff;
    border-radius: 12px;
    margin-left: 21px;
    margin-right: 20px;
    margin-top: 20px;
    padding: 27px 21px 17px 21px;
}

.main__content-block-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.main__block-head-item {
    display: flex;
    align-items: center;
    gap: 7px;
}

.main__block-head-title {
    font-family: var(--int500);
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: var(--black);
    margin-bottom: 0;
}

.main__block-head-input {
    display: flex;
    align-items: center;
    gap: 18px;
    border: 1px solid rgb(214, 214, 214);
    padding: 10px;
    border-radius: 8px;
}

.main__block-head-input input {
    border: none;
    height: 15px;
    outline: none;
}

.main__block-head-item button {
    display: flex;
    align-items: center;
    gap: 9px;
    background: none;
    border: 1px solid var(--black);
    padding: 8px 8px 8px 9px;
    border-radius: 8px;
    font-family: var(--int400);
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: center;
    color: var(--black2);
    cursor: pointer;
}

.main__programs-items {
    display: flex;
    align-items: center;
}

.main__programs-lists {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    border-top: 1px solid #e1e2e9;
    border-bottom: 1px solid #e1e2e9;
    margin-top: 25px;
    position: relative;
}

.main__programs-lists::before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    position: absolute;
    background: #e1e2e9;
    left: 0;
    top: 32%;
}

.main__programs-list {
    display: flex;
    flex-direction: column;
}

.main__programs-list:first-of-type li {
    position: relative;
    /* padding-left: 48px; */
}

.main__programs-items {
    padding-top: 17px;
    padding-bottom: 17px;
    gap: 8px;
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #6e7079;
}

.main__programs-items:first-of-type {
    color: #2c2d33;
}

.main__programs-items:nth-of-type(2) {
    padding-top: 30px;
}

.main__programs-items select {
    font-family: var(--int400);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    border: none;
    padding: 4px 11px;
    background: rgba(94, 99, 102, 0.08);
    border-radius: 8px;
    color: #8b8d97;
    width: 105%;
}

.main__programs-sub {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
}

.main__programs-sub-item {
    display: flex;
    align-items: center;
}

.main__programs-sub-item h3 {
    margin-left: 8px;
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #a6a8b1;
    margin-right: 14px;
    margin-bottom: 0;
}

.main__programs-sub-item p {
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin-left: 8px;
    color: #666666;
}

.main__programs-sub-item select {
    border: none;
    background: rgba(94, 99, 102, 0.08);
    border-radius: 8px;
    padding: 4px 11px;
    font-family: var(--int400);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
    outline: none;
    color: #8b8d97;
}

.main__programs-sub-chevrons {
    display: flex;
    gap: 19px;
    margin-left: 29px;
    color: #666666;
    font-size: 12px;
}

@media (max-width: 1100px) {
    .main__programs-lists::before {
        content: none;
    }
}

@media (max-width: 930px) {
    .main__content-block-head {
        flex-direction: column;
        gap: 20px;
    }

    .main__programs-sub-item h3 {
        font-size: 10px;
    }

    .main__programs-sub-item p {
        font-size: 10px;
    }
}

@media (max-width: 480px) {
    .main__programs-sub {
        flex-direction: column;
        gap: 25px;
    }

    .main__programs-list:last-of-type {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }

    .main__programs-items:nth-of-type(2) {
        padding-top: 17px;
    }

    .main__programs-lists {
        gap: 30px;
    }

    .main__block-head-item {
        flex-direction: column;
    }

    /* .main__programs-items:nth-of-type(2) {
    padding-top: 31px;
  } */

    .programs__page .main__head .main__head-title {
        font-size: 11px;
    }
}

@media (max-width: 380px) {
    .programs__page .main__head .main__head-title {
        font-size: 9px;
    }
}
</style>