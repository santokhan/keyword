export default function CardLayout(props) {
  return (
    <div className="w-1/2 p-2">
      <div className="bg-white py-4 sm:py-6 px-2 sm:px-6 rounded-2xl">
        <div className="font-medium h-4 sm:h-6 flex justify-center mb-1 sm:mb-2">
          <img className="h-full" src={props.google} alt="card" />
        </div>
        <div>{props.keyword}</div>
      </div>
    </div>
  );
}
