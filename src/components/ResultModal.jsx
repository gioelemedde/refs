import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal} from 'react-dom'

const ResultModal = forwardRef(function (
  { targetTime, remainigTime, onReset },
  ref
) {

  const dialog = useRef();
  const formattedRemainigTime = (remainigTime / 1000).toFixed(2);
  const score = Math.round((1 - remainigTime / (targetTime * 1000)) * 100);
  const userLost = score <= 0;
  

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal (
    <dialog ref={dialog} className="result-modal">
      {userLost && <h2>You Lost</h2>}
      {!userLost && <h2>You Score: {score}</h2>}
      <p>
        The Target time was <strong>{targetTime}</strong> second
      </p>
      <p>
        You stopped the timer whit{" "}
        <strong>{formattedRemainigTime} second left </strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;
