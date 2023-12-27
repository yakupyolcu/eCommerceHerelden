document.getElementById('showFormButton').addEventListener('click', function () {
  // Formu göster
  document.getElementById('contactForm').style.display = 'block';
});

function submitContactForm() {
  // Formdaki değerleri al
  const firstName = document.getElementById('fname').value;
  const isletmeAdi = document.getElementById('isletmeAdi').value;
  const email = document.getElementById('emailForm').value;
  const message = document.getElementById('messageForm').value;

  // Formdaki bilgileri bir nesneye topla
  const saticiBilgileri = {
      firstName: firstName,
      isletmeAdi: isletmeAdi,
      email: email,
      message: message
  };

  // Local Storage'a saticiBilgileri'ni kaydet
  localStorage.setItem('saticiBilgileri', JSON.stringify(saticiBilgileri));

  // Kullanıcıyı bilgilendir
  alert('Mesajınızı aldık. Teşekkür ederiz!');

  // Sayfayı yenile
  location.reload();
}

function submitForm(event) {
  event.preventDefault();

  // Formdaki değerleri al
  const firstName = document.getElementById('firstName').value;
  const email = document.getElementById('emailForm').value; // Değişiklik burada
  const message = document.getElementById('messageForm').value; // Değişiklik burada

  // Formdaki bilgileri konsola yazdır
  console.log('İsim:', firstName);
  console.log('E-posta:', email);
  console.log('Öneri:', message);

  // Bu noktada normalde sunucuya veriyi gönderir ve veritabanına kaydederdik
  // Ancak bu örnekte sadece konsola yazdırıyoruz

  // Form container'ını gizle
  const formContainer = document.getElementById('formContainer');
  formContainer.style.display = 'none';
}