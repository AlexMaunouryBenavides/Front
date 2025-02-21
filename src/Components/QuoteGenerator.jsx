import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase.js";

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      let response = await fetch("http://localhost:3000/api/quotes/random"); // Appel à Express.js
      let data = await response.json();
      console.log(data);

      if (data) {
        setQuote(data); // Stocker la citation reçue
      } else {
        console.warn("Aucune citation trouvée !");
      }
    } catch (error) {
      console.error("Error when fetching the quote", error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <>
      {quote ? (
        <>
          <p>{quote.text || "Pas de texte disponible"}</p>
          <p>{quote.author || "Auteur inconnu"}</p>
          <p>{quote.nationality} </p>
          <img src={quote.image_url} alt="France flag" />
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
}

export default QuoteGenerator;
