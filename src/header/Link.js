/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Link(props) {
  return (
    <div className="p-2">
      <a
        href={props.uri ? props.uri : "#"}
        className="no-underline hover:underline text-xl text-white hover:opacity-75"
      >
        <i className={props.icon}></i>
      </a>
    </div>
  );
}
