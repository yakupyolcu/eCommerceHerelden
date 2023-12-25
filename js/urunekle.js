// Ürün eklemek için
function urunEkle() {
    const urunAdi = document.getElementById('urunAdi').value;
    const urunFiyati = document.getElementById('urunFiyati').value;
    const urunResmi = document.getElementById('urunResmi').value;
  
    // Girişlerin boş olup olmadığını kontrol et
    if (!urunAdi || !urunFiyati || !urunResmi) {
      document.getElementById('bilgiMesaji').innerHTML = '<p>Lütfen tüm alanları doldurun.</p>';
      return;
    }
  
    const yeniUrun = {
      urunAdi: urunAdi,
      urunFiyati: urunFiyati,
      urunResmi: urunResmi
    };
  
    // Daha önce eklenmiş ürünleri al
    const eklenenUrunler = JSON.parse(localStorage.getItem('eklenenUrunler')) || [];
  
    // Yeni ürünü ekle
    eklenenUrunler.push(yeniUrun);
  
    // Local Storage'a kaydet
    localStorage.setItem('eklenenUrunler', JSON.stringify(eklenenUrunler));
  
    // Bilgi mesajını göster
    document.getElementById('bilgiMesaji').innerHTML = '<p>Ürün başarıyla eklendi!</p>';
  
    // Ürünleri göster
    urunleriGoster();
  }
  
  // Ürünleri göstermek için
  function urunleriGoster() {
    const eklenenUrunler = JSON.parse(localStorage.getItem('eklenenUrunler')) || [];
    const eklenenUrunlerContainer = document.getElementById('eklenenUrunler');
  
    // Eklenen ürünleri temizle
    eklenenUrunlerContainer.innerHTML = '';
  
    if (eklenenUrunler.length > 0) {
      eklenenUrunler.forEach(urun => {
        const urunDiv = document.createElement('div');
        urunDiv.classList.add('col');
  
        urunDiv.innerHTML = `
          <div class="card card-body">
            <div class="media align-items-center align-items-lg-start text-center text-lg-left flex-column flex-lg-row">
              <div class="mr-2 mb-3 mb-lg-0">
                <img src="${urun.urunResmi}" width="150" height="150" alt="">
              </div>
  
              <div class="media-body">
                <h6 class="media-title font-weight-semibold">
                  <a href="#" data-abc="true">${urun.urunAdi}</a>
                </h6>
  
                <ul class="list-inline list-inline-dotted mb-3 mb-lg-2">
                  <li class="list-inline-item"><a href="#" class="text-muted" data-abc="true">Fiyat: ${urun.urunFiyati} TL</a></li>
                </ul>
  
                <ul class="list-inline list-inline-dotted mb-0">
                  <li class="list-inline-item"><a href="#" data-abc="true">Kategori: Dolaplar</a></li>
                </ul>
              </div>
  
              <div class="mt-3 mt-lg-0 ml-lg-3 text-center">
                <h3 class="mb-0 font-weight-semibold">${urun.urunFiyati}</h3>
                <div>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                  <i class="fa fa-star"></i>
                </div>
                <div class="text-muted">20 Aralık 2023</div>
                <div class="buttons">
                  <button type="button" class="buttonUrunDuzenle btn-dark">Düzenle</button>
                  <button type="button" class="buttonUrunSil btn-dark">Sil</button>
                </div>
              </div>
            </div>
          </div>
        `;
  
        eklenenUrunlerContainer.appendChild(urunDiv);
      });
    } else {
      eklenenUrunlerContainer.innerHTML = '<p>Henüz eklenmiş ürün yok.</p>';
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    urunleriGoster();
  });