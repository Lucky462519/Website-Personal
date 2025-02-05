document.getElementById('absensiForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const nama = document.getElementById('nama').value;
  const waktu = document.getElementById('waktu').value;

  // Kirim data ke server atau lakukan tindakan lain sesuai kebutuhan
  // Misalnya, tampilkan pesan sukses
  const notifikasi = document.getElementById('notifikasi');
  notifikasi.textContent = `Terima kasih, ${nama}! Anda telah absen pada ${waktu}.`;

  // Kirim notifikasi WhatsApp
  const pesan = `Halo, ${nama} telah absen pada ${waktu}.`;
  const nomorTelepon = '6281333261194'; // Ganti dengan nomor telepon Anda
  const url = `https://wa.me/${6281333261194}?text=${encodeURIComponent(pesan)}`;
  window.open(url, '_blank');
});
