import './BaseButton.scss';

export default function Button(props) {
  let { title } = props;
  const {cssStyle, action} = props;
  if (!title) {
    title = "Default text";
  }
  return (
    <button onClick={action} className={`button-container ${cssStyle}`} type="submit">
      <p>{title}</p>
    </button>
  );
}
