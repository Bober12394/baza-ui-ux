import { useMemo, useState } from 'react';

const initialFormData = {
  componentName: '',
  pageLocation: '',
  goal: '',
  users: '',
  requiredContent: '',
  visualStyle: '',
  behavior: '',
  logic: '',
  accessibility: '',
  constraints: '',
};

function PromptBriefForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [copied, setCopied] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setCopied(false);
  };

  const normalizedBrief = useMemo(() => {
    const fallback = 'Nie podano';

    return [
      '# Brief komponentu',
      '',
      `## 1) Element`,
      `- Nazwa / typ: ${formData.componentName || fallback}`,
      `- Miejsce na stronie: ${formData.pageLocation || fallback}`,
      `- Cel biznesowy: ${formData.goal || fallback}`,
      `- Użytkownik docelowy: ${formData.users || fallback}`,
      '',
      '## 2) Visual (layout + styl)',
      `- Treści obowiązkowe: ${formData.requiredContent || fallback}`,
      `- Wygląd (kolory, spacing, typografia): ${formData.visualStyle || fallback}`,
      '',
      '## 3) Behavior (interakcje)',
      `- Zachowanie po kliknięciu / hover / scroll: ${formData.behavior || fallback}`,
      '',
      '## 4) Logic (state + events)',
      `- Stan i zdarzenia: ${formData.logic || fallback}`,
      '',
      '## 5) Accessibility',
      `- Wymagania a11y: ${formData.accessibility || fallback}`,
      '',
      '## 6) Ograniczenia',
      `- Ograniczenia techniczne i zakres: ${formData.constraints || fallback}`,
    ].join('\n');
  }, [formData]);

  const copyBrief = async () => {
    try {
      await navigator.clipboard.writeText(normalizedBrief);
      setCopied(true);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <section className="prompt-brief">
      <header className="prompt-brief__header">
        <h1>Formularz briefu UI</h1>
        <p>Uzupełnij pola, a poniżej dostaniesz uporządkowany opis gotowy do wysłania do AI.</p>
      </header>

      <form className="prompt-brief__form">
        <label>
          Nazwa komponentu
          <input name="componentName" onChange={handleChange} placeholder="np. navbar z dropdownem" value={formData.componentName} />
        </label>

        <label>
          Gdzie ma się pojawić?
          <input name="pageLocation" onChange={handleChange} placeholder="np. landing page / sekcja hero" value={formData.pageLocation} />
        </label>

        <label>
          Jaki ma cel?
          <input name="goal" onChange={handleChange} placeholder="np. zwiększenie zapisów do newslettera" value={formData.goal} />
        </label>

        <label>
          Do kogo jest skierowany?
          <input name="users" onChange={handleChange} placeholder="np. nowi użytkownicy B2B" value={formData.users} />
        </label>

        <label>
          Treści, które muszą się znaleźć
          <textarea name="requiredContent" onChange={handleChange} placeholder="np. logo, 3 linki, CTA, numer telefonu" rows={3} value={formData.requiredContent} />
        </label>

        <label>
          Wskazówki wizualne
          <textarea name="visualStyle" onChange={handleChange} placeholder="np. nowoczesny, jasny, zaokrąglone rogi 8px" rows={3} value={formData.visualStyle} />
        </label>

        <label>
          Interakcje i zachowanie
          <textarea name="behavior" onChange={handleChange} placeholder="np. sticky po scrollu, dropdown on click" rows={3} value={formData.behavior} />
        </label>

        <label>
          Logika (stan + eventy)
          <textarea name="logic" onChange={handleChange} placeholder="np. tylko jedno menu otwarte naraz, zamknięcie po kliknięciu poza" rows={3} value={formData.logic} />
        </label>

        <label>
          Dostępność (a11y)
          <textarea name="accessibility" onChange={handleChange} placeholder="np. obsługa klawiatury, aria-expanded, focus ring" rows={2} value={formData.accessibility} />
        </label>

        <label>
          Ograniczenia
          <textarea name="constraints" onChange={handleChange} placeholder="np. bez zewnętrznych bibliotek, mobile-first, max 2h pracy" rows={2} value={formData.constraints} />
        </label>
      </form>

      <section className="prompt-brief__result" aria-live="polite">
        <div className="prompt-brief__result-header">
          <h2>Przekształcone dane (czytelne dla AI)</h2>
          <button onClick={copyBrief} type="button">
            {copied ? 'Skopiowano' : 'Kopiuj'}
          </button>
        </div>
        <pre>{normalizedBrief}</pre>
      </section>
    </section>
  );
}

export default PromptBriefForm;
