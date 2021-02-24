<template>
    <section class="HomeSectionBenefits">
        <AppSectionTitle
            color="light"
            :text="vorteiles.subtitle"
            :title="vorteiles.title"
        />

        <b-container>
            <b-row>
                <b-col
                    v-for="(vorteileItem, index) in vorteiles.vorteile"
                    :key="index"
                >
                    <HomeBenefitsItem
                        :item='vorteileItem'
                    />
                </b-col>
            </b-row>
        </b-container>
    </section>
</template>

<script>
export default {
    props: [
        'vorteiles'
    ]
}
</script>

<style lang="scss" scoped>
    .HomeSectionBenefits {
        background-color: #182540
    }
</style>
