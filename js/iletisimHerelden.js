document.getElementById('showFormButton').addEventListener('click', function () {// Formu göster
  document.getElementById('contactForm').style.display = 'block';
});

function submitContactForm() {
  // Form gönderme işlemleri burada yapılabilir
  alert('Form gönderildi!');
}

function submitForm(event) {
  event.preventDefault();

  // Formdaki değerleri al
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Formdaki bilgileri konsola yazdır
  console.log('İsim:', firstName);
  console.log('Soyisim:', lastName);
  console.log('E-posta:', email);
  console.log('Öneri:', message);

  // Bu noktada normalde sunucuya veriyi gönderir ve veritabanına kaydederdik
  // Ancak bu örnekte sadece konsola yazdırıyoruz

  // Form container'ını gizle
  const formContainer = document.getElementById('formContainer');
  formContainer.style.display = 'none';
}

