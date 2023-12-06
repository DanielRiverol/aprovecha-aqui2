// eslint-disable-next-line react/prop-types
export default function TitleSection({ title, dividerType }) {
  return (
    <>
      <h2 className="h2 fw-semibold">{title}</h2>
      <div className={dividerType}></div>
    </>
  );
}
