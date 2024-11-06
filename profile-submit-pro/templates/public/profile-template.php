<?php
$key = sanitize_text_field( wp_unslash( $_GET['key'] ) );

if ( ! isset( $_GET['key'] ) ) {
	// wp_die( 'Public key not found' );
	echo 'Profile not found';
	return;
}

$is_key_valid = \ProfileSubmitPro\SubmissionManager::is_public_key_valid( $key );

if ( ! $is_key_valid ) {
	echo 'Profile not found';
	return;
}


$the_user_can_edit = \ProfileSubmitPro\SubmissionManager::the_user_can_edit( $key );


if ( $the_user_can_edit ) :
	?>

<div class="container mx-auto">
	<div class="mx-auto p-8 bg-white rounded-lg shadow-lg">
	<form>
		<div class="space-y-12">
		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="text-2xl font-bold mb-6 text-center">Profile</h2>
			<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			<div class="sm:col-span-4">
				<label
				for="username"
				class="block text-sm/6 font-medium text-gray-900"
				>Username</label
				>
				<div class="mt-2">
				<div
					class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md"
				>
					<input
					type="text"
					name="username"
					id="username"
					autocomplete="username"
					class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
					placeholder="Username"
					/>
				</div>
				</div>
			</div>
			</div>
		</div>

		<div class="border-b border-gray-900/10 pb-12">
			<h2 class="text-base/7 font-semibold text-gray-900">
			Personal Information
			</h2>
			<p class="mt-1 text-sm/6 text-gray-600">
			Use a permanent address where you can receive mail.
			</p>

			<div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
			<div class="sm:col-span-3">
				<label
				for="first-name"
				class="block text-sm/6 font-medium text-gray-900"
				>First name</label
				>
				<div class="mt-2">
				<input
					type="text"
					name="first-name"
					id="first-name"
					autocomplete="given-name"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label
				for="last-name"
				class="block text-sm/6 font-medium text-gray-900"
				>Last name</label
				>
				<div class="mt-2">
				<input
					type="text"
					name="last-name"
					id="last-name"
					autocomplete="family-name"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				</div>
			</div>

			<div class="sm:col-span-4">
				<label
				for="email"
				class="block text-sm/6 font-medium text-gray-900"
				>Email address</label
				>
				<div class="mt-2">
				<input
					id="email"
					name="email"
					type="email"
					autocomplete="email"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				</div>
			</div>

			<div class="sm:col-span-3">
				<label
				for="country"
				class="block text-sm/6 font-medium text-gray-900"
				>Country</label
				>
				<div class="mt-2">
				<select
					id="country"
					name="country"
					autocomplete="country-name"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
				>
					<option>United States</option>
					<option>Canada</option>
					<option>Mexico</option>
				</select>
				</div>
			</div>

			<div class="col-span-full">
				<label
				for="street-address"
				class="block text-sm/6 font-medium text-gray-900"
				>Street address</label
				>
				<div class="mt-2">
				<input
					type="text"
					name="street-address"
					id="street-address"
					autocomplete="street-address"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				</div>
			</div>

			<div class="sm:col-span-2 sm:col-start-1">
				<label
				for="city"
				class="block text-sm/6 font-medium text-gray-900"
				>City</label
				>
				<div class="mt-2">
				<input
					type="text"
					name="city"
					id="city"
					autocomplete="address-level2"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				</div>
			</div>

			<div class="sm:col-span-2">
				<label
				for="region"
				class="block text-sm/6 font-medium text-gray-900"
				>State / Province</label
				>
				<div class="mt-2">
				<input
					type="text"
					name="region"
					id="region"
					autocomplete="address-level1"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				</div>
			</div>

			<div class="sm:col-span-2">
				<label
				for="postal-code"
				class="block text-sm/6 font-medium text-gray-900"
				>ZIP / Postal code</label
				>
				<div class="mt-2">
				<input
					type="text"
					name="postal-code"
					id="postal-code"
					autocomplete="postal-code"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				</div>
			</div>
			</div>
		</div>
		</div>

		<div class="mt-6 flex items-center justify-end gap-x-6">
		<button
			type="submit"
			class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		>
			Save
		</button>
		</div>
	</form>
	</div>
</div>
<?php else : ?>
	<p>You are not allowed to edit this profile</p>
<?php endif; ?>