<div
  x-data="formHandler()"
  class="container mx-auto max-w-lg p-8 bg-white rounded-lg shadow-lg">
  <h2 class="text-2xl font-bold mb-6 text-center">Registration Form</h2>

  <form @submit.prevent="validateForm" class="space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
      <input
        id="name"
        type="text"
        x-model="formData.name"
        @input="validateName"
        autocomplete="name"

        :placeholder="translations.placeholders.name"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      <span
        x-show="errors.name"
        class="error text-red-500 text-sm"
        x-text="errors.name"></span>
    </div>

    <div>
      <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
      <input
        id="email"
        type="email"
        x-model="formData.email"
        @input="validateEmail"

        :placeholder="translations.placeholders.email"
        autocomplete="email"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      <span
        x-show="errors.email"
        class="error text-red-500 text-sm"
        x-text="errors.email"></span>
    </div>

    <div>
      <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
      <input
        id="username"
        type="text"
        x-model="formData.  username"
        @input="validateUsername"

        :placeholder="translations.placeholders.username"
        autocomplete="username"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      <span
        x-show="errors.username"
        class="error text-red-500 text-sm"
        x-text="errors.  username"></span>
    </div>

    <div>
      <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
      <div x-data="{ show: false }" class="relative flex items-center mt-2">
        <input :type=" show ? 'text': 'password' " name="password" :placeholder="translations.placeholders.password" id="password" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10" value="password" autocomplete="new-password" type="password" x-model="formData.password" @input="validatePassword">
        <button type="button" class="absolute right-2 bg-transparent flex items-center justify-center hover:text-blue-600" @click="show = !show">
          <svg x-show="!show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
          </svg>
          <svg x-show="show" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
          </svg>
        </button>
      </div>
      <span
        x-show="errors.password"
        class="error text-red-500 text-sm"
        x-text="errors.password"></span>
    </div>

    <div>
      <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
      <input
        id="phone"
        type="tel"
        x-model="formData.phone"
        @input="validatePhone"
        autocomplete="tel"

        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      <span
        x-show="errors.phone"
        class="error text-red-500 text-sm"
        x-text="errors.phone"></span>
    </div>

    <div>
      <label for="birthdate" class="block text-sm font-medium text-gray-700">Date of Birth</label>
      <input
        id="birthdate"
        type="text"
        x-model="formData.birthdate"
        autocomplete="bday"
        :placeholder="translations.placeholders.birthdate + ' - ' + translations.placeholders.dateFormat"
        @input="formatAndValidatebirthdate"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      <span
        x-show="errors.birthdate"
        class="error text-red-500 text-sm"
        x-text="errors.birthdate"></span>
    </div>

    <div class="space-y-4">
      <h3 class="font-medium text-gray-900">Address Information</h3>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label for="street" class="block text-sm font-medium text-gray-700">Street Address</label>
          <input
            id="street"
            type="text"
            x-model="formData.address.street"
            @input="validateAddress"
            autocomplete="street-address"
            :placeholder="translations.placeholders.street"

            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <span
            x-show="errors.address?.street"
            class="error text-red-500 text-sm"
            x-text="errors.address?.street"></span>
        </div>

        <div>
          <label for="apt" class="block text-sm font-medium text-gray-700">Apt/Suite/Unit</label>
          <input
            id="apt"
            type="text"
            x-model="formData.address.street_number"
            autocomplete="address-line2"
            :placeholder="translations.placeholders.street_number"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
        </div>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <label for="city" class="block text-sm font-medium text-gray-700">City</label>
          <input
            id="city"
            type="text"

            x-model="formData.address.city"
            @input="validateAddress"
            autocomplete="address-level2"
            :placeholder="translations.placeholders.city"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <span
            x-show="errors.address?.city"
            class="error text-red-500 text-sm"
            x-text="errors.address?.city"></span>
        </div>

        <div>
          <label for="state" class="block text-sm font-medium text-gray-700">State/Province</label>
          <input
            id="state"
            type="text"

            x-model="formData.address.state"
            @input="validateAddress"
            autocomplete="address-level1"
            :placeholder="translations.placeholders.state"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <span
            x-show="errors.address?.state"
            class="error text-red-500 text-sm"
            x-text="errors.address?.state"></span>
        </div>

        <div>
          <label for="postal_code" class="block text-sm font-medium text-gray-700">ZIP/Postal Code</label>
          <input
            id="postal_code"
            type="text"

            x-model="formData.address.postal_code"
            @input="validateAddress"
            autocomplete="postal-code"
            :placeholder="translations.placeholders.postal_code"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          <span
            x-show="errors.address?.postal_code"
            class="error text-red-500 text-sm"
            x-text="errors.address?.postal_code"></span>
        </div>
      </div>

      <div>
        <label for="country" class="block text-sm font-medium text-gray-700">Country</label>
        <select
          id="country"

          x-model="formData.address.country"
          @change="validateAddress"
          autocomplete="country"
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <template x-for="country in countries" :key="country.code">
            <option :value="country.code" x-value="country.code" x-text="country.name"></option>
          </template>
        </select>
        <span
          x-show="errors.address?.country"
          class="error text-red-500 text-sm"
          x-text="errors.address?.country"></span>
      </div>
    </div>

    <div>
      <label for="interests" class="block text-sm font-medium text-gray-700">Interests</label>
      <div class="mt-2 grid grid-cols-2 gap-4"
        x-data="{
             interestOptions: ['Music', 'Movies', 'Sports', 'Books', 'Science', 'Arts']
           }">
        <template x-for="interest in interestOptions" :key="interest">
          <label class="inline-flex items-center cursor-pointer" :title="interest">
            <input type="checkbox"
              x-model="formData.interests"
              :value="interest.toLowerCase()"
              :checked="formData.interests.includes(interest)"
              class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
            <span class="ml-2" x-text="interest"></span>
          </label>
        </template>
      </div>
      <span
        x-show="errors.interests"
        class="error text-red-500 text-sm"
        x-text="errors.interests"></span>
    </div>

    <div>
      <label for="cv" class="block text-sm font-medium text-gray-700">Brief CV</label>
      <textarea
        id="cv"
        x-model="formData.cv"
        @input="validateCv"
        rows="10"
        autocomplete="cv"

        :placeholder="translations.placeholders.cv"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
      <span
        x-show="errors.cv"
        class="error text-red-500 text-sm"
        x-text="errors.cv"></span>
    </div>

    <div class="flex justify-end">
      <button
        type="submit"
        class="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </div>
  </form>
</div>
