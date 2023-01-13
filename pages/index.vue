<template>
  <section class="dashboard__main" data-idx="0">
    <Head text="Dashboard" />
    <div class="main__content">
      <div class="main__content-items">
        <div class="main__content-head">
          <div class="main__content-icon">
            <img src="images/main__content-head-1.svg" alt="" />
          </div>
          <select>
            <option value="">2022</option>
          </select>
        </div>
        <div class="main__content-info">
          <div>
            <h3 class="main__content-item">{{ $t('students') }}</h3>
            <p class="main__content-value">1229 <span>+10.94%</span></p>
          </div>
          <div>
            <h3 class="main__content-item"> {{ $t('volume') }} </h3>
            <p class="main__content-value">9820</p>
          </div>
        </div>
      </div>
      <div class="main__content-items">
        <div class="main__content-head">
          <div class="main__content-icon">
            <img src="images/main__content-head-2.svg" alt="" />
          </div>
          <select>
            <option value="">2022</option>
          </select>
        </div>
        <div class="main__content-info">
          <div>
            <h3 class="main__content-item">{{ $t('prof') }}</h3>
            <p class="main__content-value">49 <span>+120.28%</span></p>
          </div>
          <div>
            <h3 class="main__content-item">{{ $t('assis') }}</h3>
            <p class="main__content-value">24 <span>+45.00%</span></p>
          </div>
        </div>
      </div>
      <div class="main__content-items">
        <div class="main__content-head">
          <div class="main__content-icon">
            <img src="images/main__content-head-3.svg" alt="" />
          </div>
          <select>
            <option value="">2022</option>
          </select>
        </div>
        <div class="main__content-info">
          <div>
            <h3 class="main__content-item">{{ $t('allEvents') }}</h3>
            <p class="main__content-value">21</p>
          </div>
          <div>
            <h3 class="main__content-item">{{ $t('pending') }}</h3>
            <p class="main__content-value">18</p>
          </div>
          <div>
            <h3 class="main__content-item">{{ $t('completed') }}</h3>
            <p class="main__content-value">3 <span>+0.00%</span></p>
          </div>
        </div>
      </div>
      <div class="main__content-items">
        <div class="main__content-head">
          <h3 class="main__content-title">{{ $t('studentStatus') }}</h3>
          <select>
            <option value="">2022</option>
          </select>
        </div>
        <div class="main__content-chart">
          <p class="main__chart-gender"><span></span>{{ $t('males') }}</p>
          <p class="main__chart-gender"><span></span>{{ $t('females') }}</p>
        </div>
        <img width="200" class="main__chart-img" height="200" src="images/chart-gender.png" alt="" />
      </div>
      <div class="main__content-items">
        <div class="main__content-head">
          <div class="main__content-icon">
            <img src="images/main__content-head-4.svg" alt="" />
          </div>
        </div>
        <div class="main__content-info other-block">
          <div>
            <h3 class="main__content-item">{{ $t('mandatoryCourses') }}</h3>
            <p class="main__content-value">29 <span>+0.00%</span></p>
          </div>
          <div>
            <h3 class="main__content-item">{{ $t('selectiveCourses') }}</h3>
            <p class="main__content-value">31 <span>+0.00%</span></p>
          </div>
        </div>
      </div>
      <div class="main__content-items">
        <div class="main__content-head">
          <div class="main__content-icon">
            <img src="images/main__content-head-5.svg" alt="" />
          </div>
          <select>
            <option value="">2022</option>
          </select>
        </div>
        <div class="main__content-info">
          <div>
            <h3 style="color: #cc5f5f" class="main__content-item">
              {{ $t('debtors') }}
            </h3>
            <p class="main__content-value">12% <span>+0.00%</span></p>
          </div>
          <div>
            <h3 class="main__content-item">{{ $t('customers') }}</h3>
            <p class="main__content-value">0</p>
          </div>
        </div>
      </div>
      <div class="main__content-items">
        <h3 class="main__content-title">{{ $t('noticeBoard') }}</h3>
        <div class="main__content-notice">
          <img src="images/iconContainer.png" alt="" />
          <h3>{{ $t('noNoti') }}</h3>
          <p>{{ $t('addNewNotiAndInform') }}</p>
          <button>
            <i class="fa-solid fa-plus"></i>
            {{ $t('newNotice') }}
          </button>
        </div>
      </div>
      <div class="main__content-items">
        <div class="main__content-head">
          <div class="main__content-sub">
            <h3 class="main__content-title">{{ $t('summary') }}</h3>
            <select class="main__content-select">
              <option>{{ $t('paidContracts') }}</option>
            </select>
          </div>
          <select style="color: #1c1d22 !important">
            <option>2022</option>
          </select>
        </div>
        <div class="main__content-scale">
          <div class="main__content-y">
            <p>100k</p>
            <p>80k</p>
            <p>60k</p>
            <p>40k</p>
            <p>20k</p>
          </div>
          <div class="main__content-x">
            <div class="main__content-graph">
              <div></div>
              <p>Sept 10</p>
            </div>
            <div class="main__content-graph">
              <div></div>
              <p>Sept 11</p>
            </div>
            <div class="main__content-graph">
              <div></div>
              <p>Sept 12</p>
            </div>
            <div class="main__content-graph">
              <div></div>
              <p>Sept 13</p>
            </div>
            <div class="main__content-graph">
              <div></div>
              <p>Sept 14</p>
            </div>
            <div class="main__content-graph">
              <div></div>
              <p>Sept 15</p>
            </div>
            <div class="main__content-graph">
              <div></div>
              <p>Sept 16</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'IndexPage',
}
</script>


