import { createStore } from 'vuex'

// state
const state = {
    currentStepNumber: 1,
    userId: 0,
    userName: null,
    userEmail: null,
    userPhone: null,
    selectedPlan: 'base',
    plans: [
        {
            id: 1,
            title: "Arcade",
            price: 9,
            YearPrice: 90,
            extra: "2 months free",
            icon: "icon-arcade.svg"
        },
        {
            id: 2,
            title: "Advanced",
            price: 12,
            YearPrice: 120,
            extra: "2 months free",
            icon: "../assets/images/icon-advanced.svg"
        },
        {
            id: 3,
            title: "Pro",
            price: 15,
            YearPrice: 150,
            extra: "2 months free",
            icon: "../assets/images/icon-pro.svg"
        }
    ],
    selectedOptions: 'monthly',
    options: [
        { text: 'Monthly', value: 'monthly' },
        { text: 'Yearly', value: 'yearly' }
    ],
    addonsSelected: [],
    addons: [
        {
            id: 1,
            title: "Online service",
            titleSlug: "online-service",
            description: "Access to multiplayer games",
            price: 1,
        },
        {
            id: 2,
            title: "Larger storage",
            titleSlug: "larger-storage",
            description: "Extra 1TB of cloud save",
            price: 2,
        },
        {
            id: 3,
            title: "Customizable Profile",
            titleSlug: "customizable-profile",
            description: "Custom theme on your profile",
            price: 2,
        },
    ],
    user: []
}

// getters
const getters = {
    priceCalc(state) {
        return state.user;
    }
}

// actions
const actions = {
    addProductToCart({ commit }, value) {
        commit('pushProductToCart', value)
    }
}

// mutations
const mutations = {
    pushProductToCart(state, value) {
        state.user = value
    },
}

export default createStore({
    state,
    getters,
    actions,
    mutations
})
