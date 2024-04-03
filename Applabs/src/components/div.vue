<template>
	<li v-for="item in items" :key="item.id">
	            <a :href="item.url" target="_blank">
	                <i :class="item.icon"></i>
	                <p>{{ item.title }}</p>
	            </a>
	        </li>
</template>

<script setup lang="ts">
defineProps<{ 
	items: any;
}>()
</script>
