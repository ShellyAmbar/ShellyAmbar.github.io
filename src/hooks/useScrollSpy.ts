import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    function onScroll() {
      let current = activeId;
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;
        if (window.pageYOffset >= section.offsetTop - 150) {
          current = id;
        }
      }
      setActiveId(current);
    }

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIds.join(',')]);

  return activeId;
}
