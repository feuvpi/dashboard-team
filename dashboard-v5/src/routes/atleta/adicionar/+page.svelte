<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form class="flex justify-center" action="#">
	<div class="w-2/5">
		<div class="mb-4.5 flex flex-col gap-6 xl:flex-row">
			<div class="w-full xl:w-1/2">
				<label class="mb-3 block text-sm font-medium text-black dark:text-white">
					First name
				</label>
				<input
					type="text"
					placeholder="Enter your first name"
					class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
				/>
			</div>

			<div class="w-full xl:w-1/2">
				<label class="mb-3 block text-sm font-medium text-black dark:text-white"> Last name </label>
				<input
					type="text"
					placeholder="Enter your last name"
					class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
				/>
			</div>
		</div>

		<div class="mb-4.5">
			<label class="mb-3 block text-sm font-medium text-black dark:text-white">
				Email <span className="text-meta-1">*</span>
			</label>
			<input
				type="email"
				placeholder="Enter your email address"
				class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
			/>
		</div>

		<div class="mb-4.5">
			<label class="mb-3 block text-sm font-medium text-black dark:text-white"> Subject </label>
			<input
				type="text"
				placeholder="Select subject"
				class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
			/>
		</div>

		<!-- <SelectGroupOne /> -->

		<div class="mb-6">
			<label class="mb-3 block text-sm font-medium text-black dark:text-white"> Message </label>
			<textarea
				rows={6}
				placeholder="Type your message"
				class="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
			/>
		</div>

		<button
			class="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
		>
			Send Message
		</button>
	</div>
</form>
