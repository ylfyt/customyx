<div class="flex w-11/12 justify-evenly mx-auto mt-4">
	<section class="cart flex-1">
		<h1 class="text-5xl font-bold mb-6 ml-10">Cart</h1>
		<div class="vertical-line border-r-8">
			<div class="cart-card w-11/12 bg-blue-500 mx-auto h-48 rounded-lg">
                <div class="flex flex-row h-1/12 justify-between">
                    <strong class="text-xl align-center cursor-pointer cart-del ml-1">&times;</strong>
                    <input type="checkbox" name="select-to-checkout" id="" class="m-2">
                </div>

                <div class="flex flex-row h-36 relative" style="">
                    <div
                        style="background-image: url('/electronic.png'); background-position: center; background-size: contain; background-repeat: no-repeat; background-color: white;"
                        class="h-3/4 w-1/6 relative left-10"
                    />
                    <div class="desc relative left-12">
                        <h1 class="text-lg">Pintu Kemana saja</h1>
                        <p class="text-sm mb-1 opacity-70">by DoraHandMade</p>
                        <p class="mb-1"><b>Rp27.000</b></p>
                        <p>"Alat yang bisa membuatmu pergi kemanapun kau mau"</p>
                    </div>
                </div>

                <div class="flex flex-row justify-end text-2xl relative bottom-5 right-3">
                    <button class="mr-2 bg-white rounded-full px-3 shadow-sm">-</button>
                    <h1 class="mr-2">2</h1>
                    <button class="bg-white rounded-full px-2 shadow-sm">+</button>
                    
                </div>
			</div>

            <div class="checkout h-14 text-right mr-8 mt-8">
                <p class="font-bold text-2xl mb-2">Total : Rp54.000</p>
                <button class="font-bold bg-white border-2 px-2 py-1 rounded-xl shadow-lg">Checkout<img src="/checkout.png" class= "inline-block h-6"alt=""></button>
            </div>
		</div>
	</section>

	<section class="ongoing-order flex-1">
		<h1 class=" text-5xl font-bold mb-6 ml-10">Ongoing Orders</h1>
        		<div class="cart-card w-11/12 bg-blue-500 mx-auto h-48 rounded-lg">

                <div class="flex flex-row h-full relative" style="">
                    <div
                        style="background-image: url('/electronic.png'); background-position: center; background-size: contain; background-repeat: no-repeat; background-color: white;"
                        class="h-3/4 w-1/6 relative left-10 my-auto"
                    />
                    <div class="desc relative left-12 my-auto">
                        <h1 class="text-lg">Pintu Kemana saja</h1>
                        <p class="text-sm mb-1 opacity-70">by DoraHandMade</p>
                        <p class="mb-1"><b>Rp27.000</b></p>
                        <p></p>
                        <p class="font-semibold">Status : Barang sedang dibuat</p>
                    </div>
                    <div class="more-detail ml-40">
                        <button class="font-bold bg-white border-2 px-2 py-1 rounded-xl shadow-sm mt-36">More Detail</button>
                    </div>
                </div>

			</div>

	</section>
</div>
