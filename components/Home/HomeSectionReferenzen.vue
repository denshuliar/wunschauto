<template>
    <section class="HomeSectionReferenzen">
        <b-container>
            <AppSectionTitle
                :title="referenzen.title"
                :subtitle="referenzen.subtitle"
            />
        </b-container>
    </section>
</template>

<script>
export default {
    props: [
        'referenzen'
    ]
}
</script>

<style lang="scss" scoped></style>
