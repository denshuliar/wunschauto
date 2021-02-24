<template>
    <div class="AppLogo">
        <b-img :src='path' block alt="Logo"></b-img>
    </div>
</template>

<script>
export default {
    props: [
        'path'
    ]
}
</script>

<style lang="scss" scoped>

</style>
