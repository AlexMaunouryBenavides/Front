import React, { useEffect, useState } from "react";
import { supabase } from "../utils/supabase.js";

function QuoteGenerator() {
  const [quote, setQuote] = useState(null);

  const fetchQuote = async () => {
    try {
      let { data, error } = await supabase.from("quotes").select("*").order("id", { ascending: false }).limit(1);

      if (error) throw error;
      if (data.length > 0) {
        setQuote(data[0]); // On prend le premier élément du tableau
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
        </>
      ) : (
        <p>Chargement...</p>
      )}
    </>
  );
}

export default QuoteGenerator;
