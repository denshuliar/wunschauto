 <template>
    <div class="AppHeader">
        <b-container fluid>
            <b-navbar class="p-0 py-2">
                <b-navbar-brand href="#">
                    <AppLogo :path="payload.section_head.image.url" />
                </b-navbar-brand>

				<b-navbar class="ml-auto">
					<AppMainMenu :list="payload.section_navbar.image.page_links" />

					<AppButton
						:text="payload.section_navbar.image.button"
						type="thin"
					/>
				</b-navbar>
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
export default {
    props: {
		payload: {
			type: Object,
			default: () => {},
		},
	},
}
</script>

<style lang="scss" scoped>
    .AppHeader {
        position: absolute;
        top: 15px;
        left: 0;
        width: 100%;
		padding: 0 7%;
        border-bottom: 1px solid rgba(255, 255, 255, .5);
    }
</style>
