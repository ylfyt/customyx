<script>
  import { base } from '$app/paths'
</script>

<div
	class="categ-card w-1/6 h-14 rounded-3xl bg-primary flex flex-row group  hover:cursor-pointer items-center shadow-lg"
>
	<div
		style={`background-image: url('${base}/music.png');  background-size: cover; background-color: white;`}
		class="w-1/5 h-3/4 rounded-full ml-2 my-auto"
	/>
	<div class="text-2xl flex-1 text-center">
		<h3 class="inline-block align-middle">Music</h3>
	</div>
</div>