<style>
.table>:not(caption)>*>* {
  padding-top: 1vw !important;
}

.main__content {
  padding-left: 20px;
  padding-top: 28px;
  padding-right: 19px;
  display: grid;
  grid-template-columns: 1.5fr 1.5fr 2.3fr;
  grid-auto-rows: 150px;
  gap: 20px;
}

.main__content-items {
  background: #ffffff;
  border-radius: 12px;
  padding: 11px 19px 11px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.other-block {
  gap: 26px !important;
}

.other-block div h3 {
  font-size: 13px !important;
}

.main__content-items:nth-of-type(3) .main__content-info {
  gap: 80px;
}

.main__content-items:nth-of-type(4) {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
  padding-top: 23px;
  padding-left: 20px;
}

.main__content-items:nth-of-type(5) {
  grid-column-start: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.main__content-items:nth-of-type(6) {
  grid-column-start: 2;
  grid-row-start: 3;
}

.main__content-items:nth-of-type(7) {
  grid-column-start: 3;
  grid-row-start: 2;
  grid-row-end: 6;
  padding-top: 23px;
  padding-left: 20px;
  padding-bottom: 20px;
  display: block;
  height: 100%;
}

.main__content-items:nth-of-type(8) {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 6;
  padding-top: 23px;
  padding-left: 20px;
  padding-bottom: 19px;
  height: 100%;
  display: block;
}

.main__content-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main__content-icon {
  background: rgba(192, 192, 192, 0.16);
  border-radius: 8px;
  padding: 9px;
}

.main__content-head select {
  font-family: var(--int400);
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  color: #bec0ca;
  outline: none;
}

.main__content-info {
  display: flex;
  gap: 63px;
}

.main__content-item {
  font-family: var(--int400);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  color: #8b8d97;
}

.main__content-value {
  font-family: var(--pop500);
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: left;
  margin-top: 8px;
  color: var(--black);
}

.main__content-value span {
  font-family: var(--int400);
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
  color: #519c66;
}

.main__content-title {
  font-family: var(--int500);
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
}

.main__content-chart {
  display: flex;
  align-items: center;
  gap: 54px;
}

.main__chart-img {
  display: block;
  margin: 0 auto;
}

.main__chart-gender {
  font-family: var(--int400);
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #a6a8b1;
  display: flex;
  gap: 8px;
  align-items: center;
}

.main__chart-gender:first-of-type span {
  width: 8px;
  height: 8px;
  background: #ffcc91;
  border-radius: 6px;
  display: block;
}

.main__chart-gender:last-of-type span {
  width: 8px;
  height: 8px;
  background: #5570f1;
  border-radius: 6px;
  display: block;
}

.main__content-notice {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.main__content-notice h3 {
  font-family: var(--pop500);
  font-size: 20px;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 40px;
}

.main__content-notice p {
  font-family: var(--int400);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 37px !important;
}

.main__content-notice button {
  background: #e92026;
  border: none;
  border-radius: 12px;
  padding: 17px 16px 17px 16px;
  color: white;
  cursor: pointer;
}

.main__content-sub {
  display: flex;
  align-items: center;
  gap: 21px;
}

.main__content-select {
  background: rgba(85, 112, 241, 0.08);
  border-radius: 8px;
  padding: 6.5px 12px;
  color: var(--orange) !important;
}

.main__content-scale {
  display: flex;
  gap: 60px;
}

.main__content-y {
  display: flex;
  flex-direction: column;
  gap: 33px;
  margin-top: 35px;
}

.main__content-y p {
  font-family: var(--int400);
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #a6a8b1;
}

.main__content-x {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 30px;
}

.main__content-graph {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 19px;
}

.main__content-graph div {
  width: 13px;
  height: 220px;
  background: #eef0fa;
  border-radius: 50px;
  position: relative;
}

.main__content-graph div::before {
  content: "";
  position: absolute;
  width: 13px;
  height: 70px;
  background: #ffcc91;
  border-radius: 50px;
  bottom: 0;
}

.main__content-graph:nth-of-type(2) div::before {
  height: 130px;
}

.main__content-graph:nth-of-type(3) div::before {
  height: 95px;
}

.main__content-graph:nth-of-type(4) div::before {
  height: 140px;
}

.main__content-graph:nth-of-type(5) div::before {
  height: 60px;
}

.main__content-graph:nth-of-type(6) div::before {
  height: 40px;
}

.main__content-graph:nth-of-type(6) div::before {
  height: 55px;
}

.main__content-graph p {
  font-family: var(--int400);
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: right;
}

@media (max-width: 1400px) {
  .main__content {
    grid-template-columns: 1.5fr 1.8fr 2fr;
  }

  /* .main__content {
    grid-template-columns: ;
  }

  .other-block {
    gap: 5px !important;
  }

  .other-block div h3 {
    font-size: 12px !important;
  } */

  .header__nav {
    min-height: 154vh;
  }
}

@media (max-width: 1250px) {
  .header__nav-blocks {
    gap: 10px;
    padding: 10px;
  }

  .header__nav-blocks p {
    font-size: 10px;
  }
}

@media (max-width: 1200px) {
  .header__nav-list {
    gap: 20px;
  }

  .main__content {
    grid-template-columns: 1fr 1fr;
  }

  .main__content-items:nth-of-type(3) {
    grid-column-start: 1;
    grid-row-start: 4;
    grid-row-end: 5;
  }

  .main__content-items:nth-of-type(4) {
    grid-column-start: 1;
    grid-row-start: 2;
    grid-row-end: 4;
    padding-top: 23px;
    padding-left: 20px;
  }

  .main__content-items:nth-of-type(5) {
    grid-column-start: 1;
    grid-row-start: 5;
    grid-row-end: 6;
  }

  .main__content-items:nth-of-type(6) {
    grid-row-start: 5;
  }

  .main__content-items:nth-of-type(7) {
    grid-column-start: 2;
    grid-row-start: 2;
    padding-top: 23px;
    padding-left: 20px;
    padding-bottom: 20px;
    display: block;
    height: 67%;
  }

  .main__content-items:nth-of-type(8) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 6;
    grid-row-end: 8;
  }
}

@media (max-width: 930px) {
  .main__content {
    display: flex;
    flex-wrap: wrap;
  }

  .main__content-items {
    width: 100%;
  }

  .main__content-items:nth-of-type(2) {
    grid-column-start: 1;
    grid-row-start: 2;
  }

  .main__content-items:nth-of-type(3) {
    grid-column-start: 1;
    grid-row-start: 3;
    grid-row-end: 4;
  }

  .main__content-items:nth-of-type(4) {
    grid-column-start: 1;
    grid-row-start: 4;
    grid-row-end: 6;
    padding-top: 23px;
    padding-left: 20px;
  }

  .main__content-items:nth-of-type(5) {
    grid-column-start: 1;
    grid-row-start: 6;
    grid-row-end: 6;
  }
}

@media (max-width: 800px) {
  .header__nav {
    width: fit-content;
  }

  .header__nav-blocks {
    margin: 0 20px;
  }
}

@media (max-width: 650px) {
  .burger-menu {
    display: block;
  }

  .header__nav {
    width: 88px !important;
  }

  section {
    overflow: hidden;
  }

  .main__content-items:nth-of-type(3) .main__content-info {
    gap: 20px;
  }

  .main__head-title {
    font-size: 16px;
  }

  .main__head-select {
    font-size: 9px;
  }

  .main__content-scale {
    gap: 20px;
  }

  .header__nav {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 10;
    height: 100vh !important;
    width: 100vw !important;
    display: none;
  }

  .burger-menu {
    z-index: 1000;
  }

  .main__head-select select {
    width: 25px;
  }

  .main__head-select {
    gap: 0;
  }
}
</style>
