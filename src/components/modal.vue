<template>
    <div class="wraps">
        <div class="modalWind">

        </div>
    </div>
</template>
<script>

export default {
    name: "modal",
}
</script>
<style lang="scss" >
.wraps {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}

.modalWind {
    background-color: aquamarine;
    box-shadow: 0 0 10px grey;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;

}
</style>
