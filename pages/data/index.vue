<template>
    <section class="programs__page">

        <Head text="Data Export" subtitle="/ Students" />


        <div class="export__content">
            <h2 class="export__content-title">Export</h2>

            <div class="export__content-block">
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Deans</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Staff</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Departments</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">All Students</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">All Courses</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>
                <div class="export__content-item">
                    <div>
                        <h3 class="export__item-title">File</h3>
                        <p class="export__item-text">Assigned Courses</p>
                    </div>

                    <div class="export__content-upl">
                        <img src="images/Upload-white.png">
                        <p class="export__content-sub">Export XLSX</p>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<style>
.export__content {
    padding-left: 27px;
    padding-top: 33px;
    padding-right: 20px;
}

.export__content-title {
    font-family: var(--int400);
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #45464e;
}

.export__content-block {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 28px;
}

.export__content-item {
    width: 460px;
    background: white;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
}

.export__item-title {
    font-family: var(--int400);
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
    letter-spacing: 0em;
    text-align: left;
}

.export__item-text {
    font-family: var(--pop500);
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: #45464e;
}

.export__content-sub {
    font-family: var(--int400);
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    color: white;
}

.export__content-upl {
    display: flex;
    align-items: center;
    gap: 20px;
    background: #5570f1;
    border-radius: 12px;
    padding: 8px 16px 10px 18px;
    cursor: pointer;
}

@media (max-width: 1712px) {
    .export__content-item {
        max-width: 407px;
    }
}

@media (max-width: 400px) {
    .export__item-text {
        font-size: 12px;
    }
}

/* Course Content */

@media (max-width: 1100px) {
    .course-content-list div li {
        min-width: 200px;
    }
}

@media (max-width: 900px) {
    .course-content-list div li {
        min-width: 200px;
    }
}
</style>