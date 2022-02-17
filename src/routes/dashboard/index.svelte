<script>
import OngoingCard from "../../components/OngoingCard.svelte";
import CartCard from "../../components/CartCard.svelte";

	function handleMin(id) {
		var amount = document.getElementById('amount-' + id).innerText;
		amount = parseInt(amount);
		if (amount > 1) {
			document.getElementById('amount-' + id).innerText = amount - 1;
		}
	}
	function handlePlus(id) {
		var amount = document.getElementById('amount-' + id).innerText;
		amount = parseInt(amount);
		if (amount > 0) {
			document.getElementById('amount-' + id).innerText = amount + 1;
		}
	}

	function total_price_calc() {}
</script>

<div class="flex w-11/12 justify-evenly mx-auto mt-4">
	<section class="cart flex-1">
		<h1 class="text-5xl font-bold mb-6 ml-10">Cart</h1>
		<div class="vertical-line border-r-8">
            <CartCard />
            <CartCard />

			<div class="checkout h-14 text-right mr-8 mt-8">
				<p class="font-bold text-2xl mb-2">Total : Rp<span id="total-price">54.000</span></p>
				<button class="font-bold bg-white border-2 px-2 py-1 rounded-xl shadow-lg"
					>Checkout<img src="/checkout.png" class="inline-block h-6" alt="" /></button
				>
			</div>
		</div>
	</section>

	<section class="ongoing-order flex-1">
		<h1 class=" text-5xl font-bold mb-6 ml-10">Ongoing Orders</h1>
		<OngoingCard />
	</section>
</div>
