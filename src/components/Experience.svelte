<script>
    import { fly } from "svelte/transition";
  </script>
  
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2
        class="text-3xl sm:text-4xl font-bold text-center mb-8"
        transition:fly="{{ y: -50, duration: 800 }}"
      >
        Experience
      </h2>
  
      <div class="space-y-6">
        <!-- Frontend Developer -->
        <div
          class="card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          transition:fly="{{ x: -100, duration: 800 }}"
        >
          <h3 class="text-xl font-semibold">Frontend Developer</h3>
          <div class="text-sm text-gray-600 mb-3">
            CellApp Pvt. Ltd. | March, 2024 - Present
          </div>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Lead developer for various frontend projects using modern frameworks such as Next.js, Vue.js, and React.
            </li>
            <li>
              Collaborated on UI/UX improvements and implemented optimized solutions for client projects.
            </li>
          </ul>
        </div>
  
        <!-- Frontend Developer Trainee -->
        <div
          class="card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          transition:fly="{{ x: 100, duration: 800 }}"
        >
          <h3 class="text-xl font-semibold">Frontend Developer Trainee</h3>
          <div class="text-sm text-gray-600 mb-3">
            CellApp Pvt. Ltd. | December, 2023 - March, 2024
          </div>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Worked with Vue 2, Vue 3, and React on both internal and client-based projects.
            </li>
            <li>Gained proficiency in Ant Design, Tailwind CSS, and TypeScript.</li>
          </ul>
        </div>
  
        <!-- Frontend Developer Internship -->
        <div
          class="card bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300"
          transition:fly="{{ y: 100, duration: 800 }}"
        >
          <h3 class="text-xl font-semibold">Frontend Developer Internship</h3>
          <div class="text-sm text-gray-600 mb-3">
            HamroPatro | December, 2022 - March, 2023
          </div>
          <ul class="list-disc list-inside space-y-2 text-gray-700">
            <li>
              Focused on UI/UX development using Svelte and React for HamroPatro's web applications.
            </li>
            <li>
              Built dynamic interfaces that improved the overall user experience for a large user base.
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  