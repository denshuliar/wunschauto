<template>
    <div class="AppButton">
        {{ text }}
    </div>
</template>

<script>
export default {
    props: [
        'text'
    ]
}
</script>

<style lang="scss" scoped>
    .AppButton {
        color: red;
    }
</style>
