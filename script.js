<script>
    // Fungsi untuk memicu animasi saat scroll
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
                   }
    }

    // Event listener scroll
    window.addEventListener("scroll", reveal);

    // Menambahkan class 'reveal' ke section secara otomatis
    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll('section');
        sections.forEach(sec => sec.classList.add('reveal'));
        
        // Memanggil fungsi sekali saat load untuk mengecek elemen di atas
        reveal();
    });
// Opsional: Efek klik pada alamat untuk copy teks
    const alamatBox = document.querySelector('.alamat');
    if (alamatBox) {
        alamatBox.addEventListener('click', () => {
            const text = alamatBox.innerText;
            navigator.clipboard.writeText(text);
            alert('Alamat berhasil disalin ke clipboard!');
        });
    }
</script>