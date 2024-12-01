<script>
    import { fly } from 'svelte/transition';
  </script>
  
  <section class="py-8 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="ttext-3xl sm:text-4xl font-bold text-center mb-10" in:fly={{ x: -100, duration: 500 }}>
        Training/Certifications
      </h2>
  
      <div class="space-y-8">
        <!-- Full Stack Web Development (MERN Stack) Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          in:fly={{ y: 50, duration: 500, delay: 100 }}
        >
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Full Stack Web Development (MERN Stack)</h3>
          <div class="text-gray-600">Deerwalk Training Center / 2023</div>
        </div>
  
        <!-- Crash Course on MS-Excel Card -->
        <div
          class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          in:fly={{ y: 50, duration: 500, delay: 200 }}
        >
          <h3 class="text-2xl font-bold text-gray-800 mb-2">Crash Course on MS-Excel</h3>
          <div class="text-gray-600">Brihat Hada-Bijukchhen Samaj / 2021</div>
        </div>
      </div>
    </div>
  </section>
  