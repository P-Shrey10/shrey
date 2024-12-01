<script>
    import { fly } from 'svelte/transition';
</script>

<section class="py-8">
  <div class="container mx-auto px-4">
    <h2 class="text-3xl sm:text-4xl font-bold text-center mb-10" in:fly={{ x: -100, duration: 500 }}>
      Skills
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Skillful Category -->
      <div
        class="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:translate-y-2 hover:shadow-lg"
        in:fly={{ y: 50, duration: 500, delay: 100 }}
      >
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Skillful</h3>
        <div class="flex flex-wrap gap-2">
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            React
          </span>
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            Svelte
          </span>
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            Vue.js
          </span>
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            Next.js
          </span>
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            JavaScript
          </span>
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            TypeScript
          </span>
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            Ant Design
          </span>
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            Tailwind CSS
          </span>
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            Shadcn
          </span>
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            HTML5
          </span>
          <span class="bg-green-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-green-600">
            CSS3
          </span>
        </div>
      </div>

      <!-- Beginner Category -->
      <div
        class="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:translate-y-2 hover:shadow-lg"
        in:fly={{ y: 50, duration: 500, delay: 300 }}
      >
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Beginner</h3>
        <div class="flex flex-wrap gap-2">
          <span class="bg-orange-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-orange-600">
            Node.js
          </span>
          <span class="bg-orange-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-orange-600">
            Express.js
          </span>
          <span class="bg-orange-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-orange-600">
            MongoDB
          </span>
        </div>
      </div>

      <!-- Novice Category -->
      <div
        class="bg-gray-100 p-6 rounded-lg shadow-md transition-transform transform hover:translate-y-2 hover:shadow-lg"
        in:fly={{ y: 50, duration: 500, delay: 500 }}
      >
        <h3 class="text-xl font-semibold text-gray-700 mb-4">Novice</h3>
        <div class="flex flex-wrap gap-2">
          <span class="bg-yellow-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-yellow-600">
            Python
          </span>
          <span class="bg-yellow-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-yellow-600">
            C
          </span>
          <span class="bg-yellow-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-yellow-600">
            C++
          </span>
          <span class="bg-yellow-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-yellow-600">
            Blender
          </span>
          <span class="bg-yellow-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-yellow-600">
            Flutter
          </span>
          <span class="bg-yellow-500 text-white py-2 px-4 rounded-full text-sm transition-colors hover:bg-yellow-600">
            Unity
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
