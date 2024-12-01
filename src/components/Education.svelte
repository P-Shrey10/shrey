<script>
    import { fly } from 'svelte/transition';
  </script>
  
  <section class="py-8 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl sm:text-4xl font-bold text-center mb-10" in:fly={{ x: -100, duration: 500 }}>
        Education
      </h2>
  
      <div class="space-y-8">
        <!-- Bachelors (BCT) Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          in:fly={{ y: 50, duration: 500, delay: 100 }}
        >
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Bachelors (BCT)</h3>
          <div class="text-gray-600">Kantipur Engineering College, Dhapakhel, Lalitpur</div>
        </div>
  
        <!-- Higher Secondary (+2) Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          in:fly={{ y: 50, duration: 500, delay: 200 }}
        >
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Higher Secondary (+2)</h3>
          <div class="text-gray-600">United Academy, Kumaripati, Lalitpur</div>
        </div>
  
        <!-- Secondary (SLC) Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          in:fly={{ y: 50, duration: 500, delay: 300 }}
        >
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Secondary (SLC)</h3>
          <div class="text-gray-600">Nepal Police School, Sanga, Kavre</div>
        </div>
      </div>
    </div>
  </section>
  