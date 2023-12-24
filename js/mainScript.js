// MSSQL bağlantısı
const sql = require('mssql');

const config = {
  user: 'yakupyolcu',
  password: 'yakupBSM1907',
  server: '1907Yakup',
  database: 'eCommerceHerelden',
  options: {
    encrypt: true, // Eğer SQL Server şifreleme kullanıyorsa, true olarak ayarlanmalı
  },
};

async function connectAndQuery() {
  try {
    // Veritabanına bağlanma
    await sql.connect(config);

    // SQL sorgusu ile bir şeyler yapma
    const result = await sql.query`SELECT * FROM YourTable`;

    console.log('Sorgu Sonucu:', result);

  } catch (err) {
    console.error('Hata:', err);
  } finally {
    // Bağlantıyı kapatma
    await sql.close();
  }
}

connectAndQuery();

// Bu örnekte, mssql modülü kullanılarak SQL Server'a bağlanma işlemi gerçekleştirilmektedir. Bağlantı bilgilerini config nesnesinde tanımlayabilir ve ardından connectAndQuery fonksiyonu içinde SQL sorgularını gerçekleştirebilirsiniz.