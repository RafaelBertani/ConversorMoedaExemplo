import { useEffect, useState } from "react";
import "../styles/home.css";

export default function Home() {
  const [currencies, setCurrencies] = useState([]);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BRL");
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // buscar moedas
  useEffect(() => {
    fetch("http://localhost:3001/api/currencies")
      .then((res) => res.json())
      .then(setCurrencies)
      .catch(console.error);
  }, []);

  const handleConvert = async () => {
    if (!amount) return;

    setLoading(true);
    setResult(null);

    try {
      // buscar taxa
      const rateRes = await fetch(
        `http://localhost:3001/api/rates?base=${from}`
      );
      const rateData = await rateRes.json();
      const rate = rateData.rates[to];

      // converter
      const convertRes = await fetch(
        "http://localhost:3002/api/convert",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            from,
            to,
            amount: Number(amount),
            rate
          })
        }
      );

      const conversion = await convertRes.json();
      setResult(conversion.result);
    } catch (err) {
      console.error(err);
      alert("Erro ao converter moeda");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h1>💱 Conversor de Moedas</h1>
        <p className="subtitle">
          Conversão em tempo real usando microsserviços
        </p>

        <div className="row">
          <div className="field">
            <label>De</label>
            <select value={from} onChange={(e) => setFrom(e.target.value)}>
              {currencies.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>

          <button
            className="swap"
            onClick={() => {
              setFrom(to);
              setTo(from);
            }}
          >
            ⇄
          </button>

          <div className="field">
            <label>Para</label>
            <select value={to} onChange={(e) => setTo(e.target.value)}>
              {currencies.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="field">
          <label>Valor</label>
          <input
            type="number"
            placeholder="Digite o valor"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button className="convert" onClick={handleConvert} disabled={loading}>
          {loading ? "Convertendo..." : "Converter"}
        </button>

        {result && (
          <div className="result">
            <span>Resultado</span>
            <strong>
              {amount} {from} = {result} {to}
            </strong>
          </div>
        )}
      </div>
    </div>
  );
}
