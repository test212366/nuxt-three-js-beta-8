 
<script lang="ts">
	import {
		Chart as ChartJS,
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
		} from 'chart.js'
	import { Line } from 'vue-chartjs'
 

	ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
	)

export default {
  name: 'App',
  components: {
    Line
  },
  data() {
    return {
			data: {
				labels: ['', '', '', '', '', '', '', ''],
				datasets: [
				{
					label: 'Stonk',
					backgroundColor: '#099607',
					 
					data: [40, 30, 10, 30, 20, 10, 30, 0]
				}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: true
			}
		
		}
	}
}
</script>

<template>
  <div>
		<Line :data="data" :options="options" />
  </div>
</template>