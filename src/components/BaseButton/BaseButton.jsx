import './BaseButton.scss';

export default function Button(props) {
  let { title } = props;
  if (!title) {
    title = "Default text";
  }
  return (
    <div className="button-container">
      <p>{title}</p>
    </div>
  );
}
