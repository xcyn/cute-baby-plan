<template>
  <div class="rank">
    <div :key="i" v-for="i in 4">
      <babyPerson/>
    </div>
  </div>
</template>

<script>
import babyPerson from "../components/baby-person";
export default {
    name: 'babyRank',
    components: {
      babyPerson
    },
    data() {
        return {
        };
    },
    methods: {
    },
    created() {
    }
};
</script>

<style scoped lang="stylus">

</style>