<template>
    <section class="programs__page">

        <Head text="Users" subtitle="/ Users" />
        <div class="main__programs-content">
            <div class="users-content-head">
                <h3 class="users-content-title">All users</h3>
                <button class="main__programs-content-btn modalBtn" @click="showModal = !showModal">
                    <i class="bi bi-plus-lg"></i>

                    Create a New User
                </button>
            </div>
            <div class="main__programs-content-block">
                <div class="main__content-block-head">
                    <h3 class="main__block-head-title">All Users</h3>
                    <div class="main__block-head-item">
                        <div class="main__block-head-input">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                        <button>
                            <i class="bi bi-funnel"></i>
                            Filter
                        </button>
                        <button>
                            <i class="bi bi-calendar"></i>
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
                                        <label for="">Username</label>
                                        <i class="bi bi-filter"></i>
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Email</label>
                                        <i class="bi bi-filter"></i>
                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">First Name</label>
                                        <i class="bi bi-filter"></i>

                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Last Name</label>
                                        <i class="bi bi-filter"></i>

                                    </li>
                                </th>
                                <th scope="col">
                                    <li class="main__programs-items">
                                        <label for="">Action</label>
                                        <i class="bi bi-filter"></i>

                                    </li>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="list in lists" :key="list.credits">
                                <td>{{ list.username }}</td>
                                <td>{{ list.email }}</td>
                                <td>{{ list.firstName }}</td>
                                <td>{{ list.lastName }}</td>
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

                <div class="main__programs-sub">
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">10</option>
                        </select>
                        <h3>Items per page</h3>
                        <p>12 of 200 items</p>
                    </div>
                    <div class="main__programs-sub-item">
                        <select name="" id="">
                            <option value="">1</option>
                        </select>
                        <p>of 10 pages</p>

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
    data() {
        return {
            showModal: false,
            createTitle: 'Create new User',
            username: 'Username',
            email: 'Email',
            firstName: 'First Name',
            lastName: 'Last Name'
        }
    },
    asyncData() {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    lists: [
                        {
                            username: 'a.akhmedjanov',
                            email: 'a.akhmedjanov@akfauniversity.org',
                            firstName: 'Azamat',
                            lastName: 'Akhmedjanov',
                            action: 'Select'
                        },
                        {
                            username: 'a.akhmedjanov',
                            email: 'a.akhmedjanov@akfauniversity.org',
                            firstName: 'Azamat',
                            lastName: 'Akhmedjanov',
                            action: 'Select'
                        },
                        {
                            username: 'a.akhmedjanov',
                            email: 'a.akhmedjanov@akfauniversity.org',
                            firstName: 'Azamat',
                            lastName: 'Akhmedjanov',
                            action: 'Select'
                        },
                        {
                            username: 'a.akhmedjanov',
                            email: 'a.akhmedjanov@akfauniversity.org',
                            firstName: 'Azamat',
                            lastName: 'Akhmedjanov',
                            action: 'Select'
                        },
                        {
                            username: 'a.akhmedjanov',
                            email: 'a.akhmedjanov@akfauniversity.org',
                            firstName: 'Azamat',
                            lastName: 'Akhmedjanov',
                            action: 'Select'
                        },
                        {
                            username: 'a.akhmedjanov',
                            email: 'a.akhmedjanov@akfauniversity.org',
                            firstName: 'Azamat',
                            lastName: 'Akhmedjanov',
                            action: 'Select'
                        },
                        {
                            username: 'a.akhmedjanov',
                            email: 'a.akhmedjanov@akfauniversity.org',
                            firstName: 'Azamat',
                            lastName: 'Akhmedjanov',
                            action: 'Select'
                        },
                        {
                            username: 'a.akhmedjanov',
                            email: 'a.akhmedjanov@akfauniversity.org',
                            firstName: 'Azamat',
                            lastName: 'Akhmedjanov',
                            action: 'Select'
                        },
                        {
                            username: 'a.akhmedjanov',
                            email: 'a.akhmedjanov@akfauniversity.org',
                            firstName: 'Azamat',
                            lastName: 'Akhmedjanov',
                            action: 'Select'
                        },

                    ]
                })
            }, 0)
        })

    }
}


</script>

<style>
.users-content-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    margin-right: 40px;
    margin-left: 27px;
    margin-top: 24px;
}

.users-content-title {
    font-family: var(--int400);
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
}

.user__content-lists {
    display: grid;
    grid-template-columns: 1.4fr 1.3fr 1fr 0.7fr 0.5fr;
    margin-top: 25px;
    border-top: 1px solid #e1e2e9;
    border-bottom: 1px solid #e1e2e9;
    padding-top: 16px;
    padding-bottom: 16px;
    position: relative;
}

.user__content-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
}

/* .user__content-list:last-of-type {
  align-items: center;
} */

.user__content-list:last-of-type .user__content-item:first-of-type {
    margin-left: 5px;
}

.user__content-item {
    display: flex;
    align-items: center;
    gap: 8px;
}

.user__content-list .user__content-item:first-of-type {
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #2c2d33;
}

.user__content-item {
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    color: #2c2d33;
    height: 30px;
}

.user-items-check {
    margin-right: 12px;
}

.user__content-item select {
    background: rgba(94, 99, 102, 0.08);
    border-radius: 8px;
    color: #8b8d97;
    border: none;
    outline: none;
    padding: 4px 11px;
}

.user__content-lists::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    top: 60px;
    left: 0;
    background: #e1e2e9;
}

/* users faculty && members finance */

.users__faculty-content-lists {
    grid-template-columns: 1.5fr 1.8fr 0.8fr 0.8fr 1fr 0.7fr 0.7fr;
}

@media (max-width: 1400px) {
    .user__content-lists {
        grid-template-columns: 1.4fr 1.3fr 1fr 0.7fr 0.5fr;
    }

    .users__faculty-content-lists {
        grid-template-columns: 1.5fr 1.8fr 0.8fr 0.8fr 1fr 0.7fr 0.7fr;
    }
}

@media (max-width: 1300px) {
    .users__faculty-content-lists {
        grid-template-columns: 1.5fr 2.2fr 1fr 1fr 1.2fr 1fr 0.7fr;
    }

    .header__nav-dropdown-link {
        font-size: 10px;
    }
}

@media (max-width: 1100px) {
    .user__content-lists {
        overflow-x: scroll;
        gap: 20px;
    }

    .user__content-lists::after {
        content: none;
    }
}

@media (max-width: 500px) {
    .main__programs-content-btn {
        padding: 10px;
    }

    .user__content-list .user__content-item:first-of-type {
        font-size: 12px;
        gap: 5px;
    }
}
</style>