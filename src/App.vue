<script setup lang="ts">
import { ref, onMounted } from 'vue'
const date = new Date()
const currentMonth = date.getMonth() + 1
const currentYear = date.getFullYear()
const activeClass = 'text-activeGreen border-activeGreen'
let chosenMonth = ref(currentMonth)

onMounted(() => {
  let element = document.getElementById('list-month');
  element.scrollLeft = element?.scrollWidth;
})


</script>

<template>
  
<div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex overflow-scroll -mb-px text-sm font-medium text-center overflow-y-auto" id="list-month">
        <li  v-for="month in 12" class="mr-2" @click="changeMonth(month)">
            <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg ">
              {{month}}/{{ currentYear - 1}}
            </button>
        </li>
        <li  v-for="month in currentMonth" class="mr-2" @click="changeMonth(month)">
            <button :class="month === chosenMonth ? activeClass : ''" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg ">
              {{month}}/{{ currentYear }}
            </button>
        </li>
        
    </ul>
</div>
<div>
  <div class="p-20">
    aloo
  </div>
</div>


</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}
#list-month {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer/Edge */
}
#list-month::-webkit-scrollbar {
  display: none; /* Hide scrollbar in WebKit browsers */
}
nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
