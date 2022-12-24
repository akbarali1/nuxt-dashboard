<template>
    <section class="programs__page">

        <Head text="Notice Board" subtitle="/ Notice" />

        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All Notices</h3>
                <div class="main__all-btn">
                    <button class="main__programs-content-btn modalBtn"
                        style="gap: 24px; padding: 8.5px 20px 8.5px 20px">
                        <i class="bi bi-plus-lg"></i>


                        New Notice
                    </button>
                </div>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">All Notice</h3>
                    <div class="main__block-head-item">
                        <div class="main__block-head-input">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <button>
                            <img src="images/filter.svg" alt="" />
                            Filter
                        </button>
                    </div>
                </div>


                <div class="table-responsive-md">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">To</label>
                                        <img src="images/sort.svg" alt="" />
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Show</label>
                                        <img src="images/sort.svg" alt="" />
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Title</label>
                                        <img src="images/sort.svg" alt="" />
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Body</label>
                                        <img src="images/sort.svg" alt="" />
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Created</label>
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
                        <tbody v-if="lists.length > 0">
                            <tr v-for="list in lists" :key="list.credits">
                                <td>{{ list.id }}</td>
                                <td>{{ list.email }}</td>
                                <td>{{ list.firstName }}</td>
                                <td>{{ list.lastName }}</td>
                                <td>{{ list.phoneNumber }}</td>
                                <td>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>{{ list.action }}</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p class="notice__content-p" v-if="lists.length <= 0">No data available in table</p>

                <div class="main__programs-sub notice__content-border">
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">0</option>
                        </select>
                        <h3>Items per page</h3>
                        <p>0 of 0 items</p>
                    </div>
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">0</option>
                        </select>
                        <p>of 0 pages</p>

                        <div class="main__programs-sub-chevrons">
                            <i class="fa-solid fa-chevron-left"></i>
                            <i class="fa-solid fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    asyncData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    lists: [
                        // {
                        //     id: '20M013',
                        //     email: 'a.akhmedjanov@akfauniversity.org',
                        //     firstName: 'Azamat',
                        //     lastName: 'Akhmedjanov',
                        //     phoneNumber: '+998 90 122 33 44',
                        //     action: 'Select'
                        // },
                    ]
                })
            }, 0)
        })

    }
}

</script>

<style>
.notice__content-lists {
    margin-top: 20px;
}

.notice__content-list {
    display: grid;
    grid-template-columns: 1fr 1fr 2fr 2fr 1fr 0.5fr;
    border-top: 1px solid #e1e2e9;
    border-bottom: 1px solid #e1e2e9;
    padding-top: 17px;
    padding-bottom: 17px;
}

.notice__content-p {
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #6e7079;
    text-align: center;
    padding-top: 15px;
    margin-right: 100px;
    margin-bottom: 65px !important;
}

.notice__content-border {
    padding-top: 16px;
}

@media (max-width: 1450px) {
    .notice__content-p {
        margin-right: 20px;
    }
}

@media (max-width: 1100px) {
    .notice__content-list {
        overflow-x: scroll;
        gap: 40px;
    }
}
</style>