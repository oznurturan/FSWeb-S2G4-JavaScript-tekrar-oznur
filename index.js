/* Aşağıda global olarak tanımlanmış değişkenler bulunmaktadır, bunları değiştirmeyiniz. Açıklamaları takip ederek görevleri tamamlayın. */

const pi = 3.14159;

const sayilar = [
  45, 856, 12.5, 63, 0.02, 154, 2, 54, 78, 61.7, 654, 26, 12.5, 63, 969, 152,
  32, 31, 14, 74, 32, 365.9, 5.2, 45, 76, 20, 27.4, 562, 12.15, 365.85, 45.87,
  22, 88, 56.4, 96.45, 23, 56, 332, 361, 713, 321, 258.3, 10, 974.8, 275, 570,
  707, 814, 326, 596, 626, 494, 546, 724.8, 359, 231.4, 883.1, 379.1, 691, 990,
  815.9, 937.1, 837.3, 859, 476, 370.8, 480, 860, 221.1, 78.8, 255, 613, 958,
  973.7, 209, 470.6, 157, 13, 314, 269.6, 885, 507.9, 383, 276, 636, 268.8,
  558.1, 114.7, 336, 311.7, 340, 403.2, 356.9, 529.5, 932.5, 17, 756.5, 771.6,
  415, 523.1, 736, 187.8, 680, 618.6, 945, 105, 712, 696.7, 217, 68, 500.7, 28,
  358.6, 69, 87.1, 477, 289, 86, 33, 885, 458, 102.8, 328.8, 776.1, 948, 762,
  902, 286, 810.9, 888, 770, 194, 423, 61.4, 916, 19, 146.5, 255, 38.4, 356,
  971, 19, 269, 49.3, 877.8, 474, 130, 113.3, 992, 198.2, 962, 467.3, 231,
  719.5, 708.3, 0.02, 196.2, 38, 178.3, 740, 521.8, 237, 140, 260.3, 546, 774.4,
  430, 531.4, 706.7, 238.4, 384, 14, 319.6, 992.1, 839, 572, 11.5, 788, 381,
  938, 430, 908.9, 398.1, 675.6, 568, 319.1, 593, 50, 574, 349.6, 316.6, 506.9,
  933, 180, 731, 692, 822, 552, 743, 250.7, 88.3, 986, 954, 930.1, 430.2, 590.8,
  971.1, 463.4, 798, 956.8, 845, 75, 156, 362, 41, 14.5, 76, 123, 369.4, 7.7,
  45, 78, 23, 27.4, 502, 12.0, 335.85, 45.87, 24, 85, 56.4, 96.45, 23, 57,
  337.8, 245, 703.02, 8.41, 1.3, 4.24, 1.17, 7.85, 5.94, 3.55, 8.45, 7.84, 296,
  30.1, 957.6, 207, 782, 762, 305.8, 628, 777, 798, 467.3, 828, 526, 588, 909,
  200.5, 209, 833, 159.6, 565, 901, 36, 501, 396.5, 197.2, 273, 314, 652, 123.9,
  561, 586, 523.4, 422, 793.5, 493.2, 686, 427, 5.22, 4.99, 0.08, 5.2, 1.7,
  3.85, 0.85, 2.04, 1.64, 7.16, 862, 506.4, 3.9, 159, 266, 548, 910.1, 919, 491,
  845, 650, 470.6, 464.5, 423.2, 730.8, 923, 239.5, 358.6, 339.1, 507, 667.7,
  867.7,
];

/* ÖRNEK GÖREV: KareninAlani fonksiyonunu kullanarak aşağıdakileri uygulayın: 
	1. Karenin kenar uzunluğunu fonksiyonun tek parametresi olarak alacak 
	2. Karenin alanını hesaplayacak (💡 İPUCU: karenin alanı = karenin kenar uzunluğunun karesi)
	3. Hesaplanan alanı döndürecek
*/

//Örneğin çözümü:
function KareninAlani(kenaruzunlugu) {
  return kenaruzunlugu * kenaruzunlugu;
}

/* (Oto test yok) Yukarıdaki KareninAlani fonksiyonunu kenar uzunluğu = 10 vererek aşağıda çalıştırıp, sonucu konsolda gözlemleyin (console.log)  */

/* GÖREV 1:  
- CemberinCevresi fonksiyonunu kullanarak aşağıdaki yönergeleri uygulayın:
	1. CemberinCevresi fonksiyonu parametre olarak sadece çemberin yarıçapını alacaktır. 
	2. Global değişken olarak verilmiş pi sayısı fonksiyon içinde kullanılacak (pi sayısı fonksiyonun parametresi olarak alınmayacaktır)
	3. Çemberin çevresi hesaplanacaktır (💡 İPUCU: Çemberin çevresi = 2 * pi * yarıçap)
	4. Hesaplanan çemberin çevresi döndürülecektir.
*/
const pi = Math.PI; // Pi sabitini tanımla
function CemberinCevresi(yarıçap) {
  return 2 * pi * yarıçap;
}

}


const pi = Math.PI; // Pi sabitini tanımla

function CemberinCevresi(yarıçap) {
  return 2 * pi * yarıçap;
}

// Fonksiyonu çağır ve sonucu yazdır
console.log(CemberinCevresi(5));

/* (Oto test yok) Yukarıdaki CemberinCevresi fonksiyonunu yarıçap = 5 vererek aşağıda çalıştırıp, sonucu konsolda gözlemleyin (console.log)  */

