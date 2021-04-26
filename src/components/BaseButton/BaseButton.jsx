import './BaseButton.scss';

export default function Button(props) {
  let { title } = props;
  const {cssStyle, action} = props;
  if (!title) {
    title = "Default text";
  }
  return (
    <div onClick={action} className={`button-container ${cssStyle}`}>
      <p>{title}</p>
    </div>
  );
}
