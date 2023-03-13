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