import PayloadHomeService from '~/services/payload-home'

export const state = () => ({
	payloadHome: null,
	payloadHomeLoading: false
})

export const getters = {
	payloadHome: state => state.payloadHome,
	payloadHomeLoading: state => state.payloadHomeLoading
}

export const mutations = {
	GET_PAYLOAD_HOME_REQUEST: (state) => {
		state.payloadHomeLoading = true
	},

	GET_PAYLOAD_HOME_SUCCESS: (state, payload) => {
		state.payloadHome = payload
		state.payloadHomeLoading = false
	},

	GET_PAYLOAD_HOME_FAILURE: (state) => {
		state.payloadHome = null
		state.payloadHomeLoading = false
	}
}

export const actions = {
	getPayloadHome ({ commit }) {
		return new Promise((resolve, reject) => {
			commit('GET_PAYLOAD_HOME_REQUEST')

			try {
				setTimeout(() => {
					const payloadHome = PayloadHomeService.getPayloadHome()

					commit('GET_PAYLOAD_HOME_SUCCESS', payloadHome)

					resolve(payloadHome)
				})
			} catch (err) {
				commit('GET_PAYLOAD_HOME_FAILURE')

				reject(err)
			}
		})
	}
}
