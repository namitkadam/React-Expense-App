export default function Button(props) {
  const { valueClass, children, onClick } = props;
  return (
    <button className={valueClass} onClick={onClick}>
      {children}
    </button>
  );
}
