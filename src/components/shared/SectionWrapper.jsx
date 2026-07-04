/**
 * Padroniza padding vertical/horizontal e largura máxima entre seções,
 * evitando conflitos de especificidade CSS entre seções e utilitários internos.
 */
export default function SectionWrapper({
  children,
  id,
  className = "",
  as: Tag = "section",
  fullBleed = false,
}) {
  return (
    <Tag
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${
        fullBleed ? "" : "px-6 md:px-12"
      } ${className}`}
    >
      <div className={fullBleed ? "" : "max-w-6xl mx-auto"}>{children}</div>
    </Tag>
  );
}