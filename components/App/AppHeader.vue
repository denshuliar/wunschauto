<template>
    <div class="AppHeader">
        <b-container>
            <b-navbar>
                <b-navbar-brand href="#">
                    <AppLogo
                        :path='logo'
                    />
                </b-navbar-brand>

                <AppMainMenu :list='list' />

                <AppButton
                    :text="buttonText"
                />
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
export default {
    props: [
        'logo',
        'list',
        'buttonText'
    ]
}
</script>

<style lang="scss" scoped>
    .AppHeader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        border-bottom: 1px solid rgba(255, 255, 255, .5);
        top: 15px;
    }
</style>
