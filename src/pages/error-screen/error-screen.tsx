import {useAppDispatch} from '../../hooks';
import {fetchQuestionAction} from '../../store/api-actions';

function ErrorScreen(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <p className="error__text">Failed to load questions</p>
      <button
        onClick={() => {
          dispatch(fetchQuestionAction());
        }}
        className="replay replay--error"
        type="button"
      >
        To try one more time
      </button>
    </>
  );
}

export default ErrorScreen;
