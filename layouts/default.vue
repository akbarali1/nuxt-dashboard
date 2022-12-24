<template>
    <div>
        <header class="header">
            <Sidebar />
            <nuxt />
        </header>
    </div>
</template>




<script>


import SidebarVue from '../components/Sidebar.vue';
export default {
    components: {
        SidebarVue,
    }
}

</script>