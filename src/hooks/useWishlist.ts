import { useCallback, useMemo } from 'react';

import { useCartStore } from './useCartStore';

const useWishlist = ({ actionId, product, wished }) => {
  const addWishlist = useCartStore((state) => state.addWishlist);
  const removeWishlist = useCartStore((state) => state.removeWishlist);

  const isWished = useMemo(() => {
    let list = wished;
    list = list?.includes(actionId);
    return !!list;
  }, [actionId, wished]);

  const handleToggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (wished.includes(actionId)) {
        removeWishlist(actionId);
        return;
      }

      addWishlist({ ...product });
    },
    [actionId, addWishlist, product, removeWishlist, wished]
  );

  return {
    isWished,
    handleToggle,
  };
};

export default useWishlist;
