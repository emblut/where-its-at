import './SansitaHeading.css';

function SansitaHeading({ sansitaHeading }) {
  const HeadingTag = `h${sansitaHeading.level}`;
  return (
    <HeadingTag className={sansitaHeading.classNames}>
      {sansitaHeading.text}
    </HeadingTag>
  );
}

export default SansitaHeading;
