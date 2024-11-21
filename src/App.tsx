import { App, Rect } from 'leafer-editor';
import { useEffect, useRef } from 'react';

const AppCmp = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const app = new App({
      view: containerRef.current,
      editor: {},
    });

    app.tree.add(
      Rect.one(
        { editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] },
        100,
        100,
      ),
    );
    app.tree.add(
      Rect.one(
        { editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] },
        300,
        100,
      ),
    );

    return () => {
      app.destroy();
    };
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }}></div>
    </div>
  );
};

export default AppCmp;
