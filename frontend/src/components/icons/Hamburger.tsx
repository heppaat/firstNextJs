export default function Hamburger(props: { myClass: string }) {
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
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
      </svg>
    </div>
  );
}
