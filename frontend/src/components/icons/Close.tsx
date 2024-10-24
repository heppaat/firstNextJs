export default function Close(props: { myClass: string }) {
  const { myClass } = props;
  return (
    <div className={myClass}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="25px"
        viewBox="0 -960 960 960"
        width="25px"
        fill="#fefbf1"
      >
        <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
      </svg>
    </div>
  );
}
