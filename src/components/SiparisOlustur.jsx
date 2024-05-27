import { useEffect, useState } from "react";
import axios from "axios";
import "./SiparisOlustur.css";
import { Button, Card } from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
const SiparisOlustur = ({ setSpars }) => {
  const [name, setName] = useState("");
  const [size, setSize] = useState("");
  const [hamurKalinliği, setHamurKalinliği] = useState("");
  const [malzemeler, setMalzemeler] = useState([]);
  const [notlar, setNotlar] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [productCount, setProductCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const malzemePrice = 5;
  const totalMalzemePrice = malzemeler.length * malzemePrice;

  // Herhangi bir şey değiştiğinde totalPrice'ı güncelle
  useEffect(() => {
    const newTotalPrice = (totalMalzemePrice + 85.5) * productCount;
    setTotalPrice(newTotalPrice);
  }, [malzemeler, productCount, totalMalzemePrice]);

  useEffect(() => {
    const isFormValid =
      productCount > 0 &&
      size &&
      hamurKalinliği &&
      name.length >= 3 &&
      malzemeler.length >= 4 &&
      malzemeler.length <= 10;
    setIsValid(isFormValid);
  }, [size, hamurKalinliği, name, malzemeler, productCount]);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValid) return;
    /*const totalPricePerItem = totalMalzemePrice + 85.5;
     totalPrice = totalPricePerItem * productCount;*/
    const spars = {
      name: name,
      size: size,
      hamurKalinliği: hamurKalinliği,
      malzemeler: malzemeler,
      totalPrice: totalPrice,
      totalMalzemePrice: totalMalzemePrice,
    };
    axios
      .post("https://reqres.in/api/pizza", spars)
      .then((response) => {
        setSpars(spars);
        history.push("/SiparisAlindi");
        console.log("Sipariş Özeti:", response);
      })

      .catch((error) => {
        console.error("Sipariş Gönderim Hatası:", error);
      });
  };

  const increaseCount = () => {
    setProductCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (productCount > 0) {
      setProductCount((prevCount) => prevCount - 1);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleHamurChange = (e) => {
    setHamurKalinliği(e.target.value);
  };

  const handleMalzemelerChange = (e) => {
    const malzeme = e.target.value;
    if (malzemeler.includes(malzeme)) {
      setMalzemeler(malzemeler.filter((item) => item !== malzeme));
    } else {
      setMalzemeler([...malzemeler, malzeme]);
    }
  };

  const handleNotlarChange = (e) => {
    setNotlar(e.target.value);
  };

  const handleSiparisToplami = (e) => {
    setTotalPrice(e.target.value);
  };

  return (
    <div className="order-page">
      <div className="header">
        <header>
          <Link to="/" className="order-anasayfa">
            <p className="order-anasayfa">Anasayfa-</p>
          </Link>
          <Link to="/SiparisOlustur" className="order-siparis">
            <p className="order-siparis">
              <strong>Sipariş Oluştur</strong>
            </p>
          </Link>
        </header>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          className="isim"
          type="text"
          placeholder="Minimum 3 karakter olacak şekilde isminizi giriniz.."
          minLength="3"
          value={name}
          onChange={handleNameChange}
          data-cy="isim-input"
        />

        <h4 className="pizzaName">Position Absolute Acı Pizza</h4>
        <p
          style={{
            display: "inline-block",
            marginTop: "20px",
            marginRight: "200px",
            fontSize: "25px",
          }}
        >
          <b>85.5 ₺</b>
        </p>
        <span style={{ display: "inline-block", marginRight: "110px" }}>
          4.9
        </span>
        <span style={{ display: "inline-block" }}>(200)</span>
        <p className="pizzaDetail">
          Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
          ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak,
          düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli
          lezzetli bir yemektir. . Küçük bir pizzaya bazen pizzetta denir.
        </p>
        <div className="boyut-hamur">
          <BoyutCard size={size} handleSizeChange={handleSizeChange} />

          <HamurCard
            hamurKalinliği={hamurKalinliği}
            handleHamurChange={handleHamurChange}
          />
        </div>
        <MalzemeCard
          malzemeler={malzemeler}
          handleMalzemelerChange={handleMalzemelerChange}
        />

        <NoteCard notlar={notlar} handleNotlarChange={handleNotlarChange} />

        <div className="counter">
          <button
            className="control__btn btn-1"
            style={{
              fontSize: "30px",
              padding: "10px 13px",
              backgroundColor: " #FDC913",
            }}
            onClick={decreaseCount}
          >
            -
          </button>
          <span className="counter__output" style={{ fontSize: "30px" }}>
            {productCount}
          </span>
          <button
            className="control__btn btn-2"
            style={{
              fontSize: "30px",
              padding: "10px 10px",
              backgroundColor: " #FDC913",
            }}
            onClick={increaseCount}
          >
            +
          </button>
        </div>

        <Card
          style={{
            width: "18rem",
            marginLeft: "35vh",
            marginTop: "-55px",
            marginBottom: "10%",
            padding: "30px 11px 20px 15px",
          }}
        >
          <SiparisToplami
            malzemeler={malzemeler}
            totalMalzemePrice={totalMalzemePrice}
            productCount={productCount}
            handleSiparisToplami={handleSiparisToplami}
          />
          <Button
            className="order-contaButton"
            type="submit"
            onSubmit={handleSubmit}
            style={{
              padding: "10px 80px",
              backgroundColor: "#FDC913",
              color: "black",
              fontSize: "bold",
            }}
            disabled={!isValid}
            data-cy="submit-input"
          >
            SİPARİŞ VER
          </Button>
        </Card>
      </form>
    </div>
  );
};

const BoyutCard = ({ size, handleSizeChange }) => {
  return (
    <div className="boyut-card">
      <h4>
        Boyut Seç<span className="yildiz">*</span>
      </h4>
      <label>
        <input
          type="radio"
          value="Küçük"
          checked={size === "Küçük"}
          onChange={handleSizeChange}
        />
        Küçük
      </label>
      <label>
        <input
          type="radio"
          value="Orta"
          checked={size === "Orta"}
          onChange={handleSizeChange}
        />
        Orta
      </label>
      <label>
        <input
          type="radio"
          value="Büyük"
          checked={size === "Büyük"}
          onChange={handleSizeChange}
        />
        Büyük
      </label>
      {size && (
        <div className="secilen-boyut">
          <p>Seçilen Boyut: {size}</p>
        </div>
      )}
    </div>
  );
};

const HamurCard = ({ hamurKalinliği, handleHamurChange }) => {
  return (
    <div className="hamur-card">
      <h4>
        Hamur Seç<span className="yildiz">*</span>
      </h4>
      <select value={hamurKalinliği} onChange={handleHamurChange}>
        <option value="">Hamur Kalınlığı</option>
        <option value="İnce">İnce</option>
        <option value="Standart">Standart</option>
        <option value="Kalın">Kalın</option>
      </select>
      {hamurKalinliği && (
        <div className="secilen-hamur">
          <p>Seçilen Hamur: {hamurKalinliği}</p>
        </div>
      )}
    </div>
  );
};

const MalzemeCard = ({ malzemeler, handleMalzemelerChange }) => {
  const ingredients = [
    "Pepperoni",
    "Tavuk Izgara",
    "Mısır",
    "Sarımsak",
    "Ananas",
    "Sosis",
    "Soğan",
    "Sucuk",
    "Biber",
    "Kabak",
    "Kanada Jambonu",
    "Domates",
    "Jalepeno",
    "Mantar",
  ];

  return (
    <div className="ek-malzeme">
      <h4>Ek Malzemeler</h4>
      <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
      <div className="topping-container">
        {ingredients.map((topping, index) => (
          <div key={index} className="topping-item">
            <input
              type="checkbox"
              value={topping}
              checked={malzemeler.includes(topping)}
              onChange={handleMalzemelerChange}
              data-cy="malzeme-input"
            />
            <label htmlFor={topping}>{topping}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

const NoteCard = ({ notlar, handleNotlarChange }) => {
  return (
    <div className="siparis-notu">
      <h4>Sipariş Notu</h4>
      <textarea
        color="#5F5F5F"
        rows="2"
        cols="50"
        value={notlar}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
        onChange={handleNotlarChange}
      />
    </div>
  );
};

const SiparisToplami = ({ malzemeler, totalMalzemePrice, productCount }) => {
  const totalPrice = (totalMalzemePrice + 85.5) * productCount;

  return (
    <div className="siparis-toplami">
      <h4>Sipariş Toplamı</h4>
      <p>
        Seçimler:
        <span malzemeler={malzemeler}>{totalMalzemePrice}₺</span>
      </p>
      <p className="toplam">
        Toplam:
        <span>{totalPrice}₺</span>
      </p>
    </div>
  );
};

export default SiparisOlustur;
