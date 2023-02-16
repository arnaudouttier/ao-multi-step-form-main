<script setup>
</script>

<template>
    <aside id="sidebar">
        <ul>
            <li>
                <span :class="{ active: $store.state.currentStepNumber === 1 }">1</span>
                <h2>Step 1</h2>
                <h3> Your info</h3>
            </li>
            <li>
                <span :class="{ active: $store.state.currentStepNumber === 2 }">2</span>
                <h2>Step 2</h2>
                <h3> Your info</h3>

            </li>
            <li>
                <span :class="{ active: $store.state.currentStepNumber === 3 }">3</span>
                <h2>Step 3</h2>
                <h3> Your info</h3>
            </li>
            <li>
                <span
                    :class="{ active: $store.state.currentStepNumber === 4 || $store.state.currentStepNumber === 5 }">4</span>
                <h2>Step 4</h2>
                <h3> Your info</h3>
            </li>
        </ul>
    </aside>
    <!-- #aside -->

</template>

<style lang="scss" scoped>
#sidebar {
    grid-area: sidebar;
    height: 20vh;
    background-color: red;
    display: grid;
    justify-content: center;
    padding-top: 2rem;

    ul {
        display: flex;
        column-gap: 2rem;


        span {
            width: 30px;
            height: 30px;
            border: 1px solid #fff;
            border-radius: 50%;
            display: grid;
            place-content: center;
            color: #fff;

            &.active {
                border-width: 2px;
                font-weight: bold;
            }
        }

        h2,
        h3 {
            display: none;
        }
    }
}

@media(min-width:992px) {
    #sidebar {
        padding-top: 0;
        height: 100%;

        ul {

            h2,
            h3 {
                display: block;
            }
        }
    }
}
</style>
