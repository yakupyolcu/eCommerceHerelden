document.addEventListener('DOMContentLoaded', function () {
  showSellerInformation();
});

function showSellerInformation() {
  const saticiBilgileri = JSON.parse(localStorage.getItem('saticiBilgileri')) || {};
  const saticiBilgileriContainer = document.getElementById('saticiBilgileri');

  if (Object.keys(saticiBilgileri).length > 0) {
      saticiBilgileriContainer.innerHTML = `
          <h2>Müşteri Yorumları</h2>
          <p><strong>Ad Soyad:</strong> ${saticiBilgileri.firstName} ${saticiBilgileri.lastName}</p>
          <p><strong>İşletme Adı:</strong> ${saticiBilgileri.isletmeAdi}</p>
          <p><strong>E-Posta:</strong> ${saticiBilgileri.email}</p>
          <p><strong>Öneri, İleti veya Şikayet:</strong> ${saticiBilgileri.message}</p>
      `;
  } else {
      saticiBilgileriContainer.innerHTML = '<p>Müşteri yorumu bulunamadı.</p>';
  }
}

function silOneriler() {
  // Önerileri silme işlemleri burada yapılır
  localStorage.removeItem('saticiBilgileri');

  // Satıcı bilgilerini gösterilen bölümü temizle
  const saticiBilgileriContainer = document.getElementById('saticiBilgileri');
  saticiBilgileriContainer.innerHTML = '<p>Müşteri yorumu bulunamadı.</p>';

  alert('Öneriler silindi!');
}