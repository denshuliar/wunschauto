 <template>
    <div class="AppHeader">
        <b-container fluid>
            <b-navbar class="p-0 py-2">
                <b-navbar-brand href="#">
                    <AppLogo :path="logo" />
                </b-navbar-brand>

				<b-navbar class="ml-auto">
					<AppMainMenu :list="list" />

					<AppButton :text="buttonText" />
				</b-navbar>
            </b-navbar>
        </b-container>
    </div>
</template>

<script>
export default {
    props: {
		logo: {
			type: String,
			default: '',
		},

		list: {
			type: Array,
			default: () => [],
		},

		buttonText: {
			type: String,
			default: '',
		},
	},
}
</script>

<style lang="scss" scoped>
    .AppHeader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
		padding: 0 7%;
        border-bottom: 1px solid rgba(255, 255, 255, .5);
        top: 15px;
    }
</style>
