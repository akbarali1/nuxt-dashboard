<template>
    <section class="programs__page">

        <Head text="Finances" subtitle="/ Students" />


        <h2 class="finances__content-head">2020 / Fall</h2>

        <div class="main__programs-content">
            <div class="main__programs-content-block">
                <table class="table table-bordered finances__block-table">
                    <thead>
                        <tr scope="col">
                            <th colspan="1" class="finance-table__head finance-table-title"></th>
                            <th colspan="4" class="finance-table__head finance-table-title">
                                UZS
                            </th>
                            <th colspan="4" class="finance-table__head finance-table-title">
                                USD
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="finance-table-title">School and Year</th>
                            <th class="finance-table-title">Total</th>
                            <th class="finance-table-title">Paid</th>
                            <th class="finance-table-title">In Debt</th>
                            <th class="finance-table-title">Debt Amount</th>

                            <th class="finance-table-title">Total</th>
                            <th class="finance-table-title">Paid</th>
                            <th class="finance-table-title">In Debt</th>
                            <th class="finance-table-title">Debt Amount</th>
                        </tr>
                        <tr>
                            <th class="finance-table-text">School and Year</th>
                            <th class="finance-table-text" v-for="list in lists" :key="list.id">{{ list.cash }}</th>

                        </tr>
                        <tr>
                            <th class="finance-table-text">School and Year</th>
                            <th class="finance-table-text" v-for="list in lists" :key="list.id">{{ list.cash }}</th>
                        </tr>
                    </tbody>
                </table>
                <div class="main__programs-sub">
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">3</option>
                        </select>
                        <h3>Items per page</h3>
                        <p>3 of 3 items</p>
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
    </section>
</template>

<script>

export default {
    asyncData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    lists: [
                        {
                            cash: 0
                        },
                        {
                            cash: 0
                        },
                        {
                            cash: 0
                        },
                        {
                            cash: 0
                        },
                        {
                            cash: 0
                        },
                        {
                            cash: 0
                        },
                        {
                            cash: 0
                        },
                        {
                            cash: 0
                        },
                    ]
                })
            }, 0)
        })

    },
}

</script>

<style>
.finances__content-head {
    margin: 24px 21px 32px 20px;
    font-family: var(--int500);
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: center;
    background: #fff;
    padding: 8px 0;
    color: #53545c;
}

.finance-table-title {
    font-family: var(--int500);
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    color: #53545c;
    padding-top: 15px !important;
    padding-bottom: 14px !important;
    padding-left: 17px !important;
}

.finance-table__head {
    text-align: center;
    padding-left: 0 !important;
}

.finance-table-text {
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #53545c;
    padding-top: 15px !important;
    padding-bottom: 14px !important;
    padding-left: 17px !important;
}

@media (max-width: 900px) {
    .finances__block-table {
        display: block;
        overflow-x: scroll;
    }
}

@media (max-width: 650px) {
    .finance-table-text {
        text-align: center;
        padding-left: 0 !important;
    }
}
</style>