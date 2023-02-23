<script setup>
import { useStore } from 'vuex'

const store = useStore()

const goBack = () => {
    store.state.currentStepNumber--
}

const goNext = () => {
    if (store.state.currentStepNumber < 5) {
        store.state.currentStepNumber++
    }
}

const addProductCart = (value) => {
    const userData = []

    userData.push({
        id: value.user.length,
        userName: value.userName,
        userEmail: value.userEmail,
        userPhone: value.userPhone,
        userPlan: value.selectedPlan,
        planFormule: value.selectedOptions,
        addonFormule: value.addonsSelected
    })

    store.dispatch('addProductToCart', userData)

    if (store.state.currentStepNumber < 5) {
        store.state.currentStepNumber++
    }
}
</script>

<template>
    <section class="panel-ctrl">
        <div class="container">
            <button class="btn btn--secondary btn-back"
                v-show="store.state.currentStepNumber > 1 && store.state.currentStepNumber < 5" @click=goBack>Go
                Back</button>
            <button v-if="store.state.currentStepNumber < 4" class="btn btn--primary btn-next" @click=goNext>Next
                Step</button>
            <button v-if="store.state.currentStepNumber === 4" class="btn btn--primary btn-confirm"
                @click=addProductCart(store.state)>Confirm</button>
        </div>
    </section>
    <!-- .panel-ctrl -->
</template>

<style lang="scss" scoped>
.panel-ctrl {
    grid-area: panel;
    background-color: var(--white);

    .container {
        width: 90%;
        height: 100%;
        margin-inline: auto;
        position: relative;
    }

    button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);


        &.btn-back {
            left: 0;
        }

        &.btn-next,
        &.btn-confirm {
            right: 0%;
        }
    }
}

@media(min-width:992px) {
    .panel-ctrl {

        .container {
            max-width: 70%;
            margin-inline: auto;

        }
    }
}
</style>
