import React from 'react';
import './Input.css';

// SVGアイコンをコンポーネントとして定義
const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon check-icon">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.532-1.66-1.66a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.143l3.75-5.25Z" clipRule="evenodd" />
  </svg>
);

const ErrorIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon error-icon">
    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
  </svg>
);


// stateに応じてヘルパーテキストを返す関数
const getHelperText = (state) => {
  if (state === 'focus') {
    return 'チェックOKの文言が入ります';
  }
  if (state === 'error') {
    return 'エラー文言が入ります';
  }
  return '';
};

const Input = ({ placeholder, value, variant = 'Default', state = 'default', ...props }) => {
  const className = `input ${variant} ${state}`;
  let iconComponent = null;

  if (state === 'focus') {
    iconComponent = <CheckIcon />;
  } else if (state === 'error') {
    iconComponent = <ErrorIcon />;
  }

const helperText = getHelperText(state);
const shouldRenderInput = !(variant === 'placeholder' && state === 'error');
const shouldRenderHelperText = variant === 'checklabel' && (state === 'focus' || state === 'error');

  return (
    <div className="input-container">
      {shouldRenderInput && (
        <input 
          type="text" 
          placeholder={placeholder}
          value={value}
          className={className} 
          {...props} 
        />
      )}
      {shouldRenderHelperText && (
        <div className={`helper-text-container ${state}`}>
          {iconComponent}
          <span>{helperText}</span>
        </div>
      )}
    </div>
  );
};

export default Input;