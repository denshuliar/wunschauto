export const actions = {
	async nuxtServerInit ({ dispatch }) {
		await dispatch('payload-home/getPayloadHome', null, { root: true })
		await dispatch('payload-shared/getPayloadShared', null, { root: true })
	}
}
