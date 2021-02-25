<template>
    <div class="AppLogo">
        <b-img
			:src="path"
			block
			alt="Logo"
		/>
    </div>
</template>

<script>
export default {
    props: {
		path: {
			type: String,
			default: '',
		},
	},
}
</script>
