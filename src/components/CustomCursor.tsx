import { useCustomCursor } from '../hooks/useCustomCursor';

export function CustomCursor() {
  const { dotRef, outlineRef } = useCustomCursor();
  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-outline" ref={outlineRef} />
    </>
  );
}
