<script>
    import { fly } from 'svelte/transition';
  
    // Get the current year
    const currentYear = new Date().getFullYear();
  </script>
  
  <footer class="bg-gray-800 text-white py-6 mt-10">
    <div class="container mx-auto px-4">
      <div
        class="flex justify-end items-center space-x-4"
        in:fly={{ x: 100, duration: 500 }}
      >
        <div class="text-sm">
          <p>&copy; {currentYear} Shrey Pradhananga. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
  