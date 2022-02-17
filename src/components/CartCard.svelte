	<div class="cart-card w-11/12 bg-blue-500 mx-auto h-48 rounded-lg mb-5">
				<div class="flex flex-row h-1/12 justify-between">
					<strong class="text-xl align-center cursor-pointer cart-del ml-1">&times;</strong>
					<input type="checkbox" name="select-to-checkout" id="" class="m-2" checked />
				</div>

				<div class="flex flex-row h-36 relative" style="">
					<div
						style="background-image: url('/electronic.png'); background-position: center; background-size: contain; background-repeat: no-repeat; background-color: white;"
						class="h-3/4 w-1/6 relative left-10"
					/>
					<div class="desc relative left-12">
						<h1 class="text-lg">Pintu Kemana saja</h1>
						<p class="text-sm mb-1 opacity-70">by DoraHandMade</p>
						<p class="mb-1 price"><b>Rp27.000</b></p>
						<p>"Alat yang bisa membuatmu pergi kemanapun kau mau"</p>
					</div>
				</div>

				<div class="flex flex-row justify-end text-2xl relative bottom-5 right-3">
					<button
						class="mr-2 bg-white rounded-full px-3 shadow-sm min"
						id="min-1"
						on:click={() => handleMin('1')}>-</button
					>
					<h1 class="mr-2 amount" id="amount-1">2</h1>
					<button class="bg-white rounded-full px-2 shadow-sm plus" on:click={() => handlePlus('1')}
						>+</button
					>
				</div>
			</div>