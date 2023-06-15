import { useState } from 'react';

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('Показати');

  const handlePasswordVisibility = () => {
    if (rightIcon === 'Показати') {
      setRightIcon('Сховати');
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === 'Сховати') {
      setRightIcon('Показати');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    rightIcon,
    handlePasswordVisibility,
  };
};
