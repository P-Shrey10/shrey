<script>
    import { fly } from "svelte/transition";
  </script>
  
  <section class="py-12 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2
        class="text-3xl sm:text-4xl font-bold text-center mb-10"
        transition:fly="{{ y: -50, duration: 800 }}"
      >
        Projects
      </h2>
  
      <div class="space-y-8">
        <!-- Project: ERP Module of Smartpalika -->
        <div
            class="project-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
            transition:fly="{{ y: 100, duration: 800 }}"
        >
            <h3 class="text-xl font-semibold">ERP Module of Smartpalika</h3>
            <div class="text-sm text-gray-600 mb-3">Vue 2</div>
            <p class="text-gray-700">
              Designed a business tax and registration module for Smartpalika's ERP
              system. Regularly provided support and implemented time-sensitive
              updates to ensure business functionality aligns with new policies.
            </p>
        </div>

        <!-- Project: Public Sauchlaya -->
        <div
          class="project-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          transition:fly="{{ x: -100, duration: 800 }}"
        >
          <h3 class="text-xl font-semibold flex items-center justify-between">
            <span>Public Sauchlaya</span>
            <a
              href="https://publicshauchalaya.palika.site/"
              target="_blank"
              class="text-blue-600 hover:underline text-sm"
            >
              View Project
            </a>
          </h3>
          <div class="text-sm text-gray-600 mb-3">Vue 3 | Shadcn | Gallimap</div>
          <p class="text-gray-700">
            Built a location management app for Kathmandu's public toilets,
            enabling users to find facilities easily via a mobile app (KMC Smart
            Toilet).
          </p>
        </div>
  
        <!-- Project: Social-Welfare-Council -->
        <div
          class="project-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          transition:fly="{{ x: 100, duration: 800 }}"
        >
          <h3 class="text-xl font-semibold flex items-center justify-between">
            <span>Social-Welfare-Council</span>
            <a
              href="https://swc.cellapp.co/"
              target="_blank"
              class="text-blue-600 hover:underline text-sm"
            >
              View Project
            </a>
          </h3>
          <div class="text-sm text-gray-600 mb-3">
            React | Redux | Ant Design | TypeScript
          </div>
          <p class="text-gray-700">
            Developed a comprehensive web application for managing organizations
            and projects. Implemented full CRUD functionalities to help maintain
            records of ongoing and completed projects.
          </p>
        </div>

<!-- Bank-CMS/UI -->
<div
class="project-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
transition:fly="{{ x: -100, duration: 800 }}"
>
<h3 class="text-xl font-semibold">Bank-CMS/UI</h3>
<div class="text-sm text-gray-600 mb-3">Framework: React (CMS), Svelte (UI)</div>
<p class="text-gray-700">
  Created a CMS for bank management. Added features to CRUD bank details
  through the backend and visualize them effectively on the frontend.
</p>
</div>

<!-- Hamro-Share-Market -->
<div
class="project-card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
transition:fly="{{ y: -100, duration: 800 }}"
>
<h3 class="text-xl font-semibold">Hamro-Share-Market</h3>
<div class="text-sm text-gray-600 mb-3">Framework: Svelte</div>
<p class="text-gray-700">
  Developed a stock market tracking app with a user-friendly interface for
  displaying, searching, and favoriting stock data.
</p>
</div>

      </div>
    </div>
  </section>
  