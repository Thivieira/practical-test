<div class="mx-auto">
	<div
	class="mx-auto p-8 bg-white rounded-lg shadow-lg"
	x-data="profileFormHandler()"
	>
	<form @submit.prevent="validateForm">
		<div class="space-y-6">
		<h2 class="text-2xl font-bold mb-6 text-center">Profile</h2>

		<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
			<div class="sm:col-span-4">
			<label for="name" class="block text-sm/6 font-medium text-gray-900"
				>Name</label
			>
			<div class="mt-2">
				<input
				type="text"
				name="name"
				id="name"
				x-model="formData.name"
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				<span
				x-show="errors.name"
				class="error text-red-500 text-sm"
				x-text="errors.name"
				></span>
			</div>
			</div>

			<div class="sm:col-span-4">
			<label for="phone" class="block text-sm/6 font-medium text-gray-900"
				>Phone</label
			>
			<div class="mt-2">
				<input
				type="tel"
				name="phone"
				id="phone"
				x-model="formData.phone"
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				<span
				x-show="errors.phone"
				class="error text-red-500 text-sm"
				x-text="errors.phone"
				></span>
			</div>
			</div>

			<div class="sm:col-span-4">
			<label
				for="birthdate"
				class="block text-sm/6 font-medium text-gray-900"
				>Birth date</label
			>
			<div class="mt-2">
				<input
				type="text"
				name="birthdate"
				id="birthdate"
				x-model="formData.birthdate"
				autocomplete="bday"
				:placeholder="translations.placeholders.birthdate + ' - ' + translations.placeholders.dateFormat"
				x-mask="99/99/9999"
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
			</div>
			<span
				x-show="errors.birthdate"
				class="error text-red-500 text-sm"
				x-text="errors.birthdate"
			></span>
			</div>

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
					x-model="formData.username"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
					placeholder="Username"
				/>
				</div>
				<span
				x-show="errors.username"
				class="error text-red-500 text-sm"
				x-text="errors.username"
				></span>
			</div>
			</div>

			<div class="sm:col-span-4">
			<label for="email" class="block text-sm/6 font-medium text-gray-900"
				>Email address</label
			>
			<div class="mt-2">
				<input
				id="email"
				name="email"
				type="email"
				autocomplete="email"
				x-model="formData.email"
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				<span
				x-show="errors.email"
				class="error text-red-500 text-sm"
				x-text="errors.email"
				></span>
			</div>
			</div>
		</div>
		<div class="border-y border-gray-900/10 pb-6 pt-6">
			<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
			<div class="col-span-full grid grid-cols-2 gap-x-6 gap-y-8">
				<div class="">
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
					x-model="formData.address.street"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
					/>
				</div>
				<span
					x-show="errors.address?.street"
					class="error text-red-500 text-sm"
					x-text="errors.address?.street"
				></span>
				</div>
				<div class="">
				<label
					for="street-number"
					class="block text-sm/6 font-medium text-gray-900"
					>Unit</label
				>
				<div class="mt-2">
					<input
					type="text"
					name="street-number"
					id="street-number"
					autocomplete="street-number"
					x-model="formData.address.street_number"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
					/>
				</div>
				<span
					x-show="errors.address?.street_number"
					class="error text-red-500 text-sm"
					x-text="errors.address?.street_number"
				></span>
				</div>
			</div>

			<div class="col-span-full">
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
					x-model="formData.address.city"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				</div>
				<span
				x-show="errors.address?.city"
				class="error text-red-500 text-sm"
				x-text="errors.address?.city"
				></span>
			</div>

			<div class="col-span-full">
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
					x-model="formData.address.state"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				</div>
				<span
				x-show="errors.address?.state"
				class="error text-red-500 text-sm"
				x-text="errors.address?.state"
				></span>
			</div>

			<div class="col-span-full">
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
					x-model="formData.address.postal_code"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				/>
				</div>
				<span
				x-show="errors.address?.postal_code"
				class="error text-red-500 text-sm"
				x-text="errors.address?.postal_code"
				></span>
			</div>
			<div class="col-span-full">
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
					x-model="formData.address.country"
					@change="validateAddress"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
				>
					<template x-for="country in countries" :key="country.code">
					<option
						:value="country.code"
						x-value="country.code"
						x-text="country.name"
					></option>
					</template>
				</select>
				<span
					x-show="errors.address?.country"
					class="error text-red-500 text-sm"
					x-text="errors.address?.country"
				></span>
				</div>
			</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-8">
			<div class="col-span-full">
			<label
				for="interests"
				class="block text-sm/6 font-medium text-gray-900"
				>Interests</label
			>
			<div class="mt-2">
				<div
				class="mt-2 grid grid-cols-2 gap-4"
				x-data="{interestOptions: ['Music', 'Movies', 'Sports', 'Books', 'Science', 'Arts']}"
				>
				<template x-for="interest in interestOptions" :key="interest">
					<label
					class="inline-flex items-center cursor-pointer"
					:title="interest"
					:id="`${interest}-checkbox`"
					>
					<input
						type="checkbox"
						x-model="formData.interests"
						:value="interest.toLowerCase()"
						:checked="formData.interests.includes(interest)"
						class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
						:id="`${interest}-checkbox`"
					/>
					<span class="ml-2" x-text="interest"></span>
					</label>
				</template>
				</div>
				<span
				x-show="errors.interests"
				class="error text-red-500 text-sm"
				x-text="errors.interests"
				></span>
			</div>
			</div>

			<div class="col-span-full">
			<label for="cv" class="block text-sm/6 font-medium text-gray-900"
				>CV</label
			>
			<div class="mt-2">
				<textarea
				name="cv"
				id="cv"
				rows="20"
				x-model="formData.cv"
				class="block bg-slate-50 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
				></textarea>
				<span
				x-show="errors.cv"
				class="error text-red-500 text-sm"
				x-text="errors.cv"
				></span>
			</div>
			</div>
		</div>

		<div>
			<p class="text-sm/6 text-gray-900">
			Edit your user account
			<a
				href="<?php echo get_edit_profile_url(); ?>"
				class="text-indigo-600"
				>here</a
			>.
			</p>
		</div>

		<div class="mt-6 flex items-center justify-end gap-x-6">
			<button
			type="submit"
			class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
			>
			Save
			</button>
		</div>
		</div>
	</form>
	</div>
</div>
