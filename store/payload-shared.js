import PayloadSharedService from '~/services/payload-shared'

export const state = () => ({
	payloadShared: null,
	payloadSharedLoading: false
})

export const getters = {
	payloadShared: state => state.payloadShared,
	payloadSharedLoading: state => state.payloadSharedLoading
}

export const mutations = {
	GET_PAYLOAD_SHARED_REQUEST: (state) => {
		state.payloadSharedLoading = true
	},

	GET_PAYLOAD_SHARED_SUCCESS: (state, payload) => {
		state.payloadShared = payload
		state.payloadSharedLoading = false
	},

	GET_PAYLOAD_SHARED_FAILURE: (state) => {
		state.payloadShared = null
		state.payloadSharedLoading = false
	}
}

export const actions = {
	getPayloadShared ({ commit }) {
		return new Promise((resolve, reject) => {
			commit('GET_PAYLOAD_SHARED_REQUEST')

			try {
				setTimeout(() => {
					const payloadShared = PayloadSharedService.getPayloadShared()

					commit('GET_PAYLOAD_SHARED_SUCCESS', payloadShared)

					resolve(payloadShared)
				})
			} catch (err) {
				commit('GET_PAYLOAD_SHARED_FAILURE')

				reject(err)
			}
		})
	}
}
