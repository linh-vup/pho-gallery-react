export default function Loader({ calculatedWidth }) {
  return (
    <aside>
      <div className='loading-bar'>
        <label htmlFor='images-loaded'>Loading images ...</label>
        <progress
          id='images-loaded'
          max='100'
          value={calculatedWidth}
        ></progress>
      </div>
    </aside>
  );
}
