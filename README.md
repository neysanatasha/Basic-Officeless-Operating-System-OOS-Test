Create this data into json
Gambar Tanpa Teks
const data = [
  {
    name: 'Employee 1',
    gender: 'Male',
    age: 20,
    permanen: true,
  },
  {
    name: 'Employee 2',
    gender: 'Female',
    age: 25,
    permanen: false,
  },
  {
    name: 'Employee 3',
    gender: 'Male',
    age: 33,
    permanen: true,
  },
];
const dataJSON = JSON.stringify(data);
console.log(dataJSON);
From This data how can you get Company Name, Number Of Employee, province, and the age of employee 2
Gambar Tanpa Teks
const data = {
    "data": {
      "companyName": "Jojonomic",
      "numberOfEmployee": 100,
      "receiveNewEmployee": true,
      "location": {
        "address": "jl. nangka no 5",
        "province": "DKI Jakarta"
      },
      "employeeList": [{
          "name": "Employee 1",
          "age": 25
        },
        {
          "name": "Employee 2",
          "age": 26
        }
      ]
    }
  };
  
  const companyName = data.data.companyName;
  const numberOfEmployee = data.data.numberOfEmployee;
  const province = data.data.location.province;
  const employee2Age = data.data.employeeList[1].age;
  
  console.log("Company Name: " + companyName);
  console.log("Number of Employees: " + numberOfEmployee);
  console.log("Province: " + province);
  console.log("Employee 2 Age: " + employee2Age);
How will you save this data into table or json.
Gambar Tanpa Teks
const data = {
        "tanggal": "05.09.17",
        "nomor_struk": "315/NIA M/01",
        "harga_jual": 76300,
        "barang": [
          {
            "nama": "IDM RAMOS SUPER 5 KG",
            "harga": 59900,
            "jumlah": 1,
            "diskon": 4000
          },
          {
            "nama": "SO KLIN SOFTERGNT800",
            "harga": 14700,
            "jumlah": 1,
            "diskon":2200,
          },
          {
            "nama": "MOGU MOGU LYCHHE 320",
            "harga": 7900,
            "jumlah": 1
          },
          {
            "nama": "PLATIK BSR",
            "harga": 1,
            "jumlah": 3,
            "diskon":3,
          }
        ]
      }
console.log(data)
What is the result of each condition
Gambar Tanpa Teks
(A == C && A >= C) = False
(B <= D && C+1 > A) = True
(D-1 < B || B != A+1) = False
((C-A) == (B-A)) = True
Answer using simple logic notation or programming language (preferably vanilla javascript)
Gambar Tanpa Teks
const listItemBelanja = [
    { nama: 'Melon', itemType: 'Food', kategori: 'organicBasket' },
    { nama: 'Gergaji', itemType: 'Tools', kategori: 'otherBasket' },
    { nama: 'FaceWash', itemType: 'Cleaner', kategori: 'otherBasket' },
    { nama: 'Kopi', itemType: 'Drink', kategori: 'organicBasket' },
    { nama: 'Palu', itemType: 'Tools', kategori: 'otherBasket' },
    { nama: 'Tahu', itemType: 'Food', kategori: 'organicBasket' },
    { nama: 'Sabun cuci piring', itemType: 'Cleaner', kategori: 'otherBasket' },
    { nama: 'Susu Kedelai', itemType: 'Drink', kategori: 'organicBasket' }
  ];
  
  const organicBasket = [];
  const otherBasket = [];

  for (let i = 0; i < listItemBelanja.length; i++) {
    const item = listItemBelanja[i];
    if (item.itemType === 'Food' && item.kategori === 'organicBasket') {
      organicBasket.push(item);
    }
    else if (item.itemType === 'Cleaner' && item.kategori === 'otherBasket') {
      otherBasket.push(item);
    }
    else if (item.itemType === 'Drink' && item.kategori === 'organicBasket') {
      organicBasket.push(item);
    }
    else if (item.itemType === 'Tools' && item.kategori === 'otherBasket') {
      otherBasket.push(item);
    }
  }
  console.log('Isi keranjang organicBasket adalah :', organicBasket);
  console.log('Isi keranjang otherBasket adalah :', otherBasket);
What is the different between HTTP request method POST and GET
Method POST digunakan untuk mengirimkan data dari klien ke server, sedangkan Method GET digunakan untuk meminta data dari server. 
What do you know about headers and body in HTTP Request
Header dalam HTTP Request adalah bagian pertama dari request berisi informasi request itu sendiri. Header biasanya berisi informasi seperti jenis konten yang diminta misal HTML, JSON, atau gambar, jenis metode HTTP yang digunakan (GET, POST, dll.), dan informasi tambahan seperti cookie.
Body dalam HTTP Request adalah bagian kedua dari permintaan berisi data yang dikirimkan bersama request. Body biasanya digunakan untuk mengirimkan data form atau data JSON dari klien ke server.
Please explain what do you know about synchronous and asynchronous
Synchronous adalah dua atau lebih sistem atau komponen yang berinteraksi pada waktu yang sama dan setiap aksi harus menunggu aksi sebelumnya selesai sebelum aksi berikutnya dimulai. 

Asynchronous adalah dua atau lebih sistem atau komponen berinteraksi secara bersamaan dari waktu satu sama lain aksinya dapat dimulai tanpa menunggu aksi sebelumnya selesai dan dapat berlanjut pada waktu yang berbeda.
