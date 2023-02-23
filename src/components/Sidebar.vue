<script setup>
</script>

<template>
    <aside id="sidebar">
        <ul>
            <li>
                <span :class="{ active: $store.state.currentStepNumber === 1 }">1</span>
                <div class="list-item-group">
                    <h2>STEP 1</h2>
                    <h3> YOUR INFO</h3>
                </div>
            </li>
            <li>
                <span :class="{ active: $store.state.currentStepNumber === 2 }">2</span>
                <div class="list-item-group">
                    <h2>STEP 2</h2>
                    <h3> SELECT PLAN</h3>
                </div>
            </li>
            <li>
                <span :class="{ active: $store.state.currentStepNumber === 3 }">3</span>
                <div class="list-item-group">
                    <h2>STEP 3</h2>
                    <h3> ADD ONS</h3>
                </div>
            </li>
            <li>
                <span
                    :class="{ active: $store.state.currentStepNumber === 4 || $store.state.currentStepNumber === 5 }">4</span>
                <div class="list-item-group">
                    <h2>STEP 4</h2>
                    <h3> SUMMARY</h3>
                </div>
            </li>
        </ul>
    </aside>
    <!-- #aside -->
</template>

<style lang="scss" scoped>
#sidebar {
    grid-area: sidebar;
    background-image: url("../assets/images/bg-sidebar-mobile.svg");
    background-repeat: no-repeat;
    background-size: cover;

    ul {
        display: flex;
        justify-content: center;
        column-gap: 2rem;
        margin-top: 2rem;


        span {
            width: 30px;
            height: 30px;
            border: 1px solid var(--blue_100);
            border-radius: 50%;
            display: grid;
            place-content: center;
            color: #fff;
            transition: background-color .4s ease;

            &.active {
                border-color: var(--blue_100);
                color: var(--blue_400);
                font-weight: bold;
                background-color: var(--blue_100);
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
        background-image: url("../assets/images/bg-sidebar-desktop.svg");

        ul {
            width: 80%;
            margin-inline: auto;
            flex-direction: column;
            row-gap: 2rem;
            margin-top: 4rem;

            li {
                display: flex;
                align-items: center;
                column-gap: 1rem;
            }

            h2,
            h3 {
                display: block;
            }

            h2 {
                color: var(--gray_100);
                font-size: 0.9rem;
                margin-bottom: 0.2rem;
                font-weight: 400;
            }

            h3 {
                color: var(--white);
            }
        }
    }
}
</style>