/* 	GÖREV 2:  
- CemberinAlani fonksiyonunu kullanarak aşağıdaki yönergeleri uygulayın:
	1. Argüman olarak çemberin yarıçapını BİRİNCİ parametre olacak alacaktır. 
	2. Global değişken olarak verilmiş pi sayısını fonksiyonun İKİNCİ parametresi olacak alacaktır.
	3. Çemberin alanı hesaplanacaktır (💡 İPUCU: Çemberin alanı = pi * yarıçapın karesi, yarıçapın karesini bulmak için Javascript içinde tanımlı 
    Math kütüphanesini kullanabilirsiniz. Math.pow(yaricap,2))
	4. Hesaplanan çemberin alanı döndürülecektir.
*/

function CemberinAlani(/* kodlar buraya */) {
  /* kodlar buraya */
}

/* (Oto test yok) Yukarıdaki CemberinAlani fonksiyonunu yarıçap = 15 vererek aşağıda çalıştırıp, sonucu konsolda gözlemleyin (console.log)  */

/* 	GÖREV 3:
	- Sayfanın en üstünde global değişken olarak tanımlanmış bir sayilar dizisi bulunmaktadır. Bu dizi içinde 0 ile 1000 arasında rasgele oluşturulmuş tam sayılar ve ondalıklı sayılar bulunmaktadır. Bu diziyi kullanarak aşağıdakileri uygulayın:
		3a. enbuyuk ve enkucuk isminde 2 adet değişken tanımlayın ve sayilar dizisindeki en küçük sayı ile en büyük sayıyı bu değişkenlere atayın. (for döngüsü kullanın)
		
		3b. `ucetambolunenler` adında bir dizi tanımlayın ve bu diziye sayilar dizisindeki 3'ün tam katı olan sayıları atayın (.forEach metodunu kullanın)
		
		3c. `ucetambolunenler` dizisindeki sayıların toplamını .reduce metoduyla bulup, sonucu `ucebolunenlerintoplami` değişkenine yazdırın (.reduce metodunu kullanın)
		
		3d. `besyuzdenkucuksayilar` adında bir dizi oluşturarak, sayilar dizisinin içindeki 500'den küçük sayıları bu diziye atayın (.filter metodunu kullanın)
		   
		3e. besyuzdenkucuksayilar dizisindeki sayıları küçükten büyüğe sıralayıp `siralisayilar` adındaki bir diziye aktarın (.sort metodunu kullanın)
*/	 
     besyuzdenkucuksayilar = [];
    besyuzdenkucuksayilar.push(...sayilar.filter.sayi ==>500)

/* 
		3f. `tekraredensayilar` adında bir dizi oluşturun. sayilar dizisi içerisindeki bazı sayılar birden fazla kere yazılmış. sayilar dizisi içerisinde birden fazla kez yazılmış sayıları tespit ederek kaç kere tekrar edildiğini belirten bir string oluşturulup `tekraredensayilar` dizisine aktarılmasını istiyoruz. Örnek string: "{sayı} sayısı {tekrarSayisi} kere tekrar edilmiştir"
		ÖRNEK: sayilar dizisi içerisinde 45 sayısı 3 kere yazılmış. "45 sayısı 3 tekrar edilmiştir" stringini `tekraredensayilar` dizisine aktaracağız.
		💡 İPUCU: Tekrar edilen sayıları ve kaç kere tekrar edildiğini kaydetmek için bir nesne tanımlamalısınız, bu görevi yapabilmek için en az 2 kere döngü yazmalısınız. Birinci döngüde hangi sayının kaç kere tekrar edildiğini tespit edip, 2. döngüde stringi oluşturup verilen diziye aktarmalısınız.
*/

/*  (oto test yok) sayilar dizisi içinde kaç adet sayı olduğunu konsola yazdırın */

let ucetambolunenler,
  enkucuk,
  enbuyuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar;

// 3a çözümü

/* kodlar buraya */

// 3b çözümü:

/* kodlar buraya */

// 3c çözümü:

/* kodlar buraya */

// 3d çözümü

/* kodlar buraya */

// 3e çözümü

siralisayilar = besyuzdenkucuksayilar.sort((a,b)=>a-b);
console.log("3e:",siralisayilar);

// 3f çözümü

tekraredensayilar=[];
const tekrarSayilar = {};
//for (let i=0; i< sayilar.length; i++)

depo[eleman]

  //Tekrar edilme sıklığını hesaplarım.
// depo için boş bir obje oluştururum. depo={}
// Her eleman için bir döngü yaparım. .forEach()
// Her döngüde bu eleman depoda var mı (boolean) kontrol ederim ? 

  //. if eleman==undefined depoya değeri 1 olarak eklerim.
  // Varsa değerini 1 arttırırdım yazardım.

           //Birden fazla tekrar edilenler için metin oluştururum. 
          // Tekrar edilen sayılar boş arrayini tanımlarım.
  //arraya pushlar arrayi geri dönerim.
  // 2.döngü oluşturup depodaki her sayı için bir döngü oluştururum.
// Eğer tekrar sıklığı birden büyükse metni oluştururum ve result array in içine pushlarım.
// ve tekrar eden sonuç arrayine yollarım.
//

}

/*  Bu satırın aşağısındaki kodları lütfen değiştirmeyin  */

function sa() {
  console.log("Kodlar çalışıyor");
  return "as";
}
sa();
module.exports = {
  sa,
  CemberinCevresi,
  CemberinAlani,
  ucetambolunenler,
  enbuyuk,
  enkucuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar,
};
