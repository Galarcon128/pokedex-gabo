export function filterFlavorTextByLanguage(
  flavor_text_entries = [],
  language = "es"
) {
  const uniqueFlavorTexts = Array.from(
    new Set(
      flavor_text_entries
        .filter((item) => item.language.name === language) // Filtrar por language.name
        .map((item) => item.flavor_text) // Extraer flavor_text
    )
  );
  return uniqueFlavorTexts;
}
