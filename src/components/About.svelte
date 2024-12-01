<script>
    import { fly, fade } from "svelte/transition";
  </script>
  
  <header class="hero bg-gradient-to-r from-blue-500 to-purple-600 text-white py-12">
    <div class="container mx-auto text-center px-6">
      <h1
        class="text-4xl sm:text-5xl font-bold mb-4"
        transition:fly={{ x: -200, duration: 800 }}
      >
        Shrey Pradhananga
      </h1>
      <h2
        class="text-xl sm:text-2xl font-medium mb-4"
        transition:fade={{ duration: 1000 }}
      >
        Frontend Developer | Computer Engineering Student
      </h2>
      <p
      class="text-sm sm:text-base max-w-3xl mx-auto leading-relaxed mb-6 text-justify"
      transition:fly="{{ y: 100, duration: 1000 }}"
    >
      I'm a passionate Frontend Developer skilled in React, Vue.js, Svelte, JavaScript, and TypeScript. With hands-on experience from internships and real-world projects, I've honed my understanding of frontend frameworks, UI/UX design, and web development. My goal is to work on innovative projects while continually learning in the fast-paced tech landscape.
    </p>
    
      <div
        class="contact-info flex flex-col sm:flex-row items-center justify-center gap-4 text-sm sm:text-base"
        transition:fade={{ duration: 1500 }}
      >
        <a
          href="mailto:pradhanangashrey@gmail.com"
          class="hover:underline transition duration-300"
          target="blank"
        >
          📧 pradhanangashrey@gmail.com
        </a>
        <span>📱 +977 9843818317</span>
        <span>📍 Koteshwor, Kathmandu, Nepal</span>
        <a
          href="https://github.com/P-Shrey10"
          target="_blank"
          class="hover:underline transition duration-300"
        >
          🔗 GitHub: P-Shrey10
        </a>
        <a
        href="https://www.linkedin.com/in/shrey-pradhananga-319362261/"
        target="_blank"
        class="hover:underline transition duration-300"
      >
        🔗 LinkedIn: Shrey Pradhananga
      </a>
      </div>
    </div>
  </header>
  